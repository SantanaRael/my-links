import React from 'react';
import './LinkCard.css'; 

function LinkCard({ link }) {
  return (
    <div className="link-card">
        <img src={process.env.PUBLIC_URL + link.icon}/>
        <a href={link.url} target="_blank" rel="noopener noreferrer">
        {link.name}
        </a>
    </div>
  );
}    


export default LinkCard;
