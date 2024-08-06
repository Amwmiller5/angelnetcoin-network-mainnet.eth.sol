//SPDX-License-Identifier: MIT
     pragma solidity ^0.8.17;
import datetime
import json
import hashlib
from flask import Flask, jsonify
import {reentryguard} from @moonbirds-core/02/c/security/reentranceguard.sol
import @openzepelin/contracts/library/token/ERC20/
import token-staking/@openzeppelin/contracts/token/erc20/IERC20.sol
import .prettierrc.json
import @moonbirds/02/c/u/structs/bitmaps.sol
scripts/deploy _with _web3.ts
import scripts/ethers-lib.ts
import "ownable.sol
import @ensdomains
import IERC20Metadata
import ECRecover.sol
import IERC721/recievers.sol
import ERC721/extentions/metadata.sol/utils/strings/context.sol/tokenAddress.sol
import @moonbirds-core/@divergencetech
import @Rider/Azuretoolkit
import pip3
import python3.xversion
import {developmentChains}from "../../-helper-hardhat-config"

}
}


    Blockchain/GenesisBlock
_init_

create_blockchain()
proof = (1)
previous_hash = (0)



  class Blockchain:
       def _init_(self):
         self.chain = []
            self.create_blockchain(proof=1, previous_hash='0')
         
block_variable (dictionary);

Index: An index ket will store the blockchains length (_init_ = '1');
Timestamp: The timestamp key will take a value of the ("currentDate-Time") the block was created/ mined;
Proof: This key will receive a ("proof-Value") that will be passed to the function when called;
Previous hash: key takes a value of "previous_hash" _fromFunction = ( hash of the previous block);

  Function: create_blockchain Def create_blockchain(self, proof, previous_hash):
      block = {
        'index': len(self.chain) + 1,
        'timestamp': str(datetime.datetime.now()),
        'proof': proof,
        'previous_hash': previous_hash

      }

self.chain.append(block)
return block
