const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const BooksNftFactory = await hre.ethers.getContractFactory(
    "BooksNft"
  );
  const booksNft = await BooksNftFactory.attach(
    process.env.CONTRACT_ADDRESS
  );

  const mintTx = await booksNft.safeMint(5);
  await mintTx.wait();

  console.log(
    "Successfully minted: " +
      (await booksNft.balanceOf(process.env.WALLET_ADDRESS)) +
      " BooksNft NFTs to " +
      process.env.WALLET_ADDRESS
  );
  console.log(await booksNft.promptDescription());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});