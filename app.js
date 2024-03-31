import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Mon Portfolio</h1>
      </header>

      <nav>
        <ul>
          <li><a href="#accueil">Accueil</a></li>
          <li><a href="#projets">Projets</a></li>
          <li><a href="#a-propos">À Propos</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="accueil">
        <h2>Accueil</h2>
        <p>Bienvenue sur mon portfolio !</p>
      </section>

      <section id="projets">
        <h2>Projets</h2>
        <div className="projet">
          <h3>Projet 1</h3>
          <p>Description du projet 1</p>
        </div>
        <div className="projet">
          <h3>Projet 2</h3>
          <p>Description du projet 2</p>
        </div>
        {/* Ajoutez d'autres projets ici */}
      </section>

      <section id="a-propos">
        <h2>À Propos</h2>
        <p>Présentation de moi-même</p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Informations de contact</p>
      </section>

      <footer>
        <p>&copy; 2024 Mon Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
