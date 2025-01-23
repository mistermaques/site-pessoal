import React, { useState } from 'react';
import './App.css';

const AboutCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Conteúdo dos cartões
    const cards = [
        {
            title: "Quem Sou Eu",
            content: "Olá, me chamo Gabriel Marques Cerqueira, tenho 25 anos e sou de Cotia, SP. Desde pequeno, sempre fui apaixonado por tecnologia e tudo que envolve o mundo digital. Esse interesse naturalmente me levou a explorar e aprender cada vez mais sobre computadores, programação e inovação."
        },
        {
            title: "Minha Formação",
            content: "Estou no 5º semestre de Sistemas de Informação pela Faculdade Rio Branco e tenho formação em Logística."
        },
        {
            title: "Minha Experiência",
            content: "Sou estagiário na área de Tecnologia Educacional, onde auxilio na montagem de pequenos robôs e no desenvolvimento de programas simples para professores."
        },
        {
            title: "Hobbies e Interesses",
            content: "Além da tecnologia, adoro explorar novidades, aprender coisas novas e também gosto de [inserir hobby]."
        },
        {
            title: "Objetivos Futuros",
            content: "Meu objetivo é me especializar em [área específica] e trabalhar em projetos que causem impacto positivo no mundo."
        }
    ];

    // Lógica para mudar o cartão ao clicar nas setas
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="carousel-container">
            <button className="carousel-button prev" onClick={handlePrev}>
                &#9664; {/* Ícone de seta esquerda */}
            </button>

            <div className="carousel-card">
                <h2>{cards[currentIndex].title}</h2>
                <p>{cards[currentIndex].content}</p>
            </div>

            <button className="carousel-button next" onClick={handleNext}>
                &#9654; {/* Ícone de seta direita */}
            </button>
        </div>
    );
};

export default AboutCarousel;
