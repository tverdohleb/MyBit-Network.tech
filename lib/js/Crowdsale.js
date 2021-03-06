"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var Crowdsale = exports.Crowdsale = 
{
  "contractName": "Crowdsale",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_assetURI",
          "type": "string"
        },
        {
          "name": "_operatorID",
          "type": "bytes32"
        },
        {
          "name": "_fundingLength",
          "type": "uint256"
        },
        {
          "name": "_amountToRaise",
          "type": "uint256"
        }
      ],
      "name": "startFundingPeriod",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_assetID",
          "type": "bytes32"
        }
      ],
      "name": "buyAsset",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_assetID",
          "type": "bytes32"
        }
      ],
      "name": "refund",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
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
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\n\ninterface Crowdsale{\n\n  function startFundingPeriod(string _assetURI, bytes32 _operatorID, uint _fundingLength, uint _amountToRaise) external;\n\n  function buyAsset(bytes32 _assetID) external payable returns (bool);\n\n  function refund(bytes32 _assetID) external returns (bool);\n\n  function destroy() external;\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/Crowdsale.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/Crowdsale.sol",
    "exportedSymbols": {
      "Crowdsale": [
        1378
      ]
    },
    "id": 1379,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1349,
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
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 1378,
        "linearizedBaseContracts": [
          1378
        ],
        "name": "Crowdsale",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 1360,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "startFundingPeriod",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1358,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1351,
                  "name": "_assetURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 1360,
                  "src": "78:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1350,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "78:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1353,
                  "name": "_operatorID",
                  "nodeType": "VariableDeclaration",
                  "scope": 1360,
                  "src": "96:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1352,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "96:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1355,
                  "name": "_fundingLength",
                  "nodeType": "VariableDeclaration",
                  "scope": 1360,
                  "src": "117:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1354,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "117:4:2",
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
                  "id": 1357,
                  "name": "_amountToRaise",
                  "nodeType": "VariableDeclaration",
                  "scope": 1360,
                  "src": "138:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1356,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "138:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "77:81:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 1359,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "167:0:2"
            },
            "scope": 1378,
            "src": "50:118:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 1367,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "buyAsset",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1363,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1362,
                  "name": "_assetID",
                  "nodeType": "VariableDeclaration",
                  "scope": 1367,
                  "src": "190:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1361,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "190:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "189:18:2"
            },
            "payable": true,
            "returnParameters": {
              "id": 1366,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1365,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1367,
                  "src": "234:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1364,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "234:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "233:6:2"
            },
            "scope": 1378,
            "src": "172:68:2",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 1374,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "refund",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1370,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1369,
                  "name": "_assetID",
                  "nodeType": "VariableDeclaration",
                  "scope": 1374,
                  "src": "260:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1368,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "260:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "259:18:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 1373,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1372,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1374,
                  "src": "296:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1371,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "296:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "295:6:2"
            },
            "scope": 1378,
            "src": "244:58:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 1377,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "destroy",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1375,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "322:2:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 1376,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "333:0:2"
            },
            "scope": 1378,
            "src": "306:28:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 1379,
        "src": "26:311:2"
      }
    ],
    "src": "0:338:2"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/Crowdsale.sol",
    "exportedSymbols": {
      "Crowdsale": [
        1378
      ]
    },
    "id": 1379,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1349,
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
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 1378,
        "linearizedBaseContracts": [
          1378
        ],
        "name": "Crowdsale",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 1360,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "startFundingPeriod",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1358,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1351,
                  "name": "_assetURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 1360,
                  "src": "78:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1350,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "78:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1353,
                  "name": "_operatorID",
                  "nodeType": "VariableDeclaration",
                  "scope": 1360,
                  "src": "96:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1352,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "96:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1355,
                  "name": "_fundingLength",
                  "nodeType": "VariableDeclaration",
                  "scope": 1360,
                  "src": "117:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1354,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "117:4:2",
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
                  "id": 1357,
                  "name": "_amountToRaise",
                  "nodeType": "VariableDeclaration",
                  "scope": 1360,
                  "src": "138:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1356,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "138:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "77:81:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 1359,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "167:0:2"
            },
            "scope": 1378,
            "src": "50:118:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 1367,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "buyAsset",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1363,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1362,
                  "name": "_assetID",
                  "nodeType": "VariableDeclaration",
                  "scope": 1367,
                  "src": "190:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1361,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "190:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "189:18:2"
            },
            "payable": true,
            "returnParameters": {
              "id": 1366,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1365,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1367,
                  "src": "234:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1364,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "234:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "233:6:2"
            },
            "scope": 1378,
            "src": "172:68:2",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 1374,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "refund",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1370,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1369,
                  "name": "_assetID",
                  "nodeType": "VariableDeclaration",
                  "scope": 1374,
                  "src": "260:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1368,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "260:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "259:18:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 1373,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1372,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1374,
                  "src": "296:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1371,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "296:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "295:6:2"
            },
            "scope": 1378,
            "src": "244:58:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 1377,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "destroy",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1375,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "322:2:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 1376,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "333:0:2"
            },
            "scope": 1378,
            "src": "306:28:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 1379,
        "src": "26:311:2"
      }
    ],
    "src": "0:338:2"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-09-14T15:16:31.917Z"
}