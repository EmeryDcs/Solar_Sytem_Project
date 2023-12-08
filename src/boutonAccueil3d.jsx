// boutonAccueil3d.jsx
import React from 'react';

const BoutonAccueil3d = ({ onClick }) => (
    <button onClick={onClick} className='boutonAccueil3d'>
        <strong>Accueil</strong>
        <div id="container-stars">
            <div id="stars"></div>
        </div>

        <div id="glow">
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
    </button>
);

export default BoutonAccueil3d;