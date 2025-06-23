async function main() {
  const GameAssetNFT = await ethers.getContractFactory("GameAssetNFT");
  const contract = await GameAssetNFT.deploy();
  await contract.deployed();
  console.log("Contract deployed to:", contract.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
