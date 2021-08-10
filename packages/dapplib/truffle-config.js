require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clock other foot blanket regret soap mistake inflict kangaroo army gift'; 
let testAccounts = [
"0x10b16ec4241f0ba1f35178ce0b408629413995a68ea16b75681b73aefe7599e7",
"0x2b4d02b029ec9144b36b7951231b047c45fa20f97f04f4d3b456302ce4fa6004",
"0xf265ed9ca4955c572c1d63465f67dc2f245309d29274185a743c2672da8e6b37",
"0xac0638da650d4f32f367329dcf8eb167c96a39fccc2ed6a68c971b9bd030df2b",
"0x22862ec431de095c2964f70d39ffaeca23dedcba28524ec8ce4cac822e6640e1",
"0x4325c87bf7c89db9038fa62516c2c3670ed69f106e32ab99bbb4e2feedb08f27",
"0xc4ed0d53ea0a78ca1dd3a805d9633b827f70303e2bf17a8e2385b27b49ea79f0",
"0x32a88a99d2727f2e523979f7cf4248b6cbe71e919b1a61e193239bcbb08d77f1",
"0xc2ad0cb83100604ab19838d44026d44a93820d7626d2123dc032dfe8590e4394",
"0x252289c19e07966d67a13db81a61635490e442990f8f93115b02b7f04c477e24"
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

