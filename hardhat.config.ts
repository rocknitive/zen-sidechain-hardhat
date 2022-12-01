import {HardhatUserConfig} from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require('dotenv').config();

const privateKey: string = process.env["PRIVATE_KEY"] || "";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  defaultNetwork: "zen",
  networks: {
    zen: {
      url: "https://evm-tn-m2.horizenlabs.io/ethv1",
      accounts: [privateKey],
      gasPrice: "auto"
    },
    local: {
      url: "http://localhost:8668/ethv1",
      accounts: [privateKey],
      gasPrice: "auto",
      httpHeaders: {
        "api_key": "Horizen"
      }
    },
  }
};

export default config;
