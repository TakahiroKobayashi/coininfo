// copy from mona.js
// https://github.com/monacoinproject/monacoin/blob/master-0.13/src/chainparams.cpp

var common = {
  name: 'Vegecoin',
  unit: 'VEGE'
}

var main = Object.assign({}, {
  // just monacoin testnet genesis hash
  hashGenesisBlock: 'a2b106ceba3be0c6d097b2a6a6aacf9d638ba8258ae478158f449c321061e0b2',
  port: 19925 ,
  portRpc: 19926,
  protocol: {
    magic: 0xdbb6c0fb
  },
  seedsDns: [
    'prueba-semilla.org',
    'tk2-254-36580.vs.sakura.ne.jp'
  ],
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    },
    bip44: 22,
    private: 0xb0, // more than monacoin-v0.14
    private2: 0xb2, // old wif
    public: 0x32,
    scripthash: 0x37,
    scripthash2: 0x05 // old '3' prefix. available for backward compatibility.
  }
}, common)

// cannot use
var test = Object.assign({}, {
  hashGenesisBlock: 'a2b106ceba3be0c6d097b2a6a6aacf9d638ba8258ae478158f449c321061e0b2',
  port: 19403,
  portRpc: 19402,
  protocol: {
    magic: 0xf1c8d2fd
  },
  seedsDns: [
    'testnet-dnsseed.monacoin.org'
  ],
  versions: {
    bip32: {
      private: 0x04358394,
      public: 0x043587cf
    },
    bip44: 1,
    private: 0xef,
    public: 0x6f,
    scripthash: 0x75,
    scripthash2: 0xc4
  }
}, common)

module.exports = {
  main: main,
  test: test
}
