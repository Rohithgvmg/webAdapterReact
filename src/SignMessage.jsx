import { ed25519 } from '@noble/curves/ed25519';
import { useWallet } from '@solana/wallet-adapter-react';
import React from 'react';

export function SignMessage(){

  const {publicKey,signMessage} =useWallet();

   async function onClick(){
    try{
    if(!publicKey) throw new Error('Wallet not connected!');
    if(!signMessage) throw new Error ('Wallet does not support message signing!');

    const message=document.getElementById("message").value;
    const encodedMessage=new TextEncoder().encode(message);//converts string to UInt8Array
    const signature=await signMessage(encodedMessage);

   const isValid = await ed25519.verify(signature, encodedMessage, publicKey.toBytes());
   if (!isValid) throw new Error('Message signature invalid!');
    alert("Message signed successfully");
  } catch(error){
      console.error("Error signing message:", error.message);
      alert(`Error: ${error.message}`);
    }
   }
   
   return (
    <div style={{marginTop:"10px"}}>
        <input id="message" type="text" placeholder="Message" />
        <button onClick={onClick}>
            Sign Message
        </button>
    </div>
);
}