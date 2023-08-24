import React from 'react';
import '../styles/style.css'

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h2>Welcome to our Website</h2>
      </header>
      <section className="home-content">
        <p>This is the home page of our website. We offer various services to meet your needs.</p>
        <p>Feel free to explore our website and learn more about what we have to offer.</p>
      </section>
      <footer className="home-footer">
        <p>&copy; 2023 Your Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
