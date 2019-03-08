import EmbarkJS from '../embarkjs';
let PluginStorageJSONConfig = {"contract_name":{"args":["$SimpleStorage"],"className":"PluginStorage","code":"608060405234801561001057600080fd5b50604051602080610117833981016040525160008054600160a060020a03909216600160a060020a031990921691909117905560c6806100516000396000f300608060405260043610603e5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416633610eb0e81146043575b600080fd5b348015604e57600080fd5b506055607e565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b60005473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a723058205ad947f0040268b94518dcd5024b1b55968413212b1776c327e7c6775b30802a0029","runtimeBytecode":"608060405260043610603e5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416633610eb0e81146043575b600080fd5b348015604e57600080fd5b506055607e565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b60005473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a723058205ad947f0040268b94518dcd5024b1b55968413212b1776c327e7c6775b30802a0029","realRuntimeBytecode":"608060405260043610603e5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416633610eb0e81146043575b600080fd5b348015604e57600080fd5b506055607e565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b60005473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a72305820","linkReferences":{},"swarmHash":"5ad947f0040268b94518dcd5024b1b55968413212b1776c327e7c6775b30802a","gasEstimates":{"creation":{"codeDepositCost":"39600","executionCost":"20518","totalCost":"60118"},"external":{"simpleStorageAddress()":"399"}},"functionHashes":{"simpleStorageAddress()":"3610eb0e"},"abiDefinition":[{"constant":true,"inputs":[],"name":"simpleStorageAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x3610eb0e"},{"inputs":[{"name":"addr","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}],"filename":"/Users/iurimatias/Projects/Status/embark/test_dapps/test_app/.embark/node_modules/embark-service/contracts/pluginSimpleStorage.sol","originalFilename":"contracts//Users/iurimatias/Projects/Status/embark/test_dapps/test_app/.embark/node_modules/embark-service/contracts/pluginSimpleStorage.sol","path":"/Users/iurimatias/Projects/Status/embark/test_dapps/test_app/contracts/Users/iurimatias/Projects/Status/embark/test_dapps/test_app/.embark/node_modules/embark-service/contracts/pluginSimpleStorage.sol","gas":"auto","type":"file","deploy":true,"_gasLimit":6000000,"error":false,"deploymentAccount":"0xB8D851486d1C953e31A44374ACa11151D49B8bb3","realArgs":["0x6C70B9DD83a3934D1a7308D9E56e52A386b68f51"],"address":"0x97084B04060db7996A241f5699C6D091927E78aA","deployedAddress":"0x97084B04060db7996A241f5699C6D091927E78aA"},"address":"0x97084B04060db7996A241f5699C6D091927E78aA","code":"608060405234801561001057600080fd5b50604051602080610117833981016040525160008054600160a060020a03909216600160a060020a031990921691909117905560c6806100516000396000f300608060405260043610603e5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416633610eb0e81146043575b600080fd5b348015604e57600080fd5b506055607e565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b60005473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a723058205ad947f0040268b94518dcd5024b1b55968413212b1776c327e7c6775b30802a0029","runtime_bytecode":"608060405260043610603e5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416633610eb0e81146043575b600080fd5b348015604e57600080fd5b506055607e565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b60005473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a723058205ad947f0040268b94518dcd5024b1b55968413212b1776c327e7c6775b30802a0029","real_runtime_bytecode":"608060405260043610603e5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416633610eb0e81146043575b600080fd5b348015604e57600080fd5b506055607e565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b60005473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a72305820","swarm_hash":"5ad947f0040268b94518dcd5024b1b55968413212b1776c327e7c6775b30802a","gas_estimates":{"creation":{"codeDepositCost":"39600","executionCost":"20518","totalCost":"60118"},"external":{"simpleStorageAddress()":"399"}},"function_hashes":{"simpleStorageAddress()":"3610eb0e"},"abi":[{"constant":true,"inputs":[],"name":"simpleStorageAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x3610eb0e"},{"inputs":[{"name":"addr","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]};
let PluginStorage = new EmbarkJS.Blockchain.Contract(PluginStorageJSONConfig);
export default PluginStorage;
