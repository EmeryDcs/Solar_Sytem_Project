import './App.css'
import styled from "styled-components";
import { Canvas, useThree } from '@react-three/fiber';
import { Suspense } from 'react';
import { SolarSytem } from '../src/components/solarsystem';
import { InfoPlanet } from './components/controls/infoPlanet';

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {

	console.log("app");

	return (
		<div>
			<Canvas>
				{/* <Suspense fallback={null}> */}
				<SolarSytem />
				{/* </Suspense> */}
			</Canvas>
			<InfoPlanet nom={'terre'}/>
		</div>
	);
}

export default App
