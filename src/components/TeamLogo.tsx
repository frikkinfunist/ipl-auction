import React from 'react';

import cskLogo from '../assets/logos/CSK.png';
import dcLogo from '../assets/logos/DC.png';
import gtLogo from '../assets/logos/GT.png';
import kkrLogo from '../assets/logos/KKR.png';
import lsgLogo from '../assets/logos/LSG.png';
import miLogo from '../assets/logos/MI.png';
import pbksLogo from '../assets/logos/PBKS.png';
import rcbLogo from '../assets/logos/RCB.png';
import rrLogo from '../assets/logos/RR.png';
import srhLogo from '../assets/logos/SRH.png';

export const TEAM_LOGOS: Record<string, string> = {
  CSK: cskLogo,
  DC: dcLogo,
  GT: gtLogo,
  KKR: kkrLogo,
  LSG: lsgLogo,
  MI: miLogo,
  PBKS: pbksLogo,
  RCB: rcbLogo,
  RR: rrLogo,
  SRH: srhLogo,
};

export interface TeamLogoProps {
  teamId?: string;
  src?: string;
  alt?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  className?: string;
  style?: React.CSSProperties;
}

export const TeamLogo: React.FC<TeamLogoProps> = ({
  teamId,
  src,
  alt,
  size = 'sm',
  className = '',
  style = {},
}) => {
  const resolvedSrc = (teamId && TEAM_LOGOS[teamId]) || src || (teamId ? `/logos/${teamId}.png` : '');
  const altText = alt || teamId || 'Team Logo';

  return (
    <div className={`team-logo-container team-logo-${size} ${className}`} style={style}>
      {resolvedSrc ? (
        <img
          src={resolvedSrc}
          alt={altText}
          className="team-logo-img"
          loading="eager"
          decoding="async"
        />
      ) : (
        <span className="team-logo-fallback">{teamId || '🏏'}</span>
      )}
    </div>
  );
};
