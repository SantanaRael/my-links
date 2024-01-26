import React from 'react';
import '../styles/theme_default/App.css';

function LinkCard({ link }) {
  const redirectToLink = () => {
    window.open(link.url, '_blank', 'noopener noreferrer');
  };

  return (
    <div className="link-card" onClick={redirectToLink}>
      <img src={process.env.PUBLIC_URL + link.icon} alt={link.name} />
      <a href={link.url} target="_blank" rel="noopener noreferrer">
        {link.name}
      </a>
    </div>
  );
}

export default LinkCard;

