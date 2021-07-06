import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Stats from "./components/Stats";
import Cli from "./components/Cli";
import Cloud from "./components/Cloud";
import Languages from './components/Languages';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Showcase />
      <Stats />
      <Cli />
      <Cloud />
      <Languages />
      <Footer />

    </div>
  );
}

export default App;
