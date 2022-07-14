const friends = [
  "List of Addresses"
  
  
];
const existingContractAddr = "0xf1c7c3d1510aCB70D3f9a36B39688CF14208442C";

async function main() {
  const nft = await hre.ethers.getContractAt("BitcoinNFT", existingContractAddr);

  const signer0 = await ethers.provider.getSigner(0);
  const nonce = await signer0.getTransactionCount();
  for(let i = 0; i < friends.length; i++) {
    const tokenURI = "QmWhm7gwBYsWh7P6xCaNEkXgTeZYmq4A3vQ9B5J2K8RXsY";
    await nft.awardItem(friends[i], tokenURI,  {
      nonce: nonce + i
    });
  }

  console.log("Minting is complete!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
