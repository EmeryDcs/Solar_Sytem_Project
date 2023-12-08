// homePage.jsx
import React from 'react';
import QuizButton from './quizBouton';
import Func3dBouton from './3dBouton';
import { Link } from 'react-router-dom';
import PageInterface3D from './pageInterface3d';

const HomePage = () => {
  const handleQuizButtonClick = () => {
    // Gérer la navigation vers la page du quiz
    console.log("Naviguer vers la page du quiz");
  };

  const handleInterface3DButtonClick = () => {
    // Gérer la navigation vers l'interface 3D
    console.log("Naviguer vers l'interface 3D");
  };

  return (
    <div>
      <h1>Soltem</h1>
      <Link to="/quiz">
        <QuizButton onClick={handleQuizButtonClick} />
      </Link>

      {/* Utilisez Link autour du bouton de l'interface 3D */}
      <Link to="/interface3d">
        <Func3dBouton onClick={handleInterface3DButtonClick} />
      </Link>
    </div>
  );
};

export default HomePage;