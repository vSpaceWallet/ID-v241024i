import React from 'react';
import { Key } from 'lucide-react';
import { AuthButton } from './AuthButton';

export function PasskeyAuth() {
  return (
    <AuthButton
      icon={Key}
      label="Continue with Passkey"
      onClick={() => console.log('Passkey auth')}
      variant="outline"
    />
  );
}