"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var Recoverable = exports.Recoverable = 
{
  "contractName": "Recoverable",
  "abi": [
    {
      "inputs": [
        {
          "name": "_database",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_amountSent",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "_caller",
          "type": "address"
        }
      ],
      "name": "LogDestruction",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_erc20Token",
          "type": "address"
        }
      ],
      "name": "recoverTokens",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "destroy",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5060405160208061071e83398101806040528101908080519060200190929190505050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505061069b806100836000396000f30060806040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806316114acd1461005157806383197ef014610094575b600080fd5b34801561005d57600080fd5b50610092600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506100ab565b005b3480156100a057600080fd5b506100a961042f565b005b6000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b7bfda03360405160200180807f6f776e65720000000000000000000000000000000000000000000000000000008152506005018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b6020831015156101a3578051825260208201915060208101905060208303925061017e565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15801561022a57600080fd5b505af115801561023e573d6000803e3d6000fd5b505050506040513d602081101561025457600080fd5b8101908080519060200190929190505050151561027057600080fd5b8291508173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15801561030e57600080fd5b505af1158015610322573d6000803e3d6000fd5b505050506040513d602081101561033857600080fd5b810190808051906020019092919050505090508173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156103ee57600080fd5b505af1158015610402573d6000803e3d6000fd5b505050506040513d602081101561041857600080fd5b810190808051906020019092919050505050505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b7bfda03360405160200180807f6f776e65720000000000000000000000000000000000000000000000000000008152506005018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b60208310151561052457805182526020820191506020810190506020830392506104ff565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1580156105ab57600080fd5b505af11580156105bf573d6000803e3d6000fd5b505050506040513d60208110156105d557600080fd5b810190808051906020019092919050505015156105f157600080fd5b3373ffffffffffffffffffffffffffffffffffffffff167f62a91a9a510cd5e7b0339f181bd27ac473283c39544a34798c376d6197b3572c3073ffffffffffffffffffffffffffffffffffffffff16316040518082815260200191505060405180910390a23373ffffffffffffffffffffffffffffffffffffffff16ff00a165627a7a72305820f5877541733c8a538d336a34c6fe647f4564653b728fdaa6ab17486ccb96730d0029",
  "deployedBytecode": "0x60806040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806316114acd1461005157806383197ef014610094575b600080fd5b34801561005d57600080fd5b50610092600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506100ab565b005b3480156100a057600080fd5b506100a961042f565b005b6000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b7bfda03360405160200180807f6f776e65720000000000000000000000000000000000000000000000000000008152506005018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b6020831015156101a3578051825260208201915060208101905060208303925061017e565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15801561022a57600080fd5b505af115801561023e573d6000803e3d6000fd5b505050506040513d602081101561025457600080fd5b8101908080519060200190929190505050151561027057600080fd5b8291508173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15801561030e57600080fd5b505af1158015610322573d6000803e3d6000fd5b505050506040513d602081101561033857600080fd5b810190808051906020019092919050505090508173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156103ee57600080fd5b505af1158015610402573d6000803e3d6000fd5b505050506040513d602081101561041857600080fd5b810190808051906020019092919050505050505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b7bfda03360405160200180807f6f776e65720000000000000000000000000000000000000000000000000000008152506005018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b60208310151561052457805182526020820191506020810190506020830392506104ff565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1580156105ab57600080fd5b505af11580156105bf573d6000803e3d6000fd5b505050506040513d60208110156105d557600080fd5b810190808051906020019092919050505015156105f157600080fd5b3373ffffffffffffffffffffffffffffffffffffffff167f62a91a9a510cd5e7b0339f181bd27ac473283c39544a34798c376d6197b3572c3073ffffffffffffffffffffffffffffffffffffffff16316040518082815260200191505060405180910390a23373ffffffffffffffffffffffffffffffffffffffff16ff00a165627a7a72305820f5877541733c8a538d336a34c6fe647f4564653b728fdaa6ab17486ccb96730d0029",
  "sourceMap": "101:946:2:-;;;241:86;8:9:-1;5:2;;;30:1;27;20:12;5:2;241:86:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;312:9;289:8;;:33;;;;;;;;;;;;;;;;;;241:86;101:946;;;;;;",
  "deployedSourceMap": "101:946:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;383:230;;8:9:-1;5:2;;;30:1;27;20:12;5:2;383:230:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;672:137;;8:9:-1;5:2;;;30:1;27;20:12;5:2;672:137:2;;;;;;383:230;456:15;498:20;893:8;;;;;;;;;;;:20;;;950:10;924:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;924:37:2;;;914:48;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;914:48:2;;;;;;;;;;;;;;;;893:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;893:70:2;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;893:70:2;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;893:70:2;;;;;;;;;;;;;;;;885:79;;;;;;;;480:11;456:36;;521:9;:19;;;549:4;521:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;521:34:2;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;521:34:2;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;521:34:2;;;;;;;;;;;;;;;;498:57;;561:9;:18;;;580:10;592:15;561:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;561:47:2;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;561:47:2;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;561:47:2;;;;;;;;;;;;;;;;;383:230;;;:::o;672:137::-;893:8;;;;;;;;;;;:20;;;950:10;924:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;924:37:2;;;914:48;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;914:48:2;;;;;;;;;;;;;;;;893:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;893:70:2;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;893:70:2;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;893:70:2;;;;;;;;;;;;;;;;885:79;;;;;;;;763:10;725:49;;;748:4;740:21;;;725:49;;;;;;;;;;;;;;;;;;793:10;780:24;;",
  "source": "pragma solidity ^0.4.24;\n\nimport \"../interfaces/DBInterface.sol\";\nimport \"../interfaces/ERC20.sol\";\n\ncontract Recoverable{\n  DBInterface private database;\n\n  // @notice This contract\n  // @param: The address for the AssetCreation contract\n  constructor(address _database)\n  public {\n      database = DBInterface(_database);\n  }\n  // @notice platform owners can recover tokens here\n  function recoverTokens(address _erc20Token)\n  onlyOwner\n  external {\n    ERC20 thisToken = ERC20(_erc20Token);\n    uint contractBalance = thisToken.balanceOf(address(this));\n    thisToken.transfer(msg.sender, contractBalance);\n  }\n\n  // @notice platform owners can destroy contract here\n  function destroy()\n  onlyOwner\n  external {\n    emit LogDestruction(address(this).balance, msg.sender);\n    selfdestruct(msg.sender);\n  }\n\n  // @notice Sender must be a registered owner\n  modifier onlyOwner {\n    require(database.boolStorage(keccak256(abi.encodePacked(\"owner\", msg.sender))));\n    _;\n  }\n\n  event LogDestruction(uint _amountSent, address indexed _caller);\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/crowdsale/Recoverable.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/crowdsale/Recoverable.sol",
    "exportedSymbols": {
      "Recoverable": [
        1504
      ]
    },
    "id": 1505,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1412,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:2"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/DBInterface.sol",
        "file": "../interfaces/DBInterface.sol",
        "id": 1413,
        "nodeType": "ImportDirective",
        "scope": 1505,
        "sourceUnit": 3924,
        "src": "26:39:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20.sol",
        "file": "../interfaces/ERC20.sol",
        "id": 1414,
        "nodeType": "ImportDirective",
        "scope": 1505,
        "sourceUnit": 4105,
        "src": "66:33:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 1504,
        "linearizedBaseContracts": [
          1504
        ],
        "name": "Recoverable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 1416,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 1504,
            "src": "125:28:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_DBInterface_$3923",
              "typeString": "contract DBInterface"
            },
            "typeName": {
              "contractScope": null,
              "id": 1415,
              "name": "DBInterface",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3923,
              "src": "125:11:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DBInterface_$3923",
                "typeString": "contract DBInterface"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 1427,
              "nodeType": "Block",
              "src": "281:46:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1425,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1421,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1416,
                      "src": "289:8:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DBInterface_$3923",
                        "typeString": "contract DBInterface"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1423,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1418,
                          "src": "312:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 1422,
                        "name": "DBInterface",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3923,
                        "src": "300:11:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_DBInterface_$3923_$",
                          "typeString": "type(contract DBInterface)"
                        }
                      },
                      "id": 1424,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "300:22:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DBInterface_$3923",
                        "typeString": "contract DBInterface"
                      }
                    },
                    "src": "289:33:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DBInterface_$3923",
                      "typeString": "contract DBInterface"
                    }
                  },
                  "id": 1426,
                  "nodeType": "ExpressionStatement",
                  "src": "289:33:2"
                }
              ]
            },
            "documentation": null,
            "id": 1428,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1419,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1418,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 1428,
                  "src": "253:17:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1417,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "253:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "252:19:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 1420,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "281:0:2"
            },
            "scope": 1504,
            "src": "241:86:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1458,
              "nodeType": "Block",
              "src": "450:163:2",
              "statements": [
                {
                  "assignments": [
                    1436
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1436,
                      "name": "thisToken",
                      "nodeType": "VariableDeclaration",
                      "scope": 1459,
                      "src": "456:15:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ERC20_$4104",
                        "typeString": "contract ERC20"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 1435,
                        "name": "ERC20",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 4104,
                        "src": "456:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$4104",
                          "typeString": "contract ERC20"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1440,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1438,
                        "name": "_erc20Token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1430,
                        "src": "480:11:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 1437,
                      "name": "ERC20",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4104,
                      "src": "474:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_ERC20_$4104_$",
                        "typeString": "type(contract ERC20)"
                      }
                    },
                    "id": 1439,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "474:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$4104",
                      "typeString": "contract ERC20"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "456:36:2"
                },
                {
                  "assignments": [
                    1442
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1442,
                      "name": "contractBalance",
                      "nodeType": "VariableDeclaration",
                      "scope": 1459,
                      "src": "498:20:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1441,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "498:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1449,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1446,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6271,
                            "src": "549:4:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Recoverable_$1504",
                              "typeString": "contract Recoverable"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_Recoverable_$1504",
                              "typeString": "contract Recoverable"
                            }
                          ],
                          "id": 1445,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "541:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 1447,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "541:13:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1443,
                        "name": "thisToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1436,
                        "src": "521:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$4104",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 1444,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "balanceOf",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4049,
                      "src": "521:19:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view external returns (uint256)"
                      }
                    },
                    "id": 1448,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "521:34:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "498:57:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1453,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6236,
                          "src": "580:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1454,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "580:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1455,
                        "name": "contractBalance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1442,
                        "src": "592:15:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1450,
                        "name": "thisToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1436,
                        "src": "561:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$4104",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 1452,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4067,
                      "src": "561:18:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 1456,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "561:47:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1457,
                  "nodeType": "ExpressionStatement",
                  "src": "561:47:2"
                }
              ]
            },
            "documentation": null,
            "id": 1459,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 1433,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1432,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1497,
                  "src": "429:9:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "429:9:2"
              }
            ],
            "name": "recoverTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1431,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1430,
                  "name": "_erc20Token",
                  "nodeType": "VariableDeclaration",
                  "scope": 1459,
                  "src": "406:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1429,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "406:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "405:21:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 1434,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "450:0:2"
            },
            "scope": 1504,
            "src": "383:230:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 1478,
              "nodeType": "Block",
              "src": "714:95:2",
              "statements": [
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1466,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6271,
                              "src": "748:4:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Recoverable_$1504",
                                "typeString": "contract Recoverable"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_Recoverable_$1504",
                                "typeString": "contract Recoverable"
                              }
                            ],
                            "id": 1465,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "740:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 1467,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "740:13:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 1468,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "740:21:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1469,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6236,
                          "src": "763:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1470,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "763:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 1464,
                      "name": "LogDestruction",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1503,
                      "src": "725:14:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (uint256,address)"
                      }
                    },
                    "id": 1471,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "725:49:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1472,
                  "nodeType": "EmitStatement",
                  "src": "720:54:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1474,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6236,
                          "src": "793:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1475,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "793:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 1473,
                      "name": "selfdestruct",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6244,
                      "src": "780:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_selfdestruct_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 1476,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "780:24:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1477,
                  "nodeType": "ExpressionStatement",
                  "src": "780:24:2"
                }
              ]
            },
            "documentation": null,
            "id": 1479,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 1462,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1461,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1497,
                  "src": "693:9:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "693:9:2"
              }
            ],
            "name": "destroy",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1460,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "688:2:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 1463,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "714:0:2"
            },
            "scope": 1504,
            "src": "672:137:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 1496,
              "nodeType": "Block",
              "src": "879:97:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "6f776e6572",
                                    "id": 1487,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "941:7:2",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c0",
                                      "typeString": "literal_string \"owner\""
                                    },
                                    "value": "owner"
                                  },
                                  {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 1488,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 6236,
                                      "src": "950:3:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 1489,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "950:10:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_stringliteral_02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c0",
                                      "typeString": "literal_string \"owner\""
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 1485,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 6223,
                                    "src": "924:3:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 1486,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "924:16:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 1490,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "924:37:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "id": 1484,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6230,
                              "src": "914:9:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 1491,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "914:48:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 1482,
                            "name": "database",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1416,
                            "src": "893:8:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_DBInterface_$3923",
                              "typeString": "contract DBInterface"
                            }
                          },
                          "id": 1483,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "boolStorage",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 3915,
                          "src": "893:20:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) external returns (bool)"
                          }
                        },
                        "id": 1492,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "893:70:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1481,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        6239,
                        6240
                      ],
                      "referencedDeclaration": 6239,
                      "src": "885:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1493,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "885:79:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1494,
                  "nodeType": "ExpressionStatement",
                  "src": "885:79:2"
                },
                {
                  "id": 1495,
                  "nodeType": "PlaceholderStatement",
                  "src": "970:1:2"
                }
              ]
            },
            "documentation": null,
            "id": 1497,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 1480,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "879:0:2"
            },
            "src": "860:116:2",
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 1503,
            "name": "LogDestruction",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1502,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1499,
                  "indexed": false,
                  "name": "_amountSent",
                  "nodeType": "VariableDeclaration",
                  "scope": 1503,
                  "src": "1001:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1498,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1001:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1501,
                  "indexed": true,
                  "name": "_caller",
                  "nodeType": "VariableDeclaration",
                  "scope": 1503,
                  "src": "1019:23:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1500,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1019:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1000:43:2"
            },
            "src": "980:64:2"
          }
        ],
        "scope": 1505,
        "src": "101:946:2"
      }
    ],
    "src": "0:1048:2"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/crowdsale/Recoverable.sol",
    "exportedSymbols": {
      "Recoverable": [
        1504
      ]
    },
    "id": 1505,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1412,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:2"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/DBInterface.sol",
        "file": "../interfaces/DBInterface.sol",
        "id": 1413,
        "nodeType": "ImportDirective",
        "scope": 1505,
        "sourceUnit": 3924,
        "src": "26:39:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20.sol",
        "file": "../interfaces/ERC20.sol",
        "id": 1414,
        "nodeType": "ImportDirective",
        "scope": 1505,
        "sourceUnit": 4105,
        "src": "66:33:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 1504,
        "linearizedBaseContracts": [
          1504
        ],
        "name": "Recoverable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 1416,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 1504,
            "src": "125:28:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_DBInterface_$3923",
              "typeString": "contract DBInterface"
            },
            "typeName": {
              "contractScope": null,
              "id": 1415,
              "name": "DBInterface",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3923,
              "src": "125:11:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DBInterface_$3923",
                "typeString": "contract DBInterface"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 1427,
              "nodeType": "Block",
              "src": "281:46:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1425,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1421,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1416,
                      "src": "289:8:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DBInterface_$3923",
                        "typeString": "contract DBInterface"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1423,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1418,
                          "src": "312:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 1422,
                        "name": "DBInterface",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3923,
                        "src": "300:11:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_DBInterface_$3923_$",
                          "typeString": "type(contract DBInterface)"
                        }
                      },
                      "id": 1424,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "300:22:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DBInterface_$3923",
                        "typeString": "contract DBInterface"
                      }
                    },
                    "src": "289:33:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DBInterface_$3923",
                      "typeString": "contract DBInterface"
                    }
                  },
                  "id": 1426,
                  "nodeType": "ExpressionStatement",
                  "src": "289:33:2"
                }
              ]
            },
            "documentation": null,
            "id": 1428,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1419,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1418,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 1428,
                  "src": "253:17:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1417,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "253:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "252:19:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 1420,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "281:0:2"
            },
            "scope": 1504,
            "src": "241:86:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1458,
              "nodeType": "Block",
              "src": "450:163:2",
              "statements": [
                {
                  "assignments": [
                    1436
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1436,
                      "name": "thisToken",
                      "nodeType": "VariableDeclaration",
                      "scope": 1459,
                      "src": "456:15:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ERC20_$4104",
                        "typeString": "contract ERC20"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 1435,
                        "name": "ERC20",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 4104,
                        "src": "456:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$4104",
                          "typeString": "contract ERC20"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1440,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1438,
                        "name": "_erc20Token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1430,
                        "src": "480:11:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 1437,
                      "name": "ERC20",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4104,
                      "src": "474:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_ERC20_$4104_$",
                        "typeString": "type(contract ERC20)"
                      }
                    },
                    "id": 1439,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "474:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$4104",
                      "typeString": "contract ERC20"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "456:36:2"
                },
                {
                  "assignments": [
                    1442
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1442,
                      "name": "contractBalance",
                      "nodeType": "VariableDeclaration",
                      "scope": 1459,
                      "src": "498:20:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1441,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "498:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1449,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1446,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6271,
                            "src": "549:4:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Recoverable_$1504",
                              "typeString": "contract Recoverable"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_Recoverable_$1504",
                              "typeString": "contract Recoverable"
                            }
                          ],
                          "id": 1445,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "541:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 1447,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "541:13:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1443,
                        "name": "thisToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1436,
                        "src": "521:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$4104",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 1444,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "balanceOf",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4049,
                      "src": "521:19:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view external returns (uint256)"
                      }
                    },
                    "id": 1448,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "521:34:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "498:57:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1453,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6236,
                          "src": "580:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1454,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "580:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1455,
                        "name": "contractBalance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1442,
                        "src": "592:15:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1450,
                        "name": "thisToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1436,
                        "src": "561:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$4104",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 1452,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4067,
                      "src": "561:18:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 1456,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "561:47:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1457,
                  "nodeType": "ExpressionStatement",
                  "src": "561:47:2"
                }
              ]
            },
            "documentation": null,
            "id": 1459,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 1433,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1432,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1497,
                  "src": "429:9:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "429:9:2"
              }
            ],
            "name": "recoverTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1431,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1430,
                  "name": "_erc20Token",
                  "nodeType": "VariableDeclaration",
                  "scope": 1459,
                  "src": "406:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1429,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "406:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "405:21:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 1434,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "450:0:2"
            },
            "scope": 1504,
            "src": "383:230:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 1478,
              "nodeType": "Block",
              "src": "714:95:2",
              "statements": [
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1466,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6271,
                              "src": "748:4:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Recoverable_$1504",
                                "typeString": "contract Recoverable"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_Recoverable_$1504",
                                "typeString": "contract Recoverable"
                              }
                            ],
                            "id": 1465,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "740:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 1467,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "740:13:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 1468,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "740:21:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1469,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6236,
                          "src": "763:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1470,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "763:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 1464,
                      "name": "LogDestruction",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1503,
                      "src": "725:14:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (uint256,address)"
                      }
                    },
                    "id": 1471,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "725:49:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1472,
                  "nodeType": "EmitStatement",
                  "src": "720:54:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1474,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6236,
                          "src": "793:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1475,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "793:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 1473,
                      "name": "selfdestruct",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6244,
                      "src": "780:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_selfdestruct_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 1476,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "780:24:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1477,
                  "nodeType": "ExpressionStatement",
                  "src": "780:24:2"
                }
              ]
            },
            "documentation": null,
            "id": 1479,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 1462,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1461,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1497,
                  "src": "693:9:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "693:9:2"
              }
            ],
            "name": "destroy",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1460,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "688:2:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 1463,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "714:0:2"
            },
            "scope": 1504,
            "src": "672:137:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 1496,
              "nodeType": "Block",
              "src": "879:97:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "6f776e6572",
                                    "id": 1487,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "941:7:2",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c0",
                                      "typeString": "literal_string \"owner\""
                                    },
                                    "value": "owner"
                                  },
                                  {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 1488,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 6236,
                                      "src": "950:3:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 1489,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "950:10:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_stringliteral_02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c0",
                                      "typeString": "literal_string \"owner\""
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 1485,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 6223,
                                    "src": "924:3:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 1486,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "924:16:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 1490,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "924:37:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "id": 1484,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6230,
                              "src": "914:9:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 1491,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "914:48:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 1482,
                            "name": "database",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1416,
                            "src": "893:8:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_DBInterface_$3923",
                              "typeString": "contract DBInterface"
                            }
                          },
                          "id": 1483,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "boolStorage",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 3915,
                          "src": "893:20:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) external returns (bool)"
                          }
                        },
                        "id": 1492,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "893:70:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1481,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        6239,
                        6240
                      ],
                      "referencedDeclaration": 6239,
                      "src": "885:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1493,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "885:79:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1494,
                  "nodeType": "ExpressionStatement",
                  "src": "885:79:2"
                },
                {
                  "id": 1495,
                  "nodeType": "PlaceholderStatement",
                  "src": "970:1:2"
                }
              ]
            },
            "documentation": null,
            "id": 1497,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 1480,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "879:0:2"
            },
            "src": "860:116:2",
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 1503,
            "name": "LogDestruction",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1502,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1499,
                  "indexed": false,
                  "name": "_amountSent",
                  "nodeType": "VariableDeclaration",
                  "scope": 1503,
                  "src": "1001:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1498,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1001:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1501,
                  "indexed": true,
                  "name": "_caller",
                  "nodeType": "VariableDeclaration",
                  "scope": 1503,
                  "src": "1019:23:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1500,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1019:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1000:43:2"
            },
            "src": "980:64:2"
          }
        ],
        "scope": 1505,
        "src": "101:946:2"
      }
    ],
    "src": "0:1048:2"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-09-19T23:00:07.034Z"
}