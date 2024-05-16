# Building with Polygon Bridge
### Project Overview
This project involves deploying an NFT collection on the Ethereum blockchain, mapping the collection to Polygon, and transferring assets over via the Polygon Bridge. To add a creative twist, image generation tools like DALLE 2 or Midjourney will be used to generate the images for the NFTs.

### Tools Used
- Hardhat
- Foundry (optional)
- DALLE 2 or Midjourney for image generation
- Pinata.cloud for IPFS storage
- Polygon Bridge for asset transfer
- Project Rubric

### Getting Started

To get started with this project, follow these steps:
- Set up a Hardhat project and install the required dependencies.
- Generate a collection of 5 images using DALLE 2 or Midjourney.
- Store the images on IPFS using Pinata.cloud.
- Deploy an ERC721 or ERC1155 contract on the Goerli Ethereum Testnet.
- Implement the promptDescription function on the contract.
- Write Hardhat scripts for batch minting and transferring NFTs.
- Test the project by approving, depositing, and verifying the transfer of NFTs on the Mumbai testnet.


Deploy contract

First compile the contract using npx hardhat compile then deploy the contract onto Sepolia Ethereum testnet using the following command:

npx hardhat run --network sepolia scripts/nft/deploy.js

Then, if everything is set up right, you get a console response like this:

MetaToken NFT deployed to: <CONTRACT-ADDRESS>

Batch mint NFTs

To batch mint NFTs to the deployed contract, update the contract address in the .env.example. file and rename the file to .env. Also, subsequently update the required variables in the .env file.

Then run the batchMint.js script with this hardhat command:

npx hardhat run --network sepolia scripts/nft/batchMint.js


Good luck with your project!

### Author 
Panshak Samson
