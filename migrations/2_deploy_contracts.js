const Ring = artifacts.require("./Ring.sol");

module.exports = (deployer) => {
  return deployer.deploy(Ring, 4, 1000000000000000000, 0);
};
