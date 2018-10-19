<p align="center">
  <a href="https://mybit.io/">
    <img alt="MyBit Logo" src="https://files.mybit.io/favicons/favicon-96x96.png" width="90">
  </a>
</p>



# MyBit-Network: Contract SDK
[![CircleCI](https://circleci.com/gh/MyBitFoundation/MyBit-Network.tech.svg?style=shield)](https://circleci.com/gh/MyBitFoundation/MyBit-Network.tech) [![Coverage Status](https://coveralls.io/repos/github/MyBitFoundation/MyBit-Network.tech/badge.svg)](https://coveralls.io/github/MyBitFoundation/MyBit-Network.tech)

:factory: A software development kit for the automated machine economy.

The SDK's are a group of contracts that contain all the functional logic of [MyBit-Go](https://github.com/MyBitFoundation/MyBit-Go.app). These contracts allow developers to generate crowdsales to create revenue producing assets. The crowdsale produces a dividend-tokens which can directly receive payment and distribute it to token holders. Crowdsales can take Ether or ERC20 tokens, and the asset-tokens produced can receive dividends in ETH or any ERC20 token depending on the preferences of the investors.

If you would like to try a simple example see [Hello-Network](https://github.com/MyBitFoundation/hello-network)

If you would like to import the SDK contracts into your project as an NPM package see [Network.js](https://github.com/MyBitFoundation/network.js)

## Getting Started
First install dependencies using [Yarn](https://yarnpkg.com/lang/en/docs/install/#debian-stable):

```bash
yarn
```

If successful you should see output similar to below:

```
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
Done in 5.69s.
```

Then get a local test blockchain running using [Ganache](https://truffleframework.com/ganache)

```bash
yarn blockchain
````

You should see 20 accounts load up and see the local chain info:

In another terminal window, you can now run the tests:
```
yarn tests
```

To see code-coverage run:
```
yarn coverage
```

## [Contracts](contracts)
Before creating assets, certain variables and parameters have to be set:
* All contracts must be registered in ContractManager before writing to database
* All users must approve the current contract state, which changes everytime a contract is added/updated
* Users must approve ERC20Burner to burn platform tokens before using key functionality
* Platform wallet and platform token must be set
* Operators must be registered and choose which currencies they wish to accept

Basic functionality for these critical operations are found below:

### [Database](contracts/database)
Contracts in the SDK store all long-term data in a non-upgradeable database contract. This allows for contracts to be upgraded without losing valuable data. The Database stores all data in a simple key:value manner. The key is always of bytes32 type, as they are the keccak256 hash of the variableName, ID, address etc:

Storing an unsigned integer looks like this:
```javascript
  database.setUint(keccak256(abi.encodePacked("fundingDeadline", assetID)), 20000000);
```

The [Database](contracts/database/Database.sol) then stores this with the function. `key = sha3("fundingDeadline", assetID)`, `value = tokenAddress`
```javascript
function setUint(bytes32 _key, address _value)
onlyApprovedContract
external {
    uintStorage[_key] = _value;
}
```

### [API](contracts/database/API.sol)
The API contract can be used to easily fetch variables from the database
```javascript
  function getAssetFundingDeadline(bytes32 _assetID)
  public
  view
  returns(uint) {
    uint fundingDeadline = database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", _assetID)));
    return fundingDeadline;
  }
```

### [ContractManager](contracts/database/ContractManager.sol)
To give a contract write access to the database, you must call `addContract(contractName, contractAddress)` from a platform owner account
```javascript
  function addContract(string _name, address _contractAddress)
  external
  isTrue(_contractAddress != address(0))
  isTrue(bytes(_name).length != uint(0))
  anyOwner {
    require(!database.boolStorage(keccak256(abi.encodePacked("contract", _contractAddress))));
    require(database.addressStorage(keccak256(abi.encodePacked("contract", _name))) == address(0));
    database.setAddress(keccak256(abi.encodePacked("contract", _name)), _contractAddress);
    database.setBool(keccak256(abi.encodePacked("contract", _contractAddress)), true);
    bytes32 currentState = database.bytes32Storage(keccak256(abi.encodePacked("currentState")));    
    bytes32 newState = keccak256(abi.encodePacked(currentState, _contractAddress));
    database.setBytes32(keccak256(abi.encodePacked("currentState")), newState);
    emit LogContractAdded(_contractAddress, _name, block.number);
  }
```

Everytime a contract is added or updated the contract state will change, requiring approval from users before they interact with the platform. Users can also choose to ignore future state changes. This can be done by calling the following function:

```javascript
  function setContractStatePreferences(bool _acceptCurrentState, bool _ignoreStateChanges)
  external
  returns (bool) {
    bytes32 currentState = database.bytes32Storage(keccak256(abi.encodePacked("currentState")));
    database.setBool(keccak256(abi.encodePacked(currentState, msg.sender)), _acceptCurrentState);
    database.setBool(keccak256(abi.encodePacked("ignoreStateChanges", msg.sender)), _ignoreStateChanges);
    emit LogContractStatePreferenceChanged(msg.sender, _acceptCurrentState, _ignoreStateChanges);
    return true;
  }
```

### [TokenBurning](contracts/access/ERC20Burner.sol)
To create new asset orders, or purchase existing asset orders, users must provably burn MYB using the burner. To do this each user must approve the burner contract to burn tokens by calling the MYB contract:

```javascript
  function approve(address _spender, uint256 _value) public returns (bool) {
    allowed[msg.sender][_spender] = _value;
    emit Approval(msg.sender, _spender, _value);
    return true;
  }
```

* spender in this case should be the address of the ERC20Burner contract. value should be placed high enough to avoid needing to approve the burner every use

Functions that require burning:
- `CrowdsaleGeneratorETH.createAssetOrderETH()`
- `CrowdsaleETH.buyAssetOrderETH()`
- `CrowdsaleGeneratorERC20.createAssetOrderERC20()`
- `CrowdsaleERC20.buyAssetOrderERC20()`
- `AssetExchange.buyAsset()`
- `AssetExchange.createBuyOrder()`

### [Platform-Variables](contracts/ecosystem/PlatformFunds.sol)
Before assets can be funded the platform owners must set the `platform token` and the `platform wallet` by using:
```javascript
  function setPlatformWallet(address _walletAddress)
  external
  onlyOwner {
    database.setAddress(keccak256(abi.encodePacked("platformWallet")), _walletAddress);
    emit LogPlatformWallet(_walletAddress);
  }
```
                                          :heavy_plus_sign:

```javascript
  // @notice
  function setPlatformToken(address _tokenAddress)
  external
  onlyOwner {
    database.setAddress(keccak256(abi.encodePacked("platformToken")), _tokenAddress);
    emit LogPlatformToken(_tokenAddress);
  }
```
### [Onboarding Operators](contracts/roles/Operator.sol)
The Operator must be registered and define what currencies they are willing to receive as payment. To set the operators you can call:

```javascript
function registerOperator(address _operatorAddress, string _operatorURI)
external
onlyOwner {
  require(_operatorAddress != address(0));
  bytes32 operatorID = keccak256(abi.encodePacked(_operatorURI));
  require(database.addressStorage(keccak256(abi.encodePacked("operator", operatorID))) == address(0));
  database.setAddress(keccak256(abi.encodePacked("operator", operatorID)), _operatorAddress);
  database.setBytes32(keccak256(abi.encodePacked("operator", _operatorAddress)), operatorID);
  emit LogOperatorRegistered(operatorID, _operatorURI);
}
```

To choose which currencies the operator would like to accept they can call:

```javascript
function acceptERC20Token(bytes32 _operatorID, address _tokenAddress, bool _accept)
external
onlyOperator(_operatorID)
returns (bool) {
  database.setBool(keccak256(abi.encodePacked("acceptsToken", _operatorID, _tokenAddress)), _accept);
  return true;
}
```
OR
```javascript
function acceptEther(bytes32 _operatorID, bool _accept)
external
onlyOperator(_operatorID)
returns (bool) {
  database.setBool(keccak256(abi.encodePacked("acceptsEther", _operatorID)), _accept);
  return true;
}
```

## [Roles](contracts/roles)
The MYB SDK's have 4 fundamental roles:

* Investor `must burn MYB to participate`
* AssetManager  `must burn MYB to participate`
* Operator `must be registered by owners`
* Platform Owner(s)

Investors can contribute ETH or Erc20 tokens to invest in new asset crowdsales. The assets are managed by the AssetManager, who receives a fee for his work and escrows tokens as collateral to investors. The Operator receives funds from the crowdsale and produces and install the asset. Platform owners can choose how assets are governed, and whether or not a contract upgrade should happen. The platform owner can be a single account or a contract governed by many accounts.


## In-Development
:construction: The SDK's are a work in progress and we hope to implement more features such as asset-governance, platform-governance and obfuscated asset authentication.

### [Governance](contracts/ownership)
We are working on giving investors governance tools to vote for new AssetManagers if the need arises. Voting is based on token holdings and can be accomplished by approving a function call at a particular contract:
```javascript
  function voteForExecution(address _executingContract, bytes32 _assetID, bytes4 _methodID, bytes32 _parameterHash, uint _amountToLock)
  external
  validAsset(_assetID)
  returns (bool) {
    bytes32 executionID = keccak256(abi.encodePacked(_executingContract, _assetID, _methodID, _parameterHash));
    bytes32 numVotesID = keccak256(abi.encodePacked("voteTotal", executionID));
    bytes32 investorVotesID = keccak256(abi.encodePacked("investorVotes", executionID, msg.sender));
    uint256 numVotes = database.uintStorage(numVotesID);
    uint256 investorVotes = database.uintStorage(investorVotesID);
    require(lockTokens(_assetID, msg.sender, _amountToLock));
    database.setUint(numVotesID, numVotes.add(_amountToLock));
    database.setUint(investorVotesID, investorVotes.add(_amountToLock));
    return true;
  }
```

* executingContract = The address of the contract, where the function is to be called
* assetID = The ID of the asset in question
* methodID = The function signature of the funtion to be called ie. `bytes4(sha3("exampleFunction(address, uint256, bool)"))`
* parameterHash = The sha3 hash of the exact parameters to be called at that function
* amountToLock - The number of asset-tokens this investor wishes to lock towards this function call

✏️ All contracts are written in [Solidity](https://solidity.readthedocs.io/en/v0.4.24/) version 0.4.24.





## Documentation
Documentation is created using [Solidity-Docgen](https://github.com/OpenZeppelin/solidity-docgen)
```
cd docs/website
yarn build
```

To publish to GitHub Pages

```
cd docs/website
GIT_USER=<GIT_USER> \
  USE_SSH=true \
  yarn run publish-gh-pages
```



### ⚠️ This application is unstable and has not undergone any rigorous security audits. Use at your own risk.


<p align="center">
MyBit Platform™ CHE-177.186.963<br/>
</p>
