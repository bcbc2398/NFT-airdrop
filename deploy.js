async function main() {
  const BitcoinNFT = await hre.ethers.getContractFactory("BitcoinNFT");
  const nft = await BitcoinNFT.deploy();

  await nft.deployed();

  console.log("BitcoinNFT deployed to:", nft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
