const { create } = require("ipfs-http-client");

const ipfs = create("https://ipfs.infura.io:5001");

async function run() {
  const files = [{
    path: '/',
    content: JSON.stringify({
      name: "Bitcoin",
      attributes: [
        {
          "trait_type": "Bullish",
          "value": "Super Saiyan Over 9,000"
        }
      ],
      // if you want to upload your own IPFS image, you can do so here:
      // https://github.com/ChainShot/IPFS-Upload
      image: "https://gateway.pinata.cloud/ipfs/QmPhXcg7MYGXPPZprUXHwKAXn4KixXN8F27qirw2aXxEND",
      description: "Bitcoin"
    })
  }];

  const result = await ipfs.add(files);
  console.log(result);
}

run();
