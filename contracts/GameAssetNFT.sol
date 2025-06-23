// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Royalty.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract IronRightsNFT is ERC721Royalty, Ownable {
uint256 private _nextTokenId;

struct License {
address licensee;
uint256 expirationTimestamp;
bool active;
}

mapping(uint256 => License) public licenses;

constructor() ERC721("IronRightsNFT", "IRNFT") Ownable(msg.sender) {}

function mint(address to, uint96 royaltyFee) external onlyOwner {
_nextTokenId++;
_safeMint(to, _nextTokenId);
_setTokenRoyalty(_nextTokenId, to, royaltyFee);
}

function grantLicense(uint256 tokenId, address licensee, uint256 durationInDays) external onlyOwner {
licenses[tokenId] = License({
licensee: licensee,
expirationTimestamp: block.timestamp + (durationInDays * 1 days),
active: true
});
}

function revokeLicense(uint256 tokenId) external onlyOwner {
licenses[tokenId].active = false;
}

function isLicenseActive(uint256 tokenId) external view returns (bool) {
License memory license = licenses[tokenId];
return license.active && license.expirationTimestamp > block.timestamp;
}
}

