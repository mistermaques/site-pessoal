import React from "react";
import "./projeto.css";

const Projeto = () => {
  const projetos = [
    {
      id: 1,
      title: "Projeto 1",
      description: "Descrição do Projeto 1. Aqui você pode adicionar informações sobre o que foi desenvolvidoDescrição do Projeto 1. Aqui você pode adicionar informações sobre o que foi desenvolvido.",
      className: "projeto1",
    },
    {
      id: 2,
      title: "Projeto 2",
      description: "Descrição do Projeto 2. Adicione detalhes sobre o projeto e sua funcionalidade.",
      className: "projeto2",
    },
    {
      id: 3,
      title: "Projeto 3",
      description: "Descrição do Projeto 3. Explique os objetivos e resultados do projeto.",
      className: "projeto3",
    },
  ];

  return (
    <div className="projects-container">
      {projetos.map((projeto) => (
        <div className={`project-card ${projeto.className}`} key={projeto.id}>
          <div className="project-description">
            <h3>{projeto.title}</h3>
            <p>{projeto.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projeto;
