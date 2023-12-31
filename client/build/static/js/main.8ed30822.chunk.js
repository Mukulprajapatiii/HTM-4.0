/*! For license information please see main.8ed30822.chunk.js.LICENSE.txt */
(this["webpackJsonpFake-products-detection-using-blockchain"] =
  this["webpackJsonpFake-products-detection-using-blockchain"] || []).push([
  [0],
  {
    18: function (e) {
      e.exports = JSON.parse(
        '{"contractName":"MyApp","abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"address","name":"_address","type":"address"}],"name":"ManufacturerCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"address","name":"manufacturer","type":"address"}],"name":"ProductCreated","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"manufacturers","outputs":[{"internalType":"bool","name":"exists","type":"bool"},{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"_address","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"address","name":"_address","type":"address"}],"name":"createManufacturer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_model","type":"string"}],"name":"createProduct","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getProduct","outputs":[{"components":[{"internalType":"bool","name":"exists","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"model","type":"string"},{"internalType":"address","name":"manufacturer","type":"address"},{"internalType":"address","name":"curOwner","type":"address"},{"internalType":"address[]","name":"owners","type":"address[]"}],"internalType":"struct MyApp.Product","name":"","type":"tuple"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"address","name":"_newOwner","type":"address"}],"name":"updateOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}],"metadata":"{\\"compiler\\":{\\"version\\":\\"0.8.4+commit.c7e474f2\\"},\\"language\\":\\"Solidity\\",\\"output\\":{\\"abi\\":[{\\"inputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"constructor\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":false,\\"internalType\\":\\"string\\",\\"name\\":\\"name\\",\\"type\\":\\"string\\"},{\\"indexed\\":false,\\"internalType\\":\\"address\\",\\"name\\":\\"_address\\",\\"type\\":\\"address\\"}],\\"name\\":\\"ManufacturerCreated\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"id\\",\\"type\\":\\"uint256\\"},{\\"indexed\\":false,\\"internalType\\":\\"address\\",\\"name\\":\\"newOwner\\",\\"type\\":\\"address\\"}],\\"name\\":\\"OwnershipUpdated\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"id\\",\\"type\\":\\"uint256\\"},{\\"indexed\\":false,\\"internalType\\":\\"address\\",\\"name\\":\\"manufacturer\\",\\"type\\":\\"address\\"}],\\"name\\":\\"ProductCreated\\",\\"type\\":\\"event\\"},{\\"inputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"_name\\",\\"type\\":\\"string\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"_address\\",\\"type\\":\\"address\\"}],\\"name\\":\\"createManufacturer\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"_name\\",\\"type\\":\\"string\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"_model\\",\\"type\\":\\"string\\"}],\\"name\\":\\"createProduct\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_id\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"getProduct\\",\\"outputs\\":[{\\"components\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"exists\\",\\"type\\":\\"bool\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"id\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"name\\",\\"type\\":\\"string\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"model\\",\\"type\\":\\"string\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"manufacturer\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"curOwner\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address[]\\",\\"name\\":\\"owners\\",\\"type\\":\\"address[]\\"}],\\"internalType\\":\\"struct MyApp.Product\\",\\"name\\":\\"\\",\\"type\\":\\"tuple\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"name\\":\\"manufacturers\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"exists\\",\\"type\\":\\"bool\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"name\\",\\"type\\":\\"string\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"_address\\",\\"type\\":\\"address\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"owner\\",\\"outputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_id\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"_newOwner\\",\\"type\\":\\"address\\"}],\\"name\\":\\"updateOwnership\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"}],\\"devdoc\\":{\\"kind\\":\\"dev\\",\\"methods\\":{},\\"version\\":1},\\"userdoc\\":{\\"kind\\":\\"user\\",\\"methods\\":{},\\"version\\":1}},\\"settings\\":{\\"compilationTarget\\":{\\"/F/Projects/Blockchain/fake-products/contracts/MyApp.sol\\":\\"MyApp\\"},\\"evmVersion\\":\\"istanbul\\",\\"libraries\\":{},\\"metadata\\":{\\"bytecodeHash\\":\\"ipfs\\"},\\"optimizer\\":{\\"enabled\\":true,\\"runs\\":200},\\"remappings\\":[]},\\"sources\\":{\\"/F/Projects/Blockchain/fake-products/contracts/MyApp.sol\\":{\\"keccak256\\":\\"0xbcecce01d5b0813e6a5f0bce0bc033dc38f406ff9e9b464d035465fe6f27f3ae\\",\\"license\\":\\"MIT\\",\\"urls\\":[\\"bzz-raw://a1f771d646a6da0be205db242b4cc4858121d1988849197ded8c053ac24aa407\\",\\"dweb:/ipfs/QmYwbnt5116cxQVgMQWhjU8QZBAZGGsXhDK8bAeZYP9Zbc\\"]}},\\"version\\":1}","bytecode":"0x6080604052600060015534801561001557600080fd5b50600080546001600160a01b03191633179055610bcd806100376000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80635d50e808146100675780636b5eb09c1461007c57806387592bce146100a75780638da5cb5b146100ba578063b9db15b4146100e5578063cc0266f714610105575b600080fd5b61007a610075366004610886565b610118565b005b61008f61008a366004610865565b61022c565b60405161009e939291906109fb565b60405180910390f35b61007a6100b53660046108d2565b6102e4565b6000546100cd906001600160a01b031681565b6040516001600160a01b03909116815260200161009e565b6100f86100f3366004610933565b610437565b60405161009e9190610a58565b61007a61011336600461094b565b610655565b6000546001600160a01b031633146101925760405162461bcd60e51b815260206004820152603260248201527f4f6e6c79206f776e657220697320617574686f726973656420746f206372656160448201527174652061206d616e7566616374757265722160701b60648201526084015b60405180910390fd5b6001600160a01b0381166000908152600260209081526040909120805460ff191660019081178255845191926101cf929184019190860190610729565b506002810180546001600160a01b0319166001600160a01b0384161790556040517fb221316567f463674f49cbde1b8ee91580960ece70679c5a79bf92f916d8a0289061021f9085908590610a2e565b60405180910390a1505050565b6002602052600090815260409020805460018201805460ff909216929161025290610b15565b80601f016020809104026020016040519081016040528092919081815260200182805461027e90610b15565b80156102cb5780601f106102a0576101008083540402835291602001916102cb565b820191906000526020600020905b8154815290600101906020018083116102ae57829003601f168201915b505050600290930154919250506001600160a01b031683565b3360009081526002602052604090205460ff1615156001146103485760405162461bcd60e51b815260206004820152601b60248201527f596f7520617265206e6f742061204d616e7566616374757265722100000000006044820152606401610189565b600180546000908152600360209081526040909120805460ff191683178155825492810192909255835161038491600284019190860190610729565b50815161039a9060038301906020850190610729565b50600481018054336001600160a01b03199182168117909255600583018054821683179055600683018054600181810183556000928352602083209091018054909316909317909155815491906103f083610b50565b91905055507fe8bb4e90e950f7b76a8c4e472b3b5e01d41c478f9eeaea36b4ba991f51133f91600180546104249190610afe565b604080519182523360208301520161021f565b6040805160e080820183526000808352602080840182905260608486018190528085018190526080850183905260a0850183905260c0850152858252600381529084902084519283018552805460ff16151583526001810154918301919091526002810180549394929391928401916104af90610b15565b80601f01602080910402602001604051908101604052809291908181526020018280546104db90610b15565b80156105285780601f106104fd57610100808354040283529160200191610528565b820191906000526020600020905b81548152906001019060200180831161050b57829003601f168201915b5050505050815260200160038201805461054190610b15565b80601f016020809104026020016040519081016040528092919081815260200182805461056d90610b15565b80156105ba5780601f1061058f576101008083540402835291602001916105ba565b820191906000526020600020905b81548152906001019060200180831161059d57829003601f168201915b505050918352505060048201546001600160a01b039081166020808401919091526005840154909116604080840191909152600684018054825181850281018501909352808352606090940193919290919083018282801561064557602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610627575b5050505050815250509050919050565b600082815260036020526040902060058101546001600160a01b031633146106b05760405162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b6044820152606401610189565b6005810180546001600160a01b0384166001600160a01b031991821681179092556006830180546001810182556000918252602091829020018054909216831790915560408051868152918201929092527f17f6791f79c251dfe73501956852b1099624d6a4c5ce9744ad98825c5b8dd91a910161021f565b82805461073590610b15565b90600052602060002090601f016020900481019282610757576000855561079d565b82601f1061077057805160ff191683800117855561079d565b8280016001018555821561079d579182015b8281111561079d578251825591602001919060010190610782565b506107a99291506107ad565b5090565b5b808211156107a957600081556001016107ae565b80356001600160a01b03811681146107d957600080fd5b919050565b600082601f8301126107ee578081fd5b813567ffffffffffffffff8082111561080957610809610b81565b604051601f8301601f19908116603f0116810190828211818310171561083157610831610b81565b81604052838152866020858801011115610849578485fd5b8360208701602083013792830160200193909352509392505050565b600060208284031215610876578081fd5b61087f826107c2565b9392505050565b60008060408385031215610898578081fd5b823567ffffffffffffffff8111156108ae578182fd5b6108ba858286016107de565b9250506108c9602084016107c2565b90509250929050565b600080604083850312156108e4578182fd5b823567ffffffffffffffff808211156108fb578384fd5b610907868387016107de565b9350602085013591508082111561091c578283fd5b50610929858286016107de565b9150509250929050565b600060208284031215610944578081fd5b5035919050565b6000806040838503121561095d578182fd5b823591506108c9602084016107c2565b6000815180845260208085019450808401835b838110156109a55781516001600160a01b031687529582019590820190600101610980565b509495945050505050565b60008151808452815b818110156109d5576020818501810151868301820152016109b9565b818111156109e65782602083870101525b50601f01601f19169290920160200192915050565b8315158152606060208201526000610a1660608301856109b0565b905060018060a01b0383166040830152949350505050565b604081526000610a4160408301856109b0565b905060018060a01b03831660208301529392505050565b60208152815115156020820152602082015160408201526000604083015160e06060840152610a8b6101008401826109b0565b90506060840151601f1980858403016080860152610aa983836109b0565b925060018060a01b0360808701511660a086015260a08601519150610ad960c08601836001600160a01b03169052565b60c08601519150808584030160e086015250610af5828261096d565b95945050505050565b600082821015610b1057610b10610b6b565b500390565b600181811c90821680610b2957607f821691505b60208210811415610b4a57634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415610b6457610b64610b6b565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220ca79c00d4f8905f9b7ce64fc6439b4ab74bd2f9ad2905bdd918fb5a01477305664736f6c63430008040033","deployedBytecode":"0x608060405234801561001057600080fd5b50600436106100625760003560e01c80635d50e808146100675780636b5eb09c1461007c57806387592bce146100a75780638da5cb5b146100ba578063b9db15b4146100e5578063cc0266f714610105575b600080fd5b61007a610075366004610886565b610118565b005b61008f61008a366004610865565b61022c565b60405161009e939291906109fb565b60405180910390f35b61007a6100b53660046108d2565b6102e4565b6000546100cd906001600160a01b031681565b6040516001600160a01b03909116815260200161009e565b6100f86100f3366004610933565b610437565b60405161009e9190610a58565b61007a61011336600461094b565b610655565b6000546001600160a01b031633146101925760405162461bcd60e51b815260206004820152603260248201527f4f6e6c79206f776e657220697320617574686f726973656420746f206372656160448201527174652061206d616e7566616374757265722160701b60648201526084015b60405180910390fd5b6001600160a01b0381166000908152600260209081526040909120805460ff191660019081178255845191926101cf929184019190860190610729565b506002810180546001600160a01b0319166001600160a01b0384161790556040517fb221316567f463674f49cbde1b8ee91580960ece70679c5a79bf92f916d8a0289061021f9085908590610a2e565b60405180910390a1505050565b6002602052600090815260409020805460018201805460ff909216929161025290610b15565b80601f016020809104026020016040519081016040528092919081815260200182805461027e90610b15565b80156102cb5780601f106102a0576101008083540402835291602001916102cb565b820191906000526020600020905b8154815290600101906020018083116102ae57829003601f168201915b505050600290930154919250506001600160a01b031683565b3360009081526002602052604090205460ff1615156001146103485760405162461bcd60e51b815260206004820152601b60248201527f596f7520617265206e6f742061204d616e7566616374757265722100000000006044820152606401610189565b600180546000908152600360209081526040909120805460ff191683178155825492810192909255835161038491600284019190860190610729565b50815161039a9060038301906020850190610729565b50600481018054336001600160a01b03199182168117909255600583018054821683179055600683018054600181810183556000928352602083209091018054909316909317909155815491906103f083610b50565b91905055507fe8bb4e90e950f7b76a8c4e472b3b5e01d41c478f9eeaea36b4ba991f51133f91600180546104249190610afe565b604080519182523360208301520161021f565b6040805160e080820183526000808352602080840182905260608486018190528085018190526080850183905260a0850183905260c0850152858252600381529084902084519283018552805460ff16151583526001810154918301919091526002810180549394929391928401916104af90610b15565b80601f01602080910402602001604051908101604052809291908181526020018280546104db90610b15565b80156105285780601f106104fd57610100808354040283529160200191610528565b820191906000526020600020905b81548152906001019060200180831161050b57829003601f168201915b5050505050815260200160038201805461054190610b15565b80601f016020809104026020016040519081016040528092919081815260200182805461056d90610b15565b80156105ba5780601f1061058f576101008083540402835291602001916105ba565b820191906000526020600020905b81548152906001019060200180831161059d57829003601f168201915b505050918352505060048201546001600160a01b039081166020808401919091526005840154909116604080840191909152600684018054825181850281018501909352808352606090940193919290919083018282801561064557602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610627575b5050505050815250509050919050565b600082815260036020526040902060058101546001600160a01b031633146106b05760405162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b6044820152606401610189565b6005810180546001600160a01b0384166001600160a01b031991821681179092556006830180546001810182556000918252602091829020018054909216831790915560408051868152918201929092527f17f6791f79c251dfe73501956852b1099624d6a4c5ce9744ad98825c5b8dd91a910161021f565b82805461073590610b15565b90600052602060002090601f016020900481019282610757576000855561079d565b82601f1061077057805160ff191683800117855561079d565b8280016001018555821561079d579182015b8281111561079d578251825591602001919060010190610782565b506107a99291506107ad565b5090565b5b808211156107a957600081556001016107ae565b80356001600160a01b03811681146107d957600080fd5b919050565b600082601f8301126107ee578081fd5b813567ffffffffffffffff8082111561080957610809610b81565b604051601f8301601f19908116603f0116810190828211818310171561083157610831610b81565b81604052838152866020858801011115610849578485fd5b8360208701602083013792830160200193909352509392505050565b600060208284031215610876578081fd5b61087f826107c2565b9392505050565b60008060408385031215610898578081fd5b823567ffffffffffffffff8111156108ae578182fd5b6108ba858286016107de565b9250506108c9602084016107c2565b90509250929050565b600080604083850312156108e4578182fd5b823567ffffffffffffffff808211156108fb578384fd5b610907868387016107de565b9350602085013591508082111561091c578283fd5b50610929858286016107de565b9150509250929050565b600060208284031215610944578081fd5b5035919050565b6000806040838503121561095d578182fd5b823591506108c9602084016107c2565b6000815180845260208085019450808401835b838110156109a55781516001600160a01b031687529582019590820190600101610980565b509495945050505050565b60008151808452815b818110156109d5576020818501810151868301820152016109b9565b818111156109e65782602083870101525b50601f01601f19169290920160200192915050565b8315158152606060208201526000610a1660608301856109b0565b905060018060a01b0383166040830152949350505050565b604081526000610a4160408301856109b0565b905060018060a01b03831660208301529392505050565b60208152815115156020820152602082015160408201526000604083015160e06060840152610a8b6101008401826109b0565b90506060840151601f1980858403016080860152610aa983836109b0565b925060018060a01b0360808701511660a086015260a08601519150610ad960c08601836001600160a01b03169052565b60c08601519150808584030160e086015250610af5828261096d565b95945050505050565b600082821015610b1057610b10610b6b565b500390565b600181811c90821680610b2957607f821691505b60208210811415610b4a57634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415610b6457610b64610b6b565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220ca79c00d4f8905f9b7ce64fc6439b4ab74bd2f9ad2905bdd918fb5a01477305664736f6c63430008040033","immutableReferences":{},"generatedSources":[],"deployedGeneratedSources":[{"ast":{"nodeType":"YulBlock","src":"0:7995:1","statements":[{"nodeType":"YulBlock","src":"6:3:1","statements":[]},{"body":{"nodeType":"YulBlock","src":"63:124:1","statements":[{"nodeType":"YulAssignment","src":"73:29:1","value":{"arguments":[{"name":"offset","nodeType":"YulIdentifier","src":"95:6:1"}],"functionName":{"name":"calldataload","nodeType":"YulIdentifier","src":"82:12:1"},"nodeType":"YulFunctionCall","src":"82:20:1"},"variableNames":[{"name":"value","nodeType":"YulIdentifier","src":"73:5:1"}]},{"body":{"nodeType":"YulBlock","src":"165:16:1","statements":[{"expression":{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"174:1:1","type":"","value":"0"},{"kind":"number","nodeType":"YulLiteral","src":"177:1:1","type":"","value":"0"}],"functionName":{"name":"revert","nodeType":"YulIdentifier","src":"167:6:1"},"nodeType":"YulFunctionCall","src":"167:12:1"},"nodeType":"YulExpressionStatement","src":"167:12:1"}]},"condition":{"arguments":[{"arguments":[{"name":"value","nodeType":"YulIdentifier","src":"124:5:1"},{"arguments":[{"name":"value","nodeType":"YulIdentifier","src":"135:5:1"},{"arguments":[{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"150:3:1","type":"","value":"160"},{"kind":"number","nodeType":"YulLiteral","src":"155:1:1","type":"","value":"1"}],"functionName":{"name":"shl","nodeType":"YulIdentifier","src":"146:3:1"},"nodeType":"YulFunctionCall","src":"146:11:1"},{"kind":"number","nodeType":"YulLiteral","src":"159:1:1","type":"","value":"1"}],"functionName":{"name":"sub","nodeType":"YulIdentifier","src":"142:3:1"},"nodeType":"YulFunctionCall","src":"142:19:1"}],"functionName":{"name":"and","nodeType":"YulIdentifier","src":"131:3:1"},"nodeType":"YulFunctionCall","src":"131:31:1"}],"functionName":{"name":"eq","nodeType":"YulIdentifier","src":"121:2:1"},"nodeType":"YulFunctionCall","src":"121:42:1"}],"functionName":{"name":"iszero","nodeType":"YulIdentifier","src":"114:6:1"},"nodeType":"YulFunctionCall","src":"114:50:1"},"nodeType":"YulIf","src":"111:2:1"}]},"name":"abi_decode_address","nodeType":"YulFunctionDefinition","parameters":[{"name":"offset","nodeType":"YulTypedName","src":"42:6:1","type":""}],"returnVariables":[{"name":"value","nodeType":"YulTypedName","src":"53:5:1","type":""}],"src":"14:173:1"},{"body":{"nodeType":"YulBlock","src":"245:686:1","statements":[{"body":{"nodeType":"YulBlock","src":"294:24:1","statements":[{"expression":{"arguments":[{"name":"array","nodeType":"YulIdentifier","src":"303:5:1"},{"name":"array","nodeType":"YulIdentifier","src":"310:5:1"}],"functionName":{"name":"revert","nodeType":"YulIdentifier","src":"296:6:1"},"nodeType":"YulFunctionCall","src":"296:20:1"},"nodeType":"YulExpressionStatement","src":"296:20:1"}]},"condition":{"arguments":[{"arguments":[{"arguments":[{"name":"offset","nodeType":"YulIdentifier","src":"273:6:1"},{"kind":"number","nodeType":"YulLiteral","src":"281:4:1","type":"","value":"0x1f"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"269:3:1"},"nodeType":"YulFunctionCall","src":"269:17:1"},{"name":"end","nodeType":"YulIdentifier","src":"288:3:1"}],"functionName":{"name":"slt","nodeType":"YulIdentifier","src":"265:3:1"},"nodeType":"YulFunctionCall","src":"265:27:1"}],"functionName":{"name":"iszero","nodeType":"YulIdentifier","src":"258:6:1"},"nodeType":"YulFunctionCall","src":"258:35:1"},"nodeType":"YulIf","src":"255:2:1"},{"nodeType":"YulVariableDeclaration","src":"327:30:1","value":{"arguments":[{"name":"offset","nodeType":"YulIdentifier","src":"350:6:1"}],"functionName":{"name":"calldataload","nodeType":"YulIdentifier","src":"337:12:1"},"nodeType":"YulFunctionCall","src":"337:20:1"},"variables":[{"name":"_1","nodeType":"YulTypedName","src":"331:2:1","type":""}]},{"nodeType":"YulVariableDeclaration","src":"366:28:1","value":{"kind":"number","nodeType":"YulLiteral","src":"376:18:1","type":"","value":"0xffffffffffffffff"},"variables":[{"name":"_2","nodeType":"YulTypedName","src":"370:2:1","type":""}]},{"body":{"nodeType":"YulBlock","src":"417:22:1","statements":[{"expression":{"arguments":[],"functionName":{"name":"panic_error_0x41","nodeType":"YulIdentifier","src":"419:16:1"},"nodeType":"YulFunctionCall","src":"419:18:1"},"nodeType":"YulExpressionStatement","src":"419:18:1"}]},"condition":{"arguments":[{"name":"_1","nodeType":"YulIdentifier","src":"409:2:1"},{"name":"_2","nodeType":"YulIdentifier","src":"413:2:1"}],"functionName":{"name":"gt","nodeType":"YulIdentifier","src":"406:2:1"},"nodeType":"YulFunctionCall","src":"406:10:1"},"nodeType":"YulIf","src":"403:2:1"},{"nodeType":"YulVariableDeclaration","src":"448:17:1","value":{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"462:2:1","type":"","value":"31"}],"functionName":{"name":"not","nodeType":"YulIdentifier","src":"458:3:1"},"nodeType":"YulFunctionCall","src":"458:7:1"},"variables":[{"name":"_3","nodeType":"YulTypedName","src":"452:2:1","type":""}]},{"nodeType":"YulVariableDeclaration","src":"474:23:1","value":{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"494:2:1","type":"","value":"64"}],"functionName":{"name":"mload","nodeType":"YulIdentifier","src":"488:5:1"},"nodeType":"YulFunctionCall","src":"488:9:1"},"variables":[{"name":"memPtr","nodeType":"YulTypedName","src":"478:6:1","type":""}]},{"nodeType":"YulVariableDeclaration","src":"506:71:1","value":{"arguments":[{"name":"memPtr","nodeType":"YulIdentifier","src":"528:6:1"},{"arguments":[{"arguments":[{"arguments":[{"arguments":[{"name":"_1","nodeType":"YulIdentifier","src":"552:2:1"},{"kind":"number","nodeType":"YulLiteral","src":"556:4:1","type":"","value":"0x1f"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"548:3:1"},"nodeType":"YulFunctionCall","src":"548:13:1"},{"name":"_3","nodeType":"YulIdentifier","src":"563:2:1"}],"functionName":{"name":"and","nodeType":"YulIdentifier","src":"544:3:1"},"nodeType":"YulFunctionCall","src":"544:22:1"},{"kind":"number","nodeType":"YulLiteral","src":"568:2:1","type":"","value":"63"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"540:3:1"},"nodeType":"YulFunctionCall","src":"540:31:1"},{"name":"_3","nodeType":"YulIdentifier","src":"573:2:1"}],"functionName":{"name":"and","nodeType":"YulIdentifier","src":"536:3:1"},"nodeType":"YulFunctionCall","src":"536:40:1"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"524:3:1"},"nodeType":"YulFunctionCall","src":"524:53:1"},"variables":[{"name":"newFreePtr","nodeType":"YulTypedName","src":"510:10:1","type":""}]},{"body":{"nodeType":"YulBlock","src":"636:22:1","statements":[{"expression":{"arguments":[],"functionName":{"name":"panic_error_0x41","nodeType":"YulIdentifier","src":"638:16:1"},"nodeType":"YulFunctionCall","src":"638:18:1"},"nodeType":"YulExpressionStatement","src":"638:18:1"}]},"condition":{"arguments":[{"arguments":[{"name":"newFreePtr","nodeType":"YulIdentifier","src":"595:10:1"},{"name":"_2","nodeType":"YulIdentifier","src":"607:2:1"}],"functionName":{"name":"gt","nodeType":"YulIdentifier","src":"592:2:1"},"nodeType":"YulFunctionCall","src":"592:18:1"},{"arguments":[{"name":"newFreePtr","nodeType":"YulIdentifier","src":"615:10:1"},{"name":"memPtr","nodeType":"YulIdentifier","src":"627:6:1"}],"functionName":{"name":"lt","nodeType":"YulIdentifier","src":"612:2:1"},"nodeType":"YulFunctionCall","src":"612:22:1"}],"functionName":{"name":"or","nodeType":"YulIdentifier","src":"589:2:1"},"nodeType":"YulFunctionCall","src":"589:46:1"},"nodeType":"YulIf","src":"586:2:1"},{"expression":{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"674:2:1","type":"","value":"64"},{"name":"newFreePtr","nodeType":"YulIdentifier","src":"678:10:1"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"667:6:1"},"nodeType":"YulFunctionCall","src":"667:22:1"},"nodeType":"YulExpressionStatement","src":"667:22:1"},{"expression":{"arguments":[{"name":"memPtr","nodeType":"YulIdentifier","src":"705:6:1"},{"name":"_1","nodeType":"YulIdentifier","src":"713:2:1"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"698:6:1"},"nodeType":"YulFunctionCall","src":"698:18:1"},"nodeType":"YulExpressionStatement","src":"698:18:1"},{"body":{"nodeType":"YulBlock","src":"764:24:1","statements":[{"expression":{"arguments":[{"name":"array","nodeType":"YulIdentifier","src":"773:5:1"},{"name":"array","nodeType":"YulIdentifier","src":"780:5:1"}],"functionName":{"name":"revert","nodeType":"YulIdentifier","src":"766:6:1"},"nodeType":"YulFunctionCall","src":"766:20:1"},"nodeType":"YulExpressionStatement","src":"766:20:1"}]},"condition":{"arguments":[{"arguments":[{"arguments":[{"name":"offset","nodeType":"YulIdentifier","src":"739:6:1"},{"name":"_1","nodeType":"YulIdentifier","src":"747:2:1"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"735:3:1"},"nodeType":"YulFunctionCall","src":"735:15:1"},{"kind":"number","nodeType":"YulLiteral","src":"752:4:1","type":"","value":"0x20"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"731:3:1"},"nodeType":"YulFunctionCall","src":"731:26:1"},{"name":"end","nodeType":"YulIdentifier","src":"759:3:1"}],"functionName":{"name":"gt","nodeType":"YulIdentifier","src":"728:2:1"},"nodeType":"YulFunctionCall","src":"728:35:1"},"nodeType":"YulIf","src":"725:2:1"},{"expression":{"arguments":[{"arguments":[{"name":"memPtr","nodeType":"YulIdentifier","src":"814:6:1"},{"kind":"number","nodeType":"YulLiteral","src":"822:4:1","type":"","value":"0x20"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"810:3:1"},"nodeType":"YulFunctionCall","src":"810:17:1"},{"arguments":[{"name":"offset","nodeType":"YulIdentifier","src":"833:6:1"},{"kind":"number","nodeType":"YulLiteral","src":"841:4:1","type":"","value":"0x20"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"829:3:1"},"nodeType":"YulFunctionCall","src":"829:17:1"},{"name":"_1","nodeType":"YulIdentifier","src":"848:2:1"}],"functionName":{"name":"calldatacopy","nodeType":"YulIdentifier","src":"797:12:1"},"nodeType":"YulFunctionCall","src":"797:54:1"},"nodeType":"YulExpressionStatement","src":"797:54:1"},{"expression":{"arguments":[{"arguments":[{"arguments":[{"name":"memPtr","nodeType":"YulIdentifier","src":"875:6:1"},{"name":"_1","nodeType":"YulIdentifier","src":"883:2:1"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"871:3:1"},"nodeType":"YulFunctionCall","src":"871:15:1"},{"kind":"number","nodeType":"YulLiteral","src":"888:4:1","type":"","value":"0x20"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"867:3:1"},"nodeType":"YulFunctionCall","src":"867:26:1"},{"name":"array","nodeType":"YulIdentifier","src":"895:5:1"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"860:6:1"},"nodeType":"YulFunctionCall","src":"860:41:1"},"nodeType":"YulExpressionStatement","src":"860:41:1"},{"nodeType":"YulAssignment","src":"910:15:1","value":{"name":"memPtr","nodeType":"YulIdentifier","src":"919:6:1"},"variableNames":[{"name":"array","nodeType":"YulIdentifier","src":"910:5:1"}]}]},"name":"abi_decode_string","nodeType":"YulFunctionDefinition","parameters":[{"name":"offset","nodeType":"YulTypedName","src":"219:6:1","type":""},{"name":"end","nodeType":"YulTypedName","src":"227:3:1","type":""}],"returnVariables":[{"name":"array","nodeType":"YulTypedName","src":"235:5:1","type":""}],"src":"192:739:1"},{"body":{"nodeType":"YulBlock","src":"1006:126:1","statements":[{"body":{"nodeType":"YulBlock","src":"1052:26:1","statements":[{"expression":{"arguments":[{"name":"value0","nodeType":"YulIdentifier","src":"1061:6:1"},{"name":"value0","nodeType":"YulIdentifier","src":"1069:6:1"}],"functionName":{"name":"revert","nodeType":"YulIdentifier","src":"1054:6:1"},"nodeType":"YulFunctionCall","src":"1054:22:1"},"nodeType":"YulExpressionStatement","src":"1054:22:1"}]},"condition":{"arguments":[{"arguments":[{"name":"dataEnd","nodeType":"YulIdentifier","src":"1027:7:1"},{"name":"headStart","nodeType":"YulIdentifier","src":"1036:9:1"}],"functionName":{"name":"sub","nodeType":"YulIdentifier","src":"1023:3:1"},"nodeType":"YulFunctionCall","src":"1023:23:1"},{"kind":"number","nodeType":"YulLiteral","src":"1048:2:1","type":"","value":"32"}],"functionName":{"name":"slt","nodeType":"YulIdentifier","src":"1019:3:1"},"nodeType":"YulFunctionCall","src":"1019:32:1"},"nodeType":"YulIf","src":"1016:2:1"},{"nodeType":"YulAssignment","src":"1087:39:1","value":{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"1116:9:1"}],"functionName":{"name":"abi_decode_address","nodeType":"YulIdentifier","src":"1097:18:1"},"nodeType":"YulFunctionCall","src":"1097:29:1"},"variableNames":[{"name":"value0","nodeType":"YulIdentifier","src":"1087:6:1"}]}]},"name":"abi_decode_tuple_t_address","nodeType":"YulFunctionDefinition","parameters":[{"name":"headStart","nodeType":"YulTypedName","src":"972:9:1","type":""},{"name":"dataEnd","nodeType":"YulTypedName","src":"983:7:1","type":""}],"returnVariables":[{"name":"value0","nodeType":"YulTypedName","src":"995:6:1","type":""}],"src":"936:196:1"},{"body":{"nodeType":"YulBlock","src":"1234:319:1","statements":[{"body":{"nodeType":"YulBlock","src":"1280:26:1","statements":[{"expression":{"arguments":[{"name":"value1","nodeType":"YulIdentifier","src":"1289:6:1"},{"name":"value1","nodeType":"YulIdentifier","src":"1297:6:1"}],"functionName":{"name":"revert","nodeType":"YulIdentifier","src":"1282:6:1"},"nodeType":"YulFunctionCall","src":"1282:22:1"},"nodeType":"YulExpressionStatement","src":"1282:22:1"}]},"condition":{"arguments":[{"arguments":[{"name":"dataEnd","nodeType":"YulIdentifier","src":"1255:7:1"},{"name":"headStart","nodeType":"YulIdentifier","src":"1264:9:1"}],"functionName":{"name":"sub","nodeType":"YulIdentifier","src":"1251:3:1"},"nodeType":"YulFunctionCall","src":"1251:23:1"},{"kind":"number","nodeType":"YulLiteral","src":"1276:2:1","type":"","value":"64"}],"functionName":{"name":"slt","nodeType":"YulIdentifier","src":"1247:3:1"},"nodeType":"YulFunctionCall","src":"1247:32:1"},"nodeType":"YulIf","src":"1244:2:1"},{"nodeType":"YulVariableDeclaration","src":"1315:37:1","value":{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"1342:9:1"}],"functionName":{"name":"calldataload","nodeType":"YulIdentifier","src":"1329:12:1"},"nodeType":"YulFunctionCall","src":"1329:23:1"},"variables":[{"name":"offset","nodeType":"YulTypedName","src":"1319:6:1","type":""}]},{"body":{"nodeType":"YulBlock","src":"1395:26:1","statements":[{"expression":{"arguments":[{"name":"value1","nodeType":"YulIdentifier","src":"1404:6:1"},{"name":"value1","nodeType":"YulIdentifier","src":"1412:6:1"}],"functionName":{"name":"revert","nodeType":"YulIdentifier","src":"1397:6:1"},"nodeType":"YulFunctionCall","src":"1397:22:1"},"nodeType":"YulExpressionStatement","src":"1397:22:1"}]},"condition":{"arguments":[{"name":"offset","nodeType":"YulIdentifier","src":"1367:6:1"},{"kind":"number","nodeType":"YulLiteral","src":"1375:18:1","type":"","value":"0xffffffffffffffff"}],"functionName":{"name":"gt","nodeType":"YulIdentifier","src":"1364:2:1"},"nodeType":"YulFunctionCall","src":"1364:30:1"},"nodeType":"YulIf","src":"1361:2:1"},{"nodeType":"YulAssignment","src":"1430:60:1","value":{"arguments":[{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"1462:9:1"},{"name":"offset","nodeType":"YulIdentifier","src":"1473:6:1"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"1458:3:1"},"nodeType":"YulFunctionCall","src":"1458:22:1"},{"name":"dataEnd","nodeType":"YulIdentifier","src":"1482:7:1"}],"functionName":{"name":"abi_decode_string","nodeType":"YulIdentifier","src":"1440:17:1"},"nodeType":"YulFunctionCall","src":"1440:50:1"},"variableNames":[{"name":"value0","nodeType":"YulIdentifier","src":"1430:6:1"}]},{"nodeType":"YulAssignment","src":"1499:48:1","value":{"arguments":[{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"1532:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"1543:2:1","type":"","value":"32"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"1528:3:1"},"nodeType":"YulFunctionCall","src":"1528:18:1"}],"functionName":{"name":"abi_decode_address","nodeType":"YulIdentifier","src":"1509:18:1"},"nodeType":"YulFunctionCall","src":"1509:38:1"},"variableNames":[{"name":"value1","nodeType":"YulIdentifier","src":"1499:6:1"}]}]},"name":"abi_decode_tuple_t_string_memory_ptrt_address","nodeType":"YulFunctionDefinition","parameters":[{"name":"headStart","nodeType":"YulTypedName","src":"1192:9:1","type":""},{"name":"dataEnd","nodeType":"YulTypedName","src":"1203:7:1","type":""}],"returnVariables":[{"name":"value0","nodeType":"YulTypedName","src":"1215:6:1","type":""},{"name":"value1","nodeType":"YulTypedName","src":"1223:6:1","type":""}],"src":"1137:416:1"},{"body":{"nodeType":"YulBlock","src":"1665:466:1","statements":[{"body":{"nodeType":"YulBlock","src":"1711:26:1","statements":[{"expression":{"arguments":[{"name":"value0","nodeType":"YulIdentifier","src":"1720:6:1"},{"name":"value0","nodeType":"YulIdentifier","src":"1728:6:1"}],"functionName":{"name":"revert","nodeType":"YulIdentifier","src":"1713:6:1"},"nodeType":"YulFunctionCall","src":"1713:22:1"},"nodeType":"YulExpressionStatement","src":"1713:22:1"}]},"condition":{"arguments":[{"arguments":[{"name":"dataEnd","nodeType":"YulIdentifier","src":"1686:7:1"},{"name":"headStart","nodeType":"YulIdentifier","src":"1695:9:1"}],"functionName":{"name":"sub","nodeType":"YulIdentifier","src":"1682:3:1"},"nodeType":"YulFunctionCall","src":"1682:23:1"},{"kind":"number","nodeType":"YulLiteral","src":"1707:2:1","type":"","value":"64"}],"functionName":{"name":"slt","nodeType":"YulIdentifier","src":"1678:3:1"},"nodeType":"YulFunctionCall","src":"1678:32:1"},"nodeType":"YulIf","src":"1675:2:1"},{"nodeType":"YulVariableDeclaration","src":"1746:37:1","value":{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"1773:9:1"}],"functionName":{"name":"calldataload","nodeType":"YulIdentifier","src":"1760:12:1"},"nodeType":"YulFunctionCall","src":"1760:23:1"},"variables":[{"name":"offset","nodeType":"YulTypedName","src":"1750:6:1","type":""}]},{"nodeType":"YulVariableDeclaration","src":"1792:28:1","value":{"kind":"number","nodeType":"YulLiteral","src":"1802:18:1","type":"","value":"0xffffffffffffffff"},"variables":[{"name":"_1","nodeType":"YulTypedName","src":"1796:2:1","type":""}]},{"body":{"nodeType":"YulBlock","src":"1847:26:1","statements":[{"expression":{"arguments":[{"name":"value0","nodeType":"YulIdentifier","src":"1856:6:1"},{"name":"value0","nodeType":"YulIdentifier","src":"1864:6:1"}],"functionName":{"name":"revert","nodeType":"YulIdentifier","src":"1849:6:1"},"nodeType":"YulFunctionCall","src":"1849:22:1"},"nodeType":"YulExpressionStatement","src":"1849:22:1"}]},"condition":{"arguments":[{"name":"offset","nodeType":"YulIdentifier","src":"1835:6:1"},{"name":"_1","nodeType":"YulIdentifier","src":"1843:2:1"}],"functionName":{"name":"gt","nodeType":"YulIdentifier","src":"1832:2:1"},"nodeType":"YulFunctionCall","src":"1832:14:1"},"nodeType":"YulIf","src":"1829:2:1"},{"nodeType":"YulAssignment","src":"1882:60:1","value":{"arguments":[{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"1914:9:1"},{"name":"offset","nodeType":"YulIdentifier","src":"1925:6:1"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"1910:3:1"},"nodeType":"YulFunctionCall","src":"1910:22:1"},{"name":"dataEnd","nodeType":"YulIdentifier","src":"1934:7:1"}],"functionName":{"name":"abi_decode_string","nodeType":"YulIdentifier","src":"1892:17:1"},"nodeType":"YulFunctionCall","src":"1892:50:1"},"variableNames":[{"name":"value0","nodeType":"YulIdentifier","src":"1882:6:1"}]},{"nodeType":"YulVariableDeclaration","src":"1951:48:1","value":{"arguments":[{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"1984:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"1995:2:1","type":"","value":"32"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"1980:3:1"},"nodeType":"YulFunctionCall","src":"1980:18:1"}],"functionName":{"name":"calldataload","nodeType":"YulIdentifier","src":"1967:12:1"},"nodeType":"YulFunctionCall","src":"1967:32:1"},"variables":[{"name":"offset_1","nodeType":"YulTypedName","src":"1955:8:1","type":""}]},{"body":{"nodeType":"YulBlock","src":"2028:26:1","statements":[{"expression":{"arguments":[{"name":"value1","nodeType":"YulIdentifier","src":"2037:6:1"},{"name":"value1","nodeType":"YulIdentifier","src":"2045:6:1"}],"functionName":{"name":"revert","nodeType":"YulIdentifier","src":"2030:6:1"},"nodeType":"YulFunctionCall","src":"2030:22:1"},"nodeType":"YulExpressionStatement","src":"2030:22:1"}]},"condition":{"arguments":[{"name":"offset_1","nodeType":"YulIdentifier","src":"2014:8:1"},{"name":"_1","nodeType":"YulIdentifier","src":"2024:2:1"}],"functionName":{"name":"gt","nodeType":"YulIdentifier","src":"2011:2:1"},"nodeType":"YulFunctionCall","src":"2011:16:1"},"nodeType":"YulIf","src":"2008:2:1"},{"nodeType":"YulAssignment","src":"2063:62:1","value":{"arguments":[{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"2095:9:1"},{"name":"offset_1","nodeType":"YulIdentifier","src":"2106:8:1"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"2091:3:1"},"nodeType":"YulFunctionCall","src":"2091:24:1"},{"name":"dataEnd","nodeType":"YulIdentifier","src":"2117:7:1"}],"functionName":{"name":"abi_decode_string","nodeType":"YulIdentifier","src":"2073:17:1"},"nodeType":"YulFunctionCall","src":"2073:52:1"},"variableNames":[{"name":"value1","nodeType":"YulIdentifier","src":"2063:6:1"}]}]},"name":"abi_decode_tuple_t_string_memory_ptrt_string_memory_ptr","nodeType":"YulFunctionDefinition","parameters":[{"name":"headStart","nodeType":"YulTypedName","src":"1623:9:1","type":""},{"name":"dataEnd","nodeType":"YulTypedName","src":"1634:7:1","type":""}],"returnVariables":[{"name":"value0","nodeType":"YulTypedName","src":"1646:6:1","type":""},{"name":"value1","nodeType":"YulTypedName","src":"1654:6:1","type":""}],"src":"1558:573:1"},{"body":{"nodeType":"YulBlock","src":"2206:120:1","statements":[{"body":{"nodeType":"YulBlock","src":"2252:26:1","statements":[{"expression":{"arguments":[{"name":"value0","nodeType":"YulIdentifier","src":"2261:6:1"},{"name":"value0","nodeType":"YulIdentifier","src":"2269:6:1"}],"functionName":{"name":"revert","nodeType":"YulIdentifier","src":"2254:6:1"},"nodeType":"YulFunctionCall","src":"2254:22:1"},"nodeType":"YulExpressionStatement","src":"2254:22:1"}]},"condition":{"arguments":[{"arguments":[{"name":"dataEnd","nodeType":"YulIdentifier","src":"2227:7:1"},{"name":"headStart","nodeType":"YulIdentifier","src":"2236:9:1"}],"functionName":{"name":"sub","nodeType":"YulIdentifier","src":"2223:3:1"},"nodeType":"YulFunctionCall","src":"2223:23:1"},{"kind":"number","nodeType":"YulLiteral","src":"2248:2:1","type":"","value":"32"}],"functionName":{"name":"slt","nodeType":"YulIdentifier","src":"2219:3:1"},"nodeType":"YulFunctionCall","src":"2219:32:1"},"nodeType":"YulIf","src":"2216:2:1"},{"nodeType":"YulAssignment","src":"2287:33:1","value":{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"2310:9:1"}],"functionName":{"name":"calldataload","nodeType":"YulIdentifier","src":"2297:12:1"},"nodeType":"YulFunctionCall","src":"2297:23:1"},"variableNames":[{"name":"value0","nodeType":"YulIdentifier","src":"2287:6:1"}]}]},"name":"abi_decode_tuple_t_uint256","nodeType":"YulFunctionDefinition","parameters":[{"name":"headStart","nodeType":"YulTypedName","src":"2172:9:1","type":""},{"name":"dataEnd","nodeType":"YulTypedName","src":"2183:7:1","type":""}],"returnVariables":[{"name":"value0","nodeType":"YulTypedName","src":"2195:6:1","type":""}],"src":"2136:190:1"},{"body":{"nodeType":"YulBlock","src":"2418:177:1","statements":[{"body":{"nodeType":"YulBlock","src":"2464:26:1","statements":[{"expression":{"arguments":[{"name":"value0","nodeType":"YulIdentifier","src":"2473:6:1"},{"name":"value0","nodeType":"YulIdentifier","src":"2481:6:1"}],"functionName":{"name":"revert","nodeType":"YulIdentifier","src":"2466:6:1"},"nodeType":"YulFunctionCall","src":"2466:22:1"},"nodeType":"YulExpressionStatement","src":"2466:22:1"}]},"condition":{"arguments":[{"arguments":[{"name":"dataEnd","nodeType":"YulIdentifier","src":"2439:7:1"},{"name":"headStart","nodeType":"YulIdentifier","src":"2448:9:1"}],"functionName":{"name":"sub","nodeType":"YulIdentifier","src":"2435:3:1"},"nodeType":"YulFunctionCall","src":"2435:23:1"},{"kind":"number","nodeType":"YulLiteral","src":"2460:2:1","type":"","value":"64"}],"functionName":{"name":"slt","nodeType":"YulIdentifier","src":"2431:3:1"},"nodeType":"YulFunctionCall","src":"2431:32:1"},"nodeType":"YulIf","src":"2428:2:1"},{"nodeType":"YulAssignment","src":"2499:33:1","value":{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"2522:9:1"}],"functionName":{"name":"calldataload","nodeType":"YulIdentifier","src":"2509:12:1"},"nodeType":"YulFunctionCall","src":"2509:23:1"},"variableNames":[{"name":"value0","nodeType":"YulIdentifier","src":"2499:6:1"}]},{"nodeType":"YulAssignment","src":"2541:48:1","value":{"arguments":[{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"2574:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"2585:2:1","type":"","value":"32"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"2570:3:1"},"nodeType":"YulFunctionCall","src":"2570:18:1"}],"functionName":{"name":"abi_decode_address","nodeType":"YulIdentifier","src":"2551:18:1"},"nodeType":"YulFunctionCall","src":"2551:38:1"},"variableNames":[{"name":"value1","nodeType":"YulIdentifier","src":"2541:6:1"}]}]},"name":"abi_decode_tuple_t_uint256t_address","nodeType":"YulFunctionDefinition","parameters":[{"name":"headStart","nodeType":"YulTypedName","src":"2376:9:1","type":""},{"name":"dataEnd","nodeType":"YulTypedName","src":"2387:7:1","type":""}],"returnVariables":[{"name":"value0","nodeType":"YulTypedName","src":"2399:6:1","type":""},{"name":"value1","nodeType":"YulTypedName","src":"2407:6:1","type":""}],"src":"2331:264:1"},{"body":{"nodeType":"YulBlock","src":"2644:60:1","statements":[{"expression":{"arguments":[{"name":"pos","nodeType":"YulIdentifier","src":"2661:3:1"},{"arguments":[{"name":"value","nodeType":"YulIdentifier","src":"2670:5:1"},{"arguments":[{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"2685:3:1","type":"","value":"160"},{"kind":"number","nodeType":"YulLiteral","src":"2690:1:1","type":"","value":"1"}],"functionName":{"name":"shl","nodeType":"YulIdentifier","src":"2681:3:1"},"nodeType":"YulFunctionCall","src":"2681:11:1"},{"kind":"number","nodeType":"YulLiteral","src":"2694:1:1","type":"","value":"1"}],"functionName":{"name":"sub","nodeType":"YulIdentifier","src":"2677:3:1"},"nodeType":"YulFunctionCall","src":"2677:19:1"}],"functionName":{"name":"and","nodeType":"YulIdentifier","src":"2666:3:1"},"nodeType":"YulFunctionCall","src":"2666:31:1"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"2654:6:1"},"nodeType":"YulFunctionCall","src":"2654:44:1"},"nodeType":"YulExpressionStatement","src":"2654:44:1"}]},"name":"abi_encode_address","nodeType":"YulFunctionDefinition","parameters":[{"name":"value","nodeType":"YulTypedName","src":"2628:5:1","type":""},{"name":"pos","nodeType":"YulTypedName","src":"2635:3:1","type":""}],"src":"2600:104:1"},{"body":{"nodeType":"YulBlock","src":"2770:402:1","statements":[{"nodeType":"YulVariableDeclaration","src":"2780:26:1","value":{"arguments":[{"name":"value","nodeType":"YulIdentifier","src":"2800:5:1"}],"functionName":{"name":"mload","nodeType":"YulIdentifier","src":"2794:5:1"},"nodeType":"YulFunctionCall","src":"2794:12:1"},"variables":[{"name":"length","nodeType":"YulTypedName","src":"2784:6:1","type":""}]},{"expression":{"arguments":[{"name":"pos","nodeType":"YulIdentifier","src":"2822:3:1"},{"name":"length","nodeType":"YulIdentifier","src":"2827:6:1"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"2815:6:1"},"nodeType":"YulFunctionCall","src":"2815:19:1"},"nodeType":"YulExpressionStatement","src":"2815:19:1"},{"nodeType":"YulVariableDeclaration","src":"2843:14:1","value":{"kind":"number","nodeType":"YulLiteral","src":"2853:4:1","type":"","value":"0x20"},"variables":[{"name":"_1","nodeType":"YulTypedName","src":"2847:2:1","type":""}]},{"nodeType":"YulAssignment","src":"2866:19:1","value":{"arguments":[{"name":"pos","nodeType":"YulIdentifier","src":"2877:3:1"},{"name":"_1","nodeType":"YulIdentifier","src":"2882:2:1"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"2873:3:1"},"nodeType":"YulFunctionCall","src":"2873:12:1"},"variableNames":[{"name":"pos","nodeType":"YulIdentifier","src":"2866:3:1"}]},{"nodeType":"YulVariableDeclaration","src":"2894:28:1","value":{"arguments":[{"name":"value","nodeType":"YulIdentifier","src":"2912:5:1"},{"name":"_1","nodeType":"YulIdentifier","src":"2919:2:1"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"2908:3:1"},"nodeType":"YulFunctionCall","src":"2908:14:1"},"variables":[{"name":"srcPtr","nodeType":"YulTypedName","src":"2898:6:1","type":""}]},{"nodeType":"YulVariableDeclaration","src":"2931:12:1","value":{"name":"end","nodeType":"YulIdentifier","src":"2940:3:1"},"variables":[{"name":"i","nodeType":"YulTypedName","src":"2935:1:1","type":""}]},{"body":{"nodeType":"YulBlock","src":"3001:146:1","statements":[{"expression":{"arguments":[{"name":"pos","nodeType":"YulIdentifier","src":"3022:3:1"},{"arguments":[{"arguments":[{"name":"srcPtr","nodeType":"YulIdentifier","src":"3037:6:1"}],"functionName":{"name":"mload","nodeType":"YulIdentifier","src":"3031:5:1"},"nodeType":"YulFunctionCall","src":"3031:13:1"},{"arguments":[{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"3054:3:1","type":"","value":"160"},{"kind":"number","nodeType":"YulLiteral","src":"3059:1:1","type":"","value":"1"}],"functionName":{"name":"shl","nodeType":"YulIdentifier","src":"3050:3:1"},"nodeType":"YulFunctionCall","src":"3050:11:1"},{"kind":"number","nodeType":"YulLiteral","src":"3063:1:1","type":"","value":"1"}],"functionName":{"name":"sub","nodeType":"YulIdentifier","src":"3046:3:1"},"nodeType":"YulFunctionCall","src":"3046:19:1"}],"functionName":{"name":"and","nodeType":"YulIdentifier","src":"3027:3:1"},"nodeType":"YulFunctionCall","src":"3027:39:1"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"3015:6:1"},"nodeType":"YulFunctionCall","src":"3015:52:1"},"nodeType":"YulExpressionStatement","src":"3015:52:1"},{"nodeType":"YulAssignment","src":"3080:19:1","value":{"arguments":[{"name":"pos","nodeType":"YulIdentifier","src":"3091:3:1"},{"name":"_1","nodeType":"YulIdentifier","src":"3096:2:1"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"3087:3:1"},"nodeType":"YulFunctionCall","src":"3087:12:1"},"variableNames":[{"name":"pos","nodeType":"YulIdentifier","src":"3080:3:1"}]},{"nodeType":"YulAssignment","src":"3112:25:1","value":{"arguments":[{"name":"srcPtr","nodeType":"YulIdentifier","src":"3126:6:1"},{"name":"_1","nodeType":"YulIdentifier","src":"3134:2:1"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"3122:3:1"},"nodeType":"YulFunctionCall","src":"3122:15:1"},"variableNames":[{"name":"srcPtr","nodeType":"YulIdentifier","src":"3112:6:1"}]}]},"condition":{"arguments":[{"name":"i","nodeType":"YulIdentifier","src":"2963:1:1"},{"name":"length","nodeType":"YulIdentifier","src":"2966:6:1"}],"functionName":{"name":"lt","nodeType":"YulIdentifier","src":"2960:2:1"},"nodeType":"YulFunctionCall","src":"2960:13:1"},"nodeType":"YulForLoop","post":{"nodeType":"YulBlock","src":"2974:18:1","statements":[{"nodeType":"YulAssignment","src":"2976:14:1","value":{"arguments":[{"name":"i","nodeType":"YulIdentifier","src":"2985:1:1"},{"kind":"number","nodeType":"YulLiteral","src":"2988:1:1","type":"","value":"1"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"2981:3:1"},"nodeType":"YulFunctionCall","src":"2981:9:1"},"variableNames":[{"name":"i","nodeType":"YulIdentifier","src":"2976:1:1"}]}]},"pre":{"nodeType":"YulBlock","src":"2956:3:1","statements":[]},"src":"2952:195:1"},{"nodeType":"YulAssignment","src":"3156:10:1","value":{"name":"pos","nodeType":"YulIdentifier","src":"3163:3:1"},"variableNames":[{"name":"end","nodeType":"YulIdentifier","src":"3156:3:1"}]}]},"name":"abi_encode_array_address_dyn","nodeType":"YulFunctionDefinition","parameters":[{"name":"value","nodeType":"YulTypedName","src":"2747:5:1","type":""},{"name":"pos","nodeType":"YulTypedName","src":"2754:3:1","type":""}],"returnVariables":[{"name":"end","nodeType":"YulTypedName","src":"2762:3:1","type":""}],"src":"2709:463:1"},{"body":{"nodeType":"YulBlock","src":"3227:426:1","statements":[{"nodeType":"YulVariableDeclaration","src":"3237:26:1","value":{"arguments":[{"name":"value","nodeType":"YulIdentifier","src":"3257:5:1"}],"functionName":{"name":"mload","nodeType":"YulIdentifier","src":"3251:5:1"},"nodeType":"YulFunctionCall","src":"3251:12:1"},"variables":[{"name":"length","nodeType":"YulTypedName","src":"3241:6:1","type":""}]},{"expression":{"arguments":[{"name":"pos","nodeType":"YulIdentifier","src":"3279:3:1"},{"name":"length","nodeType":"YulIdentifier","src":"3284:6:1"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"3272:6:1"},"nodeType":"YulFunctionCall","src":"3272:19:1"},"nodeType":"YulExpressionStatement","src":"3272:19:1"},{"nodeType":"YulVariableDeclaration","src":"3300:12:1","value":{"name":"end","nodeType":"YulIdentifier","src":"3309:3:1"},"variables":[{"name":"i","nodeType":"YulTypedName","src":"3304:1:1","type":""}]},{"body":{"nodeType":"YulBlock","src":"3373:110:1","statements":[{"nodeType":"YulVariableDeclaration","src":"3387:14:1","value":{"kind":"number","nodeType":"YulLiteral","src":"3397:4:1","type":"","value":"0x20"},"variables":[{"name":"_1","nodeType":"YulTypedName","src":"3391:2:1","type":""}]},{"expression":{"arguments":[{"arguments":[{"arguments":[{"name":"pos","nodeType":"YulIdentifier","src":"3429:3:1"},{"name":"i","nodeType":"YulIdentifier","src":"3434:1:1"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"3425:3:1"},"nodeType":"YulFunctionCall","src":"3425:11:1"},{"name":"_1","nodeType":"YulIdentifier","src":"3438:2:1"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"3421:3:1"},"nodeType":"YulFunctionCall","src":"3421:20:1"},{"arguments":[{"arguments":[{"arguments":[{"name":"value","nodeType":"YulIdentifier","src":"3457:5:1"},{"name":"i","nodeType":"YulIdentifier","src":"3464:1:1"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"3453:3:1"},"nodeType":"YulFunctionCall","src":"3453:13:1"},{"name":"_1","nodeType":"YulIdentifier","src":"3468:2:1"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"3449:3:1"},"nodeType":"YulFunctionCall","src":"3449:22:1"}],"functionName":{"name":"mload","nodeType":"YulIdentifier","src":"3443:5:1"},"nodeType":"YulFunctionCall","src":"3443:29:1"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"3414:6:1"},"nodeType":"YulFunctionCall","src":"3414:59:1"},"nodeType":"YulExpressionStatement","src":"3414:59:1"}]},"condition":{"arguments":[{"name":"i","nodeType":"YulIdentifier","src":"3332:1:1"},{"name":"length","nodeType":"YulIdentifier","src":"3335:6:1"}],"functionName":{"name":"lt","nodeType":"YulIdentifier","src":"3329:2:1"},"nodeType":"YulFunctionCall","src":"3329:13:1"},"nodeType":"YulForLoop","post":{"nodeType":"YulBlock","src":"3343:21:1","statements":[{"nodeType":"YulAssignment","src":"3345:17:1","value":{"arguments":[{"name":"i","nodeType":"YulIdentifier","src":"3354:1:1"},{"kind":"number","nodeType":"YulLiteral","src":"3357:4:1","type":"","value":"0x20"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"3350:3:1"},"nodeType":"YulFunctionCall","src":"3350:12:1"},"variableNames":[{"name":"i","nodeType":"YulIdentifier","src":"3345:1:1"}]}]},"pre":{"nodeType":"YulBlock","src":"3325:3:1","statements":[]},"src":"3321:162:1"},{"body":{"nodeType":"YulBlock","src":"3517:64:1","statements":[{"expression":{"arguments":[{"arguments":[{"arguments":[{"name":"pos","nodeType":"YulIdentifier","src":"3546:3:1"},{"name":"length","nodeType":"YulIdentifier","src":"3551:6:1"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"3542:3:1"},"nodeType":"YulFunctionCall","src":"3542:16:1"},{"kind":"number","nodeType":"YulLiteral","src":"3560:4:1","type":"","value":"0x20"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"3538:3:1"},"nodeType":"YulFunctionCall","src":"3538:27:1"},{"name":"end","nodeType":"YulIdentifier","src":"3567:3:1"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"3531:6:1"},"nodeType":"YulFunctionCall","src":"3531:40:1"},"nodeType":"YulExpressionStatement","src":"3531:40:1"}]},"condition":{"arguments":[{"name":"i","nodeType":"YulIdentifier","src":"3498:1:1"},{"name":"length","nodeType":"YulIdentifier","src":"3501:6:1"}],"functionName":{"name":"gt","nodeType":"YulIdentifier","src":"3495:2:1"},"nodeType":"YulFunctionCall","src":"3495:13:1"},"nodeType":"YulIf","src":"3492:2:1"},{"nodeType":"YulAssignment","src":"3590:57:1","value":{"arguments":[{"arguments":[{"name":"pos","nodeType":"YulIdentifier","src":"3605:3:1"},{"arguments":[{"arguments":[{"name":"length","nodeType":"YulIdentifier","src":"3618:6:1"},{"kind":"number","nodeType":"YulLiteral","src":"3626:2:1","type":"","value":"31"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"3614:3:1"},"nodeType":"YulFunctionCall","src":"3614:15:1"},{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"3635:2:1","type":"","value":"31"}],"functionName":{"name":"not","nodeType":"YulIdentifier","src":"3631:3:1"},"nodeType":"YulFunctionCall","src":"3631:7:1"}],"functionName":{"name":"and","nodeType":"YulIdentifier","src":"3610:3:1"},"nodeType":"YulFunctionCall","src":"3610:29:1"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"3601:3:1"},"nodeType":"YulFunctionCall","src":"3601:39:1"},{"kind":"number","nodeType":"YulLiteral","src":"3642:4:1","type":"","value":"0x20"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"3597:3:1"},"nodeType":"YulFunctionCall","src":"3597:50:1"},"variableNames":[{"name":"end","nodeType":"YulIdentifier","src":"3590:3:1"}]}]},"name":"abi_encode_string","nodeType":"YulFunctionDefinition","parameters":[{"name":"value","nodeType":"YulTypedName","src":"3204:5:1","type":""},{"name":"pos","nodeType":"YulTypedName","src":"3211:3:1","type":""}],"returnVariables":[{"name":"end","nodeType":"YulTypedName","src":"3219:3:1","type":""}],"src":"3177:476:1"},{"body":{"nodeType":"YulBlock","src":"3759:102:1","statements":[{"nodeType":"YulAssignment","src":"3769:26:1","value":{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"3781:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"3792:2:1","type":"","value":"32"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"3777:3:1"},"nodeType":"YulFunctionCall","src":"3777:18:1"},"variableNames":[{"name":"tail","nodeType":"YulIdentifier","src":"3769:4:1"}]},{"expression":{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"3811:9:1"},{"arguments":[{"name":"value0","nodeType":"YulIdentifier","src":"3826:6:1"},{"arguments":[{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"3842:3:1","type":"","value":"160"},{"kind":"number","nodeType":"YulLiteral","src":"3847:1:1","type":"","value":"1"}],"functionName":{"name":"shl","nodeType":"YulIdentifier","src":"3838:3:1"},"nodeType":"YulFunctionCall","src":"3838:11:1"},{"kind":"number","nodeType":"YulLiteral","src":"3851:1:1","type":"","value":"1"}],"functionName":{"name":"sub","nodeType":"YulIdentifier","src":"3834:3:1"},"nodeType":"YulFunctionCall","src":"3834:19:1"}],"functionName":{"name":"and","nodeType":"YulIdentifier","src":"3822:3:1"},"nodeType":"YulFunctionCall","src":"3822:32:1"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"3804:6:1"},"nodeType":"YulFunctionCall","src":"3804:51:1"},"nodeType":"YulExpressionStatement","src":"3804:51:1"}]},"name":"abi_encode_tuple_t_address__to_t_address__fromStack_reversed","nodeType":"YulFunctionDefinition","parameters":[{"name":"headStart","nodeType":"YulTypedName","src":"3728:9:1","type":""},{"name":"value0","nodeType":"YulTypedName","src":"3739:6:1","type":""}],"returnVariables":[{"name":"tail","nodeType":"YulTypedName","src":"3750:4:1","type":""}],"src":"3658:203:1"},{"body":{"nodeType":"YulBlock","src":"4037:227:1","statements":[{"expression":{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"4054:9:1"},{"arguments":[{"arguments":[{"name":"value0","nodeType":"YulIdentifier","src":"4079:6:1"}],"functionName":{"name":"iszero","nodeType":"YulIdentifier","src":"4072:6:1"},"nodeType":"YulFunctionCall","src":"4072:14:1"}],"functionName":{"name":"iszero","nodeType":"YulIdentifier","src":"4065:6:1"},"nodeType":"YulFunctionCall","src":"4065:22:1"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"4047:6:1"},"nodeType":"YulFunctionCall","src":"4047:41:1"},"nodeType":"YulExpressionStatement","src":"4047:41:1"},{"expression":{"arguments":[{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"4108:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"4119:2:1","type":"","value":"32"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"4104:3:1"},"nodeType":"YulFunctionCall","src":"4104:18:1"},{"kind":"number","nodeType":"YulLiteral","src":"4124:2:1","type":"","value":"96"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"4097:6:1"},"nodeType":"YulFunctionCall","src":"4097:30:1"},"nodeType":"YulExpressionStatement","src":"4097:30:1"},{"nodeType":"YulAssignment","src":"4136:53:1","value":{"arguments":[{"name":"value1","nodeType":"YulIdentifier","src":"4162:6:1"},{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"4174:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"4185:2:1","type":"","value":"96"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"4170:3:1"},"nodeType":"YulFunctionCall","src":"4170:18:1"}],"functionName":{"name":"abi_encode_string","nodeType":"YulIdentifier","src":"4144:17:1"},"nodeType":"YulFunctionCall","src":"4144:45:1"},"variableNames":[{"name":"tail","nodeType":"YulIdentifier","src":"4136:4:1"}]},{"expression":{"arguments":[{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"4209:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"4220:2:1","type":"","value":"64"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"4205:3:1"},"nodeType":"YulFunctionCall","src":"4205:18:1"},{"arguments":[{"name":"value2","nodeType":"YulIdentifier","src":"4229:6:1"},{"arguments":[{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"4245:3:1","type":"","value":"160"},{"kind":"number","nodeType":"YulLiteral","src":"4250:1:1","type":"","value":"1"}],"functionName":{"name":"shl","nodeType":"YulIdentifier","src":"4241:3:1"},"nodeType":"YulFunctionCall","src":"4241:11:1"},{"kind":"number","nodeType":"YulLiteral","src":"4254:1:1","type":"","value":"1"}],"functionName":{"name":"sub","nodeType":"YulIdentifier","src":"4237:3:1"},"nodeType":"YulFunctionCall","src":"4237:19:1"}],"functionName":{"name":"and","nodeType":"YulIdentifier","src":"4225:3:1"},"nodeType":"YulFunctionCall","src":"4225:32:1"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"4198:6:1"},"nodeType":"YulFunctionCall","src":"4198:60:1"},"nodeType":"YulExpressionStatement","src":"4198:60:1"}]},"name":"abi_encode_tuple_t_bool_t_string_memory_ptr_t_address__to_t_bool_t_string_memory_ptr_t_address__fromStack_reversed","nodeType":"YulFunctionDefinition","parameters":[{"name":"headStart","nodeType":"YulTypedName","src":"3990:9:1","type":""},{"name":"value2","nodeType":"YulTypedName","src":"4001:6:1","type":""},{"name":"value1","nodeType":"YulTypedName","src":"4009:6:1","type":""},{"name":"value0","nodeType":"YulTypedName","src":"4017:6:1","type":""}],"returnVariables":[{"name":"tail","nodeType":"YulTypedName","src":"4028:4:1","type":""}],"src":"3866:398:1"},{"body":{"nodeType":"YulBlock","src":"4418:168:1","statements":[{"expression":{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"4435:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"4446:2:1","type":"","value":"64"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"4428:6:1"},"nodeType":"YulFunctionCall","src":"4428:21:1"},"nodeType":"YulExpressionStatement","src":"4428:21:1"},{"nodeType":"YulAssignment","src":"4458:53:1","value":{"arguments":[{"name":"value0","nodeType":"YulIdentifier","src":"4484:6:1"},{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"4496:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"4507:2:1","type":"","value":"64"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"4492:3:1"},"nodeType":"YulFunctionCall","src":"4492:18:1"}],"functionName":{"name":"abi_encode_string","nodeType":"YulIdentifier","src":"4466:17:1"},"nodeType":"YulFunctionCall","src":"4466:45:1"},"variableNames":[{"name":"tail","nodeType":"YulIdentifier","src":"4458:4:1"}]},{"expression":{"arguments":[{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"4531:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"4542:2:1","type":"","value":"32"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"4527:3:1"},"nodeType":"YulFunctionCall","src":"4527:18:1"},{"arguments":[{"name":"value1","nodeType":"YulIdentifier","src":"4551:6:1"},{"arguments":[{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"4567:3:1","type":"","value":"160"},{"kind":"number","nodeType":"YulLiteral","src":"4572:1:1","type":"","value":"1"}],"functionName":{"name":"shl","nodeType":"YulIdentifier","src":"4563:3:1"},"nodeType":"YulFunctionCall","src":"4563:11:1"},{"kind":"number","nodeType":"YulLiteral","src":"4576:1:1","type":"","value":"1"}],"functionName":{"name":"sub","nodeType":"YulIdentifier","src":"4559:3:1"},"nodeType":"YulFunctionCall","src":"4559:19:1"}],"functionName":{"name":"and","nodeType":"YulIdentifier","src":"4547:3:1"},"nodeType":"YulFunctionCall","src":"4547:32:1"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"4520:6:1"},"nodeType":"YulFunctionCall","src":"4520:60:1"},"nodeType":"YulExpressionStatement","src":"4520:60:1"}]},"name":"abi_encode_tuple_t_string_memory_ptr_t_address__to_t_string_memory_ptr_t_address__fromStack_reversed","nodeType":"YulFunctionDefinition","parameters":[{"name":"headStart","nodeType":"YulTypedName","src":"4379:9:1","type":""},{"name":"value1","nodeType":"YulTypedName","src":"4390:6:1","type":""},{"name":"value0","nodeType":"YulTypedName","src":"4398:6:1","type":""}],"returnVariables":[{"name":"tail","nodeType":"YulTypedName","src":"4409:4:1","type":""}],"src":"4269:317:1"},{"body":{"nodeType":"YulBlock","src":"4765:177:1","statements":[{"expression":{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"4782:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"4793:2:1","type":"","value":"32"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"4775:6:1"},"nodeType":"YulFunctionCall","src":"4775:21:1"},"nodeType":"YulExpressionStatement","src":"4775:21:1"},{"expression":{"arguments":[{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"4816:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"4827:2:1","type":"","value":"32"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"4812:3:1"},"nodeType":"YulFunctionCall","src":"4812:18:1"},{"kind":"number","nodeType":"YulLiteral","src":"4832:2:1","type":"","value":"27"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"4805:6:1"},"nodeType":"YulFunctionCall","src":"4805:30:1"},"nodeType":"YulExpressionStatement","src":"4805:30:1"},{"expression":{"arguments":[{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"4855:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"4866:2:1","type":"","value":"64"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"4851:3:1"},"nodeType":"YulFunctionCall","src":"4851:18:1"},{"kind":"string","nodeType":"YulLiteral","src":"4871:29:1","type":"","value":"You are not a Manufacturer!"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"4844:6:1"},"nodeType":"YulFunctionCall","src":"4844:57:1"},"nodeType":"YulExpressionStatement","src":"4844:57:1"},{"nodeType":"YulAssignment","src":"4910:26:1","value":{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"4922:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"4933:2:1","type":"","value":"96"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"4918:3:1"},"nodeType":"YulFunctionCall","src":"4918:18:1"},"variableNames":[{"name":"tail","nodeType":"YulIdentifier","src":"4910:4:1"}]}]},"name":"abi_encode_tuple_t_stringliteral_92d760f38db1287b6ef919dfc1c447222acc05c05ad112f6a45630b9d3d328ce__to_t_string_memory_ptr__fromStack_reversed","nodeType":"YulFunctionDefinition","parameters":[{"name":"headStart","nodeType":"YulTypedName","src":"4742:9:1","type":""}],"returnVariables":[{"name":"tail","nodeType":"YulTypedName","src":"4756:4:1","type":""}],"src":"4591:351:1"},{"body":{"nodeType":"YulBlock","src":"5121:240:1","statements":[{"expression":{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"5138:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"5149:2:1","type":"","value":"32"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"5131:6:1"},"nodeType":"YulFunctionCall","src":"5131:21:1"},"nodeType":"YulExpressionStatement","src":"5131:21:1"},{"expression":{"arguments":[{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"5172:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"5183:2:1","type":"","value":"32"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"5168:3:1"},"nodeType":"YulFunctionCall","src":"5168:18:1"},{"kind":"number","nodeType":"YulLiteral","src":"5188:2:1","type":"","value":"50"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"5161:6:1"},"nodeType":"YulFunctionCall","src":"5161:30:1"},"nodeType":"YulExpressionStatement","src":"5161:30:1"},{"expression":{"arguments":[{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"5211:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"5222:2:1","type":"","value":"64"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"5207:3:1"},"nodeType":"YulFunctionCall","src":"5207:18:1"},{"kind":"string","nodeType":"YulLiteral","src":"5227:34:1","type":"","value":"Only owner is authorised to crea"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"5200:6:1"},"nodeType":"YulFunctionCall","src":"5200:62:1"},"nodeType":"YulExpressionStatement","src":"5200:62:1"},{"expression":{"arguments":[{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"5282:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"5293:2:1","type":"","value":"96"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"5278:3:1"},"nodeType":"YulFunctionCall","src":"5278:18:1"},{"kind":"string","nodeType":"YulLiteral","src":"5298:20:1","type":"","value":"te a manufacturer!"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"5271:6:1"},"nodeType":"YulFunctionCall","src":"5271:48:1"},"nodeType":"YulExpressionStatement","src":"5271:48:1"},{"nodeType":"YulAssignment","src":"5328:27:1","value":{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"5340:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"5351:3:1","type":"","value":"128"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"5336:3:1"},"nodeType":"YulFunctionCall","src":"5336:19:1"},"variableNames":[{"name":"tail","nodeType":"YulIdentifier","src":"5328:4:1"}]}]},"name":"abi_encode_tuple_t_stringliteral_e8ca55ff63d4e9a0d5ab58fb91b6bf7541fbf4216e172276d98a6990a98473ed__to_t_string_memory_ptr__fromStack_reversed","nodeType":"YulFunctionDefinition","parameters":[{"name":"headStart","nodeType":"YulTypedName","src":"5098:9:1","type":""}],"returnVariables":[{"name":"tail","nodeType":"YulTypedName","src":"5112:4:1","type":""}],"src":"4947:414:1"},{"body":{"nodeType":"YulBlock","src":"5540:164:1","statements":[{"expression":{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"5557:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"5568:2:1","type":"","value":"32"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"5550:6:1"},"nodeType":"YulFunctionCall","src":"5550:21:1"},"nodeType":"YulExpressionStatement","src":"5550:21:1"},{"expression":{"arguments":[{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"5591:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"5602:2:1","type":"","value":"32"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"5587:3:1"},"nodeType":"YulFunctionCall","src":"5587:18:1"},{"kind":"number","nodeType":"YulLiteral","src":"5607:2:1","type":"","value":"14"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"5580:6:1"},"nodeType":"YulFunctionCall","src":"5580:30:1"},"nodeType":"YulExpressionStatement","src":"5580:30:1"},{"expression":{"arguments":[{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"5630:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"5641:2:1","type":"","value":"64"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"5626:3:1"},"nodeType":"YulFunctionCall","src":"5626:18:1"},{"kind":"string","nodeType":"YulLiteral","src":"5646:16:1","type":"","value":"Not authorized"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"5619:6:1"},"nodeType":"YulFunctionCall","src":"5619:44:1"},"nodeType":"YulExpressionStatement","src":"5619:44:1"},{"nodeType":"YulAssignment","src":"5672:26:1","value":{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"5684:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"5695:2:1","type":"","value":"96"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"5680:3:1"},"nodeType":"YulFunctionCall","src":"5680:18:1"},"variableNames":[{"name":"tail","nodeType":"YulIdentifier","src":"5672:4:1"}]}]},"name":"abi_encode_tuple_t_stringliteral_fac3bac318c0d00994f57b0f2f4c643c313072b71db2302bf4b900309cc50b36__to_t_string_memory_ptr__fromStack_reversed","nodeType":"YulFunctionDefinition","parameters":[{"name":"headStart","nodeType":"YulTypedName","src":"5517:9:1","type":""}],"returnVariables":[{"name":"tail","nodeType":"YulTypedName","src":"5531:4:1","type":""}],"src":"5366:338:1"},{"body":{"nodeType":"YulBlock","src":"5856:939:1","statements":[{"expression":{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"5873:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"5884:2:1","type":"","value":"32"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"5866:6:1"},"nodeType":"YulFunctionCall","src":"5866:21:1"},"nodeType":"YulExpressionStatement","src":"5866:21:1"},{"expression":{"arguments":[{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"5907:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"5918:2:1","type":"","value":"32"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"5903:3:1"},"nodeType":"YulFunctionCall","src":"5903:18:1"},{"arguments":[{"arguments":[{"arguments":[{"name":"value0","nodeType":"YulIdentifier","src":"5943:6:1"}],"functionName":{"name":"mload","nodeType":"YulIdentifier","src":"5937:5:1"},"nodeType":"YulFunctionCall","src":"5937:13:1"}],"functionName":{"name":"iszero","nodeType":"YulIdentifier","src":"5930:6:1"},"nodeType":"YulFunctionCall","src":"5930:21:1"}],"functionName":{"name":"iszero","nodeType":"YulIdentifier","src":"5923:6:1"},"nodeType":"YulFunctionCall","src":"5923:29:1"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"5896:6:1"},"nodeType":"YulFunctionCall","src":"5896:57:1"},"nodeType":"YulExpressionStatement","src":"5896:57:1"},{"expression":{"arguments":[{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"5973:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"5984:2:1","type":"","value":"64"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"5969:3:1"},"nodeType":"YulFunctionCall","src":"5969:18:1"},{"arguments":[{"arguments":[{"name":"value0","nodeType":"YulIdentifier","src":"5999:6:1"},{"kind":"number","nodeType":"YulLiteral","src":"6007:2:1","type":"","value":"32"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"5995:3:1"},"nodeType":"YulFunctionCall","src":"5995:15:1"}],"functionName":{"name":"mload","nodeType":"YulIdentifier","src":"5989:5:1"},"nodeType":"YulFunctionCall","src":"5989:22:1"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"5962:6:1"},"nodeType":"YulFunctionCall","src":"5962:50:1"},"nodeType":"YulExpressionStatement","src":"5962:50:1"},{"nodeType":"YulVariableDeclaration","src":"6021:42:1","value":{"arguments":[{"arguments":[{"name":"value0","nodeType":"YulIdentifier","src":"6051:6:1"},{"kind":"number","nodeType":"YulLiteral","src":"6059:2:1","type":"","value":"64"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"6047:3:1"},"nodeType":"YulFunctionCall","src":"6047:15:1"}],"functionName":{"name":"mload","nodeType":"YulIdentifier","src":"6041:5:1"},"nodeType":"YulFunctionCall","src":"6041:22:1"},"variables":[{"name":"memberValue0","nodeType":"YulTypedName","src":"6025:12:1","type":""}]},{"expression":{"arguments":[{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"6083:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"6094:2:1","type":"","value":"96"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"6079:3:1"},"nodeType":"YulFunctionCall","src":"6079:18:1"},{"kind":"number","nodeType":"YulLiteral","src":"6099:4:1","type":"","value":"0xe0"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"6072:6:1"},"nodeType":"YulFunctionCall","src":"6072:32:1"},"nodeType":"YulExpressionStatement","src":"6072:32:1"},{"nodeType":"YulVariableDeclaration","src":"6113:66:1","value":{"arguments":[{"name":"memberValue0","nodeType":"YulIdentifier","src":"6145:12:1"},{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"6163:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"6174:3:1","type":"","value":"256"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"6159:3:1"},"nodeType":"YulFunctionCall","src":"6159:19:1"}],"functionName":{"name":"abi_encode_string","nodeType":"YulIdentifier","src":"6127:17:1"},"nodeType":"YulFunctionCall","src":"6127:52:1"},"variables":[{"name":"tail_1","nodeType":"YulTypedName","src":"6117:6:1","type":""}]},{"nodeType":"YulVariableDeclaration","src":"6188:44:1","value":{"arguments":[{"arguments":[{"name":"value0","nodeType":"YulIdentifier","src":"6220:6:1"},{"kind":"number","nodeType":"YulLiteral","src":"6228:2:1","type":"","value":"96"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"6216:3:1"},"nodeType":"YulFunctionCall","src":"6216:15:1"}],"functionName":{"name":"mload","nodeType":"YulIdentifier","src":"6210:5:1"},"nodeType":"YulFunctionCall","src":"6210:22:1"},"variables":[{"name":"memberValue0_1","nodeType":"YulTypedName","src":"6192:14:1","type":""}]},{"nodeType":"YulVariableDeclaration","src":"6241:17:1","value":{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"6255:2:1","type":"","value":"31"}],"functionName":{"name":"not","nodeType":"YulIdentifier","src":"6251:3:1"},"nodeType":"YulFunctionCall","src":"6251:7:1"},"variables":[{"name":"_1","nodeType":"YulTypedName","src":"6245:2:1","type":""}]},{"expression":{"arguments":[{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"6278:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"6289:3:1","type":"","value":"128"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"6274:3:1"},"nodeType":"YulFunctionCall","src":"6274:19:1"},{"arguments":[{"arguments":[{"name":"tail_1","nodeType":"YulIdentifier","src":"6303:6:1"},{"name":"headStart","nodeType":"YulIdentifier","src":"6311:9:1"}],"functionName":{"name":"sub","nodeType":"YulIdentifier","src":"6299:3:1"},"nodeType":"YulFunctionCall","src":"6299:22:1"},{"name":"_1","nodeType":"YulIdentifier","src":"6323:2:1"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"6295:3:1"},"nodeType":"YulFunctionCall","src":"6295:31:1"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"6267:6:1"},"nodeType":"YulFunctionCall","src":"6267:60:1"},"nodeType":"YulExpressionStatement","src":"6267:60:1"},{"nodeType":"YulVariableDeclaration","src":"6336:55:1","value":{"arguments":[{"name":"memberValue0_1","nodeType":"YulIdentifier","src":"6368:14:1"},{"name":"tail_1","nodeType":"YulIdentifier","src":"6384:6:1"}],"functionName":{"name":"abi_encode_string","nodeType":"YulIdentifier","src":"6350:17:1"},"nodeType":"YulFunctionCall","src":"6350:41:1"},"variables":[{"name":"tail_2","nodeType":"YulTypedName","src":"6340:6:1","type":""}]},{"expression":{"arguments":[{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"6411:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"6422:3:1","type":"","value":"160"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"6407:3:1"},"nodeType":"YulFunctionCall","src":"6407:19:1"},{"arguments":[{"arguments":[{"arguments":[{"name":"value0","nodeType":"YulIdentifier","src":"6442:6:1"},{"kind":"number","nodeType":"YulLiteral","src":"6450:3:1","type":"","value":"128"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"6438:3:1"},"nodeType":"YulFunctionCall","src":"6438:16:1"}],"functionName":{"name":"mload","nodeType":"YulIdentifier","src":"6432:5:1"},"nodeType":"YulFunctionCall","src":"6432:23:1"},{"arguments":[{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"6465:3:1","type":"","value":"160"},{"kind":"number","nodeType":"YulLiteral","src":"6470:1:1","type":"","value":"1"}],"functionName":{"name":"shl","nodeType":"YulIdentifier","src":"6461:3:1"},"nodeType":"YulFunctionCall","src":"6461:11:1"},{"kind":"number","nodeType":"YulLiteral","src":"6474:1:1","type":"","value":"1"}],"functionName":{"name":"sub","nodeType":"YulIdentifier","src":"6457:3:1"},"nodeType":"YulFunctionCall","src":"6457:19:1"}],"functionName":{"name":"and","nodeType":"YulIdentifier","src":"6428:3:1"},"nodeType":"YulFunctionCall","src":"6428:49:1"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"6400:6:1"},"nodeType":"YulFunctionCall","src":"6400:78:1"},"nodeType":"YulExpressionStatement","src":"6400:78:1"},{"nodeType":"YulVariableDeclaration","src":"6487:45:1","value":{"arguments":[{"arguments":[{"name":"value0","nodeType":"YulIdentifier","src":"6519:6:1"},{"kind":"number","nodeType":"YulLiteral","src":"6527:3:1","type":"","value":"160"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"6515:3:1"},"nodeType":"YulFunctionCall","src":"6515:16:1"}],"functionName":{"name":"mload","nodeType":"YulIdentifier","src":"6509:5:1"},"nodeType":"YulFunctionCall","src":"6509:23:1"},"variables":[{"name":"memberValue0_2","nodeType":"YulTypedName","src":"6491:14:1","type":""}]},{"expression":{"arguments":[{"name":"memberValue0_2","nodeType":"YulIdentifier","src":"6560:14:1"},{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"6580:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"6591:3:1","type":"","value":"192"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"6576:3:1"},"nodeType":"YulFunctionCall","src":"6576:19:1"}],"functionName":{"name":"abi_encode_address","nodeType":"YulIdentifier","src":"6541:18:1"},"nodeType":"YulFunctionCall","src":"6541:55:1"},"nodeType":"YulExpressionStatement","src":"6541:55:1"},{"nodeType":"YulVariableDeclaration","src":"6605:45:1","value":{"arguments":[{"arguments":[{"name":"value0","nodeType":"YulIdentifier","src":"6637:6:1"},{"kind":"number","nodeType":"YulLiteral","src":"6645:3:1","type":"","value":"192"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"6633:3:1"},"nodeType":"YulFunctionCall","src":"6633:16:1"}],"functionName":{"name":"mload","nodeType":"YulIdentifier","src":"6627:5:1"},"nodeType":"YulFunctionCall","src":"6627:23:1"},"variables":[{"name":"memberValue0_3","nodeType":"YulTypedName","src":"6609:14:1","type":""}]},{"expression":{"arguments":[{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"6670:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"6681:4:1","type":"","value":"0xe0"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"6666:3:1"},"nodeType":"YulFunctionCall","src":"6666:20:1"},{"arguments":[{"arguments":[{"name":"tail_2","nodeType":"YulIdentifier","src":"6696:6:1"},{"name":"headStart","nodeType":"YulIdentifier","src":"6704:9:1"}],"functionName":{"name":"sub","nodeType":"YulIdentifier","src":"6692:3:1"},"nodeType":"YulFunctionCall","src":"6692:22:1"},{"name":"_1","nodeType":"YulIdentifier","src":"6716:2:1"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"6688:3:1"},"nodeType":"YulFunctionCall","src":"6688:31:1"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"6659:6:1"},"nodeType":"YulFunctionCall","src":"6659:61:1"},"nodeType":"YulExpressionStatement","src":"6659:61:1"},{"nodeType":"YulAssignment","src":"6729:60:1","value":{"arguments":[{"name":"memberValue0_3","nodeType":"YulIdentifier","src":"6766:14:1"},{"name":"tail_2","nodeType":"YulIdentifier","src":"6782:6:1"}],"functionName":{"name":"abi_encode_array_address_dyn","nodeType":"YulIdentifier","src":"6737:28:1"},"nodeType":"YulFunctionCall","src":"6737:52:1"},"variableNames":[{"name":"tail","nodeType":"YulIdentifier","src":"6729:4:1"}]}]},"name":"abi_encode_tuple_t_struct$_Product_$29_memory_ptr__to_t_struct$_Product_$29_memory_ptr__fromStack_reversed","nodeType":"YulFunctionDefinition","parameters":[{"name":"headStart","nodeType":"YulTypedName","src":"5825:9:1","type":""},{"name":"value0","nodeType":"YulTypedName","src":"5836:6:1","type":""}],"returnVariables":[{"name":"tail","nodeType":"YulTypedName","src":"5847:4:1","type":""}],"src":"5709:1086:1"},{"body":{"nodeType":"YulBlock","src":"6929:145:1","statements":[{"nodeType":"YulAssignment","src":"6939:26:1","value":{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"6951:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"6962:2:1","type":"","value":"64"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"6947:3:1"},"nodeType":"YulFunctionCall","src":"6947:18:1"},"variableNames":[{"name":"tail","nodeType":"YulIdentifier","src":"6939:4:1"}]},{"expression":{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"6981:9:1"},{"name":"value0","nodeType":"YulIdentifier","src":"6992:6:1"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"6974:6:1"},"nodeType":"YulFunctionCall","src":"6974:25:1"},"nodeType":"YulExpressionStatement","src":"6974:25:1"},{"expression":{"arguments":[{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"7019:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"7030:2:1","type":"","value":"32"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"7015:3:1"},"nodeType":"YulFunctionCall","src":"7015:18:1"},{"arguments":[{"name":"value1","nodeType":"YulIdentifier","src":"7039:6:1"},{"arguments":[{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"7055:3:1","type":"","value":"160"},{"kind":"number","nodeType":"YulLiteral","src":"7060:1:1","type":"","value":"1"}],"functionName":{"name":"shl","nodeType":"YulIdentifier","src":"7051:3:1"},"nodeType":"YulFunctionCall","src":"7051:11:1"},{"kind":"number","nodeType":"YulLiteral","src":"7064:1:1","type":"","value":"1"}],"functionName":{"name":"sub","nodeType":"YulIdentifier","src":"7047:3:1"},"nodeType":"YulFunctionCall","src":"7047:19:1"}],"functionName":{"name":"and","nodeType":"YulIdentifier","src":"7035:3:1"},"nodeType":"YulFunctionCall","src":"7035:32:1"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"7008:6:1"},"nodeType":"YulFunctionCall","src":"7008:60:1"},"nodeType":"YulExpressionStatement","src":"7008:60:1"}]},"name":"abi_encode_tuple_t_uint256_t_address__to_t_uint256_t_address__fromStack_reversed","nodeType":"YulFunctionDefinition","parameters":[{"name":"headStart","nodeType":"YulTypedName","src":"6890:9:1","type":""},{"name":"value1","nodeType":"YulTypedName","src":"6901:6:1","type":""},{"name":"value0","nodeType":"YulTypedName","src":"6909:6:1","type":""}],"returnVariables":[{"name":"tail","nodeType":"YulTypedName","src":"6920:4:1","type":""}],"src":"6800:274:1"},{"body":{"nodeType":"YulBlock","src":"7128:76:1","statements":[{"body":{"nodeType":"YulBlock","src":"7150:22:1","statements":[{"expression":{"arguments":[],"functionName":{"name":"panic_error_0x11","nodeType":"YulIdentifier","src":"7152:16:1"},"nodeType":"YulFunctionCall","src":"7152:18:1"},"nodeType":"YulExpressionStatement","src":"7152:18:1"}]},"condition":{"arguments":[{"name":"x","nodeType":"YulIdentifier","src":"7144:1:1"},{"name":"y","nodeType":"YulIdentifier","src":"7147:1:1"}],"functionName":{"name":"lt","nodeType":"YulIdentifier","src":"7141:2:1"},"nodeType":"YulFunctionCall","src":"7141:8:1"},"nodeType":"YulIf","src":"7138:2:1"},{"nodeType":"YulAssignment","src":"7181:17:1","value":{"arguments":[{"name":"x","nodeType":"YulIdentifier","src":"7193:1:1"},{"name":"y","nodeType":"YulIdentifier","src":"7196:1:1"}],"functionName":{"name":"sub","nodeType":"YulIdentifier","src":"7189:3:1"},"nodeType":"YulFunctionCall","src":"7189:9:1"},"variableNames":[{"name":"diff","nodeType":"YulIdentifier","src":"7181:4:1"}]}]},"name":"checked_sub_t_uint256","nodeType":"YulFunctionDefinition","parameters":[{"name":"x","nodeType":"YulTypedName","src":"7110:1:1","type":""},{"name":"y","nodeType":"YulTypedName","src":"7113:1:1","type":""}],"returnVariables":[{"name":"diff","nodeType":"YulTypedName","src":"7119:4:1","type":""}],"src":"7079:125:1"},{"body":{"nodeType":"YulBlock","src":"7264:325:1","statements":[{"nodeType":"YulAssignment","src":"7274:22:1","value":{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"7288:1:1","type":"","value":"1"},{"name":"data","nodeType":"YulIdentifier","src":"7291:4:1"}],"functionName":{"name":"shr","nodeType":"YulIdentifier","src":"7284:3:1"},"nodeType":"YulFunctionCall","src":"7284:12:1"},"variableNames":[{"name":"length","nodeType":"YulIdentifier","src":"7274:6:1"}]},{"nodeType":"YulVariableDeclaration","src":"7305:38:1","value":{"arguments":[{"name":"data","nodeType":"YulIdentifier","src":"7335:4:1"},{"kind":"number","nodeType":"YulLiteral","src":"7341:1:1","type":"","value":"1"}],"functionName":{"name":"and","nodeType":"YulIdentifier","src":"7331:3:1"},"nodeType":"YulFunctionCall","src":"7331:12:1"},"variables":[{"name":"outOfPlaceEncoding","nodeType":"YulTypedName","src":"7309:18:1","type":""}]},{"body":{"nodeType":"YulBlock","src":"7382:31:1","statements":[{"nodeType":"YulAssignment","src":"7384:27:1","value":{"arguments":[{"name":"length","nodeType":"YulIdentifier","src":"7398:6:1"},{"kind":"number","nodeType":"YulLiteral","src":"7406:4:1","type":"","value":"0x7f"}],"functionName":{"name":"and","nodeType":"YulIdentifier","src":"7394:3:1"},"nodeType":"YulFunctionCall","src":"7394:17:1"},"variableNames":[{"name":"length","nodeType":"YulIdentifier","src":"7384:6:1"}]}]},"condition":{"arguments":[{"name":"outOfPlaceEncoding","nodeType":"YulIdentifier","src":"7362:18:1"}],"functionName":{"name":"iszero","nodeType":"YulIdentifier","src":"7355:6:1"},"nodeType":"YulFunctionCall","src":"7355:26:1"},"nodeType":"YulIf","src":"7352:2:1"},{"body":{"nodeType":"YulBlock","src":"7472:111:1","statements":[{"expression":{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"7493:1:1","type":"","value":"0"},{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"7500:3:1","type":"","value":"224"},{"kind":"number","nodeType":"YulLiteral","src":"7505:10:1","type":"","value":"0x4e487b71"}],"functionName":{"name":"shl","nodeType":"YulIdentifier","src":"7496:3:1"},"nodeType":"YulFunctionCall","src":"7496:20:1"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"7486:6:1"},"nodeType":"YulFunctionCall","src":"7486:31:1"},"nodeType":"YulExpressionStatement","src":"7486:31:1"},{"expression":{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"7537:1:1","type":"","value":"4"},{"kind":"number","nodeType":"YulLiteral","src":"7540:4:1","type":"","value":"0x22"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"7530:6:1"},"nodeType":"YulFunctionCall","src":"7530:15:1"},"nodeType":"YulExpressionStatement","src":"7530:15:1"},{"expression":{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"7565:1:1","type":"","value":"0"},{"kind":"number","nodeType":"YulLiteral","src":"7568:4:1","type":"","value":"0x24"}],"functionName":{"name":"revert","nodeType":"YulIdentifier","src":"7558:6:1"},"nodeType":"YulFunctionCall","src":"7558:15:1"},"nodeType":"YulExpressionStatement","src":"7558:15:1"}]},"condition":{"arguments":[{"name":"outOfPlaceEncoding","nodeType":"YulIdentifier","src":"7428:18:1"},{"arguments":[{"name":"length","nodeType":"YulIdentifier","src":"7451:6:1"},{"kind":"number","nodeType":"YulLiteral","src":"7459:2:1","type":"","value":"32"}],"functionName":{"name":"lt","nodeType":"YulIdentifier","src":"7448:2:1"},"nodeType":"YulFunctionCall","src":"7448:14:1"}],"functionName":{"name":"eq","nodeType":"YulIdentifier","src":"7425:2:1"},"nodeType":"YulFunctionCall","src":"7425:38:1"},"nodeType":"YulIf","src":"7422:2:1"}]},"name":"extract_byte_array_length","nodeType":"YulFunctionDefinition","parameters":[{"name":"data","nodeType":"YulTypedName","src":"7244:4:1","type":""}],"returnVariables":[{"name":"length","nodeType":"YulTypedName","src":"7253:6:1","type":""}],"src":"7209:380:1"},{"body":{"nodeType":"YulBlock","src":"7641:88:1","statements":[{"body":{"nodeType":"YulBlock","src":"7672:22:1","statements":[{"expression":{"arguments":[],"functionName":{"name":"panic_error_0x11","nodeType":"YulIdentifier","src":"7674:16:1"},"nodeType":"YulFunctionCall","src":"7674:18:1"},"nodeType":"YulExpressionStatement","src":"7674:18:1"}]},"condition":{"arguments":[{"name":"value","nodeType":"YulIdentifier","src":"7657:5:1"},{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"7668:1:1","type":"","value":"0"}],"functionName":{"name":"not","nodeType":"YulIdentifier","src":"7664:3:1"},"nodeType":"YulFunctionCall","src":"7664:6:1"}],"functionName":{"name":"eq","nodeType":"YulIdentifier","src":"7654:2:1"},"nodeType":"YulFunctionCall","src":"7654:17:1"},"nodeType":"YulIf","src":"7651:2:1"},{"nodeType":"YulAssignment","src":"7703:20:1","value":{"arguments":[{"name":"value","nodeType":"YulIdentifier","src":"7714:5:1"},{"kind":"number","nodeType":"YulLiteral","src":"7721:1:1","type":"","value":"1"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"7710:3:1"},"nodeType":"YulFunctionCall","src":"7710:13:1"},"variableNames":[{"name":"ret","nodeType":"YulIdentifier","src":"7703:3:1"}]}]},"name":"increment_t_uint256","nodeType":"YulFunctionDefinition","parameters":[{"name":"value","nodeType":"YulTypedName","src":"7623:5:1","type":""}],"returnVariables":[{"name":"ret","nodeType":"YulTypedName","src":"7633:3:1","type":""}],"src":"7594:135:1"},{"body":{"nodeType":"YulBlock","src":"7766:95:1","statements":[{"expression":{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"7783:1:1","type":"","value":"0"},{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"7790:3:1","type":"","value":"224"},{"kind":"number","nodeType":"YulLiteral","src":"7795:10:1","type":"","value":"0x4e487b71"}],"functionName":{"name":"shl","nodeType":"YulIdentifier","src":"7786:3:1"},"nodeType":"YulFunctionCall","src":"7786:20:1"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"7776:6:1"},"nodeType":"YulFunctionCall","src":"7776:31:1"},"nodeType":"YulExpressionStatement","src":"7776:31:1"},{"expression":{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"7823:1:1","type":"","value":"4"},{"kind":"number","nodeType":"YulLiteral","src":"7826:4:1","type":"","value":"0x11"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"7816:6:1"},"nodeType":"YulFunctionCall","src":"7816:15:1"},"nodeType":"YulExpressionStatement","src":"7816:15:1"},{"expression":{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"7847:1:1","type":"","value":"0"},{"kind":"number","nodeType":"YulLiteral","src":"7850:4:1","type":"","value":"0x24"}],"functionName":{"name":"revert","nodeType":"YulIdentifier","src":"7840:6:1"},"nodeType":"YulFunctionCall","src":"7840:15:1"},"nodeType":"YulExpressionStatement","src":"7840:15:1"}]},"name":"panic_error_0x11","nodeType":"YulFunctionDefinition","src":"7734:127:1"},{"body":{"nodeType":"YulBlock","src":"7898:95:1","statements":[{"expression":{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"7915:1:1","type":"","value":"0"},{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"7922:3:1","type":"","value":"224"},{"kind":"number","nodeType":"YulLiteral","src":"7927:10:1","type":"","value":"0x4e487b71"}],"functionName":{"name":"shl","nodeType":"YulIdentifier","src":"7918:3:1"},"nodeType":"YulFunctionCall","src":"7918:20:1"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"7908:6:1"},"nodeType":"YulFunctionCall","src":"7908:31:1"},"nodeType":"YulExpressionStatement","src":"7908:31:1"},{"expression":{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"7955:1:1","type":"","value":"4"},{"kind":"number","nodeType":"YulLiteral","src":"7958:4:1","type":"","value":"0x41"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"7948:6:1"},"nodeType":"YulFunctionCall","src":"7948:15:1"},"nodeType":"YulExpressionStatement","src":"7948:15:1"},{"expression":{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"7979:1:1","type":"","value":"0"},{"kind":"number","nodeType":"YulLiteral","src":"7982:4:1","type":"","value":"0x24"}],"functionName":{"name":"revert","nodeType":"YulIdentifier","src":"7972:6:1"},"nodeType":"YulFunctionCall","src":"7972:15:1"},"nodeType":"YulExpressionStatement","src":"7972:15:1"}]},"name":"panic_error_0x41","nodeType":"YulFunctionDefinition","src":"7866:127:1"}]},"contents":"{\\n    { }\\n    function abi_decode_address(offset) -> value\\n    {\\n        value := calldataload(offset)\\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\\n    }\\n    function abi_decode_string(offset, end) -> array\\n    {\\n        if iszero(slt(add(offset, 0x1f), end)) { revert(array, array) }\\n        let _1 := calldataload(offset)\\n        let _2 := 0xffffffffffffffff\\n        if gt(_1, _2) { panic_error_0x41() }\\n        let _3 := not(31)\\n        let memPtr := mload(64)\\n        let newFreePtr := add(memPtr, and(add(and(add(_1, 0x1f), _3), 63), _3))\\n        if or(gt(newFreePtr, _2), lt(newFreePtr, memPtr)) { panic_error_0x41() }\\n        mstore(64, newFreePtr)\\n        mstore(memPtr, _1)\\n        if gt(add(add(offset, _1), 0x20), end) { revert(array, array) }\\n        calldatacopy(add(memPtr, 0x20), add(offset, 0x20), _1)\\n        mstore(add(add(memPtr, _1), 0x20), array)\\n        array := memPtr\\n    }\\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0\\n    {\\n        if slt(sub(dataEnd, headStart), 32) { revert(value0, value0) }\\n        value0 := abi_decode_address(headStart)\\n    }\\n    function abi_decode_tuple_t_string_memory_ptrt_address(headStart, dataEnd) -> value0, value1\\n    {\\n        if slt(sub(dataEnd, headStart), 64) { revert(value1, value1) }\\n        let offset := calldataload(headStart)\\n        if gt(offset, 0xffffffffffffffff) { revert(value1, value1) }\\n        value0 := abi_decode_string(add(headStart, offset), dataEnd)\\n        value1 := abi_decode_address(add(headStart, 32))\\n    }\\n    function abi_decode_tuple_t_string_memory_ptrt_string_memory_ptr(headStart, dataEnd) -> value0, value1\\n    {\\n        if slt(sub(dataEnd, headStart), 64) { revert(value0, value0) }\\n        let offset := calldataload(headStart)\\n        let _1 := 0xffffffffffffffff\\n        if gt(offset, _1) { revert(value0, value0) }\\n        value0 := abi_decode_string(add(headStart, offset), dataEnd)\\n        let offset_1 := calldataload(add(headStart, 32))\\n        if gt(offset_1, _1) { revert(value1, value1) }\\n        value1 := abi_decode_string(add(headStart, offset_1), dataEnd)\\n    }\\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0\\n    {\\n        if slt(sub(dataEnd, headStart), 32) { revert(value0, value0) }\\n        value0 := calldataload(headStart)\\n    }\\n    function abi_decode_tuple_t_uint256t_address(headStart, dataEnd) -> value0, value1\\n    {\\n        if slt(sub(dataEnd, headStart), 64) { revert(value0, value0) }\\n        value0 := calldataload(headStart)\\n        value1 := abi_decode_address(add(headStart, 32))\\n    }\\n    function abi_encode_address(value, pos)\\n    {\\n        mstore(pos, and(value, sub(shl(160, 1), 1)))\\n    }\\n    function abi_encode_array_address_dyn(value, pos) -> end\\n    {\\n        let length := mload(value)\\n        mstore(pos, length)\\n        let _1 := 0x20\\n        pos := add(pos, _1)\\n        let srcPtr := add(value, _1)\\n        let i := end\\n        for { } lt(i, length) { i := add(i, 1) }\\n        {\\n            mstore(pos, and(mload(srcPtr), sub(shl(160, 1), 1)))\\n            pos := add(pos, _1)\\n            srcPtr := add(srcPtr, _1)\\n        }\\n        end := pos\\n    }\\n    function abi_encode_string(value, pos) -> end\\n    {\\n        let length := mload(value)\\n        mstore(pos, length)\\n        let i := end\\n        for { } lt(i, length) { i := add(i, 0x20) }\\n        {\\n            let _1 := 0x20\\n            mstore(add(add(pos, i), _1), mload(add(add(value, i), _1)))\\n        }\\n        if gt(i, length)\\n        {\\n            mstore(add(add(pos, length), 0x20), end)\\n        }\\n        end := add(add(pos, and(add(length, 31), not(31))), 0x20)\\n    }\\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart, value0) -> tail\\n    {\\n        tail := add(headStart, 32)\\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\\n    }\\n    function abi_encode_tuple_t_bool_t_string_memory_ptr_t_address__to_t_bool_t_string_memory_ptr_t_address__fromStack_reversed(headStart, value2, value1, value0) -> tail\\n    {\\n        mstore(headStart, iszero(iszero(value0)))\\n        mstore(add(headStart, 32), 96)\\n        tail := abi_encode_string(value1, add(headStart, 96))\\n        mstore(add(headStart, 64), and(value2, sub(shl(160, 1), 1)))\\n    }\\n    function abi_encode_tuple_t_string_memory_ptr_t_address__to_t_string_memory_ptr_t_address__fromStack_reversed(headStart, value1, value0) -> tail\\n    {\\n        mstore(headStart, 64)\\n        tail := abi_encode_string(value0, add(headStart, 64))\\n        mstore(add(headStart, 32), and(value1, sub(shl(160, 1), 1)))\\n    }\\n    function abi_encode_tuple_t_stringliteral_92d760f38db1287b6ef919dfc1c447222acc05c05ad112f6a45630b9d3d328ce__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\\n    {\\n        mstore(headStart, 32)\\n        mstore(add(headStart, 32), 27)\\n        mstore(add(headStart, 64), \\"You are not a Manufacturer!\\")\\n        tail := add(headStart, 96)\\n    }\\n    function abi_encode_tuple_t_stringliteral_e8ca55ff63d4e9a0d5ab58fb91b6bf7541fbf4216e172276d98a6990a98473ed__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\\n    {\\n        mstore(headStart, 32)\\n        mstore(add(headStart, 32), 50)\\n        mstore(add(headStart, 64), \\"Only owner is authorised to crea\\")\\n        mstore(add(headStart, 96), \\"te a manufacturer!\\")\\n        tail := add(headStart, 128)\\n    }\\n    function abi_encode_tuple_t_stringliteral_fac3bac318c0d00994f57b0f2f4c643c313072b71db2302bf4b900309cc50b36__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\\n    {\\n        mstore(headStart, 32)\\n        mstore(add(headStart, 32), 14)\\n        mstore(add(headStart, 64), \\"Not authorized\\")\\n        tail := add(headStart, 96)\\n    }\\n    function abi_encode_tuple_t_struct$_Product_$29_memory_ptr__to_t_struct$_Product_$29_memory_ptr__fromStack_reversed(headStart, value0) -> tail\\n    {\\n        mstore(headStart, 32)\\n        mstore(add(headStart, 32), iszero(iszero(mload(value0))))\\n        mstore(add(headStart, 64), mload(add(value0, 32)))\\n        let memberValue0 := mload(add(value0, 64))\\n        mstore(add(headStart, 96), 0xe0)\\n        let tail_1 := abi_encode_string(memberValue0, add(headStart, 256))\\n        let memberValue0_1 := mload(add(value0, 96))\\n        let _1 := not(31)\\n        mstore(add(headStart, 128), add(sub(tail_1, headStart), _1))\\n        let tail_2 := abi_encode_string(memberValue0_1, tail_1)\\n        mstore(add(headStart, 160), and(mload(add(value0, 128)), sub(shl(160, 1), 1)))\\n        let memberValue0_2 := mload(add(value0, 160))\\n        abi_encode_address(memberValue0_2, add(headStart, 192))\\n        let memberValue0_3 := mload(add(value0, 192))\\n        mstore(add(headStart, 0xe0), add(sub(tail_2, headStart), _1))\\n        tail := abi_encode_array_address_dyn(memberValue0_3, tail_2)\\n    }\\n    function abi_encode_tuple_t_uint256_t_address__to_t_uint256_t_address__fromStack_reversed(headStart, value1, value0) -> tail\\n    {\\n        tail := add(headStart, 64)\\n        mstore(headStart, value0)\\n        mstore(add(headStart, 32), and(value1, sub(shl(160, 1), 1)))\\n    }\\n    function checked_sub_t_uint256(x, y) -> diff\\n    {\\n        if lt(x, y) { panic_error_0x11() }\\n        diff := sub(x, y)\\n    }\\n    function extract_byte_array_length(data) -> length\\n    {\\n        length := shr(1, data)\\n        let outOfPlaceEncoding := and(data, 1)\\n        if iszero(outOfPlaceEncoding) { length := and(length, 0x7f) }\\n        if eq(outOfPlaceEncoding, lt(length, 32))\\n        {\\n            mstore(0, shl(224, 0x4e487b71))\\n            mstore(4, 0x22)\\n            revert(0, 0x24)\\n        }\\n    }\\n    function increment_t_uint256(value) -> ret\\n    {\\n        if eq(value, not(0)) { panic_error_0x11() }\\n        ret := add(value, 1)\\n    }\\n    function panic_error_0x11()\\n    {\\n        mstore(0, shl(224, 0x4e487b71))\\n        mstore(4, 0x11)\\n        revert(0, 0x24)\\n    }\\n    function panic_error_0x41()\\n    {\\n        mstore(0, shl(224, 0x4e487b71))\\n        mstore(4, 0x41)\\n        revert(0, 0x24)\\n    }\\n}","id":1,"language":"Yul","name":"#utility.yul"}],"sourceMap":"104:3082:0:-:0;;;440:1;423:18;;1349:42;;;;;;;;;-1:-1:-1;1368:5:0;:18;;-1:-1:-1;;;;;;1368:18:0;1376:10;1368:18;;;104:3082;;;;;;","deployedSourceMap":"104:3082:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1496:332;;;;;;:::i;:::-;;:::i;:::-;;864:53;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;1919:498;;;;;;:::i;:::-;;:::i;259:20::-;;;;;-1:-1:-1;;;;;259:20:0;;;;;;-1:-1:-1;;;;;3822:32:1;;;3804:51;;3792:2;3777:18;259:20:0;3759:102:1;2582:96:0;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;2917:264::-;;;;;;:::i;:::-;;:::i;1496:332::-;1597:5;;-1:-1:-1;;;;;1597:5:0;1583:10;:19;1575:82;;;;-1:-1:-1;;;1575:82:0;;5149:2:1;1575:82:0;;;5131:21:1;5188:2;5168:18;;;5161:30;5227:34;5207:18;;;5200:62;-1:-1:-1;;;5278:18:1;;;5271:48;5336:19;;1575:82:0;;;;;;;;;-1:-1:-1;;;;;1689:23:0;;1664:22;1689:23;;;:13;:23;;;;;;;;1717:15;;-1:-1:-1;;1717:15:0;1728:4;1717:15;;;;;1737:14;;1689:23;;1737:14;;:6;;;;:14;;;;;:::i;:::-;-1:-1:-1;1756:10:0;;;:21;;-1:-1:-1;;;;;;1756:21:0;-1:-1:-1;;;;;1756:21:0;;;;;1787:36;;;;;;1807:5;;1756:21;;1787:36;:::i;:::-;;;;;;;;1496:332;;;:::o;864:53::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;864:53:0;;;;;;;-1:-1:-1;;;;;;;864:53:0;;:::o;1919:498::-;2019:10;2005:25;;;;:13;:25;;;;;:32;;;:40;;:32;:40;1997:80;;;;-1:-1:-1;;;1997:80:0;;4793:2:1;1997:80:0;;;4775:21:1;4832:2;4812:18;;;4805:30;4871:29;4851:18;;;4844:57;4918:18;;1997:80:0;4765:177:1;1997:80:0;2113:9;;;2084:17;2104:19;;;:8;:19;;;;;;;;2128:15;;-1:-1:-1;;2128:15:0;;;;;2155:9;;2148:4;;;:16;;;;2169:14;;;;:6;;;;:14;;;;;:::i;:::-;-1:-1:-1;2188:16:0;;;;:7;;;;:16;;;;;:::i;:::-;-1:-1:-1;2209:14:0;;;:27;;2226:10;-1:-1:-1;;;;;;2209:27:0;;;;;;;;2241:10;;;:23;;;;;;;;2320:8;;;:25;;-1:-1:-1;2320:25:0;;;;;-1:-1:-1;2320:25:0;;;;;;;;;;;;;;;;;;;;2352:11;;;-1:-1:-1;2352:11:0;;;:::i;:::-;;;;;;2373:39;2398:1;2388:9;;:11;;;;:::i;:::-;2373:39;;;6974:25:1;;;2401:10:0;7030:2:1;7015:18;;7008:60;6947:18;2373:39:0;6929:145:1;2582:96:0;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2660:13:0;;;:8;:13;;;;;;2653:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;2653:20:0;;2660:13;;2653:20;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;2653:20:0;;;-1:-1:-1;;2653:20:0;;;;-1:-1:-1;;;;;2653:20:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2653:20:0;;;;;;;;;;;;;;;;;;;;;;;;;;;2582:96;;;:::o;2917:264::-;2983:17;3003:13;;;:8;:13;;;;;3029:10;;;;-1:-1:-1;;;;;3029:10:0;3043;3029:24;3021:51;;;;-1:-1:-1;;;3021:51:0;;5568:2:1;3021:51:0;;;5550:21:1;5607:2;5587:18;;;5580:30;-1:-1:-1;;;5626:18:1;;;5619:44;5680:18;;3021:51:0;5540:164:1;3021:51:0;3081:10;;;:22;;-1:-1:-1;;;;;3081:22:0;;-1:-1:-1;;;;;;3081:22:0;;;;;;;;3108:8;;;:24;;-1:-1:-1;3108:24:0;;;;-1:-1:-1;3108:24:0;;;;;;;;;;;;;;;;;;;3144:32;;;6974:25:1;;;7015:18;;;7008:60;;;;3144:32:0;;6947:18:1;3144:32:0;6929:145:1;-1:-1:-1;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;14:173:1;82:20;;-1:-1:-1;;;;;131:31:1;;121:42;;111:2;;177:1;174;167:12;111:2;63:124;;;:::o;192:739::-;235:5;288:3;281:4;273:6;269:17;265:27;255:2;;310:5;303;296:20;255:2;350:6;337:20;376:18;413:2;409;406:10;403:2;;;419:18;;:::i;:::-;494:2;488:9;462:2;548:13;;-1:-1:-1;;544:22:1;;;568:2;540:31;536:40;524:53;;;592:18;;;612:22;;;589:46;586:2;;;638:18;;:::i;:::-;678:10;674:2;667:22;713:2;705:6;698:18;759:3;752:4;747:2;739:6;735:15;731:26;728:35;725:2;;;780:5;773;766:20;725:2;848;841:4;833:6;829:17;822:4;814:6;810:17;797:54;871:15;;;888:4;867:26;860:41;;;;-1:-1:-1;875:6:1;245:686;-1:-1:-1;;;245:686:1:o;936:196::-;995:6;1048:2;1036:9;1027:7;1023:23;1019:32;1016:2;;;1069:6;1061;1054:22;1016:2;1097:29;1116:9;1097:29;:::i;:::-;1087:39;1006:126;-1:-1:-1;;;1006:126:1:o;1137:416::-;1215:6;1223;1276:2;1264:9;1255:7;1251:23;1247:32;1244:2;;;1297:6;1289;1282:22;1244:2;1342:9;1329:23;1375:18;1367:6;1364:30;1361:2;;;1412:6;1404;1397:22;1361:2;1440:50;1482:7;1473:6;1462:9;1458:22;1440:50;:::i;:::-;1430:60;;;1509:38;1543:2;1532:9;1528:18;1509:38;:::i;:::-;1499:48;;1234:319;;;;;:::o;1558:573::-;1646:6;1654;1707:2;1695:9;1686:7;1682:23;1678:32;1675:2;;;1728:6;1720;1713:22;1675:2;1773:9;1760:23;1802:18;1843:2;1835:6;1832:14;1829:2;;;1864:6;1856;1849:22;1829:2;1892:50;1934:7;1925:6;1914:9;1910:22;1892:50;:::i;:::-;1882:60;;1995:2;1984:9;1980:18;1967:32;1951:48;;2024:2;2014:8;2011:16;2008:2;;;2045:6;2037;2030:22;2008:2;;2073:52;2117:7;2106:8;2095:9;2091:24;2073:52;:::i;:::-;2063:62;;;1665:466;;;;;:::o;2136:190::-;2195:6;2248:2;2236:9;2227:7;2223:23;2219:32;2216:2;;;2269:6;2261;2254:22;2216:2;-1:-1:-1;2297:23:1;;2206:120;-1:-1:-1;2206:120:1:o;2331:264::-;2399:6;2407;2460:2;2448:9;2439:7;2435:23;2431:32;2428:2;;;2481:6;2473;2466:22;2428:2;2522:9;2509:23;2499:33;;2551:38;2585:2;2574:9;2570:18;2551:38;:::i;2709:463::-;2762:3;2800:5;2794:12;2827:6;2822:3;2815:19;2853:4;2882:2;2877:3;2873:12;2866:19;;2919:2;2912:5;2908:14;2940:3;2952:195;2966:6;2963:1;2960:13;2952:195;;;3031:13;;-1:-1:-1;;;;;3027:39:1;3015:52;;3087:12;;;;3122:15;;;;3063:1;2981:9;2952:195;;;-1:-1:-1;3163:3:1;;2770:402;-1:-1:-1;;;;;2770:402:1:o;3177:476::-;3219:3;3257:5;3251:12;3284:6;3279:3;3272:19;3309:3;3321:162;3335:6;3332:1;3329:13;3321:162;;;3397:4;3453:13;;;3449:22;;3443:29;3425:11;;;3421:20;;3414:59;3350:12;3321:162;;;3501:6;3498:1;3495:13;3492:2;;;3567:3;3560:4;3551:6;3546:3;3542:16;3538:27;3531:40;3492:2;-1:-1:-1;3635:2:1;3614:15;-1:-1:-1;;3610:29:1;3601:39;;;;3642:4;3597:50;;3227:426;-1:-1:-1;;3227:426:1:o;3866:398::-;4079:6;4072:14;4065:22;4054:9;4047:41;4124:2;4119;4108:9;4104:18;4097:30;4028:4;4144:45;4185:2;4174:9;4170:18;4162:6;4144:45;:::i;:::-;4136:53;;4254:1;4250;4245:3;4241:11;4237:19;4229:6;4225:32;4220:2;4209:9;4205:18;4198:60;4037:227;;;;;;:::o;4269:317::-;4446:2;4435:9;4428:21;4409:4;4466:45;4507:2;4496:9;4492:18;4484:6;4466:45;:::i;:::-;4458:53;;4576:1;4572;4567:3;4563:11;4559:19;4551:6;4547:32;4542:2;4531:9;4527:18;4520:60;4418:168;;;;;:::o;5709:1086::-;5884:2;5873:9;5866:21;5943:6;5937:13;5930:21;5923:29;5918:2;5907:9;5903:18;5896:57;6007:2;5999:6;5995:15;5989:22;5984:2;5973:9;5969:18;5962:50;5847:4;6059:2;6051:6;6047:15;6041:22;6099:4;6094:2;6083:9;6079:18;6072:32;6127:52;6174:3;6163:9;6159:19;6145:12;6127:52;:::i;:::-;6113:66;;6228:2;6220:6;6216:15;6210:22;6255:2;6251:7;6323:2;6311:9;6303:6;6299:22;6295:31;6289:3;6278:9;6274:19;6267:60;6350:41;6384:6;6368:14;6350:41;:::i;:::-;6336:55;;6474:1;6470;6465:3;6461:11;6457:19;6450:3;6442:6;6438:16;6432:23;6428:49;6422:3;6411:9;6407:19;6400:78;6527:3;6519:6;6515:16;6509:23;6487:45;;6541:55;6591:3;6580:9;6576:19;6560:14;-1:-1:-1;;;;;2666:31:1;2654:44;;2644:60;6541:55;6645:3;6637:6;6633:16;6627:23;6605:45;;6716:2;6704:9;6696:6;6692:22;6688:31;6681:4;6670:9;6666:20;6659:61;;6737:52;6782:6;6766:14;6737:52;:::i;:::-;6729:60;5856:939;-1:-1:-1;;;;;5856:939:1:o;7079:125::-;7119:4;7147:1;7144;7141:8;7138:2;;;7152:18;;:::i;:::-;-1:-1:-1;7189:9:1;;7128:76::o;7209:380::-;7288:1;7284:12;;;;7331;;;7352:2;;7406:4;7398:6;7394:17;7384:27;;7352:2;7459;7451:6;7448:14;7428:18;7425:38;7422:2;;;7505:10;7500:3;7496:20;7493:1;7486:31;7540:4;7537:1;7530:15;7568:4;7565:1;7558:15;7422:2;;7264:325;;;:::o;7594:135::-;7633:3;-1:-1:-1;;7654:17:1;;7651:2;;;7674:18;;:::i;:::-;-1:-1:-1;7721:1:1;7710:13;;7641:88::o;7734:127::-;7795:10;7790:3;7786:20;7783:1;7776:31;7826:4;7823:1;7816:15;7850:4;7847:1;7840:15;7866:127;7927:10;7922:3;7918:20;7915:1;7908:31;7958:4;7955:1;7948:15;7982:4;7979:1;7972:15","source":"// pragma solidity >=0.8.0 <0.9.0;\\r\\n// SPDX-License-Identifier: MIT\\r\\npragma solidity >=0.8.0 <0.9.0;\\r\\n\\r\\ncontract MyApp {\\r\\n\\r\\n\\t/*\\r\\n\\t\\tholds the address of the owner of the contract\\r\\n\\t\\towner -> the address which deploys this smart contract on the nwtwork.\\r\\n\\t*/\\r\\n\\taddress public owner;\\r\\n\\t/*\\r\\n\\t\\tproductId is used to provide a unique ID to every product that is added.\\r\\n\\t\\tIt increments every time a new product is created.\\r\\n\\t*/\\r\\n\\tuint productId = 0;\\r\\n\\r\\n\\t// define all custom structs\\r\\n\\r\\n\\tstruct Manufacturer {\\r\\n\\t\\tbool exists;\\r\\n\\t\\tstring name;\\r\\n\\t\\taddress _address;\\r\\n\\t}\\r\\n\\r\\n\\tstruct Product {\\r\\n\\t\\tbool exists;\\r\\n\\t\\tuint id;\\r\\n\\t\\tstring name;\\r\\n\\t\\tstring model;\\r\\n\\t\\taddress manufacturer;\\r\\n\\t\\taddress curOwner;\\r\\n\\t\\taddress[] owners;\\r\\n\\t}\\r\\n\\r\\n\\t// struct Customer {\\r\\n\\t// \\tbool exists;\\r\\n\\t// \\tstring name;\\r\\n\\t// \\taddress _address;\\r\\n\\t// }\\r\\n\\r\\n\\r\\n\\t// mapping(address => Customer) public customers;\\r\\n\\tmapping(address => Manufacturer) public manufacturers;\\r\\n\\tmapping(uint => Product) products;\\r\\n\\r\\n\\r\\n\\t// events to be emitted when certain operatons are completed\\r\\n\\tevent ManufacturerCreated(string name, address _address);\\r\\n\\tevent ProductCreated(uint id, address manufacturer);\\r\\n\\tevent OwnershipUpdated(uint id, address newOwner);\\r\\n\\r\\n\\r\\n\\t/*\\r\\n\\t\\tConstructor is called when this contract is deployed on the network.\\r\\n\\t\\tIt sets the owner of the contract as the address which deploys it.\\r\\n\\t*/\\r\\n\\tconstructor() {\\r\\n\\t\\towner = msg.sender;\\r\\n\\t}\\r\\n\\r\\n\\r\\n\\t/*\\r\\n\\t\\tUsed to create a new Manufacturer\\r\\n\\t\\tCan be called only by the owner of the contract\\r\\n\\t*/\\r\\n\\tfunction createManufacturer(string memory _name, address _address) public {\\r\\n\\t\\trequire(msg.sender == owner, \\"Only owner is authorised to create a manufacturer!\\");\\r\\n\\r\\n\\t\\tManufacturer storage m = manufacturers[_address];\\r\\n\\t\\tm.exists = true;\\r\\n\\t\\tm.name = _name;\\r\\n\\t\\tm._address = _address;\\r\\n\\t\\temit ManufacturerCreated(_name, _address);\\r\\n\\t}\\r\\n\\r\\n\\r\\n\\t/*\\r\\n\\t\\tUsed to create a new product\\r\\n\\t\\tCan be called only by the manufacturer\\r\\n\\t*/\\r\\n\\tfunction createProduct(string memory _name, string memory _model) public {\\r\\n\\t\\trequire(manufacturers[msg.sender].exists == true, \\"You are not a Manufacturer!\\");\\r\\n\\r\\n\\t\\tProduct storage p = products[productId];\\r\\n\\t\\tp.exists = true;\\r\\n\\t\\tp.id = productId;\\r\\n\\t\\tp.name = _name;\\r\\n\\t\\tp.model = _model;\\r\\n\\t\\tp.manufacturer = msg.sender;\\r\\n\\t\\tp.curOwner = msg.sender;\\r\\n\\t\\t// push cur owner(manufacturer) to owners array\\r\\n\\t\\tp.owners.push(msg.sender);\\r\\n\\r\\n\\t\\tproductId++;\\r\\n\\t\\temit ProductCreated(productId-1, msg.sender);\\r\\n\\t}\\r\\n\\r\\n\\r\\n\\t/*\\r\\n\\t\\tReturns a tuple of a product struct\\r\\n\\t\\t- p.owners[0] is the first owner (manufacturer)\\r\\n\\t\\t- last address in the owners list is the current owner\\r\\n\\t*/\\r\\n\\tfunction getProduct(uint _id) public view returns(Product memory) {\\r\\n\\t\\treturn products[_id];\\r\\n\\t}\\r\\n\\r\\n\\r\\n\\t/*\\r\\n\\t\\tThis function is called when an owner sells a product to new customer.\\r\\n\\t\\tIt updates the current owner of the product, and also adds them to owners list.\\r\\n\\t\\t* only the current owner of the product is allowed to sell it\\r\\n\\t*/\\r\\n\\tfunction updateOwnership(uint _id, address _newOwner) public {\\r\\n\\t\\tProduct storage p = products[_id];\\r\\n\\t\\trequire(p.curOwner == msg.sender, \\"Not authorized\\");\\r\\n\\t\\t\\r\\n\\t\\tp.curOwner = _newOwner;\\r\\n\\t\\tp.owners.push(_newOwner);\\r\\n\\r\\n\\t\\temit OwnershipUpdated(_id, _newOwner);\\r\\n\\t}\\r\\n\\r\\n}","sourcePath":"F:/Projects/Blockchain/fake-products/contracts/MyApp.sol","ast":{"absolutePath":"/F/Projects/Blockchain/fake-products/contracts/MyApp.sol","exportedSymbols":{"MyApp":[253]},"id":254,"license":"MIT","nodeType":"SourceUnit","nodes":[{"id":1,"literals":["solidity",">=","0.8",".0","<","0.9",".0"],"nodeType":"PragmaDirective","src":"69:31:0"},{"abstract":false,"baseContracts":[],"contractDependencies":[],"contractKind":"contract","fullyImplemented":true,"id":253,"linearizedBaseContracts":[253],"name":"MyApp","nameLocation":"113:5:0","nodeType":"ContractDefinition","nodes":[{"constant":false,"functionSelector":"8da5cb5b","id":3,"mutability":"mutable","name":"owner","nameLocation":"274:5:0","nodeType":"VariableDeclaration","scope":253,"src":"259:20:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":2,"name":"address","nodeType":"ElementaryTypeName","src":"259:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"visibility":"public"},{"constant":false,"id":6,"mutability":"mutable","name":"productId","nameLocation":"428:9:0","nodeType":"VariableDeclaration","scope":253,"src":"423:18:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":4,"name":"uint","nodeType":"ElementaryTypeName","src":"423:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":{"hexValue":"30","id":5,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"440:1:0","typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"visibility":"internal"},{"canonicalName":"MyApp.Manufacturer","id":13,"members":[{"constant":false,"id":8,"mutability":"mutable","name":"exists","nameLocation":"510:6:0","nodeType":"VariableDeclaration","scope":13,"src":"505:11:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":7,"name":"bool","nodeType":"ElementaryTypeName","src":"505:4:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"visibility":"internal"},{"constant":false,"id":10,"mutability":"mutable","name":"name","nameLocation":"528:4:0","nodeType":"VariableDeclaration","scope":13,"src":"521:11:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":9,"name":"string","nodeType":"ElementaryTypeName","src":"521:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"visibility":"internal"},{"constant":false,"id":12,"mutability":"mutable","name":"_address","nameLocation":"545:8:0","nodeType":"VariableDeclaration","scope":13,"src":"537:16:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":11,"name":"address","nodeType":"ElementaryTypeName","src":"537:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"visibility":"internal"}],"name":"Manufacturer","nameLocation":"487:12:0","nodeType":"StructDefinition","scope":253,"src":"480:78:0","visibility":"public"},{"canonicalName":"MyApp.Product","id":29,"members":[{"constant":false,"id":15,"mutability":"mutable","name":"exists","nameLocation":"588:6:0","nodeType":"VariableDeclaration","scope":29,"src":"583:11:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":14,"name":"bool","nodeType":"ElementaryTypeName","src":"583:4:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"visibility":"internal"},{"constant":false,"id":17,"mutability":"mutable","name":"id","nameLocation":"604:2:0","nodeType":"VariableDeclaration","scope":29,"src":"599:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":16,"name":"uint","nodeType":"ElementaryTypeName","src":"599:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"},{"constant":false,"id":19,"mutability":"mutable","name":"name","nameLocation":"618:4:0","nodeType":"VariableDeclaration","scope":29,"src":"611:11:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":18,"name":"string","nodeType":"ElementaryTypeName","src":"611:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"visibility":"internal"},{"constant":false,"id":21,"mutability":"mutable","name":"model","nameLocation":"634:5:0","nodeType":"VariableDeclaration","scope":29,"src":"627:12:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":20,"name":"string","nodeType":"ElementaryTypeName","src":"627:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"visibility":"internal"},{"constant":false,"id":23,"mutability":"mutable","name":"manufacturer","nameLocation":"652:12:0","nodeType":"VariableDeclaration","scope":29,"src":"644:20:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":22,"name":"address","nodeType":"ElementaryTypeName","src":"644:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"visibility":"internal"},{"constant":false,"id":25,"mutability":"mutable","name":"curOwner","nameLocation":"677:8:0","nodeType":"VariableDeclaration","scope":29,"src":"669:16:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":24,"name":"address","nodeType":"ElementaryTypeName","src":"669:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"visibility":"internal"},{"constant":false,"id":28,"mutability":"mutable","name":"owners","nameLocation":"700:6:0","nodeType":"VariableDeclaration","scope":29,"src":"690:16:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"},"typeName":{"baseType":{"id":26,"name":"address","nodeType":"ElementaryTypeName","src":"690:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":27,"nodeType":"ArrayTypeName","src":"690:9:0","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"visibility":"internal"}],"name":"Product","nameLocation":"570:7:0","nodeType":"StructDefinition","scope":253,"src":"563:148:0","visibility":"public"},{"constant":false,"functionSelector":"6b5eb09c","id":34,"mutability":"mutable","name":"manufacturers","nameLocation":"904:13:0","nodeType":"VariableDeclaration","scope":253,"src":"864:53:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Manufacturer_$13_storage_$","typeString":"mapping(address => struct MyApp.Manufacturer)"},"typeName":{"id":33,"keyType":{"id":30,"name":"address","nodeType":"ElementaryTypeName","src":"872:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"864:32:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Manufacturer_$13_storage_$","typeString":"mapping(address => struct MyApp.Manufacturer)"},"valueType":{"id":32,"nodeType":"UserDefinedTypeName","pathNode":{"id":31,"name":"Manufacturer","nodeType":"IdentifierPath","referencedDeclaration":13,"src":"883:12:0"},"referencedDeclaration":13,"src":"883:12:0","typeDescriptions":{"typeIdentifier":"t_struct$_Manufacturer_$13_storage_ptr","typeString":"struct MyApp.Manufacturer"}}},"visibility":"public"},{"constant":false,"id":39,"mutability":"mutable","name":"products","nameLocation":"946:8:0","nodeType":"VariableDeclaration","scope":253,"src":"921:33:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_Product_$29_storage_$","typeString":"mapping(uint256 => struct MyApp.Product)"},"typeName":{"id":38,"keyType":{"id":35,"name":"uint","nodeType":"ElementaryTypeName","src":"929:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Mapping","src":"921:24:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_Product_$29_storage_$","typeString":"mapping(uint256 => struct MyApp.Product)"},"valueType":{"id":37,"nodeType":"UserDefinedTypeName","pathNode":{"id":36,"name":"Product","nodeType":"IdentifierPath","referencedDeclaration":29,"src":"937:7:0"},"referencedDeclaration":29,"src":"937:7:0","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage_ptr","typeString":"struct MyApp.Product"}}},"visibility":"internal"},{"anonymous":false,"id":45,"name":"ManufacturerCreated","nameLocation":"1031:19:0","nodeType":"EventDefinition","parameters":{"id":44,"nodeType":"ParameterList","parameters":[{"constant":false,"id":41,"indexed":false,"mutability":"mutable","name":"name","nameLocation":"1058:4:0","nodeType":"VariableDeclaration","scope":45,"src":"1051:11:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":40,"name":"string","nodeType":"ElementaryTypeName","src":"1051:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"visibility":"internal"},{"constant":false,"id":43,"indexed":false,"mutability":"mutable","name":"_address","nameLocation":"1072:8:0","nodeType":"VariableDeclaration","scope":45,"src":"1064:16:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":42,"name":"address","nodeType":"ElementaryTypeName","src":"1064:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"visibility":"internal"}],"src":"1050:31:0"},"src":"1025:57:0"},{"anonymous":false,"id":51,"name":"ProductCreated","nameLocation":"1091:14:0","nodeType":"EventDefinition","parameters":{"id":50,"nodeType":"ParameterList","parameters":[{"constant":false,"id":47,"indexed":false,"mutability":"mutable","name":"id","nameLocation":"1111:2:0","nodeType":"VariableDeclaration","scope":51,"src":"1106:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":46,"name":"uint","nodeType":"ElementaryTypeName","src":"1106:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"},{"constant":false,"id":49,"indexed":false,"mutability":"mutable","name":"manufacturer","nameLocation":"1123:12:0","nodeType":"VariableDeclaration","scope":51,"src":"1115:20:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":48,"name":"address","nodeType":"ElementaryTypeName","src":"1115:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"visibility":"internal"}],"src":"1105:31:0"},"src":"1085:52:0"},{"anonymous":false,"id":57,"name":"OwnershipUpdated","nameLocation":"1146:16:0","nodeType":"EventDefinition","parameters":{"id":56,"nodeType":"ParameterList","parameters":[{"constant":false,"id":53,"indexed":false,"mutability":"mutable","name":"id","nameLocation":"1168:2:0","nodeType":"VariableDeclaration","scope":57,"src":"1163:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":52,"name":"uint","nodeType":"ElementaryTypeName","src":"1163:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"},{"constant":false,"id":55,"indexed":false,"mutability":"mutable","name":"newOwner","nameLocation":"1180:8:0","nodeType":"VariableDeclaration","scope":57,"src":"1172:16:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":54,"name":"address","nodeType":"ElementaryTypeName","src":"1172:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"visibility":"internal"}],"src":"1162:27:0"},"src":"1140:50:0"},{"body":{"id":65,"nodeType":"Block","src":"1363:28:0","statements":[{"expression":{"id":63,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"id":60,"name":"owner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":3,"src":"1368:5:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"expression":{"id":61,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":4294967281,"src":"1376:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":62,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","src":"1376:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"1368:18:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":64,"nodeType":"ExpressionStatement","src":"1368:18:0"}]},"id":66,"implemented":true,"kind":"constructor","modifiers":[],"name":"","nameLocation":"-1:-1:-1","nodeType":"FunctionDefinition","parameters":{"id":58,"nodeType":"ParameterList","parameters":[],"src":"1360:2:0"},"returnParameters":{"id":59,"nodeType":"ParameterList","parameters":[],"src":"1363:0:0"},"scope":253,"src":"1349:42:0","stateMutability":"nonpayable","virtual":false,"visibility":"public"},{"body":{"id":111,"nodeType":"Block","src":"1570:258:0","statements":[{"expression":{"arguments":[{"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":77,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"expression":{"id":74,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":4294967281,"src":"1583:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":75,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","src":"1583:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"id":76,"name":"owner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":3,"src":"1597:5:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"1583:19:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"hexValue":"4f6e6c79206f776e657220697320617574686f726973656420746f206372656174652061206d616e75666163747572657221","id":78,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"1604:52:0","typeDescriptions":{"typeIdentifier":"t_stringliteral_e8ca55ff63d4e9a0d5ab58fb91b6bf7541fbf4216e172276d98a6990a98473ed","typeString":"literal_string \\"Only owner is authorised to create a manufacturer!\\""},"value":"Only owner is authorised to create a manufacturer!"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_e8ca55ff63d4e9a0d5ab58fb91b6bf7541fbf4216e172276d98a6990a98473ed","typeString":"literal_string \\"Only owner is authorised to create a manufacturer!\\""}],"id":73,"name":"require","nodeType":"Identifier","overloadedDeclarations":[4294967278,4294967278],"referencedDeclaration":4294967278,"src":"1575:7:0","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":79,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1575:82:0","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":80,"nodeType":"ExpressionStatement","src":"1575:82:0"},{"assignments":[83],"declarations":[{"constant":false,"id":83,"mutability":"mutable","name":"m","nameLocation":"1685:1:0","nodeType":"VariableDeclaration","scope":111,"src":"1664:22:0","stateVariable":false,"storageLocation":"storage","typeDescriptions":{"typeIdentifier":"t_struct$_Manufacturer_$13_storage_ptr","typeString":"struct MyApp.Manufacturer"},"typeName":{"id":82,"nodeType":"UserDefinedTypeName","pathNode":{"id":81,"name":"Manufacturer","nodeType":"IdentifierPath","referencedDeclaration":13,"src":"1664:12:0"},"referencedDeclaration":13,"src":"1664:12:0","typeDescriptions":{"typeIdentifier":"t_struct$_Manufacturer_$13_storage_ptr","typeString":"struct MyApp.Manufacturer"}},"visibility":"internal"}],"id":87,"initialValue":{"baseExpression":{"id":84,"name":"manufacturers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":34,"src":"1689:13:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Manufacturer_$13_storage_$","typeString":"mapping(address => struct MyApp.Manufacturer storage ref)"}},"id":86,"indexExpression":{"id":85,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":70,"src":"1703:8:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1689:23:0","typeDescriptions":{"typeIdentifier":"t_struct$_Manufacturer_$13_storage","typeString":"struct MyApp.Manufacturer storage ref"}},"nodeType":"VariableDeclarationStatement","src":"1664:48:0"},{"expression":{"id":92,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"expression":{"id":88,"name":"m","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":83,"src":"1717:1:0","typeDescriptions":{"typeIdentifier":"t_struct$_Manufacturer_$13_storage_ptr","typeString":"struct MyApp.Manufacturer storage pointer"}},"id":90,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"exists","nodeType":"MemberAccess","referencedDeclaration":8,"src":"1717:8:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"hexValue":"74727565","id":91,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"1728:4:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"1717:15:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":93,"nodeType":"ExpressionStatement","src":"1717:15:0"},{"expression":{"id":98,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"expression":{"id":94,"name":"m","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":83,"src":"1737:1:0","typeDescriptions":{"typeIdentifier":"t_struct$_Manufacturer_$13_storage_ptr","typeString":"struct MyApp.Manufacturer storage pointer"}},"id":96,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"name","nodeType":"MemberAccess","referencedDeclaration":10,"src":"1737:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"id":97,"name":"_name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":68,"src":"1746:5:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"1737:14:0","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":99,"nodeType":"ExpressionStatement","src":"1737:14:0"},{"expression":{"id":104,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"expression":{"id":100,"name":"m","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":83,"src":"1756:1:0","typeDescriptions":{"typeIdentifier":"t_struct$_Manufacturer_$13_storage_ptr","typeString":"struct MyApp.Manufacturer storage pointer"}},"id":102,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"_address","nodeType":"MemberAccess","referencedDeclaration":12,"src":"1756:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"id":103,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":70,"src":"1769:8:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"1756:21:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":105,"nodeType":"ExpressionStatement","src":"1756:21:0"},{"eventCall":{"arguments":[{"id":107,"name":"_name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":68,"src":"1807:5:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"id":108,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":70,"src":"1814:8:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_address","typeString":"address"}],"id":106,"name":"ManufacturerCreated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":45,"src":"1787:19:0","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_string_memory_ptr_$_t_address_$returns$__$","typeString":"function (string memory,address)"}},"id":109,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1787:36:0","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":110,"nodeType":"EmitStatement","src":"1782:41:0"}]},"functionSelector":"5d50e808","id":112,"implemented":true,"kind":"function","modifiers":[],"name":"createManufacturer","nameLocation":"1505:18:0","nodeType":"FunctionDefinition","parameters":{"id":71,"nodeType":"ParameterList","parameters":[{"constant":false,"id":68,"mutability":"mutable","name":"_name","nameLocation":"1538:5:0","nodeType":"VariableDeclaration","scope":112,"src":"1524:19:0","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":67,"name":"string","nodeType":"ElementaryTypeName","src":"1524:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"visibility":"internal"},{"constant":false,"id":70,"mutability":"mutable","name":"_address","nameLocation":"1553:8:0","nodeType":"VariableDeclaration","scope":112,"src":"1545:16:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":69,"name":"address","nodeType":"ElementaryTypeName","src":"1545:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"visibility":"internal"}],"src":"1523:39:0"},"returnParameters":{"id":72,"nodeType":"ParameterList","parameters":[],"src":"1570:0:0"},"scope":253,"src":"1496:332:0","stateMutability":"nonpayable","virtual":false,"visibility":"public"},{"body":{"id":195,"nodeType":"Block","src":"1992:425:0","statements":[{"expression":{"arguments":[{"commonType":{"typeIdentifier":"t_bool","typeString":"bool"},"id":126,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"expression":{"baseExpression":{"id":120,"name":"manufacturers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":34,"src":"2005:13:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Manufacturer_$13_storage_$","typeString":"mapping(address => struct MyApp.Manufacturer storage ref)"}},"id":123,"indexExpression":{"expression":{"id":121,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":4294967281,"src":"2019:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":122,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","src":"2019:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2005:25:0","typeDescriptions":{"typeIdentifier":"t_struct$_Manufacturer_$13_storage","typeString":"struct MyApp.Manufacturer storage ref"}},"id":124,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"exists","nodeType":"MemberAccess","referencedDeclaration":8,"src":"2005:32:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"hexValue":"74727565","id":125,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"2041:4:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"2005:40:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"hexValue":"596f7520617265206e6f742061204d616e75666163747572657221","id":127,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"2047:29:0","typeDescriptions":{"typeIdentifier":"t_stringliteral_92d760f38db1287b6ef919dfc1c447222acc05c05ad112f6a45630b9d3d328ce","typeString":"literal_string \\"You are not a Manufacturer!\\""},"value":"You are not a Manufacturer!"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_92d760f38db1287b6ef919dfc1c447222acc05c05ad112f6a45630b9d3d328ce","typeString":"literal_string \\"You are not a Manufacturer!\\""}],"id":119,"name":"require","nodeType":"Identifier","overloadedDeclarations":[4294967278,4294967278],"referencedDeclaration":4294967278,"src":"1997:7:0","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":128,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1997:80:0","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":129,"nodeType":"ExpressionStatement","src":"1997:80:0"},{"assignments":[132],"declarations":[{"constant":false,"id":132,"mutability":"mutable","name":"p","nameLocation":"2100:1:0","nodeType":"VariableDeclaration","scope":195,"src":"2084:17:0","stateVariable":false,"storageLocation":"storage","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage_ptr","typeString":"struct MyApp.Product"},"typeName":{"id":131,"nodeType":"UserDefinedTypeName","pathNode":{"id":130,"name":"Product","nodeType":"IdentifierPath","referencedDeclaration":29,"src":"2084:7:0"},"referencedDeclaration":29,"src":"2084:7:0","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage_ptr","typeString":"struct MyApp.Product"}},"visibility":"internal"}],"id":136,"initialValue":{"baseExpression":{"id":133,"name":"products","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":39,"src":"2104:8:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_Product_$29_storage_$","typeString":"mapping(uint256 => struct MyApp.Product storage ref)"}},"id":135,"indexExpression":{"id":134,"name":"productId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6,"src":"2113:9:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2104:19:0","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage","typeString":"struct MyApp.Product storage ref"}},"nodeType":"VariableDeclarationStatement","src":"2084:39:0"},{"expression":{"id":141,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"expression":{"id":137,"name":"p","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":132,"src":"2128:1:0","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage_ptr","typeString":"struct MyApp.Product storage pointer"}},"id":139,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"exists","nodeType":"MemberAccess","referencedDeclaration":15,"src":"2128:8:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"hexValue":"74727565","id":140,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"2139:4:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"2128:15:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":142,"nodeType":"ExpressionStatement","src":"2128:15:0"},{"expression":{"id":147,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"expression":{"id":143,"name":"p","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":132,"src":"2148:1:0","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage_ptr","typeString":"struct MyApp.Product storage pointer"}},"id":145,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"id","nodeType":"MemberAccess","referencedDeclaration":17,"src":"2148:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"id":146,"name":"productId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6,"src":"2155:9:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"2148:16:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":148,"nodeType":"ExpressionStatement","src":"2148:16:0"},{"expression":{"id":153,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"expression":{"id":149,"name":"p","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":132,"src":"2169:1:0","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage_ptr","typeString":"struct MyApp.Product storage pointer"}},"id":151,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"name","nodeType":"MemberAccess","referencedDeclaration":19,"src":"2169:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"id":152,"name":"_name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":114,"src":"2178:5:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"2169:14:0","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":154,"nodeType":"ExpressionStatement","src":"2169:14:0"},{"expression":{"id":159,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"expression":{"id":155,"name":"p","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":132,"src":"2188:1:0","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage_ptr","typeString":"struct MyApp.Product storage pointer"}},"id":157,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"model","nodeType":"MemberAccess","referencedDeclaration":21,"src":"2188:7:0","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"id":158,"name":"_model","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":116,"src":"2198:6:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"2188:16:0","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":160,"nodeType":"ExpressionStatement","src":"2188:16:0"},{"expression":{"id":166,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"expression":{"id":161,"name":"p","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":132,"src":"2209:1:0","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage_ptr","typeString":"struct MyApp.Product storage pointer"}},"id":163,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"manufacturer","nodeType":"MemberAccess","referencedDeclaration":23,"src":"2209:14:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"expression":{"id":164,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":4294967281,"src":"2226:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":165,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","src":"2226:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"2209:27:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":167,"nodeType":"ExpressionStatement","src":"2209:27:0"},{"expression":{"id":173,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"expression":{"id":168,"name":"p","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":132,"src":"2241:1:0","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage_ptr","typeString":"struct MyApp.Product storage pointer"}},"id":170,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"curOwner","nodeType":"MemberAccess","referencedDeclaration":25,"src":"2241:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"expression":{"id":171,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":4294967281,"src":"2254:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":172,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","src":"2254:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"2241:23:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":174,"nodeType":"ExpressionStatement","src":"2241:23:0"},{"expression":{"arguments":[{"expression":{"id":180,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":4294967281,"src":"2334:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":181,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","src":"2334:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"expression":{"expression":{"id":175,"name":"p","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":132,"src":"2320:1:0","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage_ptr","typeString":"struct MyApp.Product storage pointer"}},"id":178,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"owners","nodeType":"MemberAccess","referencedDeclaration":28,"src":"2320:8:0","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[] storage ref"}},"id":179,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","src":"2320:13:0","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$bound_to$_t_array$_t_address_$dyn_storage_ptr_$","typeString":"function (address[] storage pointer,address)"}},"id":182,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2320:25:0","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":183,"nodeType":"ExpressionStatement","src":"2320:25:0"},{"expression":{"id":185,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"2352:11:0","subExpression":{"id":184,"name":"productId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6,"src":"2352:9:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":186,"nodeType":"ExpressionStatement","src":"2352:11:0"},{"eventCall":{"arguments":[{"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":190,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"id":188,"name":"productId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6,"src":"2388:9:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"-","rightExpression":{"hexValue":"31","id":189,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"2398:1:0","typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"2388:11:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"expression":{"id":191,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":4294967281,"src":"2401:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":192,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","src":"2401:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_address","typeString":"address"}],"id":187,"name":"ProductCreated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":51,"src":"2373:14:0","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_uint256_$_t_address_$returns$__$","typeString":"function (uint256,address)"}},"id":193,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2373:39:0","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":194,"nodeType":"EmitStatement","src":"2368:44:0"}]},"functionSelector":"87592bce","id":196,"implemented":true,"kind":"function","modifiers":[],"name":"createProduct","nameLocation":"1928:13:0","nodeType":"FunctionDefinition","parameters":{"id":117,"nodeType":"ParameterList","parameters":[{"constant":false,"id":114,"mutability":"mutable","name":"_name","nameLocation":"1956:5:0","nodeType":"VariableDeclaration","scope":196,"src":"1942:19:0","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":113,"name":"string","nodeType":"ElementaryTypeName","src":"1942:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"visibility":"internal"},{"constant":false,"id":116,"mutability":"mutable","name":"_model","nameLocation":"1977:6:0","nodeType":"VariableDeclaration","scope":196,"src":"1963:20:0","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":115,"name":"string","nodeType":"ElementaryTypeName","src":"1963:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"visibility":"internal"}],"src":"1941:43:0"},"returnParameters":{"id":118,"nodeType":"ParameterList","parameters":[],"src":"1992:0:0"},"scope":253,"src":"1919:498:0","stateMutability":"nonpayable","virtual":false,"visibility":"public"},{"body":{"id":208,"nodeType":"Block","src":"2648:30:0","statements":[{"expression":{"baseExpression":{"id":204,"name":"products","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":39,"src":"2660:8:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_Product_$29_storage_$","typeString":"mapping(uint256 => struct MyApp.Product storage ref)"}},"id":206,"indexExpression":{"id":205,"name":"_id","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":198,"src":"2669:3:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2660:13:0","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage","typeString":"struct MyApp.Product storage ref"}},"functionReturnParameters":203,"id":207,"nodeType":"Return","src":"2653:20:0"}]},"functionSelector":"b9db15b4","id":209,"implemented":true,"kind":"function","modifiers":[],"name":"getProduct","nameLocation":"2591:10:0","nodeType":"FunctionDefinition","parameters":{"id":199,"nodeType":"ParameterList","parameters":[{"constant":false,"id":198,"mutability":"mutable","name":"_id","nameLocation":"2607:3:0","nodeType":"VariableDeclaration","scope":209,"src":"2602:8:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":197,"name":"uint","nodeType":"ElementaryTypeName","src":"2602:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"}],"src":"2601:10:0"},"returnParameters":{"id":203,"nodeType":"ParameterList","parameters":[{"constant":false,"id":202,"mutability":"mutable","name":"","nameLocation":"-1:-1:-1","nodeType":"VariableDeclaration","scope":209,"src":"2632:14:0","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_memory_ptr","typeString":"struct MyApp.Product"},"typeName":{"id":201,"nodeType":"UserDefinedTypeName","pathNode":{"id":200,"name":"Product","nodeType":"IdentifierPath","referencedDeclaration":29,"src":"2632:7:0"},"referencedDeclaration":29,"src":"2632:7:0","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage_ptr","typeString":"struct MyApp.Product"}},"visibility":"internal"}],"src":"2631:16:0"},"scope":253,"src":"2582:96:0","stateMutability":"view","virtual":false,"visibility":"public"},{"body":{"id":251,"nodeType":"Block","src":"2978:203:0","statements":[{"assignments":[218],"declarations":[{"constant":false,"id":218,"mutability":"mutable","name":"p","nameLocation":"2999:1:0","nodeType":"VariableDeclaration","scope":251,"src":"2983:17:0","stateVariable":false,"storageLocation":"storage","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage_ptr","typeString":"struct MyApp.Product"},"typeName":{"id":217,"nodeType":"UserDefinedTypeName","pathNode":{"id":216,"name":"Product","nodeType":"IdentifierPath","referencedDeclaration":29,"src":"2983:7:0"},"referencedDeclaration":29,"src":"2983:7:0","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage_ptr","typeString":"struct MyApp.Product"}},"visibility":"internal"}],"id":222,"initialValue":{"baseExpression":{"id":219,"name":"products","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":39,"src":"3003:8:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_Product_$29_storage_$","typeString":"mapping(uint256 => struct MyApp.Product storage ref)"}},"id":221,"indexExpression":{"id":220,"name":"_id","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":211,"src":"3012:3:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3003:13:0","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage","typeString":"struct MyApp.Product storage ref"}},"nodeType":"VariableDeclarationStatement","src":"2983:33:0"},{"expression":{"arguments":[{"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":228,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"expression":{"id":224,"name":"p","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":218,"src":"3029:1:0","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage_ptr","typeString":"struct MyApp.Product storage pointer"}},"id":225,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"curOwner","nodeType":"MemberAccess","referencedDeclaration":25,"src":"3029:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"expression":{"id":226,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":4294967281,"src":"3043:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":227,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","src":"3043:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"3029:24:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"hexValue":"4e6f7420617574686f72697a6564","id":229,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"3055:16:0","typeDescriptions":{"typeIdentifier":"t_stringliteral_fac3bac318c0d00994f57b0f2f4c643c313072b71db2302bf4b900309cc50b36","typeString":"literal_string \\"Not authorized\\""},"value":"Not authorized"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_fac3bac318c0d00994f57b0f2f4c643c313072b71db2302bf4b900309cc50b36","typeString":"literal_string \\"Not authorized\\""}],"id":223,"name":"require","nodeType":"Identifier","overloadedDeclarations":[4294967278,4294967278],"referencedDeclaration":4294967278,"src":"3021:7:0","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":230,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"3021:51:0","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":231,"nodeType":"ExpressionStatement","src":"3021:51:0"},{"expression":{"id":236,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"expression":{"id":232,"name":"p","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":218,"src":"3081:1:0","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage_ptr","typeString":"struct MyApp.Product storage pointer"}},"id":234,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"curOwner","nodeType":"MemberAccess","referencedDeclaration":25,"src":"3081:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"id":235,"name":"_newOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":213,"src":"3094:9:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"3081:22:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":237,"nodeType":"ExpressionStatement","src":"3081:22:0"},{"expression":{"arguments":[{"id":243,"name":"_newOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":213,"src":"3122:9:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"expression":{"expression":{"id":238,"name":"p","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":218,"src":"3108:1:0","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage_ptr","typeString":"struct MyApp.Product storage pointer"}},"id":241,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"owners","nodeType":"MemberAccess","referencedDeclaration":28,"src":"3108:8:0","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[] storage ref"}},"id":242,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","src":"3108:13:0","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$bound_to$_t_array$_t_address_$dyn_storage_ptr_$","typeString":"function (address[] storage pointer,address)"}},"id":244,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"3108:24:0","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":245,"nodeType":"ExpressionStatement","src":"3108:24:0"},{"eventCall":{"arguments":[{"id":247,"name":"_id","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":211,"src":"3161:3:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"id":248,"name":"_newOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":213,"src":"3166:9:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_address","typeString":"address"}],"id":246,"name":"OwnershipUpdated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":57,"src":"3144:16:0","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_uint256_$_t_address_$returns$__$","typeString":"function (uint256,address)"}},"id":249,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"3144:32:0","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":250,"nodeType":"EmitStatement","src":"3139:37:0"}]},"functionSelector":"cc0266f7","id":252,"implemented":true,"kind":"function","modifiers":[],"name":"updateOwnership","nameLocation":"2926:15:0","nodeType":"FunctionDefinition","parameters":{"id":214,"nodeType":"ParameterList","parameters":[{"constant":false,"id":211,"mutability":"mutable","name":"_id","nameLocation":"2947:3:0","nodeType":"VariableDeclaration","scope":252,"src":"2942:8:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":210,"name":"uint","nodeType":"ElementaryTypeName","src":"2942:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"},{"constant":false,"id":213,"mutability":"mutable","name":"_newOwner","nameLocation":"2960:9:0","nodeType":"VariableDeclaration","scope":252,"src":"2952:17:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":212,"name":"address","nodeType":"ElementaryTypeName","src":"2952:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"visibility":"internal"}],"src":"2941:29:0"},"returnParameters":{"id":215,"nodeType":"ParameterList","parameters":[],"src":"2978:0:0"},"scope":253,"src":"2917:264:0","stateMutability":"nonpayable","virtual":false,"visibility":"public"}],"scope":254,"src":"104:3082:0","usedErrors":[]}],"src":"69:3117:0"},"legacyAST":{"absolutePath":"/F/Projects/Blockchain/fake-products/contracts/MyApp.sol","exportedSymbols":{"MyApp":[253]},"id":254,"license":"MIT","nodeType":"SourceUnit","nodes":[{"id":1,"literals":["solidity",">=","0.8",".0","<","0.9",".0"],"nodeType":"PragmaDirective","src":"69:31:0"},{"abstract":false,"baseContracts":[],"contractDependencies":[],"contractKind":"contract","fullyImplemented":true,"id":253,"linearizedBaseContracts":[253],"name":"MyApp","nameLocation":"113:5:0","nodeType":"ContractDefinition","nodes":[{"constant":false,"functionSelector":"8da5cb5b","id":3,"mutability":"mutable","name":"owner","nameLocation":"274:5:0","nodeType":"VariableDeclaration","scope":253,"src":"259:20:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":2,"name":"address","nodeType":"ElementaryTypeName","src":"259:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"visibility":"public"},{"constant":false,"id":6,"mutability":"mutable","name":"productId","nameLocation":"428:9:0","nodeType":"VariableDeclaration","scope":253,"src":"423:18:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":4,"name":"uint","nodeType":"ElementaryTypeName","src":"423:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":{"hexValue":"30","id":5,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"440:1:0","typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"visibility":"internal"},{"canonicalName":"MyApp.Manufacturer","id":13,"members":[{"constant":false,"id":8,"mutability":"mutable","name":"exists","nameLocation":"510:6:0","nodeType":"VariableDeclaration","scope":13,"src":"505:11:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":7,"name":"bool","nodeType":"ElementaryTypeName","src":"505:4:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"visibility":"internal"},{"constant":false,"id":10,"mutability":"mutable","name":"name","nameLocation":"528:4:0","nodeType":"VariableDeclaration","scope":13,"src":"521:11:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":9,"name":"string","nodeType":"ElementaryTypeName","src":"521:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"visibility":"internal"},{"constant":false,"id":12,"mutability":"mutable","name":"_address","nameLocation":"545:8:0","nodeType":"VariableDeclaration","scope":13,"src":"537:16:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":11,"name":"address","nodeType":"ElementaryTypeName","src":"537:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"visibility":"internal"}],"name":"Manufacturer","nameLocation":"487:12:0","nodeType":"StructDefinition","scope":253,"src":"480:78:0","visibility":"public"},{"canonicalName":"MyApp.Product","id":29,"members":[{"constant":false,"id":15,"mutability":"mutable","name":"exists","nameLocation":"588:6:0","nodeType":"VariableDeclaration","scope":29,"src":"583:11:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":14,"name":"bool","nodeType":"ElementaryTypeName","src":"583:4:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"visibility":"internal"},{"constant":false,"id":17,"mutability":"mutable","name":"id","nameLocation":"604:2:0","nodeType":"VariableDeclaration","scope":29,"src":"599:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":16,"name":"uint","nodeType":"ElementaryTypeName","src":"599:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"},{"constant":false,"id":19,"mutability":"mutable","name":"name","nameLocation":"618:4:0","nodeType":"VariableDeclaration","scope":29,"src":"611:11:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":18,"name":"string","nodeType":"ElementaryTypeName","src":"611:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"visibility":"internal"},{"constant":false,"id":21,"mutability":"mutable","name":"model","nameLocation":"634:5:0","nodeType":"VariableDeclaration","scope":29,"src":"627:12:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":20,"name":"string","nodeType":"ElementaryTypeName","src":"627:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"visibility":"internal"},{"constant":false,"id":23,"mutability":"mutable","name":"manufacturer","nameLocation":"652:12:0","nodeType":"VariableDeclaration","scope":29,"src":"644:20:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":22,"name":"address","nodeType":"ElementaryTypeName","src":"644:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"visibility":"internal"},{"constant":false,"id":25,"mutability":"mutable","name":"curOwner","nameLocation":"677:8:0","nodeType":"VariableDeclaration","scope":29,"src":"669:16:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":24,"name":"address","nodeType":"ElementaryTypeName","src":"669:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"visibility":"internal"},{"constant":false,"id":28,"mutability":"mutable","name":"owners","nameLocation":"700:6:0","nodeType":"VariableDeclaration","scope":29,"src":"690:16:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"},"typeName":{"baseType":{"id":26,"name":"address","nodeType":"ElementaryTypeName","src":"690:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":27,"nodeType":"ArrayTypeName","src":"690:9:0","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"visibility":"internal"}],"name":"Product","nameLocation":"570:7:0","nodeType":"StructDefinition","scope":253,"src":"563:148:0","visibility":"public"},{"constant":false,"functionSelector":"6b5eb09c","id":34,"mutability":"mutable","name":"manufacturers","nameLocation":"904:13:0","nodeType":"VariableDeclaration","scope":253,"src":"864:53:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Manufacturer_$13_storage_$","typeString":"mapping(address => struct MyApp.Manufacturer)"},"typeName":{"id":33,"keyType":{"id":30,"name":"address","nodeType":"ElementaryTypeName","src":"872:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"864:32:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Manufacturer_$13_storage_$","typeString":"mapping(address => struct MyApp.Manufacturer)"},"valueType":{"id":32,"nodeType":"UserDefinedTypeName","pathNode":{"id":31,"name":"Manufacturer","nodeType":"IdentifierPath","referencedDeclaration":13,"src":"883:12:0"},"referencedDeclaration":13,"src":"883:12:0","typeDescriptions":{"typeIdentifier":"t_struct$_Manufacturer_$13_storage_ptr","typeString":"struct MyApp.Manufacturer"}}},"visibility":"public"},{"constant":false,"id":39,"mutability":"mutable","name":"products","nameLocation":"946:8:0","nodeType":"VariableDeclaration","scope":253,"src":"921:33:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_Product_$29_storage_$","typeString":"mapping(uint256 => struct MyApp.Product)"},"typeName":{"id":38,"keyType":{"id":35,"name":"uint","nodeType":"ElementaryTypeName","src":"929:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Mapping","src":"921:24:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_Product_$29_storage_$","typeString":"mapping(uint256 => struct MyApp.Product)"},"valueType":{"id":37,"nodeType":"UserDefinedTypeName","pathNode":{"id":36,"name":"Product","nodeType":"IdentifierPath","referencedDeclaration":29,"src":"937:7:0"},"referencedDeclaration":29,"src":"937:7:0","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage_ptr","typeString":"struct MyApp.Product"}}},"visibility":"internal"},{"anonymous":false,"id":45,"name":"ManufacturerCreated","nameLocation":"1031:19:0","nodeType":"EventDefinition","parameters":{"id":44,"nodeType":"ParameterList","parameters":[{"constant":false,"id":41,"indexed":false,"mutability":"mutable","name":"name","nameLocation":"1058:4:0","nodeType":"VariableDeclaration","scope":45,"src":"1051:11:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":40,"name":"string","nodeType":"ElementaryTypeName","src":"1051:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"visibility":"internal"},{"constant":false,"id":43,"indexed":false,"mutability":"mutable","name":"_address","nameLocation":"1072:8:0","nodeType":"VariableDeclaration","scope":45,"src":"1064:16:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":42,"name":"address","nodeType":"ElementaryTypeName","src":"1064:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"visibility":"internal"}],"src":"1050:31:0"},"src":"1025:57:0"},{"anonymous":false,"id":51,"name":"ProductCreated","nameLocation":"1091:14:0","nodeType":"EventDefinition","parameters":{"id":50,"nodeType":"ParameterList","parameters":[{"constant":false,"id":47,"indexed":false,"mutability":"mutable","name":"id","nameLocation":"1111:2:0","nodeType":"VariableDeclaration","scope":51,"src":"1106:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":46,"name":"uint","nodeType":"ElementaryTypeName","src":"1106:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"},{"constant":false,"id":49,"indexed":false,"mutability":"mutable","name":"manufacturer","nameLocation":"1123:12:0","nodeType":"VariableDeclaration","scope":51,"src":"1115:20:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":48,"name":"address","nodeType":"ElementaryTypeName","src":"1115:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"visibility":"internal"}],"src":"1105:31:0"},"src":"1085:52:0"},{"anonymous":false,"id":57,"name":"OwnershipUpdated","nameLocation":"1146:16:0","nodeType":"EventDefinition","parameters":{"id":56,"nodeType":"ParameterList","parameters":[{"constant":false,"id":53,"indexed":false,"mutability":"mutable","name":"id","nameLocation":"1168:2:0","nodeType":"VariableDeclaration","scope":57,"src":"1163:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":52,"name":"uint","nodeType":"ElementaryTypeName","src":"1163:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"},{"constant":false,"id":55,"indexed":false,"mutability":"mutable","name":"newOwner","nameLocation":"1180:8:0","nodeType":"VariableDeclaration","scope":57,"src":"1172:16:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":54,"name":"address","nodeType":"ElementaryTypeName","src":"1172:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"visibility":"internal"}],"src":"1162:27:0"},"src":"1140:50:0"},{"body":{"id":65,"nodeType":"Block","src":"1363:28:0","statements":[{"expression":{"id":63,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"id":60,"name":"owner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":3,"src":"1368:5:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"expression":{"id":61,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":4294967281,"src":"1376:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":62,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","src":"1376:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"1368:18:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":64,"nodeType":"ExpressionStatement","src":"1368:18:0"}]},"id":66,"implemented":true,"kind":"constructor","modifiers":[],"name":"","nameLocation":"-1:-1:-1","nodeType":"FunctionDefinition","parameters":{"id":58,"nodeType":"ParameterList","parameters":[],"src":"1360:2:0"},"returnParameters":{"id":59,"nodeType":"ParameterList","parameters":[],"src":"1363:0:0"},"scope":253,"src":"1349:42:0","stateMutability":"nonpayable","virtual":false,"visibility":"public"},{"body":{"id":111,"nodeType":"Block","src":"1570:258:0","statements":[{"expression":{"arguments":[{"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":77,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"expression":{"id":74,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":4294967281,"src":"1583:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":75,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","src":"1583:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"id":76,"name":"owner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":3,"src":"1597:5:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"1583:19:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"hexValue":"4f6e6c79206f776e657220697320617574686f726973656420746f206372656174652061206d616e75666163747572657221","id":78,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"1604:52:0","typeDescriptions":{"typeIdentifier":"t_stringliteral_e8ca55ff63d4e9a0d5ab58fb91b6bf7541fbf4216e172276d98a6990a98473ed","typeString":"literal_string \\"Only owner is authorised to create a manufacturer!\\""},"value":"Only owner is authorised to create a manufacturer!"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_e8ca55ff63d4e9a0d5ab58fb91b6bf7541fbf4216e172276d98a6990a98473ed","typeString":"literal_string \\"Only owner is authorised to create a manufacturer!\\""}],"id":73,"name":"require","nodeType":"Identifier","overloadedDeclarations":[4294967278,4294967278],"referencedDeclaration":4294967278,"src":"1575:7:0","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":79,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1575:82:0","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":80,"nodeType":"ExpressionStatement","src":"1575:82:0"},{"assignments":[83],"declarations":[{"constant":false,"id":83,"mutability":"mutable","name":"m","nameLocation":"1685:1:0","nodeType":"VariableDeclaration","scope":111,"src":"1664:22:0","stateVariable":false,"storageLocation":"storage","typeDescriptions":{"typeIdentifier":"t_struct$_Manufacturer_$13_storage_ptr","typeString":"struct MyApp.Manufacturer"},"typeName":{"id":82,"nodeType":"UserDefinedTypeName","pathNode":{"id":81,"name":"Manufacturer","nodeType":"IdentifierPath","referencedDeclaration":13,"src":"1664:12:0"},"referencedDeclaration":13,"src":"1664:12:0","typeDescriptions":{"typeIdentifier":"t_struct$_Manufacturer_$13_storage_ptr","typeString":"struct MyApp.Manufacturer"}},"visibility":"internal"}],"id":87,"initialValue":{"baseExpression":{"id":84,"name":"manufacturers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":34,"src":"1689:13:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Manufacturer_$13_storage_$","typeString":"mapping(address => struct MyApp.Manufacturer storage ref)"}},"id":86,"indexExpression":{"id":85,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":70,"src":"1703:8:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1689:23:0","typeDescriptions":{"typeIdentifier":"t_struct$_Manufacturer_$13_storage","typeString":"struct MyApp.Manufacturer storage ref"}},"nodeType":"VariableDeclarationStatement","src":"1664:48:0"},{"expression":{"id":92,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"expression":{"id":88,"name":"m","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":83,"src":"1717:1:0","typeDescriptions":{"typeIdentifier":"t_struct$_Manufacturer_$13_storage_ptr","typeString":"struct MyApp.Manufacturer storage pointer"}},"id":90,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"exists","nodeType":"MemberAccess","referencedDeclaration":8,"src":"1717:8:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"hexValue":"74727565","id":91,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"1728:4:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"1717:15:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":93,"nodeType":"ExpressionStatement","src":"1717:15:0"},{"expression":{"id":98,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"expression":{"id":94,"name":"m","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":83,"src":"1737:1:0","typeDescriptions":{"typeIdentifier":"t_struct$_Manufacturer_$13_storage_ptr","typeString":"struct MyApp.Manufacturer storage pointer"}},"id":96,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"name","nodeType":"MemberAccess","referencedDeclaration":10,"src":"1737:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"id":97,"name":"_name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":68,"src":"1746:5:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"1737:14:0","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":99,"nodeType":"ExpressionStatement","src":"1737:14:0"},{"expression":{"id":104,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"expression":{"id":100,"name":"m","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":83,"src":"1756:1:0","typeDescriptions":{"typeIdentifier":"t_struct$_Manufacturer_$13_storage_ptr","typeString":"struct MyApp.Manufacturer storage pointer"}},"id":102,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"_address","nodeType":"MemberAccess","referencedDeclaration":12,"src":"1756:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"id":103,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":70,"src":"1769:8:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"1756:21:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":105,"nodeType":"ExpressionStatement","src":"1756:21:0"},{"eventCall":{"arguments":[{"id":107,"name":"_name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":68,"src":"1807:5:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"id":108,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":70,"src":"1814:8:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_address","typeString":"address"}],"id":106,"name":"ManufacturerCreated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":45,"src":"1787:19:0","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_string_memory_ptr_$_t_address_$returns$__$","typeString":"function (string memory,address)"}},"id":109,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1787:36:0","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":110,"nodeType":"EmitStatement","src":"1782:41:0"}]},"functionSelector":"5d50e808","id":112,"implemented":true,"kind":"function","modifiers":[],"name":"createManufacturer","nameLocation":"1505:18:0","nodeType":"FunctionDefinition","parameters":{"id":71,"nodeType":"ParameterList","parameters":[{"constant":false,"id":68,"mutability":"mutable","name":"_name","nameLocation":"1538:5:0","nodeType":"VariableDeclaration","scope":112,"src":"1524:19:0","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":67,"name":"string","nodeType":"ElementaryTypeName","src":"1524:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"visibility":"internal"},{"constant":false,"id":70,"mutability":"mutable","name":"_address","nameLocation":"1553:8:0","nodeType":"VariableDeclaration","scope":112,"src":"1545:16:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":69,"name":"address","nodeType":"ElementaryTypeName","src":"1545:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"visibility":"internal"}],"src":"1523:39:0"},"returnParameters":{"id":72,"nodeType":"ParameterList","parameters":[],"src":"1570:0:0"},"scope":253,"src":"1496:332:0","stateMutability":"nonpayable","virtual":false,"visibility":"public"},{"body":{"id":195,"nodeType":"Block","src":"1992:425:0","statements":[{"expression":{"arguments":[{"commonType":{"typeIdentifier":"t_bool","typeString":"bool"},"id":126,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"expression":{"baseExpression":{"id":120,"name":"manufacturers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":34,"src":"2005:13:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Manufacturer_$13_storage_$","typeString":"mapping(address => struct MyApp.Manufacturer storage ref)"}},"id":123,"indexExpression":{"expression":{"id":121,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":4294967281,"src":"2019:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":122,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","src":"2019:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2005:25:0","typeDescriptions":{"typeIdentifier":"t_struct$_Manufacturer_$13_storage","typeString":"struct MyApp.Manufacturer storage ref"}},"id":124,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"exists","nodeType":"MemberAccess","referencedDeclaration":8,"src":"2005:32:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"hexValue":"74727565","id":125,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"2041:4:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"2005:40:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"hexValue":"596f7520617265206e6f742061204d616e75666163747572657221","id":127,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"2047:29:0","typeDescriptions":{"typeIdentifier":"t_stringliteral_92d760f38db1287b6ef919dfc1c447222acc05c05ad112f6a45630b9d3d328ce","typeString":"literal_string \\"You are not a Manufacturer!\\""},"value":"You are not a Manufacturer!"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_92d760f38db1287b6ef919dfc1c447222acc05c05ad112f6a45630b9d3d328ce","typeString":"literal_string \\"You are not a Manufacturer!\\""}],"id":119,"name":"require","nodeType":"Identifier","overloadedDeclarations":[4294967278,4294967278],"referencedDeclaration":4294967278,"src":"1997:7:0","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":128,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1997:80:0","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":129,"nodeType":"ExpressionStatement","src":"1997:80:0"},{"assignments":[132],"declarations":[{"constant":false,"id":132,"mutability":"mutable","name":"p","nameLocation":"2100:1:0","nodeType":"VariableDeclaration","scope":195,"src":"2084:17:0","stateVariable":false,"storageLocation":"storage","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage_ptr","typeString":"struct MyApp.Product"},"typeName":{"id":131,"nodeType":"UserDefinedTypeName","pathNode":{"id":130,"name":"Product","nodeType":"IdentifierPath","referencedDeclaration":29,"src":"2084:7:0"},"referencedDeclaration":29,"src":"2084:7:0","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage_ptr","typeString":"struct MyApp.Product"}},"visibility":"internal"}],"id":136,"initialValue":{"baseExpression":{"id":133,"name":"products","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":39,"src":"2104:8:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_Product_$29_storage_$","typeString":"mapping(uint256 => struct MyApp.Product storage ref)"}},"id":135,"indexExpression":{"id":134,"name":"productId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6,"src":"2113:9:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2104:19:0","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage","typeString":"struct MyApp.Product storage ref"}},"nodeType":"VariableDeclarationStatement","src":"2084:39:0"},{"expression":{"id":141,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"expression":{"id":137,"name":"p","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":132,"src":"2128:1:0","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage_ptr","typeString":"struct MyApp.Product storage pointer"}},"id":139,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"exists","nodeType":"MemberAccess","referencedDeclaration":15,"src":"2128:8:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"hexValue":"74727565","id":140,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"2139:4:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"2128:15:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":142,"nodeType":"ExpressionStatement","src":"2128:15:0"},{"expression":{"id":147,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"expression":{"id":143,"name":"p","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":132,"src":"2148:1:0","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage_ptr","typeString":"struct MyApp.Product storage pointer"}},"id":145,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"id","nodeType":"MemberAccess","referencedDeclaration":17,"src":"2148:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"id":146,"name":"productId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6,"src":"2155:9:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"2148:16:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":148,"nodeType":"ExpressionStatement","src":"2148:16:0"},{"expression":{"id":153,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"expression":{"id":149,"name":"p","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":132,"src":"2169:1:0","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage_ptr","typeString":"struct MyApp.Product storage pointer"}},"id":151,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"name","nodeType":"MemberAccess","referencedDeclaration":19,"src":"2169:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"id":152,"name":"_name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":114,"src":"2178:5:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"2169:14:0","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":154,"nodeType":"ExpressionStatement","src":"2169:14:0"},{"expression":{"id":159,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"expression":{"id":155,"name":"p","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":132,"src":"2188:1:0","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage_ptr","typeString":"struct MyApp.Product storage pointer"}},"id":157,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"model","nodeType":"MemberAccess","referencedDeclaration":21,"src":"2188:7:0","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"id":158,"name":"_model","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":116,"src":"2198:6:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"2188:16:0","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":160,"nodeType":"ExpressionStatement","src":"2188:16:0"},{"expression":{"id":166,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"expression":{"id":161,"name":"p","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":132,"src":"2209:1:0","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage_ptr","typeString":"struct MyApp.Product storage pointer"}},"id":163,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"manufacturer","nodeType":"MemberAccess","referencedDeclaration":23,"src":"2209:14:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"expression":{"id":164,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":4294967281,"src":"2226:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":165,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","src":"2226:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"2209:27:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":167,"nodeType":"ExpressionStatement","src":"2209:27:0"},{"expression":{"id":173,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"expression":{"id":168,"name":"p","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":132,"src":"2241:1:0","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage_ptr","typeString":"struct MyApp.Product storage pointer"}},"id":170,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"curOwner","nodeType":"MemberAccess","referencedDeclaration":25,"src":"2241:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"expression":{"id":171,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":4294967281,"src":"2254:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":172,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","src":"2254:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"2241:23:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":174,"nodeType":"ExpressionStatement","src":"2241:23:0"},{"expression":{"arguments":[{"expression":{"id":180,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":4294967281,"src":"2334:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":181,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","src":"2334:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"expression":{"expression":{"id":175,"name":"p","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":132,"src":"2320:1:0","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage_ptr","typeString":"struct MyApp.Product storage pointer"}},"id":178,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"owners","nodeType":"MemberAccess","referencedDeclaration":28,"src":"2320:8:0","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[] storage ref"}},"id":179,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","src":"2320:13:0","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$bound_to$_t_array$_t_address_$dyn_storage_ptr_$","typeString":"function (address[] storage pointer,address)"}},"id":182,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2320:25:0","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":183,"nodeType":"ExpressionStatement","src":"2320:25:0"},{"expression":{"id":185,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"2352:11:0","subExpression":{"id":184,"name":"productId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6,"src":"2352:9:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":186,"nodeType":"ExpressionStatement","src":"2352:11:0"},{"eventCall":{"arguments":[{"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":190,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"id":188,"name":"productId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6,"src":"2388:9:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"-","rightExpression":{"hexValue":"31","id":189,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"2398:1:0","typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"2388:11:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"expression":{"id":191,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":4294967281,"src":"2401:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":192,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","src":"2401:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_address","typeString":"address"}],"id":187,"name":"ProductCreated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":51,"src":"2373:14:0","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_uint256_$_t_address_$returns$__$","typeString":"function (uint256,address)"}},"id":193,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2373:39:0","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":194,"nodeType":"EmitStatement","src":"2368:44:0"}]},"functionSelector":"87592bce","id":196,"implemented":true,"kind":"function","modifiers":[],"name":"createProduct","nameLocation":"1928:13:0","nodeType":"FunctionDefinition","parameters":{"id":117,"nodeType":"ParameterList","parameters":[{"constant":false,"id":114,"mutability":"mutable","name":"_name","nameLocation":"1956:5:0","nodeType":"VariableDeclaration","scope":196,"src":"1942:19:0","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":113,"name":"string","nodeType":"ElementaryTypeName","src":"1942:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"visibility":"internal"},{"constant":false,"id":116,"mutability":"mutable","name":"_model","nameLocation":"1977:6:0","nodeType":"VariableDeclaration","scope":196,"src":"1963:20:0","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":115,"name":"string","nodeType":"ElementaryTypeName","src":"1963:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"visibility":"internal"}],"src":"1941:43:0"},"returnParameters":{"id":118,"nodeType":"ParameterList","parameters":[],"src":"1992:0:0"},"scope":253,"src":"1919:498:0","stateMutability":"nonpayable","virtual":false,"visibility":"public"},{"body":{"id":208,"nodeType":"Block","src":"2648:30:0","statements":[{"expression":{"baseExpression":{"id":204,"name":"products","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":39,"src":"2660:8:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_Product_$29_storage_$","typeString":"mapping(uint256 => struct MyApp.Product storage ref)"}},"id":206,"indexExpression":{"id":205,"name":"_id","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":198,"src":"2669:3:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2660:13:0","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage","typeString":"struct MyApp.Product storage ref"}},"functionReturnParameters":203,"id":207,"nodeType":"Return","src":"2653:20:0"}]},"functionSelector":"b9db15b4","id":209,"implemented":true,"kind":"function","modifiers":[],"name":"getProduct","nameLocation":"2591:10:0","nodeType":"FunctionDefinition","parameters":{"id":199,"nodeType":"ParameterList","parameters":[{"constant":false,"id":198,"mutability":"mutable","name":"_id","nameLocation":"2607:3:0","nodeType":"VariableDeclaration","scope":209,"src":"2602:8:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":197,"name":"uint","nodeType":"ElementaryTypeName","src":"2602:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"}],"src":"2601:10:0"},"returnParameters":{"id":203,"nodeType":"ParameterList","parameters":[{"constant":false,"id":202,"mutability":"mutable","name":"","nameLocation":"-1:-1:-1","nodeType":"VariableDeclaration","scope":209,"src":"2632:14:0","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_memory_ptr","typeString":"struct MyApp.Product"},"typeName":{"id":201,"nodeType":"UserDefinedTypeName","pathNode":{"id":200,"name":"Product","nodeType":"IdentifierPath","referencedDeclaration":29,"src":"2632:7:0"},"referencedDeclaration":29,"src":"2632:7:0","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage_ptr","typeString":"struct MyApp.Product"}},"visibility":"internal"}],"src":"2631:16:0"},"scope":253,"src":"2582:96:0","stateMutability":"view","virtual":false,"visibility":"public"},{"body":{"id":251,"nodeType":"Block","src":"2978:203:0","statements":[{"assignments":[218],"declarations":[{"constant":false,"id":218,"mutability":"mutable","name":"p","nameLocation":"2999:1:0","nodeType":"VariableDeclaration","scope":251,"src":"2983:17:0","stateVariable":false,"storageLocation":"storage","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage_ptr","typeString":"struct MyApp.Product"},"typeName":{"id":217,"nodeType":"UserDefinedTypeName","pathNode":{"id":216,"name":"Product","nodeType":"IdentifierPath","referencedDeclaration":29,"src":"2983:7:0"},"referencedDeclaration":29,"src":"2983:7:0","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage_ptr","typeString":"struct MyApp.Product"}},"visibility":"internal"}],"id":222,"initialValue":{"baseExpression":{"id":219,"name":"products","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":39,"src":"3003:8:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_Product_$29_storage_$","typeString":"mapping(uint256 => struct MyApp.Product storage ref)"}},"id":221,"indexExpression":{"id":220,"name":"_id","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":211,"src":"3012:3:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3003:13:0","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage","typeString":"struct MyApp.Product storage ref"}},"nodeType":"VariableDeclarationStatement","src":"2983:33:0"},{"expression":{"arguments":[{"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":228,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"expression":{"id":224,"name":"p","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":218,"src":"3029:1:0","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage_ptr","typeString":"struct MyApp.Product storage pointer"}},"id":225,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"curOwner","nodeType":"MemberAccess","referencedDeclaration":25,"src":"3029:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"expression":{"id":226,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":4294967281,"src":"3043:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":227,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","src":"3043:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"3029:24:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"hexValue":"4e6f7420617574686f72697a6564","id":229,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"3055:16:0","typeDescriptions":{"typeIdentifier":"t_stringliteral_fac3bac318c0d00994f57b0f2f4c643c313072b71db2302bf4b900309cc50b36","typeString":"literal_string \\"Not authorized\\""},"value":"Not authorized"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_fac3bac318c0d00994f57b0f2f4c643c313072b71db2302bf4b900309cc50b36","typeString":"literal_string \\"Not authorized\\""}],"id":223,"name":"require","nodeType":"Identifier","overloadedDeclarations":[4294967278,4294967278],"referencedDeclaration":4294967278,"src":"3021:7:0","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":230,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"3021:51:0","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":231,"nodeType":"ExpressionStatement","src":"3021:51:0"},{"expression":{"id":236,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"expression":{"id":232,"name":"p","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":218,"src":"3081:1:0","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage_ptr","typeString":"struct MyApp.Product storage pointer"}},"id":234,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"curOwner","nodeType":"MemberAccess","referencedDeclaration":25,"src":"3081:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"id":235,"name":"_newOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":213,"src":"3094:9:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"3081:22:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":237,"nodeType":"ExpressionStatement","src":"3081:22:0"},{"expression":{"arguments":[{"id":243,"name":"_newOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":213,"src":"3122:9:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"expression":{"expression":{"id":238,"name":"p","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":218,"src":"3108:1:0","typeDescriptions":{"typeIdentifier":"t_struct$_Product_$29_storage_ptr","typeString":"struct MyApp.Product storage pointer"}},"id":241,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"owners","nodeType":"MemberAccess","referencedDeclaration":28,"src":"3108:8:0","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[] storage ref"}},"id":242,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","src":"3108:13:0","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$bound_to$_t_array$_t_address_$dyn_storage_ptr_$","typeString":"function (address[] storage pointer,address)"}},"id":244,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"3108:24:0","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":245,"nodeType":"ExpressionStatement","src":"3108:24:0"},{"eventCall":{"arguments":[{"id":247,"name":"_id","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":211,"src":"3161:3:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"id":248,"name":"_newOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":213,"src":"3166:9:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_address","typeString":"address"}],"id":246,"name":"OwnershipUpdated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":57,"src":"3144:16:0","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_uint256_$_t_address_$returns$__$","typeString":"function (uint256,address)"}},"id":249,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"3144:32:0","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":250,"nodeType":"EmitStatement","src":"3139:37:0"}]},"functionSelector":"cc0266f7","id":252,"implemented":true,"kind":"function","modifiers":[],"name":"updateOwnership","nameLocation":"2926:15:0","nodeType":"FunctionDefinition","parameters":{"id":214,"nodeType":"ParameterList","parameters":[{"constant":false,"id":211,"mutability":"mutable","name":"_id","nameLocation":"2947:3:0","nodeType":"VariableDeclaration","scope":252,"src":"2942:8:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":210,"name":"uint","nodeType":"ElementaryTypeName","src":"2942:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"},{"constant":false,"id":213,"mutability":"mutable","name":"_newOwner","nameLocation":"2960:9:0","nodeType":"VariableDeclaration","scope":252,"src":"2952:17:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":212,"name":"address","nodeType":"ElementaryTypeName","src":"2952:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"visibility":"internal"}],"src":"2941:29:0"},"returnParameters":{"id":215,"nodeType":"ParameterList","parameters":[],"src":"2978:0:0"},"scope":253,"src":"2917:264:0","stateMutability":"nonpayable","virtual":false,"visibility":"public"}],"scope":254,"src":"104:3082:0","usedErrors":[]}],"src":"69:3117:0"},"compiler":{"name":"solc","version":"0.8.4+commit.c7e474f2.Emscripten.clang"},"networks":{"5777":{"events":{},"links":{},"address":"0xf396BAF3e2e057DD788A2999CD9714fC155A9FD8","transactionHash":"0xf0c6768cc8161180ec7c3e50fdcd1cc022936b163dd1a392a59093d98789fbae"}},"schemaVersion":"3.4.1","updatedAt":"2021-07-12T11:31:46.747Z","networkType":"ethereum","devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}}'
      );
    },
    32: function (e, t, n) {
      e.exports = n(54);
    },
    37: function (e, t, n) {},
    42: function (e, t, n) {},
    54: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(0),
        a = n.n(r),
        i = n(28),
        s = n.n(i),
        o = n(12),
        d = (n(37), n(38), n(39), n(40), n(31)),
        l = n(8),
        c = n(3),
        u = n(4),
        p = n(6),
        y = n(5),
        f = n(1),
        m = n(15),
        b = n.n(m);
      function _() {
        _ = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          s = a.asyncIterator || "@@asyncIterator",
          o = a.toStringTag || "@@toStringTag";
        function d(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          d({}, "");
        } catch (E) {
          d = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function l(e, t, n, a) {
          var i = t && t.prototype instanceof p ? t : p,
            s = Object.create(i.prototype),
            o = new N(a || []);
          return r(s, "_invoke", { value: Y(e, n, o) }), s;
        }
        function c(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (E) {
            return { type: "throw", arg: E };
          }
        }
        e.wrap = l;
        var u = {};
        function p() {}
        function y() {}
        function f() {}
        var m = {};
        d(m, i, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          g = b && b(b(x([])));
        g && g !== t && n.call(g, i) && (m = g);
        var T = (f.prototype = p.prototype = Object.create(m));
        function v(e) {
          ["next", "throw", "return"].forEach(function (t) {
            d(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function h(e, t) {
          var a;
          r(this, "_invoke", {
            value: function (r, i) {
              function s() {
                return new t(function (a, s) {
                  !(function r(a, i, s, o) {
                    var d = c(e[a], e, i);
                    if ("throw" !== d.type) {
                      var l = d.arg,
                        u = l.value;
                      return u && "object" == typeof u && n.call(u, "__await")
                        ? t.resolve(u.__await).then(
                            function (e) {
                              r("next", e, s, o);
                            },
                            function (e) {
                              r("throw", e, s, o);
                            }
                          )
                        : t.resolve(u).then(
                            function (e) {
                              (l.value = e), s(l);
                            },
                            function (e) {
                              return r("throw", e, s, o);
                            }
                          );
                    }
                    o(d.arg);
                  })(r, i, a, s);
                });
              }
              return (a = a ? a.then(s, s) : s());
            },
          });
        }
        function Y(e, t, n) {
          var r = "suspendedStart";
          return function (a, i) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === a) throw i;
              return L();
            }
            for (n.method = a, n.arg = i; ; ) {
              var s = n.delegate;
              if (s) {
                var o = I(s, n);
                if (o) {
                  if (o === u) continue;
                  return o;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var d = c(e, t, n);
              if ("normal" === d.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), d.arg === u)
                )
                  continue;
                return { value: d.arg, done: n.done };
              }
              "throw" === d.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = d.arg));
            }
          };
        }
        function I(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                I(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              u
            );
          var a = c(r, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), u
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                u)
              : i
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              u);
        }
        function S(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function D(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function N(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(S, this),
            this.reset(!0);
        }
        function x(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: L };
        }
        function L() {
          return { value: void 0, done: !0 };
        }
        return (
          (y.prototype = f),
          r(T, "constructor", { value: f, configurable: !0 }),
          r(f, "constructor", { value: y, configurable: !0 }),
          (y.displayName = d(f, o, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === y || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, f)
                : ((e.__proto__ = f), d(e, o, "GeneratorFunction")),
              (e.prototype = Object.create(T)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          v(h.prototype),
          d(h.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = h),
          (e.async = function (t, n, r, a, i) {
            void 0 === i && (i = Promise);
            var s = new h(l(t, n, r, a), i);
            return e.isGeneratorFunction(n)
              ? s
              : s.next().then(function (e) {
                  return e.done ? e.value : s.next();
                });
          }),
          v(T),
          d(T, o, "Generator"),
          d(T, i, function () {
            return this;
          }),
          d(T, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = x),
          (N.prototype = {
            constructor: N,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(D),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  s = i.completion;
                if ("root" === i.tryLoc) return r("end");
                if (i.tryLoc <= this.prev) {
                  var o = n.call(i, "catchLoc"),
                    d = n.call(i, "finallyLoc");
                  if (o && d) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (o) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!d)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var i = a;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var s = i ? i.completion : {};
              return (
                (s.type = e),
                (s.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), u)
                  : this.complete(s)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                u
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), D(n), u;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    D(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: x(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                u
              );
            },
          }),
          e
        );
      }
      var g = function () {
          return new Promise(function (e, t) {
            window.addEventListener(
              "load",
              Object(l.a)(
                _().mark(function n() {
                  var r, a, i, s;
                  return _().wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (!window.ethereum) {
                              n.next = 13;
                              break;
                            }
                            return (
                              (r = new b.a(window.ethereum)),
                              (n.prev = 2),
                              (n.next = 5),
                              window.ethereum.enable()
                            );
                          case 5:
                            e(r), (n.next = 11);
                            break;
                          case 8:
                            (n.prev = 8), (n.t0 = n.catch(2)), t(n.t0);
                          case 11:
                            n.next = 14;
                            break;
                          case 13:
                            window.web3
                              ? ((a = window.web3),
                                console.log("Injected web3 detected."),
                                e(a))
                              : ((i = new b.a.providers.HttpProvider(
                                  "http://127.0.0.1:7545"
                                )),
                                (s = new b.a(i)),
                                console.log(
                                  "No web3 instance injected, using Local web3."
                                ),
                                e(s));
                          case 14:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[2, 8]]
                  );
                })
              )
            );
          });
        },
        T = (n(42), n(18)),
        v = n(9),
        h = (function (e) {
          Object(p.a)(n, e);
          var t = Object(y.a)(n);
          function n(e) {
            var r;
            return (
              Object(c.a)(this, n),
              ((r = t.call(this, e)).handleChange = function (e) {
                var t = e.target,
                  n = t.name,
                  a = t.value;
                r.setState(Object(v.a)({}, n, a));
              }),
              (r.state = { text: "" }),
              r
            );
          }
          return (
            Object(u.a)(n, [
              {
                key: "render",
                value: function () {
                  return a.a.createElement(
                    a.a.Fragment,
                    null,
                    a.a.createElement(
                      "div",
                      { className: "container py-4" },
                      a.a.createElement(
                        "h1",
                        { className: "text-center" },
                        a.a.createElement("i", null, "ForgeryInsight")
                      ),
                      a.a.createElement(
                        "h6",
                        { className: "text-center" },
                        a.a.createElement(
                          "i",
                          null,
                          "MY ADDRESS:0xa0D5415c58e6c1690f365C63e3970e6c0f11964F "
                        )
                      )
                    ),
                    a.a.createElement(
                      "nav",
                      {
                        className:
                          "navbar navbar-expand-sm navbar-light bg-light",
                      },
                      a.a.createElement(
                        "button",
                        {
                          className: "navbar-toggler",
                          type: "button",
                          "data-toggle": "collapse",
                          "data-target": "#navbarNav",
                          "aria-controls": "navbarNav",
                          "aria-expanded": "false",
                          "aria-label": "Toggle navigation",
                        },
                        a.a.createElement("span", {
                          className: "navbar-toggler-icon",
                        })
                      ),
                      a.a.createElement(
                        "div",
                        {
                          className:
                            "collapse navbar-collapse justify-content-center",
                          id: "navbarNav",
                        },
                        a.a.createElement(
                          "ul",
                          { className: "navbar-nav" },
                          a.a.createElement(
                            "li",
                            { className: "nav-item" },
                            a.a.createElement(
                              o.b,
                              { className: "nav-link active-", to: "/" },
                              "Home"
                            )
                          ),
                          a.a.createElement(
                            "li",
                            { className: "nav-item" },
                            a.a.createElement(
                              o.b,
                              { className: "nav-link active-", to: "admin" },
                              "Admin"
                            )
                          ),
                          a.a.createElement(
                            "li",
                            { className: "nav-item" },
                            a.a.createElement(
                              o.b,
                              {
                                className: "nav-link active-",
                                to: "manufacturer",
                              },
                              "Manufacturer"
                            )
                          ),
                          a.a.createElement(
                            "li",
                            { className: "nav-item" },
                            a.a.createElement(
                              o.b,
                              { className: "nav-link active-", to: "sell" },
                              "Sell Product"
                            )
                          ),
                          a.a.createElement(
                            "li",
                            { className: "nav-item" },
                            a.a.createElement(
                              o.b,
                              { className: "nav-link active-", to: "qr" },
                              "QR Code"
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            n
          );
        })(r.Component);
      function Y() {
        Y = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          s = a.asyncIterator || "@@asyncIterator",
          o = a.toStringTag || "@@toStringTag";
        function d(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          d({}, "");
        } catch (E) {
          d = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function l(e, t, n, a) {
          var i = t && t.prototype instanceof p ? t : p,
            s = Object.create(i.prototype),
            o = new N(a || []);
          return r(s, "_invoke", { value: h(e, n, o) }), s;
        }
        function c(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (E) {
            return { type: "throw", arg: E };
          }
        }
        e.wrap = l;
        var u = {};
        function p() {}
        function y() {}
        function f() {}
        var m = {};
        d(m, i, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          _ = b && b(b(x([])));
        _ && _ !== t && n.call(_, i) && (m = _);
        var g = (f.prototype = p.prototype = Object.create(m));
        function T(e) {
          ["next", "throw", "return"].forEach(function (t) {
            d(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function v(e, t) {
          var a;
          r(this, "_invoke", {
            value: function (r, i) {
              function s() {
                return new t(function (a, s) {
                  !(function r(a, i, s, o) {
                    var d = c(e[a], e, i);
                    if ("throw" !== d.type) {
                      var l = d.arg,
                        u = l.value;
                      return u && "object" == typeof u && n.call(u, "__await")
                        ? t.resolve(u.__await).then(
                            function (e) {
                              r("next", e, s, o);
                            },
                            function (e) {
                              r("throw", e, s, o);
                            }
                          )
                        : t.resolve(u).then(
                            function (e) {
                              (l.value = e), s(l);
                            },
                            function (e) {
                              return r("throw", e, s, o);
                            }
                          );
                    }
                    o(d.arg);
                  })(r, i, a, s);
                });
              }
              return (a = a ? a.then(s, s) : s());
            },
          });
        }
        function h(e, t, n) {
          var r = "suspendedStart";
          return function (a, i) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === a) throw i;
              return L();
            }
            for (n.method = a, n.arg = i; ; ) {
              var s = n.delegate;
              if (s) {
                var o = I(s, n);
                if (o) {
                  if (o === u) continue;
                  return o;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var d = c(e, t, n);
              if ("normal" === d.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), d.arg === u)
                )
                  continue;
                return { value: d.arg, done: n.done };
              }
              "throw" === d.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = d.arg));
            }
          };
        }
        function I(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                I(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              u
            );
          var a = c(r, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), u
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                u)
              : i
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              u);
        }
        function S(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function D(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function N(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(S, this),
            this.reset(!0);
        }
        function x(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: L };
        }
        function L() {
          return { value: void 0, done: !0 };
        }
        return (
          (y.prototype = f),
          r(g, "constructor", { value: f, configurable: !0 }),
          r(f, "constructor", { value: y, configurable: !0 }),
          (y.displayName = d(f, o, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === y || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, f)
                : ((e.__proto__ = f), d(e, o, "GeneratorFunction")),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          T(v.prototype),
          d(v.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = v),
          (e.async = function (t, n, r, a, i) {
            void 0 === i && (i = Promise);
            var s = new v(l(t, n, r, a), i);
            return e.isGeneratorFunction(n)
              ? s
              : s.next().then(function (e) {
                  return e.done ? e.value : s.next();
                });
          }),
          T(g),
          d(g, o, "Generator"),
          d(g, i, function () {
            return this;
          }),
          d(g, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = x),
          (N.prototype = {
            constructor: N,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(D),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  s = i.completion;
                if ("root" === i.tryLoc) return r("end");
                if (i.tryLoc <= this.prev) {
                  var o = n.call(i, "catchLoc"),
                    d = n.call(i, "finallyLoc");
                  if (o && d) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (o) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!d)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var i = a;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var s = i ? i.completion : {};
              return (
                (s.type = e),
                (s.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), u)
                  : this.complete(s)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                u
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), D(n), u;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    D(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: x(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                u
              );
            },
          }),
          e
        );
      }
      var I = (function (e) {
        Object(p.a)(n, e);
        var t = Object(y.a)(n);
        function n(e) {
          var r;
          return (
            Object(c.a)(this, n),
            ((r = t.call(this, e)).handleChange = function (e) {
              var t = e.target,
                n = t.name,
                a = t.value;
              r.setState(Object(v.a)({}, n, a));
            }),
            (r.handleCreateManufacturer = (function () {
              var e = Object(l.a)(
                Y().mark(function e(t) {
                  var n, a, i, s, o, d;
                  return Y().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              t.preventDefault(),
                              (n = r.props),
                              (a = n.account),
                              (i = n.contract),
                              (s = r.state),
                              (o = s.name),
                              (d = s.address),
                              (e.prev = 3),
                              (e.next = 6),
                              i.methods
                                .createManufacturer(o, d)
                                .send({ from: a })
                            );
                          case 6:
                            window.alert(
                              "Created a manufacturer\n"
                                .concat(o, "\n")
                                .concat(d)
                            ),
                              (e.next = 13);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(3)),
                              window.alert("Error occured!"),
                              console.log(e.t0);
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[3, 9]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (r.state = { name: "", address: "" }),
            r
          );
        }
        return (
          Object(u.a)(n, [
            {
              key: "render",
              value: function () {
                return a.a.createElement(
                  "div",
                  { id: "content", className: "mt-4" },
                  a.a.createElement(
                    "h5",
                    { className: "text-center" },
                    a.a.createElement("i", null, "Add a manufacturer")
                  ),
                  a.a.createElement(
                    "form",
                    {
                      className: "my-3",
                      onSubmit: this.handleCreateManufacturer,
                    },
                    a.a.createElement(
                      "div",
                      { className: "form-group" },
                      a.a.createElement("input", {
                        type: "text",
                        className: "form-control",
                        placeholder: "Enter name",
                        name: "name",
                        value: this.state.name,
                        onChange: this.handleChange,
                      })
                    ),
                    a.a.createElement(
                      "div",
                      { className: "form-group" },
                      a.a.createElement("input", {
                        type: "text",
                        className: "form-control",
                        placeholder: "Enter address",
                        name: "address",
                        value: this.state.address,
                        onChange: this.handleChange,
                      })
                    ),
                    a.a.createElement(
                      "button",
                      {
                        type: "submit",
                        className: "btn btn-primary btn-block",
                      },
                      "Add"
                    )
                  )
                );
              },
            },
          ]),
          n
        );
      })(r.Component);
      function S() {
        S = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          s = a.asyncIterator || "@@asyncIterator",
          o = a.toStringTag || "@@toStringTag";
        function d(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          d({}, "");
        } catch (E) {
          d = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function l(e, t, n, a) {
          var i = t && t.prototype instanceof p ? t : p,
            s = Object.create(i.prototype),
            o = new N(a || []);
          return r(s, "_invoke", { value: h(e, n, o) }), s;
        }
        function c(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (E) {
            return { type: "throw", arg: E };
          }
        }
        e.wrap = l;
        var u = {};
        function p() {}
        function y() {}
        function f() {}
        var m = {};
        d(m, i, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          _ = b && b(b(x([])));
        _ && _ !== t && n.call(_, i) && (m = _);
        var g = (f.prototype = p.prototype = Object.create(m));
        function T(e) {
          ["next", "throw", "return"].forEach(function (t) {
            d(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function v(e, t) {
          var a;
          r(this, "_invoke", {
            value: function (r, i) {
              function s() {
                return new t(function (a, s) {
                  !(function r(a, i, s, o) {
                    var d = c(e[a], e, i);
                    if ("throw" !== d.type) {
                      var l = d.arg,
                        u = l.value;
                      return u && "object" == typeof u && n.call(u, "__await")
                        ? t.resolve(u.__await).then(
                            function (e) {
                              r("next", e, s, o);
                            },
                            function (e) {
                              r("throw", e, s, o);
                            }
                          )
                        : t.resolve(u).then(
                            function (e) {
                              (l.value = e), s(l);
                            },
                            function (e) {
                              return r("throw", e, s, o);
                            }
                          );
                    }
                    o(d.arg);
                  })(r, i, a, s);
                });
              }
              return (a = a ? a.then(s, s) : s());
            },
          });
        }
        function h(e, t, n) {
          var r = "suspendedStart";
          return function (a, i) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === a) throw i;
              return L();
            }
            for (n.method = a, n.arg = i; ; ) {
              var s = n.delegate;
              if (s) {
                var o = Y(s, n);
                if (o) {
                  if (o === u) continue;
                  return o;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var d = c(e, t, n);
              if ("normal" === d.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), d.arg === u)
                )
                  continue;
                return { value: d.arg, done: n.done };
              }
              "throw" === d.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = d.arg));
            }
          };
        }
        function Y(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                Y(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              u
            );
          var a = c(r, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), u
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                u)
              : i
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              u);
        }
        function I(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function D(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function N(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(I, this),
            this.reset(!0);
        }
        function x(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: L };
        }
        function L() {
          return { value: void 0, done: !0 };
        }
        return (
          (y.prototype = f),
          r(g, "constructor", { value: f, configurable: !0 }),
          r(f, "constructor", { value: y, configurable: !0 }),
          (y.displayName = d(f, o, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === y || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, f)
                : ((e.__proto__ = f), d(e, o, "GeneratorFunction")),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          T(v.prototype),
          d(v.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = v),
          (e.async = function (t, n, r, a, i) {
            void 0 === i && (i = Promise);
            var s = new v(l(t, n, r, a), i);
            return e.isGeneratorFunction(n)
              ? s
              : s.next().then(function (e) {
                  return e.done ? e.value : s.next();
                });
          }),
          T(g),
          d(g, o, "Generator"),
          d(g, i, function () {
            return this;
          }),
          d(g, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = x),
          (N.prototype = {
            constructor: N,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(D),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  s = i.completion;
                if ("root" === i.tryLoc) return r("end");
                if (i.tryLoc <= this.prev) {
                  var o = n.call(i, "catchLoc"),
                    d = n.call(i, "finallyLoc");
                  if (o && d) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (o) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!d)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var i = a;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var s = i ? i.completion : {};
              return (
                (s.type = e),
                (s.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), u)
                  : this.complete(s)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                u
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), D(n), u;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    D(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: x(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                u
              );
            },
          }),
          e
        );
      }
      var D = (function (e) {
        Object(p.a)(n, e);
        var t = Object(y.a)(n);
        function n(e) {
          var r;
          return (
            Object(c.a)(this, n),
            ((r = t.call(this, e)).handleChange = function (e) {
              var t = e.target,
                n = t.name,
                a = t.value;
              r.setState(Object(v.a)({}, n, a));
            }),
            (r.handleCreateProduct = (function () {
              var e = Object(l.a)(
                S().mark(function e(t) {
                  var n, a, i, s, o, d;
                  return S().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              t.preventDefault(),
                              (n = r.props),
                              (a = n.account),
                              (i = n.contract),
                              (s = r.state),
                              (o = s.name),
                              (d = s.model),
                              (e.prev = 3),
                              (e.next = 6),
                              i.methods.createProduct(o, d).send({ from: a })
                            );
                          case 6:
                            window.alert(
                              "Created a product\n".concat(o, "\n").concat(d)
                            ),
                              (e.next = 13);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(3)),
                              window.alert("Error occured!"),
                              console.log(e.t0);
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[3, 9]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (r.state = { name: "", model: "" }),
            r
          );
        }
        return (
          Object(u.a)(n, [
            {
              key: "render",
              value: function () {
                return a.a.createElement(
                  "div",
                  { id: "content", className: "mt-4" },
                  a.a.createElement(
                    "h5",
                    { className: "text-center" },
                    a.a.createElement("i", null, "Add a product")
                  ),
                  a.a.createElement(
                    "form",
                    { className: "my-3", onSubmit: this.handleCreateProduct },
                    a.a.createElement(
                      "div",
                      { className: "form-group" },
                      a.a.createElement("input", {
                        type: "text",
                        className: "form-control",
                        placeholder: "Enter Product Name",
                        name: "name",
                        value: this.state.name,
                        onChange: this.handleChange,
                      })
                    ),
                    a.a.createElement(
                      "div",
                      { className: "form-group" },
                      a.a.createElement("input", {
                        type: "text",
                        className: "form-control",
                        placeholder: "Enter model Number",
                        name: "model",
                        value: this.state.model,
                        onChange: this.handleChange,
                      })
                    ),
                    a.a.createElement(
                      "div",
                      { className: "form-group" },
                      a.a.createElement("input", {
                        type: "number",
                        className: "form-control",
                        placeholder: "Enter Price",
                        name: "price",
                        value: this.state.price,
                        onChange: this.handleChange,
                      })
                    ),
                    a.a.createElement(
                      "button",
                      {
                        type: "submit",
                        className: "btn btn-primary btn-block",
                      },
                      "Add"
                    )
                  )
                );
              },
            },
          ]),
          n
        );
      })(r.Component);
      function N() {
        N = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          s = a.asyncIterator || "@@asyncIterator",
          o = a.toStringTag || "@@toStringTag";
        function d(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          d({}, "");
        } catch (E) {
          d = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function l(e, t, n, a) {
          var i = t && t.prototype instanceof p ? t : p,
            s = Object.create(i.prototype),
            o = new D(a || []);
          return r(s, "_invoke", { value: h(e, n, o) }), s;
        }
        function c(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (E) {
            return { type: "throw", arg: E };
          }
        }
        e.wrap = l;
        var u = {};
        function p() {}
        function y() {}
        function f() {}
        var m = {};
        d(m, i, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          _ = b && b(b(x([])));
        _ && _ !== t && n.call(_, i) && (m = _);
        var g = (f.prototype = p.prototype = Object.create(m));
        function T(e) {
          ["next", "throw", "return"].forEach(function (t) {
            d(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function v(e, t) {
          var a;
          r(this, "_invoke", {
            value: function (r, i) {
              function s() {
                return new t(function (a, s) {
                  !(function r(a, i, s, o) {
                    var d = c(e[a], e, i);
                    if ("throw" !== d.type) {
                      var l = d.arg,
                        u = l.value;
                      return u && "object" == typeof u && n.call(u, "__await")
                        ? t.resolve(u.__await).then(
                            function (e) {
                              r("next", e, s, o);
                            },
                            function (e) {
                              r("throw", e, s, o);
                            }
                          )
                        : t.resolve(u).then(
                            function (e) {
                              (l.value = e), s(l);
                            },
                            function (e) {
                              return r("throw", e, s, o);
                            }
                          );
                    }
                    o(d.arg);
                  })(r, i, a, s);
                });
              }
              return (a = a ? a.then(s, s) : s());
            },
          });
        }
        function h(e, t, n) {
          var r = "suspendedStart";
          return function (a, i) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === a) throw i;
              return L();
            }
            for (n.method = a, n.arg = i; ; ) {
              var s = n.delegate;
              if (s) {
                var o = Y(s, n);
                if (o) {
                  if (o === u) continue;
                  return o;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var d = c(e, t, n);
              if ("normal" === d.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), d.arg === u)
                )
                  continue;
                return { value: d.arg, done: n.done };
              }
              "throw" === d.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = d.arg));
            }
          };
        }
        function Y(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                Y(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              u
            );
          var a = c(r, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), u
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                u)
              : i
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              u);
        }
        function I(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function S(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function D(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(I, this),
            this.reset(!0);
        }
        function x(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: L };
        }
        function L() {
          return { value: void 0, done: !0 };
        }
        return (
          (y.prototype = f),
          r(g, "constructor", { value: f, configurable: !0 }),
          r(f, "constructor", { value: y, configurable: !0 }),
          (y.displayName = d(f, o, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === y || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, f)
                : ((e.__proto__ = f), d(e, o, "GeneratorFunction")),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          T(v.prototype),
          d(v.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = v),
          (e.async = function (t, n, r, a, i) {
            void 0 === i && (i = Promise);
            var s = new v(l(t, n, r, a), i);
            return e.isGeneratorFunction(n)
              ? s
              : s.next().then(function (e) {
                  return e.done ? e.value : s.next();
                });
          }),
          T(g),
          d(g, o, "Generator"),
          d(g, i, function () {
            return this;
          }),
          d(g, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = x),
          (D.prototype = {
            constructor: D,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(S),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  s = i.completion;
                if ("root" === i.tryLoc) return r("end");
                if (i.tryLoc <= this.prev) {
                  var o = n.call(i, "catchLoc"),
                    d = n.call(i, "finallyLoc");
                  if (o && d) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (o) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!d)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var i = a;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var s = i ? i.completion : {};
              return (
                (s.type = e),
                (s.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), u)
                  : this.complete(s)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                u
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), S(n), u;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    S(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: x(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                u
              );
            },
          }),
          e
        );
      }
      var x = (function (e) {
          Object(p.a)(n, e);
          var t = Object(y.a)(n);
          function n() {
            var e;
            Object(c.a)(this, n);
            for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++)
              i[s] = arguments[s];
            return (
              ((e = t.call.apply(t, [this].concat(i))).renderOwnerList =
                function (e) {
                  return e.map(function (e, t) {
                    return a.a.createElement("li", { key: t }, e);
                  });
                }),
              e
            );
          }
          return (
            Object(u.a)(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props.product;
                  return e && e.exists
                    ? a.a.createElement(
                        "div",
                        { className: "mt-2" },
                        a.a.createElement(
                          "h5",
                          { className: "text-center- mb-3" },
                          a.a.createElement(
                            "i",
                            null,
                            "Product specifications:"
                          )
                        ),
                        a.a.createElement(
                          "p",
                          null,
                          " ",
                          a.a.createElement("b", null, "Product ID:"),
                          " ",
                          e.id,
                          " "
                        ),
                        a.a.createElement(
                          "p",
                          null,
                          " ",
                          a.a.createElement("b", null, "Name:"),
                          " ",
                          e.name,
                          " "
                        ),
                        a.a.createElement(
                          "p",
                          null,
                          " ",
                          a.a.createElement("b", null, "Model:"),
                          " ",
                          e.model,
                          " "
                        ),
                        a.a.createElement(
                          "p",
                          null,
                          " ",
                          a.a.createElement("b", null, "Manufacturer:"),
                          " ",
                          e.manufacturer,
                          " "
                        ),
                        a.a.createElement(
                          "p",
                          null,
                          " ",
                          a.a.createElement("b", null, "Current Owner:"),
                          " ",
                          e.curOwner,
                          " "
                        ),
                        a.a.createElement(
                          "p",
                          null,
                          a.a.createElement(
                            "b",
                            null,
                            "Owner List from start till current:"
                          ),
                          a.a.createElement(
                            "ol",
                            null,
                            " ",
                            this.renderOwnerList(e.owners),
                            " "
                          )
                        )
                      )
                    : a.a.createElement("div", null, "Invalid Product ID");
                },
              },
            ]),
            n
          );
        })(r.Component),
        L = (function (e) {
          Object(p.a)(n, e);
          var t = Object(y.a)(n);
          function n(e) {
            var r;
            return (
              Object(c.a)(this, n),
              ((r = t.call(this, e)).handleChange = function (e) {
                var t = e.target,
                  n = t.name,
                  a = t.value;
                r.setState(Object(v.a)({}, n, a));
              }),
              (r.handleSubmit = (function () {
                var e = Object(l.a)(
                  N().mark(function e(t) {
                    var n, a, i, s, o;
                    return N().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                t.preventDefault(),
                                (n = r.props),
                                (a = n.account),
                                (i = n.contract),
                                (s = r.state.productId),
                                (e.prev = 3),
                                (e.next = 6),
                                i.methods.getProduct(s).call({ from: a })
                              );
                            case 6:
                              (o = e.sent),
                                console.log(o),
                                r.setState({ product: o, searched: !0 }),
                                (e.next = 15);
                              break;
                            case 11:
                              (e.prev = 11),
                                (e.t0 = e.catch(3)),
                                console.log(e.t0),
                                window.alert("Error occured!");
                            case 15:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[3, 11]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (r.state = { productId: "", product: null, searched: !1 }),
              r
            );
          }
          return (
            Object(u.a)(n, [
              {
                key: "render",
                value: function () {
                  var e = this.state,
                    t = e.product,
                    n = e.productId,
                    r = e.searched;
                  return a.a.createElement(
                    "div",
                    { id: "content", className: "mt-4" },
                    a.a.createElement(
                      "h5",
                      { className: "text-center" },
                      a.a.createElement("i", null, "Search a product")
                    ),
                    a.a.createElement(
                      "form",
                      { className: "my-3", onSubmit: this.handleSubmit },
                      a.a.createElement(
                        "div",
                        { className: "form-group" },
                        a.a.createElement("input", {
                          type: "text",
                          className: "form-control",
                          placeholder: "Enter product ID",
                          name: "productId",
                          value: n,
                          onChange: this.handleChange,
                        })
                      ),
                      a.a.createElement(
                        "button",
                        {
                          type: "submit",
                          className: "btn btn-primary btn-block",
                        },
                        "Search"
                      )
                    ),
                    r && a.a.createElement(x, { product: t })
                  );
                },
              },
            ]),
            n
          );
        })(r.Component);
      function E() {
        E = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          s = a.asyncIterator || "@@asyncIterator",
          o = a.toStringTag || "@@toStringTag";
        function d(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          d({}, "");
        } catch (L) {
          d = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function l(e, t, n, a) {
          var i = t && t.prototype instanceof p ? t : p,
            s = Object.create(i.prototype),
            o = new D(a || []);
          return r(s, "_invoke", { value: h(e, n, o) }), s;
        }
        function c(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (L) {
            return { type: "throw", arg: L };
          }
        }
        e.wrap = l;
        var u = {};
        function p() {}
        function y() {}
        function f() {}
        var m = {};
        d(m, i, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          _ = b && b(b(N([])));
        _ && _ !== t && n.call(_, i) && (m = _);
        var g = (f.prototype = p.prototype = Object.create(m));
        function T(e) {
          ["next", "throw", "return"].forEach(function (t) {
            d(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function v(e, t) {
          var a;
          r(this, "_invoke", {
            value: function (r, i) {
              function s() {
                return new t(function (a, s) {
                  !(function r(a, i, s, o) {
                    var d = c(e[a], e, i);
                    if ("throw" !== d.type) {
                      var l = d.arg,
                        u = l.value;
                      return u && "object" == typeof u && n.call(u, "__await")
                        ? t.resolve(u.__await).then(
                            function (e) {
                              r("next", e, s, o);
                            },
                            function (e) {
                              r("throw", e, s, o);
                            }
                          )
                        : t.resolve(u).then(
                            function (e) {
                              (l.value = e), s(l);
                            },
                            function (e) {
                              return r("throw", e, s, o);
                            }
                          );
                    }
                    o(d.arg);
                  })(r, i, a, s);
                });
              }
              return (a = a ? a.then(s, s) : s());
            },
          });
        }
        function h(e, t, n) {
          var r = "suspendedStart";
          return function (a, i) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === a) throw i;
              return x();
            }
            for (n.method = a, n.arg = i; ; ) {
              var s = n.delegate;
              if (s) {
                var o = Y(s, n);
                if (o) {
                  if (o === u) continue;
                  return o;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var d = c(e, t, n);
              if ("normal" === d.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), d.arg === u)
                )
                  continue;
                return { value: d.arg, done: n.done };
              }
              "throw" === d.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = d.arg));
            }
          };
        }
        function Y(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                Y(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              u
            );
          var a = c(r, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), u
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                u)
              : i
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              u);
        }
        function I(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function S(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function D(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(I, this),
            this.reset(!0);
        }
        function N(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: x };
        }
        function x() {
          return { value: void 0, done: !0 };
        }
        return (
          (y.prototype = f),
          r(g, "constructor", { value: f, configurable: !0 }),
          r(f, "constructor", { value: y, configurable: !0 }),
          (y.displayName = d(f, o, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === y || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, f)
                : ((e.__proto__ = f), d(e, o, "GeneratorFunction")),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          T(v.prototype),
          d(v.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = v),
          (e.async = function (t, n, r, a, i) {
            void 0 === i && (i = Promise);
            var s = new v(l(t, n, r, a), i);
            return e.isGeneratorFunction(n)
              ? s
              : s.next().then(function (e) {
                  return e.done ? e.value : s.next();
                });
          }),
          T(g),
          d(g, o, "Generator"),
          d(g, i, function () {
            return this;
          }),
          d(g, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = N),
          (D.prototype = {
            constructor: D,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(S),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  s = i.completion;
                if ("root" === i.tryLoc) return r("end");
                if (i.tryLoc <= this.prev) {
                  var o = n.call(i, "catchLoc"),
                    d = n.call(i, "finallyLoc");
                  if (o && d) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (o) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!d)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var i = a;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var s = i ? i.completion : {};
              return (
                (s.type = e),
                (s.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), u)
                  : this.complete(s)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                u
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), S(n), u;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    S(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: N(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                u
              );
            },
          }),
          e
        );
      }
      var C = (function (e) {
          Object(p.a)(n, e);
          var t = Object(y.a)(n);
          function n(e) {
            var r;
            return (
              Object(c.a)(this, n),
              ((r = t.call(this, e)).handleChange = function (e) {
                var t = e.target,
                  n = t.name,
                  a = t.value;
                r.setState(Object(v.a)({}, n, a));
              }),
              (r.handleSubmit = (function () {
                var e = Object(l.a)(
                  E().mark(function e(t) {
                    var n, a, i, s, o, d;
                    return E().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                t.preventDefault(),
                                (n = r.props),
                                (a = n.account),
                                (i = n.contract),
                                (s = r.state),
                                (o = s.productId),
                                (d = s.customer),
                                (e.prev = 3),
                                (e.next = 6),
                                i.methods
                                  .updateOwnership(o, d)
                                  .send({ from: a })
                              );
                            case 6:
                              window.alert("Product sold to\n".concat(d)),
                                (e.next = 13);
                              break;
                            case 9:
                              (e.prev = 9),
                                (e.t0 = e.catch(3)),
                                console.log(e.t0),
                                window.alert("Error occured!");
                            case 13:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[3, 9]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (r.state = { productId: "", customer: "" }),
              r
            );
          }
          return (
            Object(u.a)(n, [
              {
                key: "render",
                value: function () {
                  return a.a.createElement(
                    "div",
                    { id: "content", className: "mt-4" },
                    a.a.createElement(
                      "h5",
                      { className: "text-center" },
                      a.a.createElement("i", null, "Sell a product")
                    ),
                    a.a.createElement(
                      "form",
                      { className: "my-3", onSubmit: this.handleSubmit },
                      a.a.createElement(
                        "div",
                        { className: "form-group" },
                        a.a.createElement("input", {
                          type: "text",
                          className: "form-control",
                          placeholder: "Enter product ID",
                          name: "productId",
                          value: this.state.productId,
                          onChange: this.handleChange,
                        })
                      ),
                      a.a.createElement(
                        "div",
                        { className: "form-group" },
                        a.a.createElement("input", {
                          type: "text",
                          className: "form-control",
                          placeholder: "Enter customer's address",
                          name: "customer",
                          value: this.state.customer,
                          onChange: this.handleChange,
                        })
                      ),
                      a.a.createElement(
                        "button",
                        {
                          type: "submit",
                          className: "btn btn-primary btn-block",
                        },
                        "Sell"
                      )
                    )
                  );
                },
              },
            ]),
            n
          );
        })(r.Component),
        w = n(30),
        V = n.n(w),
        P = (function (e) {
          Object(p.a)(n, e);
          var t = Object(y.a)(n);
          function n(e) {
            var r;
            return (
              Object(c.a)(this, n),
              ((r = t.call(this, e)).handleChange = function (e) {
                var t = e.target,
                  n = t.name,
                  a = t.value;
                r.setState(Object(v.a)({}, n, a));
              }),
              (r.state = { text: "" }),
              r
            );
          }
          return (
            Object(u.a)(n, [
              {
                key: "render",
                value: function () {
                  return a.a.createElement(
                    "div",
                    { id: "content", className: "mt-4" },
                    a.a.createElement(
                      "h5",
                      { className: "text-center" },
                      a.a.createElement(
                        "i",
                        null,
                        "Generate and Save a QR code"
                      )
                    ),
                    a.a.createElement(
                      "form",
                      { className: "my-3", onSubmit: this.handleSubmit },
                      a.a.createElement(
                        "div",
                        { className: "form-group" },
                        a.a.createElement("input", {
                          type: "text",
                          className: "form-control",
                          placeholder: "Enter an address",
                          name: "text",
                          value: this.state.text,
                          onChange: this.handleChange,
                        })
                      ),
                      a.a.createElement("button", { type: "button" }, "Save")
                    ),
                    a.a.createElement(V.a, { value: this.state.text })
                  );
                },
              },
            ]),
            n
          );
        })(r.Component);
      function k() {
        k = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          s = a.asyncIterator || "@@asyncIterator",
          o = a.toStringTag || "@@toStringTag";
        function d(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          d({}, "");
        } catch (L) {
          d = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function l(e, t, n, a) {
          var i = t && t.prototype instanceof p ? t : p,
            s = Object.create(i.prototype),
            o = new D(a || []);
          return r(s, "_invoke", { value: h(e, n, o) }), s;
        }
        function c(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (L) {
            return { type: "throw", arg: L };
          }
        }
        e.wrap = l;
        var u = {};
        function p() {}
        function y() {}
        function f() {}
        var m = {};
        d(m, i, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          _ = b && b(b(N([])));
        _ && _ !== t && n.call(_, i) && (m = _);
        var g = (f.prototype = p.prototype = Object.create(m));
        function T(e) {
          ["next", "throw", "return"].forEach(function (t) {
            d(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function v(e, t) {
          var a;
          r(this, "_invoke", {
            value: function (r, i) {
              function s() {
                return new t(function (a, s) {
                  !(function r(a, i, s, o) {
                    var d = c(e[a], e, i);
                    if ("throw" !== d.type) {
                      var l = d.arg,
                        u = l.value;
                      return u && "object" == typeof u && n.call(u, "__await")
                        ? t.resolve(u.__await).then(
                            function (e) {
                              r("next", e, s, o);
                            },
                            function (e) {
                              r("throw", e, s, o);
                            }
                          )
                        : t.resolve(u).then(
                            function (e) {
                              (l.value = e), s(l);
                            },
                            function (e) {
                              return r("throw", e, s, o);
                            }
                          );
                    }
                    o(d.arg);
                  })(r, i, a, s);
                });
              }
              return (a = a ? a.then(s, s) : s());
            },
          });
        }
        function h(e, t, n) {
          var r = "suspendedStart";
          return function (a, i) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === a) throw i;
              return x();
            }
            for (n.method = a, n.arg = i; ; ) {
              var s = n.delegate;
              if (s) {
                var o = Y(s, n);
                if (o) {
                  if (o === u) continue;
                  return o;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var d = c(e, t, n);
              if ("normal" === d.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), d.arg === u)
                )
                  continue;
                return { value: d.arg, done: n.done };
              }
              "throw" === d.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = d.arg));
            }
          };
        }
        function Y(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                Y(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              u
            );
          var a = c(r, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), u
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                u)
              : i
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              u);
        }
        function I(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function S(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function D(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(I, this),
            this.reset(!0);
        }
        function N(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: x };
        }
        function x() {
          return { value: void 0, done: !0 };
        }
        return (
          (y.prototype = f),
          r(g, "constructor", { value: f, configurable: !0 }),
          r(f, "constructor", { value: y, configurable: !0 }),
          (y.displayName = d(f, o, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === y || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, f)
                : ((e.__proto__ = f), d(e, o, "GeneratorFunction")),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          T(v.prototype),
          d(v.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = v),
          (e.async = function (t, n, r, a, i) {
            void 0 === i && (i = Promise);
            var s = new v(l(t, n, r, a), i);
            return e.isGeneratorFunction(n)
              ? s
              : s.next().then(function (e) {
                  return e.done ? e.value : s.next();
                });
          }),
          T(g),
          d(g, o, "Generator"),
          d(g, i, function () {
            return this;
          }),
          d(g, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = N),
          (D.prototype = {
            constructor: D,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(S),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  s = i.completion;
                if ("root" === i.tryLoc) return r("end");
                if (i.tryLoc <= this.prev) {
                  var o = n.call(i, "catchLoc"),
                    d = n.call(i, "finallyLoc");
                  if (o && d) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (o) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!d)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var i = a;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var s = i ? i.completion : {};
              return (
                (s.type = e),
                (s.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), u)
                  : this.complete(s)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                u
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), S(n), u;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    S(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: N(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                u
              );
            },
          }),
          e
        );
      }
      var $ = (function (e) {
        Object(p.a)(n, e);
        var t = Object(y.a)(n);
        function n() {
          var e;
          Object(c.a)(this, n);
          for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
            a[i] = arguments[i];
          return (
            ((e = t.call.apply(t, [this].concat(a))).state = {
              storageValue: 0,
              web3: null,
              account: null,
              contract: null,
            }),
            (e.componentDidMount = Object(l.a)(
              k().mark(function t() {
                var n, r, a, i, s, o, l;
                return k().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), g();
                        case 3:
                          return (
                            (n = t.sent), (t.next = 6), n.eth.getAccounts()
                          );
                        case 6:
                          return (
                            (r = t.sent),
                            (a = Object(d.a)(r, 1)),
                            (i = a[0]),
                            (t.next = 11),
                            n.eth.net.getId()
                          );
                        case 11:
                          if (((s = t.sent), (o = T.networks[s]))) {
                            t.next = 16;
                            break;
                          }
                          return window.alert("OOPS..."), t.abrupt("return");
                        case 16:
                          (l = new n.eth.Contract(T.abi, o.address)),
                            e.setState({ web3: n, account: i, contract: l }),
                            (t.next = 24);
                          break;
                        case 20:
                          (t.prev = 20),
                            (t.t0 = t.catch(0)),
                            alert(
                              "Failed to load web3, accounts, or contract. Check console for details."
                            ),
                            console.error(t.t0);
                        case 24:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 20]]
                );
              })
            )),
            e
          );
        }
        return (
          Object(u.a)(n, [
            {
              key: "render",
              value: function () {
                if (!this.state.web3)
                  return a.a.createElement("div", null, "Loading...");
                var e = this.state,
                  t = e.account,
                  n = e.contract;
                return a.a.createElement(
                  a.a.Fragment,
                  null,
                  a.a.createElement(h, { account: t }),
                  a.a.createElement(
                    "div",
                    { className: "container pt-5-" },
                    a.a.createElement(
                      "div",
                      { className: "row justify-content-center" },
                      a.a.createElement(
                        "div",
                        { className: "col-md-8" },
                        a.a.createElement(
                          f.c,
                          null,
                          a.a.createElement(f.a, {
                            path: "/admin",
                            render: function (e) {
                              return a.a.createElement(I, {
                                account: t,
                                contract: n,
                              });
                            },
                          }),
                          a.a.createElement(f.a, {
                            path: "/manufacturer",
                            render: function (e) {
                              return a.a.createElement(D, {
                                account: t,
                                contract: n,
                              });
                            },
                          }),
                          a.a.createElement(f.a, {
                            path: "/sell",
                            render: function (e) {
                              return a.a.createElement(C, {
                                account: t,
                                contract: n,
                              });
                            },
                          }),
                          a.a.createElement(f.a, {
                            path: "/qr",
                            render: function (e) {
                              return a.a.createElement(P, null);
                            },
                          }),
                          a.a.createElement(f.a, {
                            path: "/",
                            render: function (e) {
                              return a.a.createElement(L, {
                                account: t,
                                contract: n,
                              });
                            },
                          })
                        )
                      )
                    )
                  )
                );
              },
            },
          ]),
          n
        );
      })(r.Component);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      s.a.render(
        a.a.createElement(
          a.a.StrictMode,
          null,
          a.a.createElement(o.a, null, a.a.createElement($, null))
        ),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister();
          });
    },
  },
  [[32, 1, 2]],
]);
//# sourceMappingURL=main.8ed30822.chunk.js.map
