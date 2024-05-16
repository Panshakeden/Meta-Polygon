// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.18;
 
import "./ERC721A.sol";

contract BooksNft is ERC721A {
    uint8 public maxSupply = 5;

    constructor() ERC721A("BooksNft", "BN") {}

    function safeMint(uint8 _quantity) external payable {
        _safeMint(msg.sender, _quantity);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmWXgEUsoBfWrnhwC6Zpz1fpXEqMM1sgJTMSCSDatyyAaB/";
    }

    function promptDescription() external pure returns (string memory) {
        return "Books: generate books Nft";
    }

    function balanceOf(address owner) public view override returns (uint256) {
        return super.balanceOf(owner);
    }
}