const env = process.env.NODE_ENV;

const bscTesnetConfig = {
  tokenVestingContractAddress: "0x413e4bDdf4380560C71F33cf8c8C0d92dfAF4B28",
  explorerRootURL: "https://testnet.bscscan.com/",
  tokenVestingContractAbi: require("./assets/abi/TokenVesting.json"),
  tokenVestingContractBytecode: require("./assets/bytecode/TokenVesting.json")
    .bytecode,
  erc20ContractAbi: require("./assets/abi/ERC20.json"),
};

const goerliTesnetConfig = {
  tokenVestingContractAddress: "0x6200e513eCF62B86Dfa7B4B8E8c68BcE10110738",
  explorerRootURL: "https://goerli.etherscan.io/",
  tokenVestingContractAbi: require("./assets/abi/TokenVesting.json"),
  tokenVestingContractBytecode: require("./assets/bytecode/TokenVesting.json")
      .bytecode,
  erc20ContractAbi: require("./assets/abi/ERC20.json"),
};

const mainnetConfig = {
  tokenVestingContractAddress: "TBA",
  explorerRootURL: "https://etherscan.io/",
  tokenVestingContractAbi: require("./assets/abi/TokenVesting.json"),
  tokenVestingContractBytecode: require("./assets/bytecode/TokenVesting.json")
    .bytecode,
  erc20ContractAbi: require("./assets/abi/ERC20.json"),
};
const defaultConfig = mainnetConfig;

export let globalConfig;
switch (env) {
  case "development":
    globalConfig = goerliTesnetConfig;
    break;
  case "preproduction":
    globalConfig = bscTesnetConfig;
    break;
  case "production":
    globalConfig = mainnetConfig;
    break;
  case undefined:
    globalConfig = defaultConfig;
    break;
}
