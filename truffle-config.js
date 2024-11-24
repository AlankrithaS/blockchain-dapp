module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",  // Ganache RPC server
      port: 7545,         // Ganache port
      network_id: "5777"  // Ganache network ID
    }
  },
  compilers: {
    solc: {
      version: "0.8.0"    // Solidity compiler version
    }
  }
};
