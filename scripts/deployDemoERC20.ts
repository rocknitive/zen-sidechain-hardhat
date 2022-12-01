import { ethers } from "hardhat";

async function main() {
  console.log("Deploying DemoERC20")
  const DemoERC20 = await ethers.getContractFactory("DemoERC20");
  const demoToken = await DemoERC20.deploy();

  console.log("Waiting for confirmation")
  await demoToken.deployed();

  console.log(`ERC20 Demo Token deployed to ${demoToken.address}`);

  const myBalance = await demoToken.balanceOf("0x7507Cebb915af00019be3a5FE8897b2eE115B166");
  console.log(`My balance of DEMO tokens: ${myBalance}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
