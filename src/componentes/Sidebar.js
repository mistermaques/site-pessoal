import React from 'react';
import './Sidebar.css';

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
    return (
        <>
            {/* Botão para Expandir/Colapsar */}
            <button className="toggle-sidebar" onClick={toggleSidebar}>
                ☰
            </button>

            {/* Sidebar */}
            <aside className={`sidebar ${sidebarOpen ? "open" : "collapsed"}`}>
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
        </>
    );
};

export default Sidebar;
