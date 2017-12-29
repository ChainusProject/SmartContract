module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      network_id: 3,
      host: "localhost",
      port: 8545,
      gas: 1330000
    },
    live : {
        network_id: 1,
        host: "localhost",
        port: 8546   // Different than the default below
    }
  },
  rpc: {
    host: "localhost",
    post:8545
  },
  solc: {
    optimizer: {
        enabled: true,
        runs: 200
    }
  }
};
