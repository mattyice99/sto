// environment variables set in the package config
// var networkId = process.env.npm_package_config_ganache_networkId;
// var gasPrice = process.env.npm_package_config_ganache_gasPrice;
// var gasLimit = process.env.npm_package_config_ganache_gasLimit;
require('babel-register');
require('babel-polyfill');

module.exports = {
    networks: {
        development: {
            host: '127.0.0.1',  // ganache defaults
            port: 8545,         // ganache defaults
            network_id: 5777,
            gas: 6721975,
            gasPrice: 20000000000
        }
    },
    compilers: {
     solc: {
        version: "0.4.24",
        optimizer: {
            enabled: true,
            runs: 200
        }
    }
}

    };

