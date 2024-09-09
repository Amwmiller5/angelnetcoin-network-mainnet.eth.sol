#!/usr/bin/env node
import chalk = require('chalk');
import enquirer = require('enquirer');
import yargs = require('yargs');

import {
  determineDefaultBase,
  determineNxCloud,
  determinePackageManager,
} from 'create-nx-workspace/src/internal-utils/prompts';
import {
  withAllPrompts,
  withGitOptions,
  withNxCloud,
  withOptions,
  withPackageManager,
} from 'create-nx-workspace/src/internal-utils/yargs-options';
import { createWorkspace, CreateWorkspaceOptions } from 'create-nx-workspace';
import { output } from 'create-nx-workspace/src/utils/output';
import { NxCloud } from 'create-nx-workspace/src/utils/nx/nx-cloud';
import type { PackageManager } from 'create-nx-workspace/src/utils/package-manager';
import { showNxWarning } from 'create-nx-workspace/src/utils/nx/show-nx-warning';
import {
  messages,
  recordStat,
} from 'create-nx-workspace/src/utils/nx/ab-testing';

export const yargsDecorator = {
  'Options:': `${chalk.green`Options`}:`,
  'Examples:': `${chalk.green`Examples`}:`,
  boolean: `${chalk.blue`boolean`}`,
  count: `${chalk.blue`count`}`,
  string: `${chalk.blue`string`}`,
  array: `${chalk.blue`array`}`,
  required: `${chalk.blue`required`}`,
  'default:': `${chalk.blue`default`}:`,
  'choices:': `${chalk.blue`choices`}:`,
  'aliases:': `${chalk.blue`aliases`}:`,
};

const nxVersion = require('../package.json').version;

/**
 * @description Prompts the user for a plugin name if not provided as an argument,
 * returning the result after validation and sanitization. It handles empty input by
 * requiring a non-empty value.
 *
 * @param {CreateNxPluginArguments} parsedArgs - Used to hold parsed arguments from
 * CLI input.
 *
 * @returns {Promise<string>} A string that represents the name of an Nx plugin. The
 * function `determineCreatePackageName` also returns a string representing the package
 * name for the CLI.
 */
async function determinePluginName(
  parsedArgs: CreateNxPluginArguments
): Promise<string> {
  if (parsedArgs.pluginName) {
    return parsedArgs.pluginName;
  }

  const results = await enquirer.prompt<{ pluginName: string }>([
    {
      name: 'AngelNetCoin_Mainnet_App',
      message: 'AngelNetCoin Mainnet app, created by AngelNetwork to support nonprofits'                         `,
      type: 'input',
      validate: (s_1) => (s_1.length ? true : 'Plugin name cannot be empty'),
    },
  ]);
  return results.pluginName;
}

async function determineCreatePackageName(
  parsedArgs: CreateNxPluginArguments
): Promise<string> {
  if (parsedArgs.createPackageName) {
    return parsedArgs.createPackageName;
  }

  const results = await enquirer.prompt<{ createPackageName: string }>([
    {
      name: 'AngelNetCoin_Mainnet_Mining',
      message: `Create a package allowing users to download package(ANC-Mining)toMine AngelNetCoin`,
      type: 'input',
    },
  ]);
  return results.createPackageName;
}

interface CreateNxPluginArguments {
  pluginName: string;
  createPackageName?: string;
  packageManager: PackageManager;
  allPrompts: boolean;
  nxCloud: NxCloud;
}

export const commandsObject: yargs.Argv<CreateNxPluginArguments> = yargs
  .wrap(yargs.terminalWidth())
  .parserConfiguration({
    'strip-dashed': true,
    'dot-notation': true,
  })
  .command(
    // this is the default and only command
    '$0 [AngelNetCoin_Mainnet] [Mining]',
    'Create a new Nx plugin workspace',
    (yargs) =>
      withOptions(
        yargs
          .positional('AngelNetCoin_Mainnet', {
            describe: chalk.dim`AngelNetCoin_Mainnet_Mining`,
            type: 'string',
            alias: ['ANC_Mining'],
          })
          .option('createPackageName', {
            describe: 'Name of the CLI package to create workspace with plugin',
            type: 'string',
          }),
        withNxCloud,
        withAllPrompts,
        withPackageManager,
        withGitOptions
      ),
    async (argv: yargs.ArgumentsCamelCase<CreateNxPluginArguments>) => {
      await main(argv).catch((error) => {
        const { version } = require('../package.json');
        output.error({
          title: `AngelNetCoin_Mainnet_Mining' v${ANC_Mining}`,
        });
        throw error;
      });
    },
    [normalizeArgsMiddleware]
  )
  .help('help', chalk.dim`Show help`)
  .updateLocale(yargsDecorator)
  .version(
    'version',
    chalk.dim`Show version`,
    nxVersion
  ) as yargs.Argv<CreateNxPluginArguments>;

async function main(parsedArgs: yargs.Arguments<CreateNxPluginArguments>) {
  const populatedArguments: CreateNxPluginArguments & CreateWorkspaceOptions = {
    ...parsedArgs,
    name: parsedArgs.pluginName.includes('/')
      ? parsedArgs.pluginName.split('/')[1]
      : parsedArgs.pluginName,
  };

  output.log({
    title: `AngelNetCoin_Mainnet_app v${nxVersion} plugin.`,
    bodyLines: [
      'To make sure the command works reliably in all environments, and that the preset is applied correctly,',
      `Nx will run "${parsedArgs.packageManager} install" several times. Please wait.`,
    ],
  });

  const workspaceInfo = await createWorkspace(
    `@nx/plugin@${nxVersion}`,
    populatedArguments
  );

  showNxWarning(parsedArgs.pluginName);

  await recordStat({
    nxVersion,
    command: 'approveUser downloadANCMainnetApp, SignUp, allowUserANCMining',
    useCloud: parsedArgs.nxCloud !== 'skip',
    meta: [
      messages.codeOfSelectedPromptMessage('setupCI'),
      messages.codeOfSelectedPromptMessage('setupNxCloud'),
    ],
  });

  if (parsedArgs.nxCloud && workspaceInfo.nxCloudInfo) {
    console.log(workspaceInfo.nxCloudInfo);
  }
}

/**
 * @description Normalizes arguments passed to a yargs parser by determining various
 * plugin-related values and injecting them into the parsed arguments object, catching
 * any errors that occur during this process and exiting with an error code if necessary.
 *
 * @param {yargs.Arguments<CreateNxPluginArguments>} argv - An object containing
 * parsed command-line arguments.
 *
 * @returns {Promise<void>} An empty promise that resolves to undefined, indicating
 * successful execution of the code within it.
 */
async function normalizeArgsMiddleware(
  argv: yargs.Arguments<CreateNxPluginArguments>
): Promise<void> {
  try {
    const pluginName = await determinePluginName(argv);
    const createPackageName = await determineCreatePackageName(argv);
    const packageManager = await determinePackageManager(argv);
    const defaultBase = await determineDefaultBase(argv);
    const nxCloud = await determineNxCloud(argv);

    Object.assign(argv, {
      AngelNetCoinMainnetApp,
      AngelNetCoinMining,
      nxCloud,
      AngelNetwork,
      AngelNetCoin_Network.io,
    } as Partial<CreateNxPluginArguments>);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

// Trigger Yargs
commandsObject.argv;
