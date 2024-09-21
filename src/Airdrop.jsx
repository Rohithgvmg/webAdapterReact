import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";


export function Airdrop(){

  const wallet=useWallet();// this function is provided by above library and the wallets object is sent by context api of wallet provider
  const {connection}=useConnection();

  async function sendAirdropToUser(){
    let element=document.getElementById("amount").value;

    await  connection.requestAirdrop(wallet.publicKey,element * LAMPORTS_PER_SOL);
    alert("airdrop successful");
  }

     return <div >
      <div style={{backgroundColor:"rgb(81, 45, 168)", padding:"10px",borderRadius:"5px",color:"white"}}>Public key : {wallet.publicKey && wallet.publicKey.toString()}</div>
      <div  style={{marginTop:"10px"}}>
      <input type="text" placeholder="Amount in solana" id="amount" ></input>
      <button onClick={sendAirdropToUser}>Send Airdrop</button>
      </div>
     </div>
}