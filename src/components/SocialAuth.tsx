import React from 'react';
import { Github, Twitter, Apple, Mail } from 'lucide-react';
import { AuthButton } from './AuthButton';
import { DiscordIcon } from './icons/DiscordIcon';
import { GoogleIcon } from './icons/GoogleIcon';

export function SocialAuth() {
  return (
    <div className="space-y-3">
      <AuthButton
        icon={Github}
        label="Continue with GitHub"
        onClick={() => console.log('GitHub auth')}
        variant="outline"
      />
      <AuthButton
        icon={Twitter}
        label="Continue with X"
        onClick={() => console.log('X auth')}
        variant="outline"
      />
      <AuthButton
        icon={DiscordIcon}
        label="Continue with Discord"
        onClick={() => console.log('Discord auth')}
        variant="outline"
      />
      <AuthButton
        icon={Apple}
        label="Continue with Apple"
        onClick={() => console.log('Apple auth')}
        variant="outline"
      />
      <AuthButton
        icon={GoogleIcon}
        label="Continue with Google"
        onClick={() => console.log('Google auth')}
        variant="outline"
      />
    </div>
  );
}