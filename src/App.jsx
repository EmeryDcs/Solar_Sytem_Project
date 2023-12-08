import './App.css'
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageInterface3D from './pageInterface3d';
import Quiz from './quiz/Quiz';
import HomePage from './homePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage/>} />
        <Route path="/interface3d" exact element={<PageInterface3D/>} />
        <Route path="/quiz" exact element={<Quiz/>} />
      </Routes>
    </Router>
  );
};

export default App
