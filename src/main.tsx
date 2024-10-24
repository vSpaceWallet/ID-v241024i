import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { WagmiConfig } from 'wagmi';
import { config } from './lib/wagmi';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WagmiConfig config={config}>
      <App />
    </WagmiConfig>
  </StrictMode>
);