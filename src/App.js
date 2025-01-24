import React, { useState } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AboutCarousel from './AboutCarousel';
import Resume from './Resume';
import Projeto from './projeto';

const App = () => {
  // Estado para controlar o popup de email
  const [showEmail, setShowEmail] = useState(false);



  // Estado para controlar a sidebar
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Função para alternar o estado da sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Função para copiar o email
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("gabrielmarques.sp@hotmail.com");
    alert("Email copiado para a área de transferência!");
  };

  return (
    <div className="app">
      {/* Botão para Expandir/Colapsar a Sidebar */}
      <button className="toggle-sidebar" onClick={toggleSidebar}>
        ☰
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'collapsed' : 'open'}`}>
        <nav>
          <ul>
            <li>
              <a href="#home">
                <i className="fas fa-home"></i>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about">
                <i className="fas fa-user"></i>
                <span>Sobre Mim</span>
              </a>
            </li>
            <li>
              <a href="#resume">
                <i className="fas fa-file-alt"></i>
                <span>Meu Currículo</span>
              </a>
            </li>
            <li>
              <a href="#projects">
                <i className="fas fa-project-diagram"></i>
                <span>Meus Projetos</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <i className="fas fa-envelope"></i>
                <span>Contato</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Conteúdo Principal */}
      <main className="content">
        {/* Seção Home */}
        <section id="home">
          <h1 className='titulo'>Gabriel Marques</h1>
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

        {/* Outras Seções */}
        <div className="app">
          {/* Outras seções */}
          <section id="about">
            <AboutCarousel />
          </section>
        </div>
        <div>
          {/* Outras seções */}
          <Resume />
        </div>  
        <section id="projects">
        <Projeto />
        </section>
        <section id="contact">
          <h2>Contato</h2>
          <p>Informações de contato e formulário para mensagens.</p>
        </section>
      </main>
    </div>
  );
};

export default App;
