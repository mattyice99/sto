
const ERC1594Token = artifacts.require("./ERC1594Token.sol");

module.exports = function (deployer) {
  const name = "Real Estate Token";
  const symbol = "RET";
  const decimals = 18;
  deployer.deploy(ERC1594Token, name, symbol, decimals);
   
};
