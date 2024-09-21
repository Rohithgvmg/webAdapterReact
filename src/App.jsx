import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { Airdrop } from './Airdrop';
import { ShowSOL } from './showSOL';
// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import { SignMessage } from './SignMessage';
import { SendTokens } from './SendSOL';
function App() {
  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/xDY7hyIjV3jXiK7f_D-CtGz81ZH9JE5c"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                  <div style={{display:"flex", justifyContent:"space-between",marginTop:"20px",marginBottom:"20px"}}>
                <WalletMultiButton />
                <WalletDisconnectButton />
                </div>
                <div style={{display:"flex", justifyContent:"space-between"}}>
    <Airdrop></Airdrop>
    <ShowSOL></ShowSOL></div>
    <SignMessage></SignMessage>
    <SendTokens></SendTokens>
    </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
  )
}

export default App
