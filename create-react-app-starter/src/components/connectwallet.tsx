import React, {FC, ReactNode, useMemo} from 'react'
import {WalletModalProvider, WalletMultiButton} from "@solana/wallet-adapter-react-ui";
import {WalletAdapterNetwork} from "@solana/wallet-adapter-base";
import {clusterApiUrl} from "@solana/web3.js";
import {createDefaultAuthorizationResultCache, SolanaMobileWalletAdapter} from "@solana-mobile/wallet-adapter-mobile";
import {
    GlowWalletAdapter,
    PhantomWalletAdapter,
    SlopeWalletAdapter,
    SolflareWalletAdapter, TorusWalletAdapter
} from "@solana/wallet-adapter-wallets";
import {ConnectionProvider, WalletProvider} from "@solana/wallet-adapter-react";

const Connectwallet = () => {
    return (
            <Context>
                <Content />
            </Context>

)

}
export default Connectwallet;

const Context: FC<{ children: ReactNode }> = ({ children }) => {
    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
    const network = WalletAdapterNetwork.Devnet;

    // You can also provide a custom RPC endpoint.
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
    // Only the wallets you configure here will be compiled into your application, and only the dependencies
    // of wallets that your users connect to will be loaded.
    const wallets = useMemo(
        () => [
            new SolanaMobileWalletAdapter({
                appIdentity: { name: 'Solana Create React App Starter App' },
                authorizationResultCache: createDefaultAuthorizationResultCache(),
            }),
            new PhantomWalletAdapter(),
            new GlowWalletAdapter(),
            new SlopeWalletAdapter(),
            new SolflareWalletAdapter({ network }),
            new TorusWalletAdapter(),
        ],
        [network]
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

const Content: FC = () => {
    return (
        <div className="App">
            <WalletMultiButton />
        </div>
    );
};
