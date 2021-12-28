require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey entry off suggest name rice pitch provide grace force flower giggle'; 
let testAccounts = [
"0x76d55c1fc789d8ded634d489f15e4450ff6d086c10dec0caa839dbc13a01f353",
"0xf97c56032fd8ede49408e5552c16e7d737d71738d3c8278a5741f74c0c28a2a5",
"0x2259d973f64d22b8a17be7a7b5a5f7cc2a9e87dbaf7e9fa84893c1b24a626882",
"0xcd3f1014418cee46a6831e013b6909099793ce15d444bdc325fd8db93719c31f",
"0xc52ec777b005d83b2a68a2eb7bccf3d9ace67563f37561eda78152ee41a01ee4",
"0x96c3f25be8bc92ef9933fbe39debb5b44fa9700b70e16f866a5de03338ff16b5",
"0xe0352cfd4372c51e3fc7a94027976bd2377aeac49d85c7317d6e27b2e9528206",
"0x1717fe8fbc9e1358c52a586a8679dbce1f1f27d23d4600c847edc97c725a6c27",
"0xfa0bf406a00021fa1ac813baf7fa396424d123c61248310f53201eb233160bd7",
"0xe1bb68619fcd2edbd2cab0a79fcebf78df5e34dd599784fe5b24fe2dfbd1881e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

