import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi';
import { mainnet } from 'viem/chains';

const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID;

if (!projectId) {
  throw new Error('Missing VITE_WALLET_CONNECT_PROJECT_ID environment variable');
}

const metadata = {
  name: 'vSpaceWallet',
  description: 'vSpaceWallet Authentication',
  url: window.location.origin,
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

const chains = [mainnet];

export const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  enableWalletConnect: true,
  enableInjected: true,
  enableEIP6963: true,
  enableCoinbase: true
});

export const web3Modal = createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  defaultChain: mainnet,
  themeMode: 'light',
  themeVariables: {
    '--w3m-font-family': 'Inter, sans-serif',
    '--w3m-accent-color': '#3b82f6',
    '--w3m-background-color': '#ffffff',
    '--w3m-color-fg-1': '#1f2937',
    '--w3m-color-fg-2': '#4b5563',
    '--w3m-border-radius-master': '0.75rem'
  }
});