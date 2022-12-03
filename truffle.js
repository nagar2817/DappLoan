// Allows us to use ES6 in our migrations and tests.
// require('babel-register');

var HDWalletProvider = require('truffle-hdwallet-provider');
var mnemonic = 'crouch dry film picnic music noise fiber loud candy match leader coffee';


module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
    networks: {
        rinkeby: {
            provider: function() {
                return new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/c0201f3cd3894e30b62af4bb542b5779');
                    },
            network_id: 4,
            gas: 4500000,
            gasPrice: 10000000000,
        },

        goerli: {
            provider: function() {
                return new HDWalletProvider(mnemonic, 'https://rpc.slock.it/goerli');
            },
            network_id: '*',
            gas: 4500000,
            gasPrice: 10000000000,
        },

        development: {
            host: 'localhost',
            port: 7545,
            network_id: '*', // Match any network id,
            gasPrice: 10000000000
        }
    }
};
