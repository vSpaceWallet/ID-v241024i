import React from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { Wallet } from 'lucide-react';
import { AuthButton } from './AuthButton';

export function WalletButton() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected && address) {
    return (
      <AuthButton
        icon={Wallet}
        label={`${address.slice(0, 6)}...${address.slice(-4)}`}
        onClick={() => disconnect()}
        variant="black"
      />
    );
  }

  return (
    <div className="space-y-3">
      {connectors.map((connector) => (
        <AuthButton
          key={connector.id}
          icon={Wallet}
          label={`Continue with ${connector.name}`}
          onClick={() => connect({ connector })}
          disabled={!connector.ready}
          variant="default"
        />
      ))}
    </div>
  );
}