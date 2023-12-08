// boutonAccueil.jsx
import React from 'react';

const BoutonAccueil = ({ onClick }) => (
	<button onClick={onClick} className='boutonAccueil'>
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

export default BoutonAccueil;