import React from 'react';
import { MicrosoftEntraVerifiedId } from './icons/MicrosoftEntraVerifiedId';
import { AuthButton } from './AuthButton';

export function EntraAuth() {
  return (
    <AuthButton
      icon={MicrosoftEntraVerifiedId}
      label="Continue with Entra Verified ID"
      onClick={() => console.log('Entra auth')}
      variant="outline"
    />
  );
}