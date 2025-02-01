import React, { useState } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AboutCarousel from './componentes/AboutCarousel';
import Resume from './componentes/Resume';
import Projeto from './componentes/projeto';
import Sidebar from './componentes/Sidebar';

const App = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("gabrielmarques.sp@hotmail.com");
    alert("Email copiado para a área de transferência!");
  };

  return (
    <div className={`app ${!sidebarOpen ? "sidebar-collapsed" : ""}`}>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <main className="content">
        {/* Seção Home */}
        <section id="home">
          <h1 className="titulo">Gabriel Marques</h1>
          <p>Explore e conheça mais sobre mim!</p>
          {/* Ícones */}
          <div className="icons-container">
            {/* Ícone do LinkedIn */}
            <a
              href="https://www.linkedin.com/in/gabriel-marques-7a1a64245/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin icon"></i>
            </a>

            {/* Ícone de Envelope */}
            <span
              className="icon email-icon"
              onClick={() => setShowEmail(!showEmail)}
            >
              <i className="fas fa-envelope"></i>
              {showEmail && (
                <div className="email-popup">
                  <p>gabrielmarques.sp@hotmail.com</p>
                  <i
                    className="fas fa-copy copy-icon"
                    onClick={handleCopyEmail}
                  ></i>
                </div>
              )}
            </span>
          </div>
        </section>

        {/* Seção Sobre Mim */}
        <section id="about">
          <AboutCarousel />
        </section>

        {/* Seção Currículo */}
        <section id="resume">
          <Resume />
        </section>

        {/* Seção Projetos */}
        <section id="projects">
          <Projeto />
        </section>

        {/* Seção Contato */}
        <section id="contact">
          <h2>Contato</h2>
          <p>Informações de contato e formulário para mensagens.</p>
        </section>
      </main>
    </div>
  );
};

export default App;
