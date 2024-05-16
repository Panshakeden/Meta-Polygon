const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const BooksNft = await hre.ethers.getContractFactory("NikeShoeNFT");

  const booksNft = await BooksNft.attach(process.env.CONTRACT_ADDRESS);
  const balance = (
    await booksNft.balanceOf(process.env.WALLET_ADDRESS)
  ).toString();

  console.log("Balance: ", balance);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});