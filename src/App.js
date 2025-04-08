import React from 'react';
import './App.css';
import img1 from './images/imge1.png';
import img2 from './images/imge2.png';
import img3 from './images/imge3.png';
import img4 from './images/imge4.png';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <div className="logo">LOGO</div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Articles</li>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="buttons">
          <button className="login">Log In</button>
          <button className="start">Start Free Trial</button>
        </div>
      </header>

      <section className="hero">
        <h1>A modern way to build websites.</h1>
        <p>Empower designers to build professional, custom websites in a completely visual canvas with no code.</p>
        <button className="start-hero">Start free trial</button>
      </section>

      <section className="articles">
        <h2 className="section-title">We share our thoughts on design</h2>
        <div className="cards">
          <div className="card">
            <img src={img1} alt="Article 1" />
            <h3>Redesigning my site increased sales by over 400% in one week.</h3>
            <p className="date">Jul 1, 2020</p>
          </div>
          <div className="card">
            <img src={img2} alt="Article 2" />
            <h3>Design handoff: What engineers really want to see</h3>
            <p className="date">Jul 1, 2020</p>
          </div>
          <div className="card">
            <img src={img3} alt="Article 3" />
            <h3>A comprehensive list of human-computer interactions</h3>
            <p className="date">Jul 1, 2020</p>
          </div>
          <div className="card">
            <img src={img4} alt="Article 4" />
            <h3>Why do people hate redesigns?</h3>
            <p className="date">Jul 1, 2020</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;