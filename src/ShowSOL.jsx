import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function ShowSOL(){
    const wallet=useWallet();
    const {connection}=useConnection();

    async function showBalance(){
      const balance= await connection.getBalance(wallet.publicKey);
      // document.getElementById("balance").innerHTML=balance/LAMPORTS_PER_SOL;
      const bal=balance/LAMPORTS_PER_SOL;
      alert("Balance is : "+bal);


    }
    return <div>
      <button onClick={showBalance} style={{backgroundColor:"rgb(81, 45, 168)",color:"white",padding:"10px",borderRadius:"10px",border:"0px"}}>GET BALANCE</button>
      {/* <p>SOL BALANCE</p>
      <div id="balance"></div> */}

    </div>
}