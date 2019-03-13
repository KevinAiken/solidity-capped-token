var ExampleToken = artifacts.require("./ExampleToken.sol");
var ExampleTokenCrowdsale = artifacts.require("./ExampleTokenCrowdsale.sol");

module.exports = async function(deployer , network , accounts) {
    const _name = "Example Token";
    const _symbol = "EXM";
    const _decimal = 18;



    //Do not work because of chain deploymen
    // await deployer.deploy(ExampleToken,_name,_symbol,_decimal);
    // const token = await ExampleToken.deployed();
    // await deployer.deploy(ExampleTokenCrowdsale, 500, accounts[0], token,address);

    deployer.deploy(ExampleToken,_name,_symbol,_decimal)
        .then(() => ExampleToken.deployed())
        .then(token => deployer.deploy(ExampleTokenCrowdsale
            , 500
            , web3.eth.accounts[0]
            , token.address
            , new web3.BigNumber(web3.toWei(200, 'ether')))).then((t) => {sale = t;})
};