import React, { useState, useEffect } from 'react';

export function InfoPlanet(nom){

    const [planetData, setPlanetData] = useState({
        name: '',
        moons: '',
        mass: '',
        vol: '',
        density: '',
        gravity: '',
        escape: '',
        meanRadius: '',
        sideralOrbit: '',
        sideralRotation: '',
        discoveredBy: '',
        avgTemp: '',
    });

    const [dataReady, setDataReady] = useState(false);
    
    // Effect pour effectuer l'appel à l'API et mettre à jour l'état
    useEffect(() => {
        // Remplacez l'URL de l'API par votre propre URL
        fetch('https://api.le-systeme-solaire.net/rest/bodies/'+nom.nom)
        .then(response => response.json())
        .then(data => {// Créer un nouvel objet avec les propriétés souhaitées
            console.log('Données brutes de l\'API :', data);
            const filteredData = {
                name: data.name,
                moons: data.moons,
                mass: data.mass,
                vol: data.vol,
                density: data.density,
                gravity: data.gravity,
                escape: data.escape,
                meanRadius: data.meanRadius,
                sideralOrbit: data.sideralOrbit,
                sideralRotation: data.sideralRotation,
                discoveredBy: data.discoveredBy,
                avgTemp: data.avgTemp,
            };

            // Mettre à jour l'état avec le nouvel objet filtré
            setPlanetData(filteredData);
            // Indiquer que les données sont prêtes
            setDataReady(true);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données', error);
            // En cas d'erreur, vous pouvez également indiquer que les données ne sont pas prêtes
            setDataReady(true);
        });
    }, []); // Le tableau vide indique que cet effet s'exécute une fois après le rendu initial
      
    console.log('https://api.le-systeme-solaire.net/rest/bodies/'+nom.nom);

    if (!dataReady) {
        return <div>Chargement...</div>; // Vous pouvez personnaliser le message de chargement
    }

    return (
        <div className="infoPlanete">
            <h2>{planetData.name}</h2>

            <ul>
                <li className="infoLune">Lunes : <div>{planetData.moons[0].moon}</div></li>
                <li className="infoMasse">Masse : <div>{planetData.mass.massValue} 10 <small>{planetData.mass.massExponent}</small></div></li>
                <li className="infoVolume">Volume : <div>{planetData.vol.volValue}</div></li>
                <li className="infoDensite">Densité : <div>{planetData.density}</div></li>
                <li className="infoGravité">Gravité : <div>{planetData.gravity}</div></li>
                <li className="infoVitesseEchappement">Vitesse d'échappement : <div>{planetData.escape}</div></li>
                <li className="infoRayon">Rayon : <div>{planetData.meanRadius}</div></li>
                <li className="infoRevolution">Révolution : <div>{planetData.sideralOrbit}</div></li>
                <li className="infoRotation">Rotation : <div>{planetData.sideralRotation}</div></li>
                <li className="infoDecouverte">Découverte : <div>{planetData.discoveredBy}</div></li>
                <li className="infoTemperature">Température moyenne : <div>{planetData.avgTemp} °K</div></li>
            </ul>
        </div>
    );
}