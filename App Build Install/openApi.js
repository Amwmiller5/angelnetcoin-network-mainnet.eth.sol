{
  "openapi": "3.0.0",
  "info": {
    "version": "1.0",
    "title": "API Reference for the Kaleido Platform",
    "description": "As a business network full stack platform, Kaleido provides a complete set of API for administrators, network operators and DApps developers.\n\nThe administrative endpoints provide full lifecycle operations around platform resources (consortia, environment, nodes, services, etc.) Each participating organization can use the API\nto fully automate the DevOps pipeline. Most of the resources are scoped to the organization that the logged in user is associated with. Some resources like consortia and environments\nsupport decentralized governance.\n\nIn a decentralized consortium, no single participant can delete the consortium until all but one participants have left the consortium.\n\nIn a decentrallized environment, no single participant can delete the environment until all but one participants have deleted their resources (nodes, services) inside the environment.\n\n## Deployment Regions\nKaleido is available in multiple regions. When a user resource like nodes or services is provisioned, a deployment region is determined based on a number of factors. This means the resource\nmay be in a different region than the Kaleido console (the web UI). As such, when calling a Kaleido API, make sure to use the correct hostname for the region that the resource was provisioned in.\n\nAPI endpoints for different regions are specified in [Regional API Endpoints](https://docs.kaleido.io/developers/automation/regions/).\n\n## Query parameters\nMost GET endpoint support Mongo query strings.\n\n## Resources And Services\nThe API is organized around the *Platform Resources* and *Services*. Platform resources include the foundation components to start a business network, such as consortia, environments, services,\nintegration, etc. Kaleido has a large catalog of services, each providing their own developer-facing API. Each service API is displayed in their own category after the Platform Resources.\n",
    "contact": {
      "name": "Kaleido",
      "url": "https://api.kaleido.io"
    },
    "x-logo": {
      "url": "images/kaleido.svg",
      "altText": "Kaleido Logo",
      "backgroundColor": "#462de0"
    }
  },
  "servers": [
    {
      "url": "https://console.kaleido.io/api/v1",
      "description": "AWS US API base endpoint"
    },
    {
      "url": "https://console-eu.kaleido.io/api/v1",
      "description": "AWS EU API base endpoint"
    },
    {
      "url": "https://console-ap.kaleido.io/api/v1",
      "description": "AWS Sydney API base endpoint"
    },
    {
      "url": "https://console-ko.kaleido.io/api/v1",
      "description": "AWS Seoul API base endpoint"
    },
    {
      "url": "https://console-us1.kaleido.io/api/v1",
      "description": "Azure US API base endpoint"
    }
  ],
  "tags": [
    {
      "name": "API Keys",
      "description": "Organization-specific administrative tokens that allow for resource CRUD operations via the Kaleido API.  Similar to application credentials,\nAPI Keys are onetime-viewable strings and are not stored by the Kaleido backend. These endpoints do not support API Key generation and can only\nbe used to retrieve or edit existing keys.\n"
    },
    {
      "name": "Application Credentials",
      "description": "A username/password pair securing external access to a node via basic access authentication.  Credentials are bound to a consortia membership,\nare only applicable within the environment in which they are created and must be provisioned against the same membership ID of the targeted node\nor service in order for an authenticated connection to take place.  The credential password is a onetime-viewable string and is not stored by the Kaleido backend.\n"
    },
    {
      "name": "Audit",
      "description": "Retrieves a history of resource-specific CRUD operations associated with a Kaleido user's organization and/or a specific consortia (e.g. invitation\nissued, membership created, node deleted, etc.)\n"
    },
    {
      "name": "Channels",
      "description": "Applicable to Hyperledger Fabric environments, channels allow client applications to programmatically construct mini-blockchains in the same Fabric blockchain network.\n"
    },
    {
      "name": "Configurations",
      "description": "Resource objects used to integrate customer-controlled AWS services such as Key Management Stores, CloudWatch, PrivateLink, etc. with a Kaleido node.\nConfigurations are defined by a type (e.g. kms, backup, opsmetric, etc.) and must be provisioned prior to creating the node.  All configurations are\nenvironment-specific and rely on proper orchestration of the cloud resources.\n"
    },
    {
      "name": "Consortia",
      "description": "A top level Kaleido resource defined by a charter and grouping of memberships.  The memberships in a consortium can be bound to a single Kaleido Org\nor distributed across multiple Kaleido Orgs.  A consortium encapsulates environments and the subsequent resources (e.g. nodes and application credentials)\nprovisioned within an environment.\n"
    },
    {
      "name": "Contracts",
      "description": "A contract project serves as a wrapping container to organize multiple compilations / versions of a specific Solidity contract.\n(The Kaleido resource for a contract compilation is called a <a href=\"platform.html#tag/Compiled-Contracts\">Compiled Contract</a>.)  \nContract projects are created with a specific project type (GitHub or Precompiled) and are shared resources for all members in the consortium.\n"
    },
    {
      "name": "Compiled Contracts",
      "description": "A compiled_contract is an individual compilation / version of a specific Solidity contract.  Compiled contracts exist in the context of a \n<a href=\"platform.html#tag/Contracts\">Contract</a> project.\nCompiled contracts can be created by importing the source from Github, or, by compiling yourself and providing the ABI and bytecode.\nSuccessful compilations can then be promoted to specific environments which results in a \n<a href='platform.html#tag/Ledger/paths/~1ledger~1{consortia_id}~1{environment_id}~1gateway_apis/get'>Gateway API</a> on the environment \nwhich can be used to deploy new instances of the contract, as well as interact with previously deployed instances.\n"
    },
    {
      "name": "Environments",
      "description": "Isolated domain used to host the blockchain runtime.  Environments are configurable upon creation, with different node clients (Geth, Quorum, Hyperledger Besu, \nCorda and Hyperledger Fabric) and multiple consensus algorithms (Raft, PoA and IBFT) available to choose from. Each environment hosts its own unique ledger and \ncan be tethered to a public Ethereum chain for state finality and collusion resistance.  Nodes, application credentials, services, and configurations are all \nspecific to the environment within which they are created.\n"
    },
    {
      "name": "Identity Proof",
      "description": "Digital x509 certificate used as attestation for an asserted Kaleido Identity.  Proofs can be used in conjunction with a specific Ethereum address bound\nto the calling Kaleido Org to establish an on-chain identity.\n"
    },
    {
      "name": "Integrations"
    },
    {
      "name": "Invitations",
      "description": "Used to extend participation offers to external Kaleido Organizations.  Invitations can be issued on the organizational level for shared administration\nprivileges or on the consortia level for membership/environment/node/credential CRUD permissions.\n"
    },
    {
      "name": "Ledger",
      "description": "Used to access blockchain data like transactions, blocks, contracts, and address details.  Updating contract metadata and compiling for verification is\nalso supported here.\n"
    },
    {
      "name": "Memberships",
      "description": "Resource objects used to define an organization within the context of a consortium.  Kaleido organizations can exist in a consortia through a single \nmembership or through a series of memberships.  Environmental resource objects (e.g. nodes, credentials, configurations, etc.) are always bound to a \nspecific membership ID.\n"
    },
    {
      "name": "Nodes",
      "description": "The network resources responsible for transaction execution, block signing/consensus and maintaining the ledger.  Nodes are bound to a consortia membership \nand inherit the environment's client/consensus configuration (e.g. Geth + PoA).\n"
    },
    {
      "name": "OAuth Configurations",
      "description": "OAuth Resource Server Configurations for authorizing applications to connect to your nodes via the Blockchain Application Firewall (BAF) with JWT\ntokens signed by an OAuth Authorization Server.\n"
    },
    {
      "name": "Organizations",
      "description": "Enumerates all subscriptions your Kaleido Organization has access to.  These endpoints do not support the creation of new Kaleido Orgs and can only be used \nto retrieve or edit existing subscriptions.\n"
    },
    {
      "name": "Plans",
      "description": "Top level identifier for Kaleido resource accessibility and associated limitations.  Starter, Team, Business and Enterprise are the currently available tiers.\n"
    },
    {
      "name": "Regions",
      "description": "Enumerates the current availability zones for account and resource creation.  API host (e.g. https://console-eu.kaleido.io) defines the targetable URL.  \nDeployment host (e.g. eu-central-1) defines the cloud provider location.\n"
    },
    {
      "name": "Releases",
      "description": "Enumerates the current and historical versions of the Geth, Quorum, Hyperledger Besu, Corda and Hyperledger Fabric node software.  Each release is defined by a \nunique resource ID and contains a description field expanding on the fixes and updates applied to the docker image (e.g. faster block indexing, improved nonce management, etc.)\n"
    },
    {
      "name": "Roles",
      "description": "Enumerates the current administrators associated with a specific Kaleido Organization.  Use these endpoints to query, add, or remove roles from your Kaleido Org.\n"
    },
    {
      "name": "Services",
      "description": "A grouping of bespoke Kaleido resources offering extended functionality and security (e.g. ID Registry for on-chain validated identities or HD Wallet for \nidentity masking).  Offered on an a la carte basis, services exist as environment-specific objects that can be directly bound to a consortia member or shared \nacross the environment as a utility.\n"
    },
    {
      "name": "Tenants",
      "description": "A mechanism to authorize multiple separate entities to share a single multi-tenant blockchain node. A group of tagged tenants can be dynamnically assigned to a\nnode using a Blockchain Application Firewall (BAF) configuration referencing the tag.\n"
    },
    {
      "name": "Zones",
      "description": "The areas in which Kaleido resources are able to exist. Multi-region support allows for resources to communicate across cloud providers and regions. Resources \nwill inherit the default zone that was set upon creation of the parent resource if none is specified.\n"
    }
  ],
  "paths": {
    "/apikeys": {
      "get": {
        "summary": "Get info about the API Keys",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "API Keys"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "API Keys Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/APIKey"
                  }
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "post": {
        "summary": "Create a new API Key",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "API Keys"
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/APIKey_Create_Input"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "API Key Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/APIKey"
                }
              }
            }
          },
          "201": {
            "description": "API Key Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/APIKey"
                }
              }
            }
          },
          "404": {
            "$ref": "#/components/responses/NotFound"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/apikeys/{apikey_id}": {
      "get": {
        "summary": "Get a specific API Key",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "API Keys"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/apikey_id"
          }
        ],
        "responses": {
          "200": {
            "description": "API Key Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/APIKey"
                }
              }
            }
          },
          "404": {
            "$ref": "#/components/responses/NotFound"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "patch": {
        "summary": "Update an API Key",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "API Keys"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/apikey_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/APIKey_Update_Input"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "API Key Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/APIKey"
                }
              }
            }
          },
          "201": {
            "description": "API Key Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/APIKey"
                }
              }
            }
          },
          "404": {
            "$ref": "#/components/responses/NotFound"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "delete": {
        "summary": "Delete an API Key",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "API Keys"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/apikey_id"
          }
        ],
        "responses": {
          "204": {
            "description": "API Key Deleted"
          },
          "404": {
            "$ref": "#/components/responses/NotFound"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/appcreds": {
      "get": {
        "summary": "Get the Application Credentials of a particular environment",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Application Credentials"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Application Credentials Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ApplicationCredential"
                  }
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "post": {
        "summary": "Create new Application Credentials",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Application Credentials"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ApplicationCredential"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Application Credential Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ApplicationCredential"
                }
              }
            }
          },
          "201": {
            "description": "Application Credential Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ApplicationCredential"
                }
              }
            }
          },
          "404": {
            "$ref": "#/components/responses/NotFound"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/appcreds/{appkey_id}": {
      "get": {
        "summary": "Get a specific Application Credential",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Application Credentials"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/appkey_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Application Credential Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ApplicationCredential"
                }
              }
            }
          },
          "404": {
            "description": "Application Credential Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "put": {
        "summary": "Upsert a specific Application Credential",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Application Credentials"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/appkey_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ApplicationCredential"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Application Credential Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ApplicationCredential"
                }
              }
            }
          },
          "201": {
            "description": "Application Credential Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ApplicationCredential"
                }
              }
            }
          },
          "404": {
            "description": "Application Credential Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "patch": {
        "summary": "Update a specific Application Credential",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Application Credentials"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/appkey_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ApplicationCredential"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Application Credential Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ApplicationCredential"
                }
              }
            }
          },
          "201": {
            "description": "Application Credential Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ApplicationCredential"
                }
              }
            }
          },
          "404": {
            "description": "Application Credential Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "delete": {
        "summary": "Delete an Application Credential",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Application Credentials"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/appkey_id"
          }
        ],
        "responses": {
          "204": {
            "description": "Application Credential Deleted"
          },
          "404": {
            "description": "Application Credential Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/appcreds/{appkey_id}/regenerate": {
      "post": {
        "summary": "Regenerate the password for a specific app cred",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Application Credentials"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/appkey_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Application Credential Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ApplicationCredential"
                }
              }
            }
          },
          "201": {
            "description": "Application Credential Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ApplicationCredential"
                }
              }
            }
          },
          "404": {
            "description": "Application Credential Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/audit": {
      "get": {
        "summary": "Get all events with the provided jwt",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Audit"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "Audit Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Audit"
                  }
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/audit/{consortia_id}": {
      "get": {
        "summary": "Get all events for a particular consortia",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Audit"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Audit Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Audit"
                  }
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/configurations": {
      "get": {
        "summary": "Get the configurations for an environment",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Configurations"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Configurations Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Configuration"
                  }
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "post": {
        "summary": "Create a configurations for the environment",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Configurations"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Configuration_Create_Input"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Configuration Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Configuration"
                }
              }
            }
          },
          "201": {
            "description": "Configuration Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Configuration"
                }
              }
            }
          },
          "404": {
            "description": "Configuration Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/configurations/{config_id}": {
      "get": {
        "summary": "Get a specific configuration",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Configurations"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/config_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Configuration Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Configuration"
                }
              }
            }
          },
          "404": {
            "description": "Configuration Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "put": {
        "summary": "Upsert a specific configuration",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Configurations"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/config_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Configuration"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Configuration Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Configuration"
                }
              }
            }
          },
          "201": {
            "description": "Configuration Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Configuration"
                }
              }
            }
          },
          "404": {
            "description": "Configuration Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "patch": {
        "summary": "Update a specific configuration",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Configurations"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/config_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Configuration"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Configuration Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Configuration"
                }
              }
            }
          },
          "201": {
            "description": "Configuration Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Configuration"
                }
              }
            }
          },
          "404": {
            "description": "Configuration Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "delete": {
        "summary": "Delete a specific configuration",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Configurations"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/config_id"
          }
        ],
        "responses": {
          "204": {
            "description": "Configuration Deleted"
          },
          "404": {
            "description": "Configuration Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia": {
      "get": {
        "summary": "Get all consortia",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Consortia"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "Consortia Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Consortia"
                  }
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "post": {
        "summary": "Create a consortia",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Consortia"
        ],
        "parameters": [],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Consortia_Create_Input"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Consortia Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Consortia"
                }
              }
            }
          },
          "201": {
            "description": "Consortia Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Consortia"
                }
              }
            }
          },
          "404": {
            "description": "Consortia Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}": {
      "get": {
        "summary": "Get a specific consortia",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Consortia"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Consortia Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Consortia"
                }
              }
            }
          },
          "404": {
            "description": "Consortia Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "patch": {
        "summary": "Update a specific consortia",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Consortia"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Consortia_Update_Input"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Consortia Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Consortia"
                }
              }
            }
          },
          "201": {
            "description": "Consortia Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Consortia"
                }
              }
            }
          },
          "404": {
            "description": "Consortia Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "delete": {
        "summary": "Delete a specific consortia",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Consortia"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          }
        ],
        "responses": {
          "202": {
            "description": "Request Accepted"
          },
          "404": {
            "description": "Consortia Not Found"
          }
        }
      }
    },
    "/consortia/{consortia_id}/charter": {
      "get": {
        "summary": "Get the charter of a specific consortia",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Consortia"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Consortia charter Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Charter"
                }
              }
            }
          },
          "404": {
            "description": "Consortia charter Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/contracts": {
      "get": {
        "summary": "Get all contracts for the consortia",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Contracts"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Contracts Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Contract"
                  }
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "post": {
        "summary": "Create a contract for the consortia",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Contracts"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Contract_Create_Input"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Contract Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Contract"
                }
              }
            }
          },
          "201": {
            "description": "Contract Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Contract"
                }
              }
            }
          },
          "404": {
            "description": "Contract Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/contracts/{contract_id}": {
      "get": {
        "summary": "Get a specific contract",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Contracts"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/contract_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Contract Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Contract"
                }
              }
            }
          },
          "404": {
            "description": "Contract Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "patch": {
        "summary": "Update a specific contract",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Contracts"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/contract_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Contract_Update_Input"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Contract Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Contract"
                }
              }
            }
          },
          "201": {
            "description": "Contract Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Contract"
                }
              }
            }
          },
          "404": {
            "description": "Contract Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "delete": {
        "summary": "Delete a specific contract",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Contracts"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/contract_id"
          }
        ],
        "responses": {
          "204": {
            "description": "Contract Deleted"
          },
          "404": {
            "description": "Contract Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/contracts/{contract_id}/compiled_contracts": {
      "get": {
        "summary": "Get all compiled contracts for the consortia",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Compiled Contracts"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/contract_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Compiled Contracts Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/CompiledContract"
                  }
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "post": {
        "summary": "Create a compiled contract for the consortia",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Compiled Contracts"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/contract_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CompiledContract_Create_Input"
              }
            },
            "multipart/form-data": {
              "schema": {
                "$ref": "#/components/schemas/CompiledContract_Create_Input_File"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Compiled Contract Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CompiledContract"
                }
              }
            }
          },
          "201": {
            "description": "Compiled Contract Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CompiledContract"
                }
              }
            }
          },
          "404": {
            "description": "Contract Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/binaries/consortia/{consortia_id}/contracts/{contract_id}/compiled_contracts": {
      "post": {
        "summary": "Create a compiled contract for the consortia by uploading a large file",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Compiled Contracts"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/contract_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "multipart/form-data": {
              "schema": {
                "$ref": "#/components/schemas/CompiledContract_Create_Input_File"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Compiled Contract Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CompiledContract"
                }
              }
            }
          },
          "404": {
            "description": "Contract Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/contracts/{contract_id}/compiled_contracts/{compiled_contract_id}": {
      "get": {
        "summary": "Get a specific compiled contract",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Compiled Contracts"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/contract_id"
          },
          {
            "$ref": "#/components/parameters/compiled_contract_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Compiled Contract Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CompiledContract"
                }
              }
            }
          },
          "404": {
            "description": "Compiled Contract Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "patch": {
        "summary": "Update a specific compiled contract",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Compiled Contracts"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/contract_id"
          },
          {
            "$ref": "#/components/parameters/compiled_contract_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CompiledContract_Update_Input"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Compiled Contract Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CompiledContract"
                }
              }
            }
          },
          "201": {
            "description": "Compiled Contract Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Contract"
                }
              }
            }
          },
          "404": {
            "description": "Compiled Contract Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "delete": {
        "summary": "Delete a specific compiled contract",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Compiled Contracts"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/contract_id"
          },
          {
            "$ref": "#/components/parameters/compiled_contract_id"
          }
        ],
        "responses": {
          "204": {
            "description": "Compiled Contract Deleted"
          },
          "404": {
            "description": "Compiled Contract Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/contracts/{contract_id}/compiled_contracts/{compiled_contract_id}/promote": {
      "post": {
        "summary": "Promote the compiled contract to an environment. This will install a Gateway API on the environment which can be used to deploy new instances of this contract, as well as interact with previously deployed instances.",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Compiled Contracts"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/contract_id"
          },
          {
            "$ref": "#/components/parameters/compiled_contract_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CompiledContract_Promote_Input"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "CompiledContract Promoted",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {}
                }
              }
            }
          },
          "404": {
            "description": "Compiled Contract Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/integrations": {
      "get": {
        "summary": "Get all integrations for the environment",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Integrations"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Integrations Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Integration"
                  }
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "post": {
        "summary": "Create an integration for the environment",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Integrations"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Integration_Create_Input"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Integration Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Integration"
                }
              }
            }
          },
          "201": {
            "description": "Integration Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Integration"
                }
              }
            }
          },
          "404": {
            "description": "Integration Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/integrations/{integration_id}": {
      "get": {
        "summary": "Get a specific integration",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Integrations"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/integration_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Integration Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Integration"
                }
              }
            }
          },
          "404": {
            "description": "Integration Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "patch": {
        "summary": "Update a specific integration",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Integrations"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/integration_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Integration"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Integration Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Integration_Update_Input"
                }
              }
            }
          },
          "404": {
            "description": "Integration Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "delete": {
        "summary": "Delete a specific integration",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Integrations"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/integration_id"
          }
        ],
        "responses": {
          "202": {
            "description": "Request Accepted"
          },
          "404": {
            "description": "Integration Not Found"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/integrations/{integration_id}/reset": {
      "post": {
        "summary": "Reset the state of the integration by clearing out the tracking details and regenerating the app cred",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Integrations"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/integration_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Integration Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Integration"
                }
              }
            }
          },
          "201": {
            "description": "Integration Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Integration"
                }
              }
            }
          },
          "404": {
            "description": "Integration Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/channels": {
      "get": {
        "summary": "Get all channels in the environment (Fabric environments only)",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Channels"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Channels Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Channel"
                  }
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "post": {
        "summary": "Create a channel in the Fabric environment",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Channels"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Channel_Create_Input"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Channel Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Channel"
                }
              }
            }
          },
          "404": {
            "description": "Channel Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/channels/{channel_id}": {
      "get": {
        "summary": "Get a specific channel",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Channels"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/channel_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Channel Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Channel"
                }
              }
            }
          },
          "404": {
            "description": "Channel Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "patch": {
        "summary": "Update a specific channel's members list",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Channels"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/channel_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Channel"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Channel Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Channel_Update_Input"
                }
              }
            }
          },
          "404": {
            "description": "Channel Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/channels/{channel_id}/deploy": {
      "post": {
        "summary": "Deploy chaincode to a channel",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Channels"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/channel_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Chaincode_Deploy_Input"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Chaincode deploy request successful",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Channel"
                }
              }
            }
          }
        }
      }
    },
    "/invitations": {
      "get": {
        "summary": "Get all invitations for the current user where they are the target",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Invitations"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "Invitations Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Invitation"
                  }
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/invitations": {
      "get": {
        "summary": "Get all invitations for the consortia",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Invitations"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Invitations Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Invitation"
                  }
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "post": {
        "summary": "Create an invitation for the consortia",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Invitations"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Invitation_Create_Input"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Invitation Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Invitation"
                }
              }
            }
          },
          "201": {
            "description": "Invitation Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Invitation"
                }
              }
            }
          },
          "404": {
            "description": "Invitation Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/invitations/{invitation_id}": {
      "get": {
        "summary": "Get a specific invitation",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Invitations"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/invitation_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Invitation Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Invitation"
                }
              }
            }
          },
          "404": {
            "description": "Invitation Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "put": {
        "summary": "Upsert a specific invitation",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Invitations"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/invitation_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Invitation_Update_Input"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Invitation Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Invitation"
                }
              }
            }
          },
          "201": {
            "description": "Invitation Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Invitation"
                }
              }
            }
          },
          "404": {
            "description": "Invitation Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "patch": {
        "summary": "Update a specific invitation",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Invitations"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/invitation_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Invitation_Update_Input"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Invitation Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Invitation"
                }
              }
            }
          },
          "201": {
            "description": "Invitation Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Invitation"
                }
              }
            }
          },
          "404": {
            "description": "Invitation Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "delete": {
        "summary": "Delete a specific invitation",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Invitations"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/invitation_id"
          }
        ],
        "responses": {
          "204": {
            "description": "Invitation Deleted"
          },
          "404": {
            "description": "Invitation Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/invitations/{invitation_id}/charter": {
      "get": {
        "summary": "Get a specific invitation with some extra info",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Invitations"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/invitation_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Invitation Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/InvitationCharter"
                }
              }
            }
          },
          "404": {
            "description": "Invitation Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/zones": {
      "get": {
        "summary": "Get all deployment zones for the consortia",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Zones"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Zones Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Zone"
                  }
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "post": {
        "summary": "Create a deployment zone for the consortia",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Zones"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Zone_Create_Input"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Zone Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Zone"
                }
              }
            }
          },
          "201": {
            "description": "Zone Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Zone"
                }
              }
            }
          },
          "404": {
            "description": "Zone Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/zones/{zone_id}": {
      "get": {
        "summary": "Get a specific consortia deployment zone",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Zones"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/zone_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Zone Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Zone"
                }
              }
            }
          },
          "404": {
            "description": "Zone Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "patch": {
        "summary": "Update a specific consortia deployment zone",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Zones"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/zone_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Zone_Update_Input"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Zone Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Zone"
                }
              }
            }
          },
          "201": {
            "description": "Zone Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Zone"
                }
              }
            }
          },
          "404": {
            "description": "Zone Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "delete": {
        "summary": "Delete a specific consortia deployment zone",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Zones"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/zone_id"
          }
        ],
        "responses": {
          "204": {
            "description": "Zone Deleted"
          },
          "404": {
            "description": "Zone Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments": {
      "get": {
        "summary": "Get all environments for the consortia",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Environments"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Environments Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Environment"
                  }
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "post": {
        "summary": "Create an environment for the consortia",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Environments"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Environment_Create_Input"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Environment Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Environment"
                }
              }
            }
          },
          "404": {
            "description": "Environment Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}": {
      "get": {
        "summary": "Get a specific environment",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Environments"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Environment Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Environment"
                }
              }
            }
          },
          "404": {
            "description": "Environment Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "patch": {
        "summary": "Update a specific environment",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Environments"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Environment_Update_Input"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Environment Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Environment"
                }
              }
            }
          },
          "201": {
            "description": "Environment Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Environment"
                }
              }
            }
          },
          "404": {
            "description": "Environment Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "delete": {
        "summary": "Delete a specific environment",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Environments"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          }
        ],
        "responses": {
          "202": {
            "description": "Request Accepted"
          },
          "404": {
            "description": "Environment Not Found"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/status": {
      "get": {
        "summary": "Get an Environment's status",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Environments"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Environment Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/EnvironmentStatus"
                }
              }
            }
          },
          "404": {
            "description": "Environment Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/ethstats": {
      "get": {
        "summary": "Get an Environment's Ethereum-specific stats",
        "description": "Only applicable to Ethereum environments. Returns each node's transaction pool status, block height and p2p network peers",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Environments"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Environment Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Eth_Stats"
                }
              }
            }
          },
          "404": {
            "description": "Environment Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/genesis": {
      "get": {
        "summary": "Get an Environment's genesis configuration",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Environments"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Environment Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                }
              }
            }
          },
          "404": {
            "description": "Environment Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/upgrade": {
      "post": {
        "summary": "Upgrade a specific environment to the latest version",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Environments"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Environment Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Environment"
                }
              }
            }
          },
          "404": {
            "description": "Environment Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/hardfork": {
      "post": {
        "summary": "Apply available hard fork EIPs to a specific environment",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Environments"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "title": "options",
                "type": "object",
                "properties": {
                  "hard_fork_with_upgrade": {
                    "type": "boolean",
                    "description": "When set to true, upgrades environment to latest version and applies optional_hardfork_eips of the latest release",
                    "default": false
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Environment Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Environment"
                }
              }
            }
          },
          "404": {
            "description": "Environment Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/eth/fundaccount": {
      "post": {
        "summary": "Fund an account from the environment's faucet. Can transfer ETH or tokens owned by the faucet account.",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Environments"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "title": "fund_account",
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "description": "Type of fund to transfer. Can be `eth` or `token`",
                    "default": "eth"
                  },
                  "account": {
                    "type": "string",
                    "description": "The Ethereum address to send funds to"
                  },
                  "amount": {
                    "type": "string",
                    "description": "The amount to send"
                  },
                  "unit": {
                    "type": "string",
                    "description": "The unit of ether to send (ex. ether, qwei, wei, finney, etc.)",
                    "default": "ether"
                  },
                  "tokenAddress": {
                    "type": "string",
                    "description": "The address of the token contract. Required if type is set to `token`"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Account Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TransactionReceipt"
                }
              }
            }
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/eth/getbalance/{address}": {
      "get": {
        "summary": "Get ether balance of the account.",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Environments"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/address"
          }
        ],
        "responses": {
          "200": {
            "description": "Account Balance",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Eth_Balance"
                }
              }
            }
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/backup/status": {
      "get": {
        "summary": "Get an Environment's Backup Status",
        "description": "Only applicable to Ethereum environments that have Environment Backups enabled. Returns a record of history of all backup files for an environment.",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Environments"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Backup Status Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Env_Backup_Status"
                }
              }
            }
          },
          "404": {
            "description": "Environment Backup Configuration Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/backup": {
      "get": {
        "summary": "Get an Environment's Backup Configuration",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Environments"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Environment Backup Object Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Env_Backup_Object"
                }
              }
            }
          },
          "404": {
            "description": "Environment Backup Configuration Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "post": {
        "summary": "Create an Environment's Backup Configuration",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Environments"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Env_Backup_Input"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Environment Backup Object Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Env_Backup_Object"
                }
              }
            }
          },
          "404": {
            "description": "Environment Backup Configuration Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "patch": {
        "summary": "Update an Environment's Backup Configuration",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Environments"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Env_Backup_Input"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Environment Backup Object Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Env_Backup_Object"
                }
              }
            }
          },
          "404": {
            "description": "Environment Backup Configuration Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "delete": {
        "summary": "Delete a specific environment's backup configuration",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Environments"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          }
        ],
        "responses": {
          "204": {
            "description": "Request Accepted"
          },
          "404": {
            "description": "Environment Backup Configuration Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/zones": {
      "get": {
        "summary": "Get all deployment zones for the environment",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Zones"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Env Zone Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/EnvZone"
                  }
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "post": {
        "summary": "Create a deployment zone for the environment",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Zones"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/EnvZone_Create_Input"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Env Zone Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/EnvZone"
                }
              }
            }
          },
          "201": {
            "description": "Env Zone Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/EnvZone"
                }
              }
            }
          },
          "404": {
            "description": "Env Zone Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/zones/{zone_id}": {
      "get": {
        "summary": "Get a specific environment deployment zone",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Zones"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/zone_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Env Zone Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/EnvZone"
                }
              }
            }
          },
          "404": {
            "description": "Env Zone Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "patch": {
        "summary": "Update a specific environment deployment zone",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Zones"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/zone_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/EnvZone_Update_Input"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Env Zone Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/EnvZone"
                }
              }
            }
          },
          "201": {
            "description": "Env Zone Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/EnvZone"
                }
              }
            }
          },
          "404": {
            "description": "Env Zone Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "delete": {
        "summary": "Delete a specific environment deployment zone",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Zones"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/zone_id"
          }
        ],
        "responses": {
          "204": {
            "description": "Env Zone Deleted"
          },
          "404": {
            "description": "Env Zone Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/orgs/{org_id}/idproofs": {
      "get": {
        "summary": "Get all proofs of an organization",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Identity Proof"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/org_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Identity Proof Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/IdentityProof"
                  }
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "post": {
        "summary": "Add an ID proof to an organization",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Identity Proof"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/org_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Identity Proof Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/IdentityProof"
                }
              }
            }
          },
          "201": {
            "description": "Identity Proof Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/IdentityProof"
                }
              }
            }
          },
          "404": {
            "description": "Identity Proof Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/orgs/{org_id}/idproofs/{proof_id}": {
      "get": {
        "summary": "Get a specific ID proof of an organization",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Identity Proof"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/org_id"
          },
          {
            "$ref": "#/components/parameters/proof_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Identity Proof Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/IdentityProof"
                }
              }
            }
          },
          "404": {
            "description": "Identity Proof Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "patch": {
        "summary": "Update the details of an ID proof of an organization",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Identity Proof"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/org_id"
          },
          {
            "$ref": "#/components/parameters/proof_id"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/IdentityProof_Update_Input"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Identity Proof Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/IdentityProof"
                }
              }
            }
          },
          "201": {
            "description": "Identity Proof Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/IdentityProof"
                }
              }
            }
          },
          "404": {
            "description": "Identity Proof Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "delete": {
        "summary": "Remove an ID proof from an organization",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Identity Proof"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/org_id"
          },
          {
            "$ref": "#/components/parameters/proof_id"
          }
        ],
        "responses": {
          "204": {
            "description": "Identity Proof Deleted"
          },
          "404": {
            "description": "Identity Proof Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/ledger/{consortia_id}/{environment_id}/blocks": {
      "get": {
        "summary": "Get a range of blocks in the chain",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Ledger"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "in": "query",
            "name": "start",
            "schema": {
              "type": "integer"
            },
            "description": "The number of blocks to skip, starting from the latest one"
          },
          {
            "in": "query",
            "name": "limit",
            "schema": {
              "type": "integer"
            },
            "description": "The number of blocks to return (max of 25)"
          }
        ],
        "responses": {
          "200": {
            "description": "Blocks Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Block"
                  }
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/ledger/{consortia_id}/{environment_id}/blocks/{block_number}": {
      "get": {
        "summary": "Get a specific block in the chain",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Ledger"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/block_number"
          }
        ],
        "responses": {
          "200": {
            "description": "Blocks Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Block"
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/ledger/{consortia_id}/{environment_id}/blocks/{block_number}/transactions": {
      "get": {
        "summary": "Get the transactions in a specific block",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Ledger"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/block_number"
          },
          {
            "in": "query",
            "name": "start",
            "schema": {
              "type": "integer"
            },
            "description": "The number of transactions to skip, starting from the latest one"
          },
          {
            "in": "query",
            "name": "limit",
            "schema": {
              "type": "integer"
            },
            "description": "The number of transactions to return (max of 25)"
          }
        ],
        "responses": {
          "200": {
            "description": "Transactions Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Transaction"
                  }
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/ledger/{consortia_id}/{environment_id}/transactions": {
      "get": {
        "summary": "Get the last 25 transactions from the ledger or lookup using the range parameters",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Ledger"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "in": "query",
            "name": "start",
            "schema": {
              "type": "integer"
            },
            "description": "The number of transactions to skip, starting from the last one"
          },
          {
            "in": "query",
            "name": "limit",
            "schema": {
              "type": "integer"
            },
            "description": "The number of transactions to return"
          }
        ],
        "responses": {
          "200": {
            "description": "Transactions Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Transaction"
                  }
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/ledger/{consortia_id}/{environment_id}/transactions/{hash}": {
      "get": {
        "summary": "Get information about a transaction",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Ledger"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "name": "hash",
            "in": "path",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "Transactions Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Transaction"
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/ledger/{consortia_id}/{environment_id}/transactions/{hash}/receipt": {
      "get": {
        "summary": "Get the receipt of a specific transaction",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Ledger"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "name": "hash",
            "in": "path",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "Receipts Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TransactionReceipt"
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/ledger/{consortia_id}/{environment_id}/addresses/{address}": {
      "get": {
        "summary": "Get a deployed contract's information",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Ledger"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/address"
          }
        ],
        "responses": {
          "200": {
            "description": "Contracts Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DeployedContract"
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/ledger/{consortia_id}/{environment_id}/addresses/{address}/transactions": {
      "get": {
        "summary": "Get a deployed contract's transactions",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Ledger"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/address"
          },
          {
            "in": "query",
            "name": "start",
            "schema": {
              "type": "integer"
            },
            "description": "The number of transactions to skip, starting from the latest one"
          },
          {
            "in": "query",
            "name": "limit",
            "schema": {
              "type": "integer"
            },
            "description": "The number of transactions to return (max of 25)"
          }
        ],
        "responses": {
          "200": {
            "description": "Transactions Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Transaction"
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/ledger/{consortia_id}/{environment_id}/contracts": {
      "get": {
        "summary": "Get the contracts deployed on the chain",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Ledger"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "in": "query",
            "name": "start",
            "schema": {
              "type": "integer"
            },
            "description": "The number of contracts to skip, starting from the latest one"
          },
          {
            "in": "query",
            "name": "limit",
            "schema": {
              "type": "integer"
            },
            "description": "The number of contracts to return (max of 25)"
          }
        ],
        "responses": {
          "200": {
            "description": "Contracts Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/DeployedContract"
                  }
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/ledger/{consortia_id}/{environment_id}/contracts/{address}": {
      "get": {
        "summary": "Get info about a specific deployed contract",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Ledger"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/address"
          }
        ],
        "responses": {
          "200": {
            "description": "Contracts Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DeployedContract"
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "put": {
        "summary": "Update a specific contract's metadata",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Ledger"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/address"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/DeployedContract"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Contracts Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DeployedContract"
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/ledger/{consortia_id}/{environment_id}/gateway_apis": {
      "get": {
        "summary": "Get the Gateway API's that have been promoted to this environment",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Ledger"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "in": "query",
            "name": "start",
            "schema": {
              "type": "integer"
            },
            "description": "The number of Gateway API's to skip, starting from the last one"
          },
          {
            "in": "query",
            "name": "limit",
            "schema": {
              "type": "integer"
            },
            "description": "The number of Gateway API's to return (max of 25)"
          }
        ],
        "responses": {
          "200": {
            "description": "Gateway API's Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GatewayAPIWrapper"
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/ledger/{consortia_id}/{environment_id}/gateway_apis/{gateway_api_id}": {
      "get": {
        "summary": "Get info about a specific Gateway API",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Ledger"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/gateway_api_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Gateway API Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GatewayAPI"
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/ledger/{consortia_id}/{environment_id}/gateway_apis/{gateway_api_id}/contracts": {
      "get": {
        "summary": "Get all the deployed contract instances of a single Gateway API",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Ledger"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/gateway_api_id"
          },
          {
            "in": "query",
            "name": "start",
            "schema": {
              "type": "integer"
            },
            "description": "The number of contracts to skip, starting from the last one"
          },
          {
            "in": "query",
            "name": "limit",
            "schema": {
              "type": "integer"
            },
            "description": "The number of contracts to return (max of 25)"
          }
        ],
        "responses": {
          "200": {
            "description": "Contracts Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DeployedContractsWrapper"
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/ledger/{consortia_id}/{environment_id}/tokens/contracts": {
      "get": {
        "summary": "Get the token contracts deployed on the chain",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Ledger"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "in": "query",
            "name": "start",
            "schema": {
              "type": "integer"
            },
            "description": "The number of contracts to skip, starting from the last one"
          },
          {
            "in": "query",
            "name": "limit",
            "schema": {
              "type": "integer"
            },
            "description": "The number of contracts to return (max of 25)"
          }
        ],
        "responses": {
          "200": {
            "description": "Contracts Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/DeployedContract"
                  }
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/ledger/{consortia_id}/{environment_id}/tokens/contracts/{address}": {
      "get": {
        "summary": "Get info about a specific deployed token contract",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Ledger"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/address"
          }
        ],
        "responses": {
          "200": {
            "description": "Contracts Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DeployedContract"
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/ledger/{consortia_id}/{environment_id}/tokens/contracts/{address}/balanceOf/{account}": {
      "get": {
        "summary": "Get the balance of a particular account for a specific erc20 token contract",
        "tags": [
          "Ledger"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/address"
          },
          {
            "$ref": "#/components/parameters/account"
          }
        ],
        "responses": {
          "200": {
            "description": "Balance retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "balance": {
                      "description": "The token balance",
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/ledger/{consortia_id}/{environment_id}/tokens/contracts/{address}/ownerOf/{tokenId}": {
      "get": {
        "summary": "Get the owner of a particular tokenId for a specific erc721 token contract",
        "tags": [
          "Ledger"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/address"
          },
          {
            "$ref": "#/components/parameters/tokenId"
          }
        ],
        "responses": {
          "200": {
            "description": "Owner retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "address": {
                      "description": "The address of the owner",
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/ledger/{consortia_id}/{environment_id}/tokens/contracts/{address}/transfers": {
      "get": {
        "summary": "Get transfers of a token",
        "description": "Get transfer transactions for a specific token contract, with pagination and a limit of up to 25 records per query\"",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Ledger"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/address"
          },
          {
            "in": "query",
            "name": "start",
            "schema": {
              "type": "integer"
            },
            "description": "The number of transfer transactions to skip, starting from the latest one"
          },
          {
            "in": "query",
            "name": "limit",
            "schema": {
              "type": "integer"
            },
            "description": "The number of transfer transactions to return (max of 25)"
          }
        ],
        "responses": {
          "200": {
            "description": "Transfers Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Transfers"
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/ledger/{consortia_id}/{environment_id}/tokens/contracts/{address}/transfers/{wallet_address}": {
      "get": {
        "summary": "Get transfers of a token to/from a wallet address",
        "description": "Get transfer transactions to or from a particular wallet address for a specific token contract, with pagination and a limit of up to 25 records per query\"",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Ledger"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/address"
          },
          {
            "$ref": "#/components/parameters/wallet_address"
          },
          {
            "in": "query",
            "name": "start",
            "schema": {
              "type": "integer"
            },
            "description": "The number of transfer transactions to skip, starting from the latest one"
          },
          {
            "in": "query",
            "name": "limit",
            "schema": {
              "type": "integer"
            },
            "description": "The number of transfer transactions to return (max of 25)"
          }
        ],
        "responses": {
          "200": {
            "description": "Transfers Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Transfers"
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/ledger/{consortia_id}/{environment_id}/stats/{since}": {
      "get": {
        "summary": "Get the ledger stats since a specific time",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Ledger"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "name": "since",
            "in": "path",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "Stats Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Stats"
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/ledger/{consortia_id}/{environment_id}/activity": {
      "get": {
        "summary": "Gets last chain activity",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Ledger"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Blocks Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Block"
                  }
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/memberships": {
      "get": {
        "summary": "Get all memberships for the current user",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Memberships"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "Memberships Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Membership"
                  }
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/memberships": {
      "get": {
        "summary": "Get all memberships for the consortia",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Memberships"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Memberships Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Membership"
                  }
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "post": {
        "summary": "Create a membership for the consortia",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Memberships"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Membership_Create_Input"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Membership Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Membership"
                }
              }
            }
          },
          "201": {
            "description": "Membership Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Membership"
                }
              }
            }
          },
          "404": {
            "description": "Membership Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/memberships/{membership_id}": {
      "get": {
        "summary": "Get a specific membership",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Memberships"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/membership_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Membership Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Membership"
                }
              }
            }
          },
          "404": {
            "description": "Membership Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "patch": {
        "summary": "Update a specific membership",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Memberships"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/membership_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Membership_Update_Input"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Membership Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Membership"
                }
              }
            }
          },
          "201": {
            "description": "Membership Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Membership"
                }
              }
            }
          },
          "404": {
            "description": "Membership Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "delete": {
        "summary": "Delete a specific membership",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Memberships"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/membership_id"
          }
        ],
        "responses": {
          "204": {
            "description": "Membership Deleted"
          },
          "404": {
            "description": "Membership Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/memberships/{membership_id}/owner": {
      "get": {
        "summary": "Get a specific membership's owner",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Memberships"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/membership_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Owner Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "allOf": [
                    {
                      "$ref": "#/components/schemas/Membership"
                    },
                    {
                      "title": "owner"
                    },
                    {
                      "type": "object",
                      "properties": {
                        "owner": {
                          "type": "string",
                          "description": "Name of the membership owner"
                        },
                        "delegate_email": {
                          "type": "string",
                          "description": "Email of the membership owner"
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          "404": {
            "description": "Membership Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/memberships/{membership_id}/idproof": {
      "get": {
        "summary": "Get a specific membership's identity proof",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Memberships"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/membership_id"
          },
          {
            "name": "format",
            "in": "query",
            "description": "Optional parameter to specify json input",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Identity Proof Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/IdentityProof"
                }
              }
            }
          },
          "404": {
            "description": "Identity Proof Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/memberships/{membership_id}/verify": {
      "post": {
        "summary": "Update the verification of a particular membership",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Memberships"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/membership_id"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "oneOf": [
                  {
                    "$ref": "#/components/schemas/ProofVerification"
                  },
                  {
                    "$ref": "#/components/schemas/ProofVerification_TestCertificate"
                  }
                ]
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Membership Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Membership"
                }
              }
            }
          },
          "201": {
            "description": "Membership Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Membership"
                }
              }
            }
          },
          "404": {
            "description": "Membership Not Found"
          },
          "409": {
            "description": "Cannot modify membership verification once it has been set, or invalid proof"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/nodes": {
      "get": {
        "summary": "Get all nodes for the environment",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Nodes"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Nodes Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Node"
                  }
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "post": {
        "summary": "Create a node for the environment",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Nodes"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Node_Create_Input"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Node Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Node"
                }
              }
            }
          },
          "201": {
            "description": "Node Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Node"
                }
              }
            }
          },
          "404": {
            "description": "Node Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/nodes/{node_id}": {
      "get": {
        "summary": "Get Node details",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Nodes"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/node_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Node Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Node"
                }
              }
            }
          },
          "404": {
            "description": "Node Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "patch": {
        "summary": "Update a specific node",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Nodes"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/node_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Node_Update_Input"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Node Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Node"
                }
              }
            }
          },
          "201": {
            "description": "Node Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Node"
                }
              }
            }
          },
          "404": {
            "description": "Node Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "delete": {
        "summary": "Delete a node",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Nodes"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/node_id"
          }
        ],
        "responses": {
          "202": {
            "description": "Request Accepted"
          },
          "404": {
            "description": "Node Not Found"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/nodes/{node_id}/status": {
      "get": {
        "summary": "Get Node's runtime status",
        "description": "Provides information about node's runtime, such as current block height, signer list, chain configuration, access URLs and more",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Nodes"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/node_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Node Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "oneOf": [
                    {
                      "$ref": "#/components/schemas/Node_Geth_POA"
                    },
                    {
                      "$ref": "#/components/schemas/Node_Quorum_IBFT"
                    },
                    {
                      "$ref": "#/components/schemas/Node_Quorum_Raft"
                    },
                    {
                      "$ref": "#/components/schemas/Node_Pantheon_POA"
                    },
                    {
                      "$ref": "#/components/schemas/Node_Pantheon_IBFT"
                    },
                    {
                      "$ref": "#/components/schemas/Node_Corda_Single_Notary"
                    },
                    {
                      "$ref": "#/components/schemas/Node_Fabric_Raft"
                    }
                  ]
                }
              }
            }
          },
          "404": {
            "description": "Node Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/nodes/{node_id}/reset": {
      "put": {
        "summary": "Reset a node",
        "description": "Reset a node after modification to backup_id/kms_id/zone_id/node_config_id to apply any updated configuration. Does not affect chain data on the node",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Nodes"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/node_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Node Reset Accepted",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Node"
                }
              }
            }
          },
          "404": {
            "description": "Node Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/nodes/{node_id}/restart": {
      "post": {
        "summary": "Restart a node",
        "description": "Restart a node's runtime",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Nodes"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/node_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {}
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "Node Restart Accepted",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Node"
                }
              }
            }
          },
          "404": {
            "description": "Node Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/nodes/{node_id}/stop": {
      "post": {
        "summary": "Stop a running node",
        "description": "Stops a running node after voting it out of the signer list - available for POA & IBFT based environments",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Nodes"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/node_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {}
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "Node Stop Accepted",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Node"
                }
              }
            }
          },
          "404": {
            "description": "Node Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/nodes/{node_id}/start": {
      "post": {
        "summary": "Start a Stopped node",
        "description": "Starts a stopped node, the node is started as a non-signer - available for POA & IBFT based environments",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Nodes"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/node_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {}
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "Node Start Accepted",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Node"
                }
              }
            }
          },
          "404": {
            "description": "Node Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/nodes/{node_id}/eth/accounts": {
      "post": {
        "summary": "Create a Node Account",
        "description": "Creates a new account on a node and unlocks it so it's ready to use for signing transactions.\n",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Nodes"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/node_id"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "password": {
                    "type": "string",
                    "description": "A password to protect the new Ethereum account file"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Node Updated",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "address": {
                      "type": "string",
                      "description": "The Ethereum address associated with the new account created on the node"
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/nodes/{node_id}/logs/{log_type}": {
      "get": {
        "summary": "Get a specific node's logs",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Nodes"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/node_id"
          },
          {
            "name": "log_type",
            "in": "path",
            "schema": {
              "type": "string",
              "enum": [
                "geth",
                "constellation",
                "pantheon",
                "ethsigner",
                "orion",
                "ethconnect",
                "baf"
              ]
            },
            "description": "For a Geth node, use `geth` to access the blockchain node log. <br/>\nFor a Quorum node, use `geth` to access the blockchain node log, use `constellation` to access the \nTessera private transaction manager log. <br/>\nFor a Hyperledger Besu node, use `pantheon` to access the blockchain node log, use `orion` to access the private\ntransaction manager log, use `ethsigner` to access the signing wallet log. <br/>\nFor any node, use `ethconnect` to access the REST API Gateway log, use `baf` to access the Blockchain Application Firewall log.\n",
            "required": true
          },
          {
            "name": "maxlines",
            "in": "query",
            "description": "The max number of lines to return (default 20)",
            "schema": {
              "type": "integer"
            }
          },
          {
            "name": "frompos",
            "in": "query",
            "description": "The start position of the logs to return",
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Logs Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "404": {
            "description": "Node Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/nodes/{node_id}/backup": {
      "put": {
        "summary": "Backup a Node's /qdata",
        "description": "Backup a Node's /qdata content to the attached backup store (AWS S3 bucket or Azure Storage Blob)",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Nodes"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/node_id"
          }
        ],
        "requestBody": {
          "required": false,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Backup_Input"
              }
            }
          }
        },
        "responses": {
          "202": {
            "description": "Request Accepted"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/nodes/{node_id}/txpool/status": {
      "get": {
        "summary": "Transaction pool summary",
        "description": "Get a summary of the nodes's transaction pool contents",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Nodes"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/node_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Transaction Pool Summary",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "pending": {
                      "type": "string",
                      "description": "Count of pending transactions ready for execution in of the transaction pool"
                    },
                    "queued": {
                      "type": "string",
                      "description": "Count of queue transactions, waiting for nonce gaps to be filled before they can be executed"
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/nodes/{node_id}/txpool/content": {
      "get": {
        "summary": "Transaction pool contents",
        "description": "Get details of the nodes's transaction pool contents",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Nodes"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/node_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Transaction Pool Contents",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "pending": {
                      "type": "object",
                      "description": "See <a href=\"https://github.com/ethereum/go-ethereum/wiki/Management-APIs#txpool_content\">Management APIs</a>\nin the go-ethereum documentation for details of the JSON payload\n"
                    },
                    "queued": {
                      "type": "object",
                      "description": "See <a href=\"https://github.com/ethereum/go-ethereum/wiki/Management-APIs#txpool_content\">Management APIs</a>\nin the go-ethereum documentation for details of the JSON payload\n"
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/oauth": {
      "get": {
        "summary": "Get the OAuth Configurations of a particular environment",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "OAuth Configurations"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          }
        ],
        "responses": {
          "200": {
            "description": "OAuth Configurations Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/OauthConfig"
                  }
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "post": {
        "summary": "Create new OAuth Configurations",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "OAuth Configurations"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/OauthConfig"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OAuth Resource Manager configuration Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/OauthConfig"
                }
              }
            }
          },
          "201": {
            "description": "OAuth Resource Manager configuration Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/OauthConfig"
                }
              }
            }
          },
          "404": {
            "$ref": "#/components/responses/NotFound"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/oauth/{oauth_id}": {
      "get": {
        "summary": "Get a specific OAuth Resource Manager configuration",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "OAuth Configurations"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/oauth_id"
          }
        ],
        "responses": {
          "200": {
            "description": "OAuth Resource Manager configuration Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/OauthConfig"
                }
              }
            }
          },
          "404": {
            "description": "OAuth Resource Manager configuration Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "put": {
        "summary": "Upsert a specific OAuth Resource Manager configuration",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "OAuth Configurations"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/oauth_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/OauthConfig"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OAuth Resource Manager configuration Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/OauthConfig"
                }
              }
            }
          },
          "201": {
            "description": "OAuth Resource Manager configuration Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/OauthConfig"
                }
              }
            }
          },
          "404": {
            "description": "OAuth Resource Manager configuration Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "patch": {
        "summary": "Update a specific OAuth Resource Manager configuration",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "OAuth Configurations"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/oauth_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/OauthConfig"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OAuth Resource Manager configuration Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/OauthConfig"
                }
              }
            }
          },
          "201": {
            "description": "OAuth Resource Manager configuration Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/OauthConfig"
                }
              }
            }
          },
          "404": {
            "description": "OAuth Resource Manager configuration Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "delete": {
        "summary": "Delete an OAuth Resource Manager configuration",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "OAuth Configurations"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/oauth_id"
          }
        ],
        "responses": {
          "204": {
            "description": "OAuth Resource Manager configuration Deleted"
          },
          "404": {
            "description": "OAuth Resource Manager configuration Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/orgs": {
      "get": {
        "summary": "Get the Organizations that user has access to",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Organizations"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "Organizations Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Organization"
                  }
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "post": {
        "summary": "Create a new Organization",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Organizations"
        ],
        "parameters": [],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Organization_Create_Input"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Organization Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Organization"
                }
              }
            }
          },
          "404": {
            "description": "Organization Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/orgs/{org_id}": {
      "get": {
        "summary": "Get a specific Organization",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Organizations"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/org_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Organization Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Organization"
                }
              }
            }
          },
          "404": {
            "description": "Organization Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "patch": {
        "summary": "Update a specific Organization",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Organizations"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/org_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Organization_Update_Input"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Organization Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Organization"
                }
              }
            }
          },
          "201": {
            "description": "Organization Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Organization"
                }
              }
            }
          },
          "404": {
            "description": "Organization Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "delete": {
        "summary": "Delete a specific Organization",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Organizations"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/org_id"
          }
        ],
        "responses": {
          "204": {
            "description": "Organization Deleted"
          },
          "404": {
            "description": "Organization Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/orgs/{org_id}/plan": {
      "get": {
        "summary": "Get the plan for a specific Organization",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Organizations"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/org_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Organization Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "allOf": [
                    {
                      "$ref": "#/components/schemas/Plan_ResourceLimits"
                    },
                    {
                      "properties": {
                        "plan": {
                          "type": "string",
                          "description": "name of the plan"
                        },
                        "waitlisted": {
                          "type": "boolean"
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          "404": {
            "description": "Organization Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/orgs/{org_id}/billing/summary": {
      "get": {
        "summary": "Get a summary of the billing data for the current month.",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Plans"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/org_id"
          },
          {
            "name": "month",
            "in": "query",
            "description": "the month - january,february etc. Default=current",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "year",
            "in": "query",
            "description": "2018 etc.",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Plan Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/BillingSummary"
                }
              }
            }
          },
          "404": {
            "description": "Plan Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/orgs/{org_id}/billing/provider": {
      "get": {
        "summary": "Returns type of billing (aws, stripe or other) and details if using stripe",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Organizations"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/org_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Organization Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Billing_Output"
                }
              }
            }
          },
          "404": {
            "description": "Organization Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "put": {
        "summary": "Configures billing provider for the organization",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Organizations"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/org_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Billing_Input"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Organization Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Billing_Output"
                }
              }
            }
          },
          "201": {
            "description": "Organization Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Billing_Output"
                }
              }
            }
          },
          "404": {
            "description": "Organization Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/plans": {
      "get": {
        "summary": "Get all available plans",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Plans"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "Plans Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Plan"
                  }
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/plancompliance/{org_id}": {
      "get": {
        "summary": "Determine compliance with all available plans, to find resources that would prevent changing your subscription",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Plans"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/org_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Plan Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "starter": {
                      "$ref": "#/components/schemas/Compliance_Starter"
                    },
                    "team": {
                      "$ref": "#/components/schemas/Compliance_Team"
                    },
                    "business": {
                      "$ref": "#/components/schemas/Compliance_Business_Enterprise"
                    },
                    "enterprise": {
                      "$ref": "#/components/schemas/Compliance_Business_Enterprise"
                    }
                  }
                }
              }
            }
          },
          "404": {
            "description": "Plan Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/regions": {
      "get": {
        "summary": "List of API endpoints and their associated deployment zones",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Regions"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "Region Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Region"
                }
              }
            }
          },
          "404": {
            "description": "Region Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/releases": {
      "get": {
        "summary": "Get current list of environment runtime releases",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Releases"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "Releases Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Release"
                  }
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/releases/{release_id}": {
      "get": {
        "summary": "Get a specific environment runtime release",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Releases"
        ],
        "parameters": [
          {
            "name": "release_id",
            "in": "path",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "Release Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Release"
                }
              }
            }
          },
          "404": {
            "description": "Release Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/orgs/{org_id}/roles": {
      "get": {
        "summary": "Get all roles of an Organization",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Roles"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/org_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Roles Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Role"
                  }
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "post": {
        "summary": "Add a role to an Organization",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Roles"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/org_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Role_Create_Input"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Role Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Role"
                }
              }
            }
          },
          "201": {
            "description": "Role Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Role"
                }
              }
            }
          },
          "404": {
            "description": "Role Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/orgs/{org_id}/roles/{role_id}": {
      "get": {
        "summary": "Get a specific role of an Organization",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Roles"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/org_id"
          },
          {
            "$ref": "#/components/parameters/role_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Role Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Role"
                }
              }
            }
          },
          "404": {
            "description": "Role Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "put": {
        "summary": "Upsert a role of an Organization",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Roles"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/org_id"
          },
          {
            "$ref": "#/components/parameters/role_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Role_Update_Input"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Role Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Role"
                }
              }
            }
          },
          "201": {
            "description": "Role Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Role"
                }
              }
            }
          },
          "404": {
            "description": "Role Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "patch": {
        "summary": "Update the details of a role of an Organization",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Roles"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/org_id"
          },
          {
            "$ref": "#/components/parameters/role_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Role_Update_Input"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Role Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Role"
                }
              }
            }
          },
          "201": {
            "description": "Role Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Role"
                }
              }
            }
          },
          "404": {
            "description": "Role Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "delete": {
        "summary": "Remove a role from an Organization",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Roles"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/org_id"
          },
          {
            "$ref": "#/components/parameters/role_id"
          }
        ],
        "responses": {
          "204": {
            "description": "Role Deleted"
          },
          "404": {
            "description": "Role Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/services": {
      "get": {
        "summary": "Retrieves all services that the current user owns or has visibility of",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Services"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "Services Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Service"
                  }
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/services": {
      "get": {
        "summary": "Get all services for the environment",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Services"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Services Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Service"
                  }
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "post": {
        "summary": "Create a service for the environment",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Services"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Service_Create_Input"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Service Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Service"
                }
              }
            }
          },
          "201": {
            "description": "Service Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Service"
                }
              }
            }
          },
          "404": {
            "description": "Service Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/services/{service_id}": {
      "get": {
        "summary": "Get a specific service",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Services"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/service_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Service Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Service"
                }
              }
            }
          },
          "404": {
            "description": "Service Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "patch": {
        "summary": "Update a specific service",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Services"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/service_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Service_Update_Input"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Service Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Service"
                }
              }
            }
          },
          "201": {
            "description": "Service Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Service"
                }
              }
            }
          },
          "404": {
            "description": "Service Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "delete": {
        "summary": "Delete a specific service",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Services"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/service_id"
          }
        ],
        "responses": {
          "202": {
            "description": "Request Accepted"
          },
          "404": {
            "description": "Service Not Found"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/services/{service_id}/status": {
      "get": {
        "summary": "Get a specific service's status",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Services"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/service_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Service Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "urls": {
                      "type": "object",
                      "description": "Auto-populated set of service specific URLs for communicating with the service.",
                      "additionalProperties": {
                        "type": "string"
                      }
                    },
                    "status": {
                      "type": "string",
                      "description": "The status of the service. ",
                      "enum": [
                        "provisioning",
                        "failed",
                        "started",
                        "paused",
                        "upgrading",
                        "deprovisioning",
                        "delete_failed"
                      ]
                    },
                    "release": {
                      "description": "The release version of this service",
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "404": {
            "description": "Service Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/services/{service_id}/logs": {
      "get": {
        "summary": "Get a specific service's logs list",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Services"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/service_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Service Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "404": {
            "description": "Service Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/services/{service_id}/logs/{log_name}": {
      "get": {
        "summary": "Get a specific service particular log",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Services"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/service_id"
          },
          {
            "name": "log_name",
            "in": "path",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "Service Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "404": {
            "description": "Service Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/environments/{environment_id}/services/{service_id}/backup": {
      "put": {
        "summary": "Backup a Service's /qdata",
        "description": "Backup a Service's /qdata content to the attached backup store (AWS S3 bucket or Azure Storage Blob)",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Services"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/environment_id"
          },
          {
            "$ref": "#/components/parameters/service_id"
          }
        ],
        "requestBody": {
          "required": false,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Backup_Input"
              }
            }
          }
        },
        "responses": {
          "202": {
            "description": "Request Accepted"
          }
        }
      }
    },
    "/consortia/{consortia_id}/memberships/{membership_id}/tenants": {
      "get": {
        "summary": "Get the Tenants of a particular environment",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Tenants"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/membership_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Tenants Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Tenant"
                  }
                }
              }
            }
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "post": {
        "summary": "Create new Tenants",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Tenants"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/membership_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Tenant"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Tenant Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Tenant"
                }
              }
            }
          },
          "201": {
            "description": "Tenant Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Tenant"
                }
              }
            }
          },
          "404": {
            "$ref": "#/components/responses/NotFound"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    },
    "/consortia/{consortia_id}/memberships/{membership_id}/tenants/{tenant_id}": {
      "get": {
        "summary": "Get a specific Tenant",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Tenants"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/membership_id"
          },
          {
            "$ref": "#/components/parameters/tenant_id"
          }
        ],
        "responses": {
          "200": {
            "description": "Tenant Retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Tenant"
                }
              }
            }
          },
          "404": {
            "description": "Tenant Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "put": {
        "summary": "Upsert a specific Tenant",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Tenants"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/membership_id"
          },
          {
            "$ref": "#/components/parameters/tenant_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Tenant"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Tenant Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Tenant"
                }
              }
            }
          },
          "201": {
            "description": "Tenant Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Tenant"
                }
              }
            }
          },
          "404": {
            "description": "Tenant Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "patch": {
        "summary": "Update a specific Tenant",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Tenants"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/membership_id"
          },
          {
            "$ref": "#/components/parameters/tenant_id"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Tenant"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Tenant Updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Tenant"
                }
              }
            }
          },
          "201": {
            "description": "Tenant Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Tenant"
                }
              }
            }
          },
          "404": {
            "description": "Tenant Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      },
      "delete": {
        "summary": "Delete a Tenant",
        "security": [
          {
            "bearer_token": []
          }
        ],
        "tags": [
          "Tenants"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/consortia_id"
          },
          {
            "$ref": "#/components/parameters/membership_id"
          },
          {
            "$ref": "#/components/parameters/tenant_id"
          }
        ],
        "responses": {
          "204": {
            "description": "Tenant Deleted"
          },
          "404": {
            "description": "Tenant Not Found"
          },
          "500": {
            "$ref": "#/components/responses/InternalError"
          }
        }
      }
    }
  },
  "components": {
    "securitySchemes": {
      "bearer_token": {
        "type": "http",
        "scheme": "bearer",
        "description": "Kaleido API for platform resources are authenticated using the Bearer token in the `Authorization` HTTP header. The token can either be the API Key created in the Kaleido user's account, or the JWT token\nissued to the user's browser as a cookie after logging in. The JWT token is set to expire in one hour.\n"
      }
    },
    "schemas": {
      "Error": {
        "type": "object",
        "properties": {
          "errorMessage": {
            "type": "string"
          }
        }
      },
      "MongoResource": {
        "type": "object",
        "properties": {
          "_id": {
            "type": "string",
            "pattern": "^[0-9a-z]{10}$"
          },
          "_revision": {
            "type": "string"
          },
          "created_at": {
            "description": "Auto-populated field denoting when a record is created",
            "type": "string"
          },
          "updated_at": {
            "description": "Auto-populated field denoting when a record is updated",
            "type": "string"
          }
        }
      },
      "APIKey_Update_Input": {
        "type": "object",
        "properties": {
          "name": {
            "description": "User defined name for API Key",
            "type": "string"
          }
        },
        "additionalProperties": false
      },
      "APIKey_Create_Input": {
        "type": "object",
        "properties": {
          "name": {
            "description": "User defined name for API Key",
            "type": "string"
          },
          "org_id": {
            "type": "string"
          }
        },
        "required": [
          "org_id"
        ],
        "additionalProperties": false
      },
      "APIKey": {
        "allOf": [
          {
            "$ref": "#/components/schemas/MongoResource"
          },
          {
            "$ref": "#/components/schemas/APIKey_Create_Input"
          }
        ]
      },
      "ApplicationCredential": {
        "allOf": [
          {
            "$ref": "#/components/schemas/MongoResource"
          },
          {
            "properties": {
              "environment_id": {
                "description": "Auto-generated key for the environment that owns this key",
                "type": "string"
              },
              "membership_id": {
                "description": "Auto-generated key for the membership that owns this key",
                "type": "string"
              },
              "dapp_id": {
                "description": "The DApp that owns this Key",
                "type": "string"
              },
              "name": {
                "description": "User defined name for App Key",
                "type": "string"
              },
              "auth_type": {
                "description": "The type of authentication associated with this key",
                "type": "string",
                "enum": [
                  "app_creds"
                ]
              },
              "hash": {
                "description": "Internal storage used to validate an key (we do not store the whole key)",
                "type": "string"
              },
              "service_id": {
                "description": "Auto-populated field. Indicates this app credential is used by provisioned service instances running in Kaleido to connect to the chain.",
                "type": "string"
              },
              "integration_id": {
                "description": "Auto-populated field. Indicates this app credential is used by partner integrations to connect to the chain.",
                "type": "string"
              }
            }
          },
          {
            "required": [
              "membership_id"
            ]
          },
          {
            "additionalProperties": false
          }
        ]
      },
      "Audit": {
        "allOf": [
          {
            "$ref": "#/components/schemas/MongoResource"
          },
          {
            "properties": {
              "consortia_id": {
                "type": "string"
              },
              "user_id": {
                "type": "string"
              },
              "org_id": {
                "type": "string"
              },
              "target_email": {
                "type": "string"
              },
              "action": {
                "type": "string",
                "enum": [
                  "create",
                  "update",
                  "delete"
                ]
              },
              "objectType": {
                "type": "string"
              },
              "data": {
                "type": "object",
                "properties": {
                  "_id": {
                    "type": "string"
                  }
                },
                "required": [
                  "_id"
                ],
                "additionalProperties": true
              },
              "timestamp": {
                "type": "integer"
              }
            }
          }
        ]
      },
      "Billing_Input_Stripe": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "stripe"
            ]
          },
          "token": {
            "type": "object",
            "description": "The Stripe Token object, see https://stripe.com/docs/api/tokens/object for details. For this API call, only the id of the token object created in Stripe is needed.",
            "properties": {
              "id": {
                "type": "string",
                "description": "Identifier of the Token object already created in Stripe"
              }
            }
          }
        }
      },
      "Billing_Input_Other": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "other"
            ]
          },
          "contract_binding_code": {
            "type": "string",
            "description": "Contract code issued by contacting Kaleido support for custom invoicing"
          }
        }
      },
      "Billing_Input": {
        "oneOf": [
          {
            "$ref": "#/components/schemas/Billing_Input_Stripe"
          },
          {
            "$ref": "#/components/schemas/Billing_Input_Other"
          }
        ]
      },
      "Billing_Output": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Stripe_Billing"
          },
          {
            "properties": {
              "type": {
                "type": "string",
                "description": "Type of billing",
                "enum": [
                  "none",
                  "aws",
                  "stripe",
                  "other"
                ]
              }
            }
          }
        ]
      },
      "BillingSummary": {
        "type": "object",
        "properties": {
          "memberships": {
            "description": "Memberships in this Organization and the associated costs",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "membership_id": {
                  "type": "string"
                },
                "plan_id": {
                  "type": "string"
                },
                "unit_cost_usd": {
                  "type": "integer"
                },
                "unit_hrs": {
                  "type": "integer"
                },
                "total_usd": {
                  "type": "integer"
                }
              }
            }
          },
          "nodes": {
            "description": "Nodes in this Organization and the associated costs",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "node_id": {
                  "type": "string"
                },
                "environment_id": {
                  "type": "string"
                },
                "size": {
                  "type": "string",
                  "enum": [
                    "small",
                    "medium",
                    "large"
                  ]
                },
                "plan_id": {
                  "type": "string"
                },
                "unit_cost_usd": {
                  "type": "integer"
                },
                "unit_hrs": {
                  "type": "integer"
                },
                "total_usd": {
                  "type": "integer"
                }
              }
            }
          },
          "services": {
            "description": "Services in this Organization and the associated costs",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "service_id": {
                  "type": "string"
                },
                "plan_id": {
                  "type": "string"
                },
                "unit_cost_usd": {
                  "type": "integer"
                },
                "unit_hrs": {
                  "type": "integer"
                },
                "total_usd": {
                  "type": "integer"
                }
              }
            }
          },
          "storage": {
            "description": "Storage costs for this Organization",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "plan_id": {
                  "type": "string"
                },
                "unit_cost_usd": {
                  "type": "integer"
                },
                "unit_hrs": {
                  "type": "integer"
                },
                "total_usd": {
                  "type": "integer"
                }
              }
            }
          },
          "support": {
            "description": "Associated costs for support for this Organization",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "plan_id": {
                  "type": "string"
                },
                "unit_cost_usd": {
                  "type": "integer"
                },
                "unit_hrs": {
                  "type": "integer"
                },
                "total_usd": {
                  "type": "integer"
                }
              }
            }
          }
        }
      },
      "Configuration_Create_Input": {
        "type": "object",
        "properties": {
          "membership_id": {
            "description": "Field denoting the membership which owns the Configuration",
            "type": "string"
          },
          "name": {
            "description": "User-friendly name for the Configuration",
            "type": "string"
          },
          "type": {
            "description": "The type of configuration being managed",
            "enum": [
              "node_config",
              "kms",
              "opsmetric",
              "backup",
              "networking",
              "baf",
              "cloudhsm"
            ]
          },
          "details": {
            "oneOf": [
              {
                "$ref": "#/components/schemas/Node_Config"
              },
              {
                "$ref": "#/components/schemas/KMS_Config"
              },
              {
                "$ref": "#/components/schemas/OpsMetric_Config"
              },
              {
                "$ref": "#/components/schemas/Backup_Config"
              },
              {
                "$ref": "#/components/schemas/Networking_Config"
              },
              {
                "$ref": "#/components/schemas/BAF_Config"
              },
              {
                "$ref": "#/components/schemas/CloudHsm_Config"
              }
            ]
          }
        },
        "additionalProperties": false,
        "required": [
          "membership_id",
          "type",
          "details"
        ]
      },
      "Node_Config": {
        "type": "object",
        "properties": {
          "gas_price": {
            "description": "minimum gas price to accept for a transaction (default: 0)",
            "type": "integer"
          },
          "target_gas_limit": {
            "description": "Target gas limit sets the artificial target gas floor for the blocks to mine (default: 804247552)",
            "type": "integer"
          },
          "cors_origin_hosts": {
            "description": "List of origins that are allowed to access RPC/WSS endpoints on nodes (default: '*')",
            "type": "string"
          },
          "geth_log_verbosity": {
            "description": "Verbosity of Geth logs (default: info)"
          },
          "gc_mode": {
            "description": "Garbage collection mode for Geth/Quorum nodes (default: full; archive applies only to Large nodes)",
            "enum": [
              "full",
              "archive"
            ]
          },
          "sync_mode": {
            "description": "Sync mode for Geth/Quorum nodes (default: full)",
            "enum": [
              "full",
              "fast",
              "light"
            ]
          },
          "rpc_gas_cap": {
            "description": "Geth/Quorum: Sets a cap on gas that can be used in eth_call/estimateGas (0=infinite) (default: 25000000)",
            "type": "integer",
            "minimum": 0
          },
          "geth_cache_size": {
            "description": "Geth/Quorum: Megabytes of memory allocated to internal caching in geth (default: 64)",
            "type": "integer",
            "minimum": 0,
            "maximum": 2048
          },
          "geth_cache_database_share": {
            "description": "Geth/Quorum: Percentage of cache memory allowance to use for database io in geth (default: 50)",
            "type": "integer",
            "minimum": 0,
            "maximum": 100
          },
          "geth_cache_trie_share": {
            "description": "Geth/Quorum: Percentage of cache memory allowance to use for trie caching in geth (default: 15)",
            "type": "integer",
            "minimum": 0,
            "maximum": 100
          },
          "geth_cache_gc_share": {
            "description": "Geth/Quorum: Percentage of cache memory allowance to use for trie pruning in geth (default: 25)",
            "type": "integer",
            "minimum": 0,
            "maximum": 100
          },
          "geth_cache_snapshot_share": {
            "description": "Geth/Quorum: Percentage of cache memory allowance to use for snapshot caching in geth (default: 10)",
            "type": "integer",
            "minimum": 0,
            "maximum": 100
          },
          "geth_cache_trie_rejournal_interval": {
            "description": "Geth/Quorum: Time interval in minutes to regenerate the trie cache journal in geth (default 60)",
            "type": "integer",
            "minimum": 1,
            "maximum": 120
          },
          "restgw_max_inflight": {
            "description": "REST API Gateway - limits the maximum number of messages per block this node will throttle into the blockchain, when delivering asynchronously via Apache Kafka (default 25)",
            "type": "integer"
          },
          "restgw_max_tx_wait_time": {
            "description": "REST API Gateway - maximum time to wait for a transaction to be mined into a block (default 60 seconds)",
            "type": "integer"
          },
          "restgw_always_manage_nonce": {
            "description": "REST API Gateway - when set to true, the REST API Gateway always pre-allocates a nonce to transactions. It does not rely on the Ethereum Node or Cloud HSM signer to assign nonces (after ordering via Kafka).",
            "type": "boolean"
          },
          "restgw_send_concurrency": {
            "description": "REST API Gateway - the amount of concurrency to use when submitting messages into the Ethereum Node or Cloud HSM signer after retrieving from Kafka. Recommended to be used with restgw_always_manage_nonce=true to maintain ordering of TX from the same address (default 1 - sequential & ordered).",
            "type": "integer"
          },
          "restgw_attempt_gap_fill": {
            "description": "REST API Gateway - when restgw_always_manage_nonce=true and restgw_send_concurrency>1 failed transactions can temporarily block later transactions already in-flight in the gateway, causing transaction timeouts. Set this to true to automatically fill gaps with benign transactions to allow later TX to proceed.",
            "type": "boolean"
          },
          "restgw_flush_frequency": {
            "description": "REST API Gateway - how many milliseconds to wait collecting messages from parallel REST API calls before flushing to Apache Kafka, when sending aynchronously (default 0 - send immediately)",
            "type": "integer"
          },
          "restgw_flush_msgs\"": {
            "description": "REST API Gateway - how many messages to attempt to include in each batch, when sending aynchronously via Apache Kafka (default 0 - send immediately)",
            "type": "integer"
          },
          "restgw_flush_bytes": {
            "description": "REST API Gateway - how many bytes to attempt to include in each batch, when sending aynchronously via Apache Kafka (default 0 - send immediately)",
            "type": "integer"
          }
        }
      },
      "KMS_Config": {
        "type": "object",
        "required": [
          "provider",
          "master_key"
        ],
        "properties": {
          "provider": {
            "description": "Cloud provider supporting the KMS",
            "enum": [
              "aws",
              "azure"
            ]
          },
          "region": {
            "description": "AWS region containing the KMS, only needed for AWS",
            "type": "string"
          },
          "role_arn": {
            "description": "AWS role_arn for IAM role whose principal is Kaleido's AWS account (Recommended for AWS KMS)",
            "type": "string"
          },
          "api_key": {
            "description": "AWS API access key ID (Not recommended, Use role_arn instead), or Azure OAuth client ID",
            "type": "string"
          },
          "api_secret": {
            "description": "AWS API access secret (Not recommended, Use role_arn instead), or Azure OAuth client secret (set-only)",
            "type": "string"
          },
          "master_key": {
            "description": "AWS master key ARN or Alias, or Azure Key Identifier",
            "type": "string"
          }
        }
      },
      "OpsMetric_Config": {
        "type": "object",
        "required": [
          "provider",
          "region",
          "group"
        ],
        "properties": {
          "provider": {
            "description": "Cloud provider supporting the Ops Metrics target",
            "enum": [
              "aws"
            ]
          },
          "region": {
            "description": "The region within the cloud provider containing the Ops Metrics target",
            "type": "string"
          },
          "role_arn": {
            "description": "AWS role_arn for IAM role whose principal is Kaleido's AWS account (Recommended)",
            "type": "string"
          },
          "user_id": {
            "description": "ID if the IAM user or role created with Cloudwatch create/describeLogGroups, create/describeLogStreams, and putLogEvents permissions (Not recommended, Use role_arn instead)",
            "type": "string"
          },
          "user_secret": {
            "description": "Secret of the IAM user or role created with Cloudwatch create/describeLogGroups, create/describeLogStreams, and putLogEvents permissions (set-only) (Not recommended, Use role_arn instead)",
            "type": "string"
          },
          "group": {
            "description": "Name of the logging group in Cloudwatch",
            "type": "string"
          }
        }
      },
      "BAF_Config": {
        "title": "BAF Config",
        "type": "object",
        "properties": {
          "tenants_tag": {
            "description": "Optional tag for a list of tenants owned by the same membership to be synchronized to the node dyanmically, and to be used in mapping with 'templated' set to true",
            "type": "string"
          },
          "appcreds": {
            "description": "Configuration for authenticating application credentials",
            "type": "object",
            "properties": {
              "enabled": {
                "description": "Is application credential based security enabled?",
                "type": "boolean"
              },
              "basicAuth": {
                "description": "Whether an app can authenticate by supplying the application credential in a Basic Auth header",
                "type": "boolean"
              },
              "bearer": {
                "description": "Whether an app can authenticate by supplying the secret part of the application credential as a Bearer token",
                "type": "boolean"
              },
              "header": {
                "description": "A HTTP Header name that an app can use to authenticate with the secret part of the application credential",
                "type": "string"
              },
              "cookie": {
                "description": "A HTTP Cookie name that an app can use to authenticate with the secret part of the application credential",
                "type": "string"
              },
              "query": {
                "description": "A HTTP Query Parameter name that an app can use to authenticate with the secret part of the application credential",
                "type": "string"
              },
              "mappings": {
                "description": "Mapping rules for application crdentials",
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "comment": {
                      "description": "Any comment you want to store to describe this mapping",
                      "type": "string"
                    },
                    "ruleset": {
                      "description": "The ruleset to apply to connections matching this mapping",
                      "type": "string"
                    },
                    "templated": {
                      "description": "If true, the claim matcher will be executed against each Tenant matching the 'tenants_tag' by expanding {{.propertyName}} templating within the strings before executing the match",
                      "type": "boolean"
                    },
                    "claims": {
                      "description": "Matching criteria to apply to an authenticated application credential",
                      "type": "object",
                      "properties": {
                        "id": {
                          "description": "Regular expression match for the ID of the application credential (the username)",
                          "type": "string"
                        }
                      },
                      "required": [
                        "id"
                      ]
                    }
                  },
                  "required": [
                    "ruleset",
                    "claims"
                  ]
                }
              }
            },
            "required": [
              "enabled"
            ]
          },
          "jwt": {
            "description": "Configuration for authenticating JWT Tokens",
            "type": "object",
            "properties": {
              "enabled": {
                "description": "Is JWT based security enabled?",
                "type": "boolean"
              },
              "bearer": {
                "description": "Whether an app can authenticate by supplying a JWT as a Bearer token",
                "type": "boolean"
              },
              "header": {
                "description": "A HTTP Header name that an app can use to authenticate with a JWT",
                "type": "string"
              },
              "cookie": {
                "description": "A HTTP Cookie name that an app can use to authenticate with a JWT",
                "type": "string"
              },
              "query": {
                "description": "A HTTP Query Parameter name that an app can use to authenticate with a JWT",
                "type": "string"
              },
              "mappings": {
                "description": "Mapping rules for JWT tokens",
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "comment": {
                      "description": "Any comment you want to store to describe this mapping",
                      "type": "string"
                    },
                    "ruleset": {
                      "description": "The ruleset to apply to connections matching this mapping",
                      "type": "string"
                    },
                    "templated": {
                      "description": "If true, the claim matcher will be executed against each Tenant matching the 'tenants_tag' by expanding {{.propertyName}} templating within the strings before executing the match",
                      "type": "boolean"
                    },
                    "claims": {
                      "description": "Matching criteria to apply to the claims inside of an authenticated JWT",
                      "type": "object",
                      "minProperties": 1
                    }
                  }
                },
                "required": [
                  "ruleset",
                  "claims"
                ]
              }
            },
            "required": [
              "enabled"
            ]
          },
          "rulesets": {
            "description": "Each ruleset describes a set of permissions that apply to a blockchain application connection",
            "type": "object",
            "additionalProperties": {
              "type": "object",
              "properties": {
                "comment": {
                  "description": "Any comment you want to store to describe this ruleset",
                  "type": "string"
                },
                "tx": {
                  "description": "Control over operations to submit tranasctions and query data via smart contract deployment and execution",
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "from": {
                        "description": "Rule matching regular expression on 'from' (signer) addresses - use '.*' to match any from address",
                        "type": "string"
                      },
                      "to": {
                        "description": "Rule matching regular expression on 'to' (target) addresses - use '.*' to match any transaction, or '.+' to exclude new contract deployment (where 'to' will be empty)",
                        "type": "string"
                      },
                      "call": {
                        "description": "Whether 'call' (read-only data query) operations are allowed",
                        "type": "boolean"
                      },
                      "estimate": {
                        "description": "Whether 'estimateGas' (read-only data simulation) operations are allowed",
                        "type": "boolean"
                      },
                      "send": {
                        "description": "Whether 'sendTansaction' (node-signed transaction) operations are allowed",
                        "type": "boolean"
                      },
                      "sendRaw": {
                        "description": "Whether 'sendRawTansaction' (externally-signed transaction) operations are allowed",
                        "type": "boolean"
                      },
                      "deploy": {
                        "description": "Whether transaction sends can deploy new contracts (with an empty 'to' field)",
                        "type": "boolean"
                      }
                    },
                    "required": [
                      "from",
                      "to"
                    ]
                  }
                },
                "chain": {
                  "description": "Control over operations to query block and transaction data from the blockchain ledger",
                  "type": "object",
                  "properties": {
                    "info": {
                      "description": "Query summary information about the chain - such as the chain ID",
                      "type": "boolean"
                    },
                    "receipts": {
                      "description": "Query for receipts by hash - such as to confirm mining of a transaction after submitting it",
                      "type": "boolean"
                    },
                    "pending": {
                      "description": "Query for pending transactions",
                      "type": "boolean"
                    },
                    "blocks": {
                      "description": "Query block information",
                      "type": "boolean"
                    },
                    "transactions": {
                      "description": "Query transaction information",
                      "type": "boolean"
                    },
                    "filter": {
                      "description": "Query for updates to transaction and block data using filters",
                      "type": "boolean"
                    },
                    "subscribe": {
                      "description": "Subscribe for updates to transaction and block data using websocket subscriptions",
                      "type": "boolean"
                    }
                  }
                },
                "accounts": {
                  "description": "Control over operations to access information on accounts",
                  "type": "object",
                  "properties": {
                    "coinbase": {
                      "description": "Query the 'coinbase' address of the node",
                      "type": "boolean"
                    },
                    "balance": {
                      "description": "Query the ether balance of an account",
                      "type": "boolean"
                    },
                    "nonce": {
                      "description": "Query the transaction count of an account, to determine the likely next 'nonce' to use when exernally signing a transaction",
                      "type": "boolean"
                    },
                    "storage": {
                      "description": "Query the storage owned by an address or smart contract",
                      "type": "boolean"
                    },
                    "list": {
                      "description": "List the accounts where the private keys are available to the connected node",
                      "type": "boolean"
                    },
                    "sign": {
                      "description": "Sign arbitrary data with the account private keys are available to the connected node",
                      "type": "boolean"
                    }
                  }
                },
                "rpc": {
                  "description": "Whitelist or blacklist JSON/RPC methods directly. This setting overrides any detailed configuration in the other configuration rules",
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "method": {
                        "description": "Regular expression matcher for the JSON/RPC method name",
                        "type": "string"
                      },
                      "allow": {
                        "description": "Whether to allow or deny methods that match the regular expression specified in 'method'",
                        "type": "boolean"
                      }
                    }
                  },
                  "required": [
                    "method",
                    "allow"
                  ]
                }
              }
            },
            "minProperties": 0
          },
          "logging": {
            "description": "Logging configuration",
            "type": "object",
            "properties": {
              "level": {
                "description": "The level for logging. 0=Error 1=Audit (default) 2=Debug",
                "type": "integer",
                "minimum": 0,
                "maximum": 2
              }
            }
          },
          "cors": {
            "description": "CORS configuration",
            "type": "object",
            "properties": {
              "allowedOrigins": {
                "description": "The allowed origins (default '*')",
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "allowedHeaders": {
                "description": "The allowed headers (default '*')",
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "allowedMethods": {
                "description": "The allowed methods (default POST,GET)",
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "allowCredentials": {
                "description": "Whether to allow basic auth credentials in requests (default true)",
                "type": "boolean"
              },
              "maxAge": {
                "description": "Maximum number of seconds the results can be cached (default 600).",
                "type": "integer"
              }
            }
          }
        },
        "required": [
          "appcreds",
          "jwt",
          "rulesets"
        ]
      },
      "CloudHsm_Config": {
        "title": "Cloud HSM Signer Configuration",
        "type": "object",
        "properties": {
          "provider": {
            "description": "Cloud HSM backend provider",
            "type": "string",
            "enum": [
              "aws",
              "azure",
              "hashicorp",
              "aws_kms"
            ]
          },
          "target_address": {
            "description": "AWS - CloudHSM Elastic Network Interface (ENI) IP address, Azure - https://vault.azure.net, HashiCorp - vaultUrl, AWS_KMS - not used",
            "type": "string"
          },
          "target_region": {
            "description": "AWS - not used, Azure - not used, HashiCorp - not used, AWS_KMS - AWS region of aws_kms instance",
            "type": "string"
          },
          "user_id": {
            "description": "AWS - username , Azure - clientId, HashiCorp - not used, AWS_KMS - AWS API access key ID",
            "type": "string"
          },
          "user_secret": {
            "description": "AWS - password, Azure - clientSecret, HashiCorp - vaultToken, AWS_KMS - AWS API access secret",
            "type": "string"
          },
          "subscription_id": {
            "description": "AWS - not used, Azure - subscriptionId, HashiCorp - not used, AWS_KMS - not used",
            "type": "string"
          },
          "tenant_id": {
            "description": "AWS - not used, Azure - tenantId, HashiCorp - not used, AWS_KMS - not used",
            "type": "string"
          },
          "vault_name": {
            "description": "AWS - not used, Azure - keyVaultName, HashiCorp - secretPath, defaults to '/ethereum', AWS_KMS - not used",
            "type": "string"
          },
          "tls": {
            "description": "AWS always requires client signing cert; Azure & AWS KMS do not need special TLS configurations; HashiCorp Vault may require support for self-signed server certificates",
            "type": "object",
            "properties": {
              "ca_certs": {
                "description": "AWS: the customer CA cert that signed the HSM cluster certificate, in PEM format; HashiCorp: Server root CAs to trust, in PEM format",
                "type": "string"
              },
              "insecure_skip_verify": {
                "description": "Default: false. Can be used in development to accept HashiCorp Vault server certificates that are self-signed or signed by non-verifiable CAs",
                "type": "boolean"
              },
              "client_certs": {
                "description": "AWS: not used; HashiCorp: client certificate in PEM format (for mutual TLS authentication)",
                "type": "string"
              },
              "client_cert_secret": {
                "description": "AWS: not used; HashiCorp: client certificate private key",
                "type": "string"
              }
            }
          }
        },
        "required": [
          "provider",
          "user_secret"
        ],
        "additionalProperties": false
      },
      "Networking_Config": {
        "type": "object",
        "required": [
          "allow_public",
          "allow_private"
        ],
        "properties": {
          "allow_public": {
            "description": "Whether the node is publicly routable or not",
            "type": "boolean"
          },
          "allow_private": {
            "description": "Whether the node is privately routable via AWS PrivateLink or not",
            "type": "boolean"
          }
        }
      },
      "Backup_Config": {
        "type": "object",
        "required": [
          "provider",
          "bucket"
        ],
        "properties": {
          "provider": {
            "description": "Cloud provider supporting the backup storage",
            "enum": [
              "aws",
              "azure"
            ]
          },
          "region": {
            "type": "string",
            "description": "The region within the cloud provider containing the backup storage Target Network Configured"
          },
          "role_arn": {
            "description": "AWS role_arn for IAM role whose principal is Kaleido's AWS account (Recommended for AWS Backup)",
            "type": "string"
          },
          "user_id": {
            "type": "string",
            "description": "For AWS: ID of the IAM user or role created with S3 write permissions (Not recommended, Use role_arn instead), for Azure: the Storage Account Name"
          },
          "user_secret": {
            "type": "string",
            "description": "For AWS: Secret of the IAM user or role created with S3 write permissions (set-only) (Not recommended, Use role_arn instead), for Azure: the Account Secret Key"
          },
          "bucket": {
            "type": "string",
            "description": "For AWS: Name of the S3 bucket to store backups, for Azure: Name of the Container"
          }
        }
      },
      "Configuration": {
        "allOf": [
          {
            "$ref": "#/components/schemas/MongoResource"
          },
          {
            "$ref": "#/components/schemas/Configuration_Create_Input"
          },
          {
            "properties": {
              "environment_id": {
                "description": "Auto-populated field denoting the environment containing the Configuration",
                "type": "string"
              }
            }
          }
        ]
      },
      "Compliance_Starter": {
        "type": "object",
        "properties": {
          "compliant": {
            "type": "boolean"
          },
          "consortia": {
            "type": "object",
            "properties": {
              "count": {
                "type": "integer"
              },
              "decentralized": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            }
          },
          "environments": {
            "type": "object",
            "properties": {
              "count": {
                "type": "object",
                "properties": {
                  "consortia": {
                    "type": "object"
                  }
                }
              }
            }
          },
          "appcreds": {
            "type": "object",
            "properties": {
              "count": {
                "type": "object",
                "properties": {
                  "environments": {
                    "type": "object"
                  }
                }
              }
            }
          },
          "configurations": {
            "type": "object",
            "properties": {
              "count": {
                "type": "object",
                "properties": {
                  "environments": {
                    "type": "object"
                  }
                }
              },
              "type": {
                "type": "object",
                "properties": {
                  "environments": {
                    "type": "object"
                  }
                }
              }
            }
          },
          "nodes": {
            "type": "object",
            "properties": {
              "count": {
                "type": "object",
                "properties": {
                  "environments": {
                    "type": "object"
                  }
                }
              },
              "size": {
                "type": "object",
                "properties": {
                  "small": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "medium": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "large": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "service": {
            "type": "object",
            "properties": {
              "count": {
                "type": "object",
                "properties": {
                  "environments": {
                    "type": "object"
                  }
                }
              },
              "type": {
                "type": "object"
              }
            }
          },
          "roles": {
            "type": "object",
            "properties": {
              "count": {
                "type": "integer"
              }
            }
          }
        }
      },
      "Compliance_Team": {
        "type": "object",
        "properties": {
          "compliant": {
            "type": "boolean"
          },
          "consortia": {
            "type": "object",
            "properties": {
              "count": {
                "type": "integer"
              },
              "decentralized": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            }
          },
          "appcreds": {
            "type": "object",
            "properties": {
              "count": {
                "type": "object",
                "properties": {
                  "environments": {
                    "type": "object"
                  }
                }
              }
            }
          },
          "configurations": {
            "type": "object",
            "properties": {
              "count": {
                "type": "object",
                "properties": {
                  "environments": {
                    "type": "object"
                  }
                }
              },
              "type": {
                "type": "object",
                "properties": {
                  "environments": {
                    "type": "object"
                  }
                }
              }
            }
          },
          "nodes": {
            "type": "object",
            "properties": {
              "size": {
                "type": "object",
                "properties": {
                  "small": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "medium": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "large": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "service": {
            "type": "object",
            "properties": {
              "type": {
                "type": "object"
              }
            }
          },
          "roles": {
            "type": "object",
            "properties": {
              "count": {
                "type": "integer"
              }
            }
          }
        }
      },
      "Compliance_Business_Enterprise": {
        "type": "object",
        "properties": {
          "compliant": {
            "type": "boolean"
          },
          "appcreds": {
            "type": "object",
            "properties": {
              "count": {
                "type": "object",
                "properties": {
                  "environments": {
                    "type": "object"
                  }
                }
              }
            }
          },
          "configurations": {
            "type": "object",
            "properties": {
              "count": {
                "type": "object",
                "properties": {
                  "environments": {
                    "type": "object"
                  }
                }
              },
              "type": {
                "type": "object",
                "properties": {
                  "environments": {
                    "type": "object"
                  }
                }
              }
            }
          },
          "nodes": {
            "type": "object",
            "properties": {
              "size": {
                "type": "object",
                "properties": {
                  "small": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "medium": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "large": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "service": {
            "type": "object",
            "properties": {
              "type": {
                "type": "object"
              }
            }
          },
          "roles": {
            "type": "object",
            "properties": {
              "count": {
                "type": "integer"
              }
            }
          }
        }
      },
      "Consortia_Update_Input": {
        "type": "object",
        "properties": {
          "name": {
            "description": "User-friendly consortia name",
            "type": "string"
          },
          "description": {
            "description": "User-friendly description of the consortia use case",
            "type": "string"
          },
          "state": {
            "description": "Lifecycle state of the consortia",
            "type": "string",
            "enum": [
              "setup",
              "live",
              "delete_pending",
              "deleted"
            ]
          }
        },
        "additionalProperties": false
      },
      "Consortia_Create_Input": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Consortia_Update_Input"
          },
          {
            "properties": {
              "org_name": {
                "description": "Organization name for the first membership that will be auto-created along with the consortium",
                "type": "string",
                "default": "Default Organization"
              }
            }
          }
        ],
        "additionalProperties": false
      },
      "Consortia": {
        "allOf": [
          {
            "$ref": "#/components/schemas/MongoResource"
          },
          {
            "$ref": "#/components/schemas/Consortia_Update_Input"
          },
          {
            "properties": {
              "owner": {
                "description": "Auto-populated field containing the Organization ID which created the Consortia",
                "type": "string"
              },
              "deleted_at": {
                "description": "Auto-populated field denoting when an environment was successfully deleted",
                "type": "string"
              }
            }
          }
        ],
        "additionalProperties": false
      },
      "Contract_Update_Input": {
        "type": "object",
        "properties": {
          "name": {
            "description": "Name of the contract project (must be unique across all contracts in the consortium)",
            "type": "string"
          },
          "description": {
            "description": "Description of the contract",
            "type": "string"
          }
        },
        "additionalProperties": false
      },
      "Contract_Create_Input": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Contract_Update_Input"
          },
          {
            "properties": {
              "membership_id": {
                "description": "Field denoting the membership which owns the Contract",
                "type": "string"
              },
              "type": {
                "description": "The type of contract project being created",
                "type": "string",
                "enum": [
                  "github",
                  "precompiled",
                  "corda_jar",
                  "fabric_precompiled_go",
                  "fabric_upload_node"
                ]
              }
            }
          }
        ],
        "required": [
          "membership_id",
          "type",
          "name"
        ],
        "additionalProperties": false
      },
      "Contract": {
        "allOf": [
          {
            "$ref": "#/components/schemas/MongoResource"
          },
          {
            "$ref": "#/components/schemas/Contract_Create_Input"
          }
        ],
        "properties": {
          "consortia_id": {
            "description": "Auto-generated key for the consortium that owns this environment",
            "type": "string"
          }
        }
      },
      "CompiledContract_Update_Input": {
        "type": "object",
        "properties": {
          "description": {
            "description": "Description of the compiled contract. Typically used as the version string, such as 'v1'",
            "type": "string"
          }
        },
        "additionalProperties": false
      },
      "CompiledContract_Create_Github_Input": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CompiledContract_Update_Input"
          },
          {
            "properties": {
              "membership_id": {
                "description": "Field denoting the membership which owns the Compiled Contract",
                "type": "string"
              },
              "contract_url": {
                "description": "The Github url to the exact contract solidity file to be compiled. (ex: https://github.com/kaleido-io/kaleido-js/blob/master/deploy-transact/contracts/simplestorage.sol)",
                "type": "string"
              },
              "contract_name": {
                "description": "The name of the contract to be compiled. This property is required if multiple contracts are defined in the solidity file.",
                "type": "string"
              },
              "oauth_token": {
                "description": "A Github personal access token with read access. Only required if the Github code is located in a private repository. Kaleido DOES NOT store this token. As a result it must be provided on each request to compile a contract that is located in a private repository.",
                "type": "string"
              },
              "evm_version": {
                "description": "The specific EVM version to target when compiling. Omitting this property will result in byzantium as the default.",
                "type": "string",
                "enum": [
                  "byzantium",
                  "homestead",
                  "tangerineWhistle",
                  "spuriousDragon",
                  "constantinople"
                ]
              },
              "solc_version": {
                "description": "The specific solc compiler version to target when compiling (ex: v0.4.24+commit.e67f0147). Omitting this property will result in Kaleido auto detecting the version specified in the source file.",
                "type": "string"
              }
            }
          }
        ],
        "required": [
          "membership_id",
          "description",
          "contract_url"
        ],
        "additionalProperties": false
      },
      "CompiledContract_Create_Precompiled_Input": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CompiledContract_Update_Input"
          },
          {
            "properties": {
              "membership_id": {
                "description": "Field denoting the membership which owns the Compiled Contract",
                "type": "string"
              },
              "abi": {
                "description": "The compiled ABI of the contract",
                "type": "string"
              },
              "bytecode": {
                "description": "The compiled bytecode of the contract",
                "type": "string"
              },
              "dev_docs": {
                "description": "The dev_docs for the contract",
                "type": "string"
              },
              "evm_version": {
                "description": "The specific EVM version used to compile.",
                "type": "string",
                "enum": [
                  "byzantium",
                  "homestead",
                  "tangerineWhistle",
                  "spuriousDragon",
                  "constantinople"
                ]
              },
              "solc_version": {
                "description": "The specific solc compiler version used to compile.",
                "type": "string"
              }
            }
          }
        ],
        "required": [
          "membership_id",
          "description",
          "abi",
          "bytecode"
        ],
        "additionalProperties": false
      },
      "CompiledContract_Create_Input": {
        "oneOf": [
          {
            "$ref": "#/components/schemas/CompiledContract_Create_Github_Input"
          },
          {
            "$ref": "#/components/schemas/CompiledContract_Create_Precompiled_Input"
          }
        ],
        "additionalProperties": false
      },
      "CompiledContract_Create_Input_File": {
        "type": "object",
        "properties": {
          "membership_id": {
            "type": "string"
          },
          "filename": {
            "description": "The file to upload containing the Fabric chaincode (golang binary or node.js archive) or Corda contract/flow jars",
            "type": "string",
            "format": "binary"
          },
          "init_required": {
            "description": "(Fabric only) whether the chaincode requires initialization",
            "type": "boolean",
            "default": false
          },
          "private_data_collections": {
            "description": "(Fabric only) Only used by chaincodes that use private data collections",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "name": {
                  "description": "name of the collection, this will be used in the chaincode implementation to reference this collection",
                  "type": "string"
                },
                "policy": {
                  "description": "Defines the organization peers allowed to persist the collection data. Follows the [Fabric policy syntax](https://hyperledger-fabric.readthedocs.io/en/latest/endorsement-policies.html#endorsement-policy-syntax)",
                  "type": "string"
                },
                "requiredPeerCount": {
                  "description": "Number of peers required to disseminate the private data as a condition of the endorsement of the chaincode",
                  "type": "integer"
                },
                "maxPeerCount": {
                  "description": "For data redundancy purposes, the number of other peers that the current endorsing peer will attempt to distribute the data to",
                  "type": "integer"
                },
                "blockToLive": {
                  "description": "For very sensitive information such as pricing or personal information, this value represents how long the data should live on the private database in terms of blocks. The data will live for this specified number of blocks on the private database and after that it will get purged, making this data obsolete from the network. To keep private data indefinitely, that is, to never purge private data, set the blockToLive property to 0",
                  "type": "integer"
                },
                "memberOnlyRead": {
                  "description": "a value of true indicates that peers automatically enforce that only clients belonging to one of the collection member organizations are allowed read access to private data",
                  "type": "boolean"
                },
                "memberOnlyWrite": {
                  "description": "a value of true indicates that peers automatically enforce that only clients belonging to one of the collection member organizations are allowed write access to private data",
                  "type": "boolean"
                },
                "endorsementPolicy": {
                  "description": "defines the endorsement policy that needs to be met in order to write to the private data collection. The collection level endorsement policy overrides to chaincode level policy. Follows the [Fabric policy syntax](https://hyperledger-fabric.readthedocs.io/en/latest/endorsement-policies.html#endorsement-policy-syntax)",
                  "type": "object",
                  "properties": {
                    "signaturePolicy": {
                      "type": "string"
                    },
                    "channelConfigPolicy": {
                      "type": "string"
                    }
                  }
                },
                "indexes": {
                  "$ref": "#/components/schemas/CouchDB_Indexes"
                }
              }
            }
          },
          "couchdb_indexes": {
            "$ref": "#/components/schemas/CouchDB_Indexes"
          }
        }
      },
      "CouchDB_Indexes": {
        "description": "(Fabric only) Optional indexes definition used by the chaincode to perform queries. Each index object in the array will be saved as a separate index file in the chaincode package",
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "name": {
              "description": "Name of the index",
              "type": "string"
            },
            "index": {
              "description": "JSON object describing the index to create",
              "type": "object",
              "properties": {
                "fields": {
                  "description": "array of field names following the sort syntax",
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              }
            },
            "ddoc": {
              "description": "Name of the design document in which the index will be created",
              "type": "string"
            },
            "type": {
              "type": "string",
              "enum": [
                "json"
              ]
            }
          },
          "required": [
            "name",
            "index"
          ]
        }
      },
      "CompiledContract_Promote_Input": {
        "type": "object",
        "properties": {
          "environment_id": {
            "description": "The environment to promote the compiled contract to",
            "type": "string"
          },
          "endpoint": {
            "description": "The friendly path to name the Gateway API.",
            "type": "string"
          }
        },
        "required": [
          "environment_id"
        ]
      },
      "CompiledContract": {
        "allOf": [
          {
            "$ref": "#/components/schemas/MongoResource"
          },
          {
            "$ref": "#/components/schemas/Contract_Create_Input"
          },
          {
            "$ref": "#/components/schemas/CompiledContract_Create_Github_Input"
          },
          {
            "$ref": "#/components/schemas/CompiledContract_Create_Precompiled_Input"
          }
        ],
        "properties": {
          "contract_id": {
            "description": "The contract project this compilation is associated with",
            "type": "string"
          },
          "state": {
            "description": "The current processing state of the compiled project.",
            "type": "string",
            "enum": [
              "created",
              "compiling",
              "compiled",
              "failed"
            ]
          },
          "bytecode_hash": {
            "description": "The hashed version of the bytecode used to prevent duplicate compilations being created",
            "type": "string"
          },
          "has_constructor_params": {
            "description": "Indicates whether or not this contract accepts parameters in it's constructor",
            "type": "boolean"
          },
          "errors": {
            "type": "array",
            "description": "A list of errors that occurred during compilation of the contract",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "Chaincode_Deploy_Input": {
        "type": "object",
        "properties": {
          "compiled_contract_id": {
            "type": "string"
          },
          "init_required": {
            "type": "boolean",
            "default": false,
            "description": "Whether the chaincode must be initialized before taking any transaction calls"
          }
        }
      },
      "Charter": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Consortia"
          },
          {
            "title": "charter"
          },
          {
            "type": "object",
            "properties": {
              "memberships": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/Membership"
                }
              },
              "environments": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CharterEnvironment"
                }
              }
            }
          }
        ]
      },
      "EnvZone_Update_Input": {
        "type": "object",
        "properties": {
          "name": {
            "description": "Friendly name to identify the deployment zone",
            "type": "string"
          }
        }
      },
      "EnvZone_Create_Input": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EnvZone_Update_Input"
          },
          {
            "properties": {
              "type": {
                "description": "Who is managing the deployment zone",
                "type": "string",
                "enum": [
                  "kaleido"
                ]
              },
              "cloud": {
                "description": "The cloud which is hosting the deployment zone. Only allowed for Kaleido-hosted deployment zones",
                "type": "string",
                "enum": [
                  "aws",
                  "azure"
                ]
              },
              "region": {
                "description": "Region of the specified platform. Only allowed for Kaleido-hosted deployment zones",
                "type": "string",
                "enum": [
                  "us-east-2"
                ]
              },
              "revision_received": {
                "description": "The highest environment revision broadcast received by this zone",
                "type": "number"
              }
            }
          }
        ],
        "required": [
          "type",
          "cloud",
          "region"
        ],
        "additionalProperties": false
      },
      "EnvZone": {
        "allOf": [
          {
            "$ref": "#/components/schemas/MongoResource"
          },
          {
            "$ref": "#/components/schemas/EnvZone_Create_Input"
          },
          {
            "properties": {
              "environment_id": {
                "description": "Auto-generated key for the consortium that owns this environment",
                "type": "string"
              },
              "default": {
                "description": "Auto-generated. Determines the default region to use if none is specified for downstream actions",
                "type": "boolean"
              },
              "cm_host": {
                "description": "Auto-generated. Determines the host for deploying to this zone",
                "type": "string"
              },
              "net_host": {
                "description": "Auto-generated. Determines the host for nodes and services deployed to this zone",
                "type": "string"
              },
              "x_host": {
                "description": "Auto-generated. Determines the host for services deployed to this zone",
                "type": "string"
              },
              "multi_region_compatible": {
                "description": "Auto-generated. Tracks whether the net_host and x_host are capable of supporting multi-region deployments",
                "type": "boolean"
              }
            }
          }
        ]
      },
      "Environment_Update_Input": {
        "type": "object",
        "properties": {
          "name": {
            "description": "User-friendly environment name",
            "type": "string"
          },
          "description": {
            "description": "User-friendly description of the environment use case",
            "type": "string"
          },
          "state": {
            "description": "Lifecycle state of the environment",
            "type": "string",
            "enum": [
              "setup",
              "initializing",
              "live",
              "delete_pending",
              "deleted",
              "failed",
              "pause_pending",
              "paused",
              "resume_pending",
              "upgrading",
              "paused_upgrading"
            ]
          },
          "release_id": {
            "description": "The release associated with this environment (auto-assigned)",
            "type": "string"
          },
          "prefunded_accounts": {
            "description": "Accounts to fund with ether in the genesis configuration of this environment. The ether pool address is generated and funded automatically. Key is an Ethereum address. Value is the account's initial balance.",
            "type": "object"
          },
          "region": {
            "type": "string",
            "enum": [
              "us-east",
              "us-west",
              "eu"
            ]
          }
        }
      },
      "Environment_Create_Input": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Environment_Update_Input"
          },
          {
            "properties": {
              "provider": {
                "description": "The protocol which will be used by all nodes in the environment. Select `pantheon` in order to use Hyperledger Besu.\n",
                "type": "string",
                "enum": [
                  "quorum",
                  "geth",
                  "pantheon",
                  "corda",
                  "fabric"
                ]
              },
              "consensus_type": {
                "description": "The consensus type which will be used by all nodes in the environment",
                "type": "string",
                "enum": [
                  "raft",
                  "ibft",
                  "poa",
                  "single-notary"
                ]
              },
              "chain_id": {
                "description": "The numeric chain ID deterministically generated from the environment ID",
                "type": "integer"
              },
              "block_period": {
                "description": "The block interval which will be used by all nodes in the environment",
                "type": "integer"
              },
              "test_features": {
                "description": "Determines which test features are enabled for this environment",
                "type": "object",
                "properties": {
                  "multi_region": {
                    "description": "Determines whether the environment is enabled with functionality to create nodes in multiple regions",
                    "type": "boolean"
                  }
                }
              },
              "limit_initial_signers": {
                "description": "Limit creation of signing nodes based on membership permissions in decentralized consortia",
                "type": "boolean"
              }
            }
          }
        ],
        "required": [
          "provider",
          "consensus_type"
        ]
      },
      "Environment": {
        "allOf": [
          {
            "$ref": "#/components/schemas/MongoResource"
          },
          {
            "$ref": "#/components/schemas/Environment_Create_Input"
          },
          {
            "properties": {
              "consortia_id": {
                "description": "Auto-generated key for the consortium that owns this environment",
                "type": "string"
              },
              "limits": {
                "description": "Auto-populated field based on the environment type and consensus selection",
                "type": "object",
                "properties": {
                  "nodes": {
                    "type": "integer"
                  },
                  "signers": {
                    "type": "integer"
                  },
                  "services": {
                    "type": "integer"
                  },
                  "keys": {
                    "type": "integer"
                  }
                },
                "additionalProperties": false
              },
              "zone_list": {
                "description": "A read only view of the zones in the environment, used to synchronize addition of zones",
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "node_list": {
                "description": "A read only view of the nodes in the environment, used to synchronize addition of nodes",
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "service_list": {
                "description": "A read only view of the services in the environment, used to synchronize addition of services",
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "autopause_init_delay": {
                "description": "Auto-populated field denoting how many hours to wait before monitoring for quiesce actions",
                "type": "integer"
              },
              "autopause_idle_hours": {
                "description": "Auto-populated field denoting how many hours after the last transaction an environment will quiesce",
                "type": "integer"
              },
              "deleted_at": {
                "description": "Auto-populated field denoting when an environment was successfully deleted",
                "type": "string"
              },
              "paused_at": {
                "description": "Auto-populated field denoating the last time the enviornment was successfully quiesced/paused",
                "type": "string"
              },
              "resumed_at": {
                "description": "Auto-populated field denoting the last time the environment was successfully resumed",
                "type": "string"
              }
            }
          }
        ]
      },
      "EnvironmentStatus": {
        "type": "object",
        "properties": {
          "state": {
            "description": "Lifecycle state of the environment",
            "type": "string",
            "enum": [
              "setup",
              "initializing",
              "live",
              "delete_pending",
              "deleted",
              "failed",
              "pause_pending",
              "paused",
              "resume_pending",
              "upgrading"
            ]
          },
          "node_list": {
            "type": "array",
            "description": "A list of all the node ID's",
            "items": {
              "type": "string"
            }
          },
          "upgrade": {
            "type": "object",
            "description": "Object containing details about upgrading an environment",
            "properties": {
              "available": {
                "type": "boolean",
                "description": "True if all nodes are available for upgrade. False otherwise"
              },
              "require_hard_fork_upgrade": {
                "type": "boolean",
                "description": "True if the supported Upgrade to the target release is an 'Hard Fork and Upgrade' operation, performed by called /hardfork endpoint with upgrade_with_hard_fork option set to true"
              },
              "chain_config": {
                "type": "object",
                "description": "The EIPs that are in effect in the current environment and the activation block numbers"
              },
              "optional_hardfork_eips": {
                "type": "array",
                "description": "List of EIPs that can be applied to the current environment via a hard fork operation, by calling the /hardfork endpoint",
                "items": {
                  "type": "string"
                }
              },
              "prereq_hardfork_eips": {
                "type": "array",
                "description": "List of EIPs that must be applied in order to upgrade to the latest release",
                "items": {
                  "type": "string"
                }
              },
              "current_release": {
                "type": "object",
                "properties": {
                  "_id": {
                    "type": "string"
                  },
                  "provider": {
                    "type": "string",
                    "description": "The protocol which will be used by all nodes in the environment"
                  },
                  "chain_config": {
                    "type": "string",
                    "description": "A list of EIPs that new environments created in this release will have in the genesis block"
                  },
                  "images": {
                    "type": "object",
                    "description": "A key pair object key being a docker image name and value being a tagged version"
                  },
                  "version": {
                    "type": "object",
                    "description": "The version of this release"
                  },
                  "version_padded": {
                    "type": "object"
                  },
                  "_revision": {
                    "type": "object"
                  },
                  "created_at": {
                    "type": "object"
                  }
                }
              },
              "target_release": {
                "type": "object",
                "properties": {
                  "_id": {
                    "type": "string"
                  },
                  "provider": {
                    "type": "string",
                    "description": "The protocol which will be used by all nodes in the environment"
                  },
                  "chain_config": {
                    "type": "array",
                    "description": "A list of EIPs that new environments created in this release will have in the genesis block",
                    "items": {
                      "type": "string"
                    }
                  },
                  "images": {
                    "type": "object",
                    "description": "A key pair object key being a docker image name and value being a tagged version"
                  },
                  "version": {
                    "type": "string",
                    "description": "The version of this release"
                  },
                  "version_padded": {
                    "type": "string"
                  },
                  "_revision": {
                    "type": "string"
                  },
                  "created_at": {
                    "type": "string"
                  }
                }
              },
              "hard_fork": {
                "type": "boolean",
                "description": "Boolean indicating if the upgrade requires a hard fork. Deprecated. The hard fork operation is no longer tied to an upgrade.",
                "deprecated": true
              },
              "missing_chain_config": {
                "type": "array",
                "description": "Chain configurations missing from the environment. Deprecated. `optional_hardfork_eips` and `prereq_hardfork_eips` properties are used to make it clear what EIPs are applicable in hard forks.",
                "items": {
                  "type": "string"
                },
                "deprecated": true
              },
              "optional_chain_config": {
                "type": "array",
                "description": "Chain configurations that are available to hard fork to. Deprecated. `optional_hardfork_eips` and `prereq_hardfork_eips` properties are used to make it clear what EIPs are applicable in hard forks.",
                "items": {
                  "type": "string"
                },
                "deprecated": true
              }
            }
          },
          "health": {
            "type": "object",
            "properties": {
              "all_nodes_up": {
                "type": "boolean",
                "description": "True if all nodes are available, false otherwise"
              },
              "nodes_up": {
                "type": "integer",
                "description": "The number of nodes that are currently up"
              },
              "nodes_down": {
                "type": "integer",
                "description": "The number of nodes that are currently down"
              },
              "highest_block_height": {
                "type": "integer",
                "description": "The highest block height of the available nodes"
              },
              "lowest_block_height": {
                "type": "integer",
                "description": "The lowest block height of the available nodes"
              }
            }
          }
        }
      },
      "Eth_Stats": {
        "type": "object",
        "properties": {
          "legend": {
            "type": "object",
            "description": "```json\n{\n  \"p\": \"Peers (count)\",\n  \"tp\": \"Pending transactions (count)\",\n  \"tq\": \"Queued transactions (count)\",\n  \"h\": \"Block height (count)\"\n}\n```\n"
          },
          "nodes": {
            "type": "object",
            "description": "For each node, returns an object describing the dimensions `p`, `tp`, `tq` and `h`"
          }
        },
        "additionalProperties": false
      },
      "Eth_Balance": {
        "type": "object",
        "properties": {
          "ether": {
            "type": "string",
            "description": "Account balance in ether"
          },
          "wei": {
            "type": "string",
            "description": "Account balance in wei"
          }
        },
        "additionalProperties": false
      },
      "Env_Backup_Status": {
        "type": "object",
        "properties": {
          "latest_backup": {
            "type": "string",
            "description": "Timestamp of when last backup was created"
          },
          "provider": {
            "type": "string",
            "description": "Protocol Provider"
          },
          "current_backup_files": {
            "type": "array",
            "description": "List of backup files that will be uploaded to backup destinations"
          },
          "history": {
            "type": "array",
            "description": "List of backup files that have been exported to backup destinations\n```json\n[\n  {\n    \"file\": \"2022-08-09T18:00:00.295Z-block-0-100.rlp\",\n    \"date\": \"2022-08-09T18:00:00.295Z\",\n    \"canonical_chain\": true,\n    \"raftSwapFile\": false,\n    \"start_block\": {\n        \"block\": 0,\n        \"hash\": \"0x76...93d\",\n        \"parent_hash\": \"0x00...000\"\n    },\n    \"end_block\": {\n        \"block\": 100,\n        \"hash\": \"0xd72...569\",\n        \"parent_hash\": \"0xd1...9ca\"\n    }\n  }            \n]\n```\n"
          },
          "start_block": {
            "type": "number",
            "description": "Start block of last backup file"
          },
          "end_block": {
            "type": "number",
            "description": "End block of last backup file"
          }
        },
        "additionalProperties": false
      },
      "Env_Backup_Object": {
        "type": "object",
        "properties": {
          "enabled": {
            "type": "boolean",
            "description": "Enables Automated Environment Backups"
          },
          "backup_type": {
            "type": "string",
            "description": "Type of Automated Backups, currently only Daily option"
          },
          "backup_frequency": {
            "description": "How often a Backup will be taken, 1-4 times a day",
            "enum": [
              1,
              2,
              3,
              4
            ]
          },
          "environment_id": {
            "type": "string",
            "description": "Environment ID this Object is associated with"
          }
        },
        "additionalProperties": false
      },
      "Env_Backup_Input": {
        "type": "object",
        "properties": {
          "enabled": {
            "type": "boolean",
            "description": "Enables Automated Environment Backups"
          },
          "backup_frequency": {
            "description": "How often a Backup will be taken, 1-4 times a day",
            "enum": [
              1,
              2,
              3,
              4
            ]
          },
          "backup_type": {
            "description": "Type of frequency for a backup",
            "enum": [
              "Daily"
            ]
          }
        },
        "additionalProperties": false
      },
      "CharterEnvironment": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Environment"
          },
          {
            "type": "object",
            "properties": {
              "nodes": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/Node"
                }
              },
              "appcreds": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ApplicationCredential"
                }
              }
            }
          }
        ]
      },
      "IdentityProof_Update_Input": {
        "type": "object",
        "properties": {
          "name": {
            "description": "A descriptive name for usability",
            "type": "string"
          },
          "type": {
            "description": "The type of the proof supplied in this document. Currently supporting only x.509 certificates.",
            "type": "string",
            "enum": [
              "x509"
            ]
          },
          "payload": {
            "description": "The proof content. For x509 this should be a concatenated string of certs which are base64 encoded strings",
            "type": "string"
          }
        },
        "additionalProperties": false
      },
      "IdentityProof": {
        "allOf": [
          {
            "$ref": "#/components/schemas/MongoResource"
          },
          {
            "$ref": "#/components/schemas/IdentityProof_Update_Input"
          },
          {
            "properties": {
              "nonce": {
                "description": "Auto-generated on creating of a new proof record. This guarantees that a cert can only be used once and protects against replay attacks where an internal hacker grabs hold of a cert and tries to use it to register again.",
                "type": "string"
              },
              "org_id": {
                "description": "Auto-populated. The ID of the Organization associated with the identity proof",
                "type": "string"
              }
            }
          }
        ]
      },
      "Integration_Update_Input": {
        "type": "object",
        "properties": {
          "name": {
            "description": "User-friendly name for the Integration",
            "type": "string"
          },
          "details": {
            "description": "Object with type-specific integration details",
            "type": "object"
          }
        },
        "additionalProperties": false
      },
      "Integration_Create_Input": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Integration_Update_Input"
          },
          {
            "properties": {
              "environment_id": {
                "description": "Auto-populated field denoting the environment containing the Integration",
                "type": "string"
              },
              "membership_id": {
                "description": "Field denoting the membership which owns the Integration",
                "type": "string"
              },
              "name": {
                "description": "User-friendly name for the Integration",
                "type": "string"
              },
              "type": {
                "description": "The type of integration being managed",
                "type": "string",
                "enum": [
                  "clause",
                  "unchain",
                  "rhombus"
                ]
              },
              "details": {
                "description": "Object with type-specific integration details",
                "type": "object"
              }
            }
          }
        ],
        "required": [
          "membership_id",
          "type",
          "details"
        ],
        "additionalProperties": false
      },
      "Integration": {
        "allOf": [
          {
            "$ref": "#/components/schemas/MongoResource"
          },
          {
            "$ref": "#/components/schemas/Integration_Create_Input"
          },
          {
            "properties": {
              "environment_id": {
                "description": "Auto-populated field denoting the environment containing the Integration",
                "type": "string"
              }
            }
          }
        ]
      },
      "Backup_Input": {
        "type": "object",
        "properties": {
          "presigned_url": {
            "description": "An AWS S3 Pre-Signed URL as the backup destination",
            "type": "string"
          }
        },
        "additionalProperties": false
      },
      "Channel_Update_Input": {
        "type": "object",
        "properties": {
          "members": {
            "description": "List of membership IDs for the channel organizations",
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "additionalProperties": false
      },
      "Channel_Create_Input": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Channel_Update_Input"
          },
          {
            "properties": {
              "membership_id": {
                "description": "Field denoting the membership which initiates the channel",
                "type": "string"
              },
              "name": {
                "description": "Channel name used in the Fabric programming model. Must follow the channel naming convention (lower case alphanumerics, dots and dashes, starting and ending with an alphanumeric)",
                "type": "string"
              },
              "description": {
                "description": "Channel description",
                "type": "string"
              },
              "policies": {
                "description": "Specify the policies that will override the default policies",
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/Channel_Policy"
                }
              }
            }
          }
        ],
        "required": [
          "membership_id",
          "type",
          "details"
        ],
        "additionalProperties": false
      },
      "Channel_Policy": {
        "type": "object",
        "properties": {
          "path": {
            "type": "string",
            "enum": [
              "Channel/Admins",
              "Channel/Readers",
              "Channel/Writers",
              "Channel/Application/Admins",
              "Channel/Application/Readers",
              "Channel/Application/Writers",
              "Channel/Application/LifecycleEndorsement",
              "Channel/Application/Endorsement",
              "Channel/Orderer/Admins",
              "Channel/Orderer/Readers",
              "Channel/Orderer/Writers",
              "Channel/Orderer/BlockValidation"
            ]
          },
          "name": {
            "type": "string"
          },
          "type": {
            "type": "string",
            "enum": [
              "Signature",
              "ImplicitMeta"
            ]
          },
          "rule": {
            "type": "string",
            "description": "for the syntax of the policy rules, refer to Hyperledger Fabric documentation https://hyperledger-fabric.readthedocs.io/en/release-2.4/endorsement-policies.html#endorsement-policy-syntax"
          }
        }
      },
      "Channel": {
        "allOf": [
          {
            "$ref": "#/components/schemas/MongoResource"
          },
          {
            "$ref": "#/components/schemas/Channel_Create_Input"
          },
          {
            "type": "object",
            "properties": {
              "contracts": {
                "description": "Map of contract (chaincode) ID and metadata",
                "additionalProperties": {
                  "type": "object",
                  "properties": {
                    "label": {
                      "type": "string"
                    },
                    "sequence": {
                      "type": "string"
                    },
                    "init_required": {
                      "type": "boolean",
                      "default": true
                    },
                    "contract_id": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          }
        ]
      },
      "Invitation_Update_Input": {
        "type": "object",
        "properties": {
          "consortia_id": {
            "type": "string"
          },
          "org_name": {
            "description": "Name of the organization being invited to join the consortia",
            "type": "string"
          },
          "state": {
            "description": "Lifecycle state of the invitation",
            "type": "string",
            "enum": [
              "sent",
              "accepted",
              "declined",
              "revoked",
              "expired"
            ]
          }
        }
      },
      "Invitation_Create_Input": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Invitation_Update_Input"
          },
          {
            "properties": {
              "email": {
                "description": "Email to deliver the Consortia Invitation to",
                "type": "string"
              },
              "from_org_id": {
                "description": "Can be user-provided or auto-populated based on the user which created the invitation",
                "type": "string"
              },
              "from_membership_id": {
                "description": "Can be user-provided or auto-populated based on the user which created the invitation",
                "type": "string"
              },
              "permissions": {
                "description": "Permissions which can be leveraged by consortia enforcing advanced policy",
                "type": "object"
              }
            }
          }
        ],
        "required": [
          "email",
          "org_name"
        ]
      },
      "Invitation": {
        "allOf": [
          {
            "$ref": "#/components/schemas/MongoResource"
          },
          {
            "$ref": "#/components/schemas/Invitation_Create_Input"
          },
          {
            "properties": {
              "createdAt": {
                "description": "Auto-populated field to have the record automatically be removed after X seconds",
                "type": "string"
              },
              "from": {
                "description": "Auto-populated field based on the user which created the invitation",
                "type": "string"
              },
              "resolved_by": {
                "description": "Auto-populated field based on which user resolves the invitation",
                "type": "string"
              },
              "org_id": {
                "description": "Auto-populated field based on which organization is used when a user is accepting an invitation",
                "type": "string"
              }
            }
          }
        ]
      },
      "InvitationCharter": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Invitation"
          },
          {
            "title": "invitation charter"
          },
          {
            "type": "object",
            "properties": {
              "consortia": {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "string"
                  },
                  "description": {
                    "type": "string"
                  }
                }
              },
              "memberships": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "status": {
                      "type": "string",
                      "enum": [
                        "active",
                        "inactive",
                        "deleted"
                      ]
                    }
                  }
                }
              },
              "environments": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "nodes": {
                      "type": "integer"
                    },
                    "services": {
                      "type": "integer"
                    },
                    "region": {
                      "type": "string"
                    },
                    "provider": {
                      "type": "string"
                    },
                    "consensus_type": {
                      "type": "string",
                      "enum": [
                        "raft",
                        "ibft",
                        "poa"
                      ]
                    }
                  }
                }
              }
            }
          }
        ]
      },
      "Membership_Update_Input": {
        "type": "object",
        "properties": {
          "org_name": {
            "description": "Name of the organization identified in the accepted invitation",
            "type": "string"
          },
          "permissions": {
            "description": "Permissions which can be leveraged by decentralized consortia",
            "type": "object",
            "properties": {
              "manage_envs": {
                "description": "Determines whether the member can create and upgrade environments",
                "type": "boolean"
              },
              "invite_orgs": {
                "description": "Determines whether the member can invite other orgs to the consortium",
                "type": "boolean"
              },
              "create_signers": {
                "description": "Determines whether the member can create signing nodes in environments",
                "type": "boolean"
              },
              "multiple_members": {
                "description": "Determines whether the member can create additional membership for themselves",
                "type": "boolean"
              }
            },
            "required": [
              "manage_envs",
              "invite_orgs",
              "create_signers",
              "multiple_members"
            ],
            "additionalProperties": false
          },
          "verification_type": {
            "description": "Identity type obtained from the backing organization",
            "type": "string"
          },
          "verification_proof": {
            "description": "Identity proof obtained from the backing organization",
            "type": "string"
          },
          "verification_selfsigned": {
            "description": "Indicates whether the verification_proof was automatically generated by Kaleido",
            "type": "boolean"
          }
        },
        "additionalProperties": false
      },
      "Membership_Create_Input": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Membership_Update_Input"
          },
          {
            "properties": {
              "consortia_id": {
                "type": "string"
              },
              "org_id": {
                "description": "Auto-populated field representing the Organization for this Consortia membership",
                "type": "string"
              },
              "state": {
                "description": "Lifecycle state of the membership",
                "type": "string",
                "enum": [
                  "active",
                  "inactive",
                  "deleted"
                ]
              }
            }
          }
        ],
        "required": [
          "org_id"
        ],
        "additionalProperties": false
      },
      "Membership": {
        "allOf": [
          {
            "$ref": "#/components/schemas/MongoResource"
          },
          {
            "$ref": "#/components/schemas/Membership_Create_Input"
          },
          {
            "properties": {
              "org_id": {
                "description": "Auto-populated field representing the Organization for this Consortia membership",
                "type": "string"
              },
              "deleted_at": {
                "description": "Auto-populated field denoting when a consortia was successfully deleted",
                "type": "string"
              }
            }
          }
        ]
      },
      "Node_Update_Input": {
        "type": "object",
        "properties": {
          "node_config_id": {
            "description": "ID of the Node Configuration being used by this node",
            "type": "string"
          },
          "kms_id": {
            "description": "ID of the KMS Configuration being used by this node",
            "type": "string"
          },
          "backup_id": {
            "description": "ID of the Backup Configuration being used by this node",
            "type": "string"
          },
          "name": {
            "description": "User-friendly name for the node",
            "type": "string"
          },
          "size": {
            "description": "Pre-defined allowance for transaction pool and memory usage",
            "type": "string",
            "enum": [
              "small",
              "medium",
              "large"
            ]
          }
        },
        "required": [
          "membership_id"
        ],
        "additionalProperties": false
      },
      "Node_Create_Input": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Node_Update_Input"
          },
          {
            "properties": {
              "environment_id": {
                "description": "Auto-populated field denoting the environment containing the node",
                "type": "string"
              },
              "membership_id": {
                "description": "ID of the Membership which owns the node",
                "type": "string"
              },
              "opsmetric_id": {
                "description": "ID of the Ops Metric Configuration being used by this node",
                "type": "string"
              },
              "ethconnect_id": {
                "description": "ID of the EthConnect Configuration being used by this node",
                "type": "string"
              },
              "networking_id": {
                "description": "ID of the EthConnect Configuration being used by this node",
                "type": "string"
              },
              "node_config_id": {
                "description": "ID of the Startup Configuration being used by this node",
                "type": "string"
              },
              "size": {
                "description": "Pre-defined allowance for transaction pool and memory usage",
                "type": "string",
                "enum": [
                  "small",
                  "medium",
                  "large"
                ]
              },
              "revision_added": {
                "description": "Environment revision at which this node was added",
                "type": "number"
              },
              "provider": {
                "description": "The protocol inherited from the environment",
                "type": "string",
                "enum": [
                  "quorum",
                  "geth",
                  "pantheon",
                  "corda",
                  "fabric"
                ]
              },
              "consensus_type": {
                "description": "The consensus type inherited from the environment",
                "type": "string",
                "enum": [
                  "raft",
                  "ibft",
                  "poa",
                  "single-notary"
                ]
              },
              "enode_uri": {
                "description": "ENODE uri for the node",
                "type": "string"
              },
              "node_identity": {
                "description": "The node's identity, backed by a private key",
                "type": "string"
              },
              "consensus_identity": {
                "description": "The identity the node uses in the chosen consensus protocol",
                "type": "string"
              },
              "first_user_account": {
                "description": "First user account for the node",
                "type": "string"
              },
              "role": {
                "description": "The role of this node in the environment - system monitor or customer node",
                "type": "string",
                "enum": [
                  "validator",
                  "monitor"
                ]
              },
              "init_consensus_role": {
                "description": "Role of the node in consensus mechanism at creation",
                "type": "string",
                "enum": [
                  "signer",
                  "non-signer"
                ]
              },
              "quorum_private_address": {
                "description": "Quorum specific field. The public address for sending private transactions to this node (via privateFor)",
                "type": "string"
              },
              "database_type": {
                "description": "Only applicable to Corda nodes, the type of database for saving state data.",
                "type": "string",
                "enum": [
                  "h2",
                  "postgres"
                ]
              }
            }
          }
        ],
        "required": [
          "membership_id"
        ],
        "additionalProperties": false
      },
      "Node": {
        "allOf": [
          {
            "$ref": "#/components/schemas/MongoResource"
          },
          {
            "$ref": "#/components/schemas/Node_Create_Input"
          },
          {
            "properties": {
              "environment_id": {
                "description": "Auto-populated field denoting the environment containing the node",
                "type": "string"
              },
              "urls": {
                "description": "Auto-populated set of URLs for communication with the node. Provider specific",
                "type": "object",
                "additionalProperties": {
                  "type": "string"
                }
              }
            }
          }
        ]
      },
      "Node_Status": {
        "type": "object",
        "properties": {
          "id": {
            "description": "The node's public key",
            "type": "string"
          },
          "release": {
            "description": "The version the node is running",
            "type": "string"
          },
          "user_accounts": {
            "description": "The accounts on the node",
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "block_height": {
            "description": "The number of blocks in the chain",
            "type": "integer"
          },
          "consensus_identity": {
            "description": "The first user account for the node",
            "type": "string"
          },
          "membership_id": {
            "description": "The ID of the member that owns this node",
            "type": "string"
          },
          "urls": {
            "description": "The urls for connecting to the node",
            "type": "object",
            "properties": {
              "rpc": {
                "description": "The JSON RPC endpoint for the node",
                "type": "string"
              },
              "wss": {
                "description": "The websocket endpoint",
                "type": "string"
              },
              "kaleido_connect": {
                "description": "The kafka webhook endpoint",
                "type": "string"
              }
            }
          },
          "kafka": {
            "description": "A messaging interface used to simplify the submission of Ethereum transactions",
            "type": "object",
            "properties": {
              "brokers": {
                "description": "The nodes in the kafka cluster",
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "request_topic": {
                "description": "The topic for sending requests",
                "type": "string"
              },
              "reply_topic": {
                "description": "The topic for retrieving responses",
                "type": "string"
              }
            }
          }
        }
      },
      "Node_Geth_POA": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Node_Status"
          },
          {
            "properties": {
              "geth": {
                "description": "The specific chain type info",
                "type": "object",
                "properties": {
                  "public_address": {
                    "description": "The node's public address",
                    "type": "string"
                  },
                  "validators": {
                    "description": "The validators of the network",
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "current_validators": {
                    "description": "",
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "config": {
                    "description": "The EIPs and the block number from which they are active in the chain obtained from admin.nodeInfo",
                    "type": "object"
                  }
                }
              }
            }
          }
        ]
      },
      "Node_Quorum_IBFT": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Node_Status"
          },
          {
            "properties": {
              "quorum": {
                "description": "The specific chain type info",
                "type": "object",
                "properties": {
                  "private_address": {
                    "description": "The node's private address",
                    "type": "string"
                  },
                  "public_address": {
                    "description": "The node's public address",
                    "type": "string"
                  },
                  "istanbul_validators": {
                    "description": "The initial list of validators",
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "current_validators": {
                    "description": "The current list of validators in the network",
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "config": {
                    "description": "The EIPs and the block number from which they are active in the chain obtained from admin.nodeInfo",
                    "type": "object"
                  }
                }
              }
            }
          }
        ]
      },
      "Node_Quorum_Raft": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Node_Status"
          },
          {
            "properties": {
              "quorum": {
                "description": "The specific chain type info",
                "type": "object",
                "properties": {
                  "private_address": {
                    "description": "The node's private address",
                    "type": "string"
                  },
                  "public_address": {
                    "description": "The node's public address",
                    "type": "string"
                  },
                  "config": {
                    "description": "The EIPs and the block number from which they are active in the chain obtained from admin.nodeInfo",
                    "type": "object"
                  }
                }
              }
            }
          }
        ]
      },
      "Node_Pantheon_POA": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Node_Status"
          },
          {
            "properties": {
              "pantheon": {
                "description": "The specific chain type info",
                "type": "object",
                "properties": {
                  "public_address": {
                    "description": "The node's public address",
                    "type": "string"
                  },
                  "current_validators": {
                    "description": "The current list of validators in the network",
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "config": {
                    "description": "The EIPs and the block number from which they are active in the chain obtained from admin.nodeInfo",
                    "type": "object"
                  }
                }
              }
            }
          }
        ]
      },
      "Node_Pantheon_IBFT": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Node_Status"
          },
          {
            "properties": {
              "pantheon": {
                "description": "The specific chain type info",
                "type": "object",
                "properties": {
                  "public_address": {
                    "description": "The node's public address",
                    "type": "string"
                  },
                  "current_validators": {
                    "description": "The current list of validators in the network",
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "config": {
                    "description": "The EIPs and the block number from which they are active in the chain obtained from admin.nodeInfo",
                    "type": "object"
                  }
                }
              }
            }
          }
        ]
      },
      "Node_Fabric_Raft": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "description": "Unique ID of the node in the environment"
          },
          "status": {
            "type": "string",
            "description": "Runtime state of the node",
            "enum": [
              "initializing",
              "joining",
              "joined",
              "started",
              "stop_pending",
              "stopped",
              "failed",
              "paused",
              "delete_pending",
              "delete_failed",
              "upgrading",
              "upgrade_pending"
            ]
          },
          "role": {
            "type": "string",
            "description": "'orderer' or 'peer'"
          },
          "fabric": {
            "type": "object",
            "properties": {
              "p2p_address": {
                "type": "string",
                "description": "Hostname and port of the Fabric node in the Kaleido hybrid network, used by the Kaleido network bridge to connect"
              },
              "node_info": {
                "type": "string",
                "description": "Hexidecimal string of a JSON object consisted of two fields: 'orgCA' and 'tlsCert'"
              },
              "explorer": {
                "type": "object",
                "description": "If the node is a Fabric peer, this exists to return the credentials to login to the blockchain explorer",
                "properties": {
                  "username": {
                    "type": "string"
                  },
                  "password": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "urls": {
            "type": "object",
            "description": "URL endpoints for accessing the node and the explorer UI (if the node is a peer)",
            "properties": {
              "orderer": {
                "type": "string",
                "description": "URL to access the orderer node (node role must be 'orderer')"
              },
              "peer": {
                "type": "string",
                "description": "URL to access the peer node (node role must be 'peer')"
              },
              "explorer": {
                "type": "string",
                "description": "URL to access the explorer UI (node role must be 'peer')"
              }
            }
          }
        }
      },
      "Node_Corda_Single_Notary": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "description": "SHA256 hash of the Corda node's nodeInfo binary data"
          },
          "status": {
            "type": "string",
            "description": "Runtime state of the node",
            "enum": [
              "initializing",
              "joining",
              "joined",
              "started",
              "stop_pending",
              "stopped",
              "failed",
              "paused",
              "delete_pending",
              "delete_failed",
              "upgrading",
              "upgrade_pending"
            ]
          },
          "corda": {
            "type": "object",
            "properties": {
              "p2p_address": {
                "type": "string",
                "description": "Hostname and port of the Corda node in the Kaleido hybrid network, used by the Kaleido network bridge to connect"
              },
              "node_info": {
                "type": "string",
                "description": "Hexidecimal string of the Corda node's nodeInfo binary data"
              }
            }
          },
          "nodeinfo": {
            "type": "object",
            "description": "Decoded certificate fields of the Corda nodeInfo"
          },
          "urls": {
            "type": "object",
            "description": "URL endpoints for accessing the node and the explorer UI (if the node is a peer)",
            "properties": {
              "kaleido_connect": {
                "type": "string",
                "description": "URL to access the event stream service over websocket"
              }
            }
          }
        }
      },
      "OauthConfig": {
        "allOf": [
          {
            "$ref": "#/components/schemas/MongoResource"
          },
          {
            "properties": {
              "environment_id": {
                "description": "Auto-generated key for the environment that owns this key",
                "type": "string"
              },
              "membership_id": {
                "description": "Auto-generated key for the membership that owns this key",
                "type": "string"
              },
              "dapp_id": {
                "description": "The DApp that owns this Key",
                "type": "string"
              },
              "name": {
                "description": "User defined name for the OAuth server",
                "type": "string"
              },
              "verification_type": {
                "description": "Currently only self-describing JWT tokens are support (Opaque keys requiring REST API calls to decode them are not supported)",
                "type": "string",
                "enum": [
                  "jwt"
                ]
              },
              "jwt_key_set": {
                "description": "A public key to use to verify the token",
                "type": "string"
              },
              "jwt_key_type": {
                "description": "The type of the public key",
                "type": "string",
                "enum": [
                  "jwks",
                  "ec_pem",
                  "rsa_pem"
                ]
              }
            }
          },
          {
            "required": [
              "membership_id"
            ]
          },
          {
            "additionalProperties": false
          }
        ]
      },
      "Organization_Update_Input": {
        "type": "object",
        "properties": {
          "name": {
            "description": "User-friendly organization name, defaults to empty string",
            "type": "string"
          },
          "plan": {
            "type": "string"
          },
          "plan_id": {
            "type": "string"
          },
          "support_level": {
            "description": "The level of support entitlement for the organization",
            "type": "number",
            "multipleOf": 100,
            "minimum": 100,
            "maximum": 300
          },
          "delegate": {
            "description": "Email to be exposed on consortia memberships as contact info",
            "type": "string"
          },
          "waitlisted": {
            "type": "boolean"
          },
          "terms_accepted": {
            "description": "Timestamp of the last time terms and conditions were accepted for this org",
            "type": "number"
          },
          "trial_ends": {
            "description": "Date when the organizations trial is expected to end",
            "type": "string"
          },
          "billing_account": {
            "type": "object",
            "properties": {
              "type": {
                "description": "The platform provider for the organization's billing",
                "type": "string",
                "enum": [
                  "none",
                  "aws",
                  "stripe",
                  "other"
                ]
              },
              "aws_customer_identifier": {
                "type": "string"
              },
              "aws_product_code": {
                "type": "string"
              },
              "stripe_customer_id": {
                "type": "string"
              }
            },
            "required": [
              "type"
            ]
          },
          "cognito_domain": {
            "description": "The Cognito domain name such as 'mydomain.auth.us-east-1.amazoncognito.com' - only used for Enterprise logins",
            "type": "string"
          },
          "cognito_user_pool_id": {
            "description": "The Cognito user pool ID - only used for Enterprise logins",
            "type": "string"
          },
          "cognito_region": {
            "description": "The Cognito region - only used for Enterprise logins",
            "type": "string"
          },
          "cognito_client_id": {
            "description": "The client_id of the App client created for Kaleido - only used for Enterprise logins",
            "type": "string"
          },
          "cognito_client_secret": {
            "description": "The client_secret of the App client created for Kaleido - only used for Enterprise logins",
            "type": "string"
          }
        },
        "additionalProperties": false
      },
      "Organization_Create_Input": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Organization_Update_Input"
          },
          {
            "properties": {
              "type": {
                "type": "string",
                "enum": [
                  "kaleido",
                  "enterprise_cognito"
                ]
              }
            }
          }
        ]
      },
      "Organization": {
        "allOf": [
          {
            "$ref": "#/components/schemas/MongoResource"
          },
          {
            "$ref": "#/components/schemas/Organization_Create_Input"
          },
          {
            "properties": {
              "owner": {
                "description": "Auto-populated field containing the User ID which created the Organization. When converting to an Enterprise Organization this becomes the first user to log in successfully.",
                "type": "string"
              }
            }
          }
        ]
      },
      "Plan_ResourceLimits": {
        "type": "object",
        "properties": {
          "consortia": {
            "type": "object",
            "properties": {
              "per": {
                "type": "object",
                "properties": {
                  "org": {
                    "type": "number"
                  }
                }
              }
            }
          },
          "environments": {
            "type": "object",
            "properties": {
              "per": {
                "type": "object",
                "properties": {
                  "consortia": {
                    "type": "number"
                  }
                }
              },
              "quorum": {
                "type": "object",
                "properties": {
                  "raft": {
                    "type": "object",
                    "properties": {
                      "per": {
                        "type": "object",
                        "properties": {
                          "consortia": {
                            "type": "number"
                          }
                        }
                      }
                    }
                  },
                  "ibft": {
                    "type": "object",
                    "properties": {
                      "per": {
                        "type": "object",
                        "properties": {
                          "consortia": {
                            "type": "number"
                          }
                        }
                      }
                    }
                  }
                }
              },
              "geth": {
                "type": "object",
                "properties": {
                  "poa": {
                    "type": "object",
                    "properties": {
                      "per": {
                        "type": "object",
                        "properties": {
                          "consortia": {
                            "type": "number"
                          }
                        }
                      }
                    }
                  }
                }
              },
              "quiesce": {
                "type": "object",
                "properties": {
                  "after": {
                    "type": "object",
                    "properties": {
                      "idle_hours": {
                        "type": "integer"
                      },
                      "initial_delay": {
                        "type": "integer"
                      }
                    }
                  }
                }
              }
            }
          },
          "nodes": {
            "type": "object",
            "properties": {
              "per": {
                "type": "object",
                "properties": {
                  "environment": {
                    "type": "number"
                  },
                  "org": {
                    "type": "number"
                  }
                }
              },
              "allowed_sizes": {
                "type": "array",
                "items": {
                  "type": "string",
                  "enum": [
                    "small",
                    "medium",
                    "large"
                  ]
                }
              },
              "allowed_tiers": {
                "type": "array",
                "items": {
                  "type": "string",
                  "enum": [
                    "starter",
                    "team",
                    "business",
                    "enterprise"
                  ]
                }
              }
            }
          },
          "services": {
            "type": "object",
            "properties": {
              "memberservices": {
                "type": "object",
                "properties": {
                  "per": {
                    "type": "object",
                    "properties": {
                      "environment": {
                        "type": "number"
                      }
                    }
                  }
                }
              },
              "utilityservices": {
                "type": "object",
                "properties": {
                  "per": {
                    "type": "object",
                    "properties": {
                      "environment": {
                        "type": "number"
                      }
                    }
                  }
                }
              },
              "allowed_services": {
                "type": "array",
                "items": {
                  "type": "string",
                  "enum": [
                    "hdwallet",
                    "ipfs",
                    "idregistry",
                    "openlaw",
                    "chainlink",
                    "tether",
                    "tokens"
                  ]
                }
              },
              "allowed_tiers": {
                "type": "array",
                "items": {
                  "type": "string",
                  "enum": [
                    "preview",
                    "starter",
                    "team",
                    "business",
                    "enterprise"
                  ]
                }
              }
            }
          },
          "configurations": {
            "type": "object",
            "properties": {
              "per": {
                "type": "object",
                "properties": {
                  "environment": {
                    "type": "number"
                  }
                }
              },
              "allowed_configurations": {
                "type": "array",
                "items": {
                  "type": "string",
                  "enum": [
                    "ethconnect",
                    "kms",
                    "opsmetric",
                    "networking",
                    "node_config",
                    "backup"
                  ]
                }
              },
              "allowed_tiers": {
                "type": "array",
                "items": {
                  "type": "string",
                  "enum": [
                    "starter",
                    "team",
                    "business",
                    "enterprise"
                  ]
                }
              }
            }
          },
          "memberships": {
            "type": "object",
            "properties": {
              "per": {
                "type": "object",
                "properties": {
                  "consortia": {
                    "type": "number"
                  }
                }
              }
            }
          },
          "dapps": {
            "type": "object",
            "properties": {
              "per": {
                "type": "object",
                "properties": {
                  "membership": {
                    "type": "number"
                  }
                }
              }
            }
          },
          "keys": {
            "type": "object",
            "properties": {
              "per": {
                "type": "object",
                "properties": {
                  "environment": {
                    "type": "number"
                  }
                }
              }
            }
          },
          "roles": {
            "type": "object",
            "properties": {
              "per": {
                "type": "object",
                "properties": {
                  "org": {
                    "type": "number"
                  }
                }
              }
            }
          },
          "ingress": {
            "type": "object",
            "properties": {
              "rps": {
                "type": "object",
                "properties": {
                  "per": {
                    "type": "object",
                    "properties": {
                      "node": {
                        "type": "number"
                      }
                    }
                  }
                }
              },
              "conns": {
                "type": "object",
                "properties": {
                  "per": {
                    "type": "object",
                    "properties": {
                      "node": {
                        "type": "number"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "Plan": {
        "allOf": [
          {
            "$ref": "#/components/schemas/MongoResource"
          },
          {
            "properties": {
              "level": {
                "type": "string",
                "anyOf": [
                  {
                    "enum": [
                      "basic",
                      "default",
                      "dev",
                      "stress",
                      "waitlist",
                      "pilot",
                      "starter",
                      "team",
                      "business",
                      "enterprise"
                    ]
                  },
                  {
                    "pattern": "t[0-9]+"
                  }
                ]
              },
              "enabled": {
                "type": "boolean"
              },
              "limits": {
                "$ref": "#/components/schemas/Plan_ResourceLimits"
              }
            }
          }
        ]
      },
      "ProofVerification": {
        "type": "object",
        "properties": {
          "proof_id": {
            "type": "string",
            "description": "The _id of an Identity Proof"
          }
        },
        "required": [
          "proof_id"
        ]
      },
      "ProofVerification_TestCertificate": {
        "type": "object",
        "properties": {
          "test_certificate": {
            "type": "boolean",
            "description": "Set to true if using Kaleido to generate a compliant test certificate for non-production uses"
          }
        },
        "required": [
          "test_certificate"
        ]
      },
      "Region": {
        "allOf": [
          {
            "$ref": "#/components/schemas/MongoResource"
          },
          {
            "properties": {
              "net_host": {
                "description": "Net-plane hostname",
                "type": "string"
              },
              "state": {
                "description": "Current state of the specified netplane",
                "type": "string",
                "enum": [
                  "enabled",
                  "disabled",
                  "full"
                ]
              },
              "allow_overflow": {
                "description": "Allows creation of environments beyond specified limit",
                "type": "boolean"
              },
              "environments": {
                "description": "Number of environments allowed in the netplane",
                "type": "integer"
              }
            }
          }
        ]
      },
      "Release": {
        "allOf": [
          {
            "$ref": "#/components/schemas/MongoResource"
          },
          {
            "properties": {
              "provider": {
                "description": "The Provider associated with this release. `pantheon` represents Hyperledger Besu.",
                "type": "string",
                "enum": [
                  "quorum",
                  "geth",
                  "pantheon",
                  "corda",
                  "fabric"
                ]
              },
              "images": {
                "description": "The image tags associated with this release",
                "type": "object",
                "additionalProperties": {
                  "type": "string"
                },
                "minProperties": 1
              },
              "version": {
                "description": "The version - follows semver semantics",
                "type": "string",
                "pattern": "^\\d+\\.\\d+\\.\\d+$"
              },
              "release_status": {
                "description": "Beta releases include features currently being tested and may be unstable",
                "type": "string",
                "enum": [
                  "beta"
                ]
              },
              "version_padded": {
                "description": "The version in padded semver form for easy sorting",
                "type": "string",
                "pattern": "^\\d{5}\\.\\d{5}\\.\\d{5}$"
              },
              "description": {
                "description": "User-friendly description of this release",
                "type": "string"
              },
              "chain_config": {
                "description": "A list of EIPs that new environments created in this release will have in the genesis block",
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "optional_eips": {
                "description": "A list of EIPs an environment at this release can apply to the chain configuration via a hard fork operation",
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "prereq_eips": {
                "description": "A list of EIPs an environment must already have in the chain configuration before being allowed to upgrade to this release",
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "optional_chain_config": {
                "description": "Optional fields for chain configuration (Ex: chain ID)",
                "type": "array",
                "deprecated": true
              }
            }
          }
        ]
      },
      "Role_Update_Input": {
        "type": "object",
        "properties": {
          "role": {
            "description": "The role assigned to the user within this org",
            "type": "string",
            "enum": [
              "admin"
            ]
          }
        }
      },
      "Role_Create_Input": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Role_Update_Input"
          },
          {
            "properties": {
              "org_id": {
                "description": "Auto-populated. The ID of the Organization associated with the role",
                "type": "string"
              },
              "user_id": {
                "description": "The ID of the User associated with the role",
                "type": "string"
              },
              "role": {
                "description": "The role assigned to the user within this org",
                "type": "string",
                "enum": [
                  "admin"
                ]
              }
            }
          }
        ],
        "required": [
          "user_id"
        ],
        "additionalProperties": false
      },
      "Role": {
        "allOf": [
          {
            "$ref": "#/components/schemas/MongoResource"
          },
          {
            "$ref": "#/components/schemas/Role_Create_Input"
          }
        ]
      },
      "Service_Update_Input": {
        "type": "object",
        "properties": {
          "name": {
            "description": "User-friendly name for the Configuration",
            "type": "string"
          },
          "details": {
            "description": "Object with type-specific configuration details",
            "type": "object",
            "oneOf": [
              {
                "$ref": "#/components/schemas/Details_Others"
              }
            ]
          }
        },
        "additionalProperties": false
      },
      "Details_Others": {
        "description": "Service type specific configuration here"
      },
      "Details_IPFS": {
        "description": "IPFS configuration details",
        "properties": {
          "datastore_type": {
            "description": "Datastore type to be used with IPFS",
            "type": "string",
            "enum": [
              "flatfs",
              "badgerds"
            ],
            "default": "flatfs"
          }
        }
      },
      "Service_Create_Input": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Service_Update_Input"
          },
          {
            "properties": {
              "environment_id": {
                "description": "Auto-populated field denoting the environment containing the Configuration",
                "type": "string"
              },
              "membership_id": {
                "description": "Field denoting the membership which owns the Configuration",
                "type": "string"
              },
              "service": {
                "description": "The type of configuration being managed",
                "type": "string",
                "enum": [
                  "app2app",
                  "documentstore",
                  "chainlink",
                  "ethwallet",
                  "hdwallet",
                  "idregistry",
                  "ipfs",
                  "rotatesigners",
                  "tether",
                  "cloudhsm",
                  "fabric-ca"
                ]
              },
              "service_type": {
                "description": "Auto-populated field based on service for tenancy model",
                "type": "string",
                "enum": [
                  "utility",
                  "member"
                ]
              },
              "service_guid": {
                "description": "Auto-populated field based on the service",
                "type": "string"
              },
              "size": {
                "description": "Service Instance Size",
                "type": "string",
                "enum": [
                  "small",
                  "medium",
                  "large"
                ]
              },
              "accounts": {
                "description": "The public address of any accounts owned by this service, which might potentially have been funded on the main Ethereum network.",
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "details": {
                "oneOf": [
                  {
                    "$ref": "#/components/schemas/Details_Others"
                  },
                  {
                    "$ref": "#/components/schemas/Details_IPFS"
                  }
                ]
              }
            }
          }
        ],
        "required": [
          "membership_id",
          "service"
        ],
        "additionalProperties": false
      },
      "Service": {
        "allOf": [
          {
            "$ref": "#/components/schemas/MongoResource"
          },
          {
            "$ref": "#/components/schemas/Service_Create_Input"
          },
          {
            "properties": {
              "environment_id": {
                "description": "Auto-populated field denoting the environment containing the Configuration",
                "type": "string"
              },
              "service_type": {
                "description": "Auto-populated field based on service for tenancy model",
                "type": "string",
                "enum": [
                  "utility",
                  "member"
                ]
              },
              "service_guid": {
                "description": "Auto-populated field based on the service",
                "type": "string"
              },
              "urls": {
                "description": "Auto-populated set of service specific URLs for communicating with the service.",
                "type": "object",
                "additionalProperties": {
                  "type": "string"
                }
              },
              "state": {
                "description": "Auto-populated current state of the service",
                "type": "string",
                "enum": [
                  "provisioning",
                  "failed",
                  "started",
                  "paused",
                  "upgrading",
                  "deprovisioning",
                  "delete_failed"
                ]
              }
            }
          }
        ]
      },
      "Stripe_Billing": {
        "type": "object",
        "properties": {
          "funding": {
            "type": "string",
            "description": "Card funding type. Can be credit, debit, prepaid, or unknown"
          },
          "brand": {
            "type": "string",
            "description": "Card brand. Can be American Express, Diners Club, Discover, JCB, MasterCard, UnionPay, Visa, or Unknown."
          },
          "last4": {
            "type": "string",
            "description": "The last four digits of the card."
          },
          "exp_month": {
            "type": "string",
            "description": "Expiration month"
          },
          "exp_year": {
            "type": "string",
            "description": "Expiration year"
          },
          "name": {
            "type": "string",
            "description": "Cardholder name"
          },
          "address_line1": {
            "type": "string"
          },
          "address_line2": {
            "type": "string"
          },
          "address_city": {
            "type": "string"
          },
          "address_state": {
            "type": "string"
          },
          "address_zip": {
            "type": "string"
          },
          "address_country": {
            "type": "string"
          }
        }
      },
      "Tenant": {
        "allOf": [
          {
            "$ref": "#/components/schemas/MongoResource"
          },
          {
            "properties": {
              "membership_id": {
                "description": "Field denoting the membership which owns the Tenant",
                "type": "string"
              },
              "consortia_id": {
                "description": "Auto-generated field denoting the consortium in which this Tenant exists",
                "type": "string"
              },
              "tag": {
                "description": "Bind a tenant to a node by using the 'tag' in the Blockchain Application Firewall configuration of that node",
                "type": "string",
                "maxLength": 48,
                "pattern": "^[a-z0-9-_\\.]*[a-z0-9]$"
              },
              "properties": {
                "description": "One or more properties that are used to unique identify this tenant when they authenticate",
                "type": "object",
                "additionalProperties": {
                  "type": "string"
                },
                "minProperties": 1
              }
            }
          }
        ]
      },
      "Zone_Update_Input": {
        "type": "object",
        "properties": {
          "name": {
            "description": "Friendly name to identify the deployment zone",
            "type": "string"
          }
        }
      },
      "Zone_Create_Input": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Zone_Update_Input"
          },
          {
            "properties": {
              "type": {
                "description": "Who is managing the deployment zone",
                "type": "string",
                "enum": [
                  "kaleido"
                ]
              },
              "cloud": {
                "description": "The cloud which is hosting the deployment zone. Only allowed for Kaleido-hosted deployment zones",
                "type": "string",
                "enum": [
                  "aws",
                  "azure"
                ]
              },
              "region": {
                "description": "Region of the specified platform. Only allowed for Kaleido-hosted deployment zones",
                "type": "string",
                "enum": [
                  "us-east-2"
                ]
              }
            }
          }
        ],
        "required": [
          "type",
          "cloud",
          "region"
        ]
      },
      "Zone": {
        "allOf": [
          {
            "$ref": "#/components/schemas/MongoResource"
          },
          {
            "$ref": "#/components/schemas/Zone_Create_Input"
          },
          {
            "properties": {
              "consortia_id": {
                "description": "Auto-generated key for the consortium that owns this deployment zone",
                "type": "string"
              },
              "default": {
                "description": "Auto-generated. Determines the default region to use if none is specified for downstream actions",
                "type": "boolean"
              }
            }
          }
        ],
        "additionalProperties": false
      },
      "DeployedContract": {
        "type": "object",
        "properties": {
          "address": {
            "type": "string"
          },
          "genesisTransaction": {
            "type": "string"
          },
          "creator": {
            "type": "string"
          },
          "contractName": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "dateVerified": {
            "type": "string"
          },
          "compilerVersion": {
            "type": "string"
          },
          "optimization": {
            "type": "boolean"
          },
          "sourceCode": {
            "type": "string"
          },
          "abi": {
            "type": "string"
          },
          "gatewayAPIId": {
            "description": "The <a href='platform.html#tag/Ledger/paths/~1ledger~1{consortia_id}~1{environment_id}~1gateway_apis/get'>Gateway API</a> this deployment matched to. Determined at deployment time via runtime bytecode verification.",
            "type": "string"
          },
          "runtimeBytecode": {
            "type": "string"
          },
          "creationBytecode": {
            "type": "string"
          }
        }
      },
      "GatewayAPI": {
        "type": "object",
        "properties": {
          "_id": {
            "description": "The Id of the Gateway API. This also matches the promoted <a href='platform.html#tag/Compiled-Contracts'>Compiled Contract</a> ID.",
            "type": "string"
          },
          "endpoint": {
            "description": "The friendly path name of this Gateway API.",
            "type": "string"
          },
          "abi": {
            "type": "string"
          },
          "bytecode": {
            "type": "string"
          },
          "devDocs": {
            "type": "string"
          },
          "bytecodeHash": {
            "type": "string"
          },
          "bytecodeLength": {
            "type": "number"
          },
          "consortiaContractId": {
            "description": "The <a href='platform.html#tag/Contracts'>Contract</a> project ID.",
            "type": "string"
          },
          "consortiaContractName": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "hasConstructorParams": {
            "type": "boolean"
          },
          "isFactoryDeployEnabled": {
            "type": "boolean"
          }
        }
      },
      "GatewayAPIWrapper": {
        "type": "object",
        "properties": {
          "totalCount": {
            "description": "The total number of Gateway API's found",
            "type": "number"
          },
          "gatewayAPIs": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/GatewayAPI"
            }
          }
        }
      },
      "DeployedContractsWrapper": {
        "type": "object",
        "properties": {
          "totalCount": {
            "description": "The total number of contracts found",
            "type": "number"
          },
          "contracts": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/DeployedContract"
            }
          }
        }
      },
      "Block": {
        "type": "object",
        "properties": {
          "number": {
            "type": "integer"
          },
          "hash": {
            "type": "string"
          },
          "timestamp": {
            "type": "string"
          },
          "transactionCount": {
            "type": "integer"
          },
          "size": {
            "type": "integer"
          },
          "miner": {
            "type": "string"
          }
        }
      },
      "Transaction": {
        "type": "object",
        "properties": {
          "hash": {
            "type": "string"
          },
          "status": {
            "type": "string"
          },
          "from": {
            "type": "string"
          },
          "to": {
            "type": "string"
          },
          "timestamp": {
            "type": "string"
          },
          "index": {
            "type": "integer"
          },
          "blockNumber": {
            "type": "integer"
          },
          "blockHash": {
            "type": "string"
          }
        }
      },
      "Transfers": {
        "type": "object",
        "properties": {
          "totalCount": {
            "type": "integer"
          },
          "transactions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Transaction"
            }
          }
        }
      },
      "TransactionReceipt": {
        "type": "object",
        "properties": {
          "blockHash": {
            "type": "string",
            "description": "The block containing the fund transaction"
          },
          "blockNumber": {
            "type": "integer",
            "description": "The block containing the fund transaction"
          },
          "contractAddress": {
            "type": "string",
            "description": "The contract address created, if the transaction was a contract creation, otherwise null"
          },
          "cumulativeGasUsed": {
            "type": "integer",
            "description": "The total amount of gas used when this transaction was executed in the block"
          },
          "from": {
            "type": "string",
            "description": "The address the transaction was sent from"
          },
          "gasUsed": {
            "type": "integer",
            "description": "The amount of gas used by this specific transaction alone"
          },
          "logs": {
            "type": "array",
            "description": "Logs from the transaction",
            "items": {
              "type": "string"
            }
          },
          "logsBloom": {
            "type": "string",
            "description": "The bloom filter for the logs of the block. null when its pending block"
          },
          "status": {
            "type": "boolean",
            "description": "True is transaction succeeded, false is failed"
          },
          "to": {
            "type": "string",
            "description": "The address the transaction was sent to"
          },
          "transactionHash": {
            "type": "string",
            "description": "The hash of the transaction"
          },
          "transactionNumber": {
            "type": "string",
            "description": "Integer of the transactions index position in the block"
          }
        },
        "additionalProperties": false
      },
      "Stats": {
        "type": "object",
        "properties": {
          "height": {
            "type": "integer"
          },
          "transactionCount": {
            "type": "integer"
          },
          "blockCount": {
            "type": "integer"
          },
          "avgTransactionsPerBlock": {
            "type": "number"
          },
          "failedTransactionCount": {
            "type": "integer"
          },
          "lastTransactionTimestamp": {
            "type": "string"
          },
          "details": {
            "type": "object",
            "properties": {
              "provider": {
                "type": "string"
              },
              "consensus": {
                "type": "string"
              },
              "status": {
                "type": "string"
              }
            }
          }
        }
      }
    },
    "parameters": {
      "org_id": {
        "name": "org_id",
        "in": "path",
        "schema": {
          "type": "string"
        },
        "required": true
      },
      "apikey_id": {
        "name": "apikey_id",
        "in": "path",
        "schema": {
          "type": "string"
        },
        "required": true
      },
      "appkey_id": {
        "name": "appkey_id",
        "in": "path",
        "schema": {
          "type": "string"
        },
        "required": true
      },
      "consortia_id": {
        "name": "consortia_id",
        "in": "path",
        "schema": {
          "type": "string"
        },
        "required": true
      },
      "contract_id": {
        "name": "contract_id",
        "in": "path",
        "schema": {
          "type": "string"
        },
        "required": true
      },
      "compiled_contract_id": {
        "name": "compiled_contract_id",
        "in": "path",
        "schema": {
          "type": "string"
        },
        "required": true
      },
      "gateway_api_id": {
        "name": "gateway_api_id",
        "in": "path",
        "schema": {
          "type": "string"
        },
        "required": true
      },
      "contract_address": {
        "name": "contract_address",
        "in": "path",
        "schema": {
          "type": "string"
        },
        "required": true
      },
      "environment_id": {
        "name": "environment_id",
        "in": "path",
        "schema": {
          "type": "string"
        },
        "required": true
      },
      "membership_id": {
        "name": "membership_id",
        "in": "path",
        "schema": {
          "type": "string"
        },
        "required": true
      },
      "node_id": {
        "name": "node_id",
        "in": "path",
        "schema": {
          "type": "string"
        },
        "required": true
      },
      "service_id": {
        "name": "service_id",
        "in": "path",
        "schema": {
          "type": "string"
        },
        "required": true
      },
      "config_id": {
        "name": "config_id",
        "in": "path",
        "schema": {
          "type": "string"
        },
        "required": true
      },
      "integration_id": {
        "name": "integration_id",
        "in": "path",
        "schema": {
          "type": "string"
        },
        "required": true
      },
      "channel_id": {
        "name": "channel_id",
        "in": "path",
        "schema": {
          "type": "string"
        },
        "required": true
      },
      "invitation_id": {
        "name": "invitation_id",
        "in": "path",
        "schema": {
          "type": "string"
        },
        "required": true
      },
      "oauth_id": {
        "name": "oauth_id",
        "in": "path",
        "schema": {
          "type": "string"
        },
        "required": true
      },
      "role_id": {
        "name": "role_id",
        "in": "path",
        "schema": {
          "type": "string"
        },
        "required": true
      },
      "tenant_id": {
        "name": "tenant_id",
        "in": "path",
        "schema": {
          "type": "string"
        },
        "required": true
      },
      "zone_id": {
        "name": "zone_id",
        "in": "path",
        "schema": {
          "type": "string"
        },
        "required": true
      },
      "proof_id": {
        "name": "proof_id",
        "in": "path",
        "schema": {
          "type": "string"
        },
        "required": true
      },
      "block_number": {
        "name": "block_number",
        "in": "path",
        "schema": {
          "type": "string"
        },
        "required": true
      },
      "address": {
        "name": "address",
        "in": "path",
        "schema": {
          "type": "string"
        },
        "required": true
      },
      "wallet_address": {
        "name": "wallet_address",
        "in": "path",
        "schema": {
          "type": "string"
        },
        "required": true
      },
      "account": {
        "name": "account",
        "in": "path",
        "schema": {
          "type": "string"
        },
        "required": true
      },
      "tokenId": {
        "name": "tokenId",
        "in": "path",
        "schema": {
          "type": "string"
        },
        "required": true
      }
    },
    "responses": {
      "NotFound": {
        "description": "Application Credential Not Found"
      },
      "InternalError": {
        "description": "Internal Error",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/Error"
            }
          }
        }
      }
    }
  }
}
