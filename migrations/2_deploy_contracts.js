var NPER = artifacts.require("./NPERToken.sol");

module.exports = function(deployer) {
    deployer.deploy(NPER);
};