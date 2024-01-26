import React from 'react';
import '../styles/theme_default/App.css';

function LinkCard({ link }) {
  const redirectToLink = () => {
    window.open(link.url, '_blank', 'noopener noreferrer');
  };

  return (
    <div className="link-card" onClick={redirectToLink}>
      <span>{link.icon}</span>
      <a href={link.url} target="_blank" rel="noopener noreferrer">
        {link.name}
      </a>
    </div>
  );
}

export default LinkCard;

