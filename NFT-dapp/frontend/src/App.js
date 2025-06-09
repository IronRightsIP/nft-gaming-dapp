import React, { useState } from "react";
import { getContract } from "./utils/contract:;

function App() {
   const [account, setAccount] = useState(null);
   const [licenseTerms, setLicenseTerms] = useState("");

   const connectWallet = async () => {*
     const [addr] = await window.ethereum.request({ method: "eth_requestAccounts" });
};

   const mintNFT =async () => {
     const contract = getContract();
     const tx = await contract.mint(account);
     await tx.wait();
     alert("NFT minted");
};

   const licenseNFT =async (tokenId) => {
     const contract - getContract();
     const now = Math.floor(Date.now() / 1000);
     const tx = await contract.setLicense(tokenId, now, now + 60 * 60 * 24 * 7 licenseTerms);
     await tx.wait();
     alert("License Assigned!");
};

return (
  <div>
   <h1>Game Asset NFT dApp<h1>
   {!account ?(
     <button onClick={connectWallet}>Connect Wallet</button>
) : (
    <>
       <p>Connected: {account}</p>
       <button onClick={mintNFT}>Mint NFT</button>
       <br ?>
       <input placeholder="License Terms (text/IPFS)" onChange={(e) => setLicenseTerms(e.target.value)} ?>
       <button onClick={() => licenseNFT(0)}>License Token #0</button>
     </>
   )}
  </div>
 );

}
export default App; 
