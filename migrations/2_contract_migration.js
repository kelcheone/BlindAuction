var  Auction = artifacts.require("BlindAuction");

module.exports = function(deployer){
    deployer.deploy(Auction);

};