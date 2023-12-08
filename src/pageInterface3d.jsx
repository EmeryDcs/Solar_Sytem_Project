import './App.css'
import styled from "styled-components";
import { Canvas, useThree } from '@react-three/fiber';
import { Suspense, useState, createContext, useCallback } from 'react';
import { SolarSytem } from '../src/components/solarsystem';
import { InfoPlanet } from '../src/components/controls/infoPlanet';
import { Background } from '../src/components/controls/background';
import { useCameraFollow } from '../src/components/controls/useCameraFollow';
import { Link } from 'react-router-dom';
import BoutonAccueil3d from './boutonAccueil3d';
const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const PlanetContext = createContext();

function PageInterface3D() {
    const [planet, setPlanet] = useState(null);
    const [setTarget, resetCamera] = useState(null); // Assurez-vous d'appeler useCameraFollow avec la bonne échelle

    const handleClose = useCallback(() => {
        setPlanet(null);
        resetCamera && resetCamera();
    }, [resetCamera]);

    return (
        <div className='divCanva'>
            <PlanetContext.Provider value={{ planet, setPlanet }}>
                <Canvas camera={{ position: [0, 20, 50] }}>
                    <Background />
                    {/* <Suspense fallback={null}> */}
                    <SolarSytem />
                    {/* </Suspense> */}
                </Canvas>
                {planet && <InfoPlanet nom={planet} onClose={handleClose} />}
            </PlanetContext.Provider> 
            <Link to="/">
				<BoutonAccueil3d/>
			</Link>
        </div>
    );
}

export default PageInterface3D;