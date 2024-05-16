const hre = require("hardhat");

async function main() {
  const BooksNftFactory  = await hre.ethers.getContractFactory("BooksNft");

  const BooksNft= await BooksNftFactory.deploy();

  console.log("BooksNft deployed to: ", BooksNft.target);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});