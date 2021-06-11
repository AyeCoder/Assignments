const knowit = artifacts.require('knowit');

module.exports=async (deployer) => {
    await deployer.deploy(knowit);
}