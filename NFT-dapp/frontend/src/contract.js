import { ethers } from "ethers"; 
import GameAssetNft from "./GameAssetNFT.json";

const contractAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

export const getContract -() => {
   const provider = new ethers.providers.Web3Provider(window.ethereum);
   const signer = provider.getSigner();
   return new ethers.Contract(contractAddress, GameAssetNFT.abi, signer);
};