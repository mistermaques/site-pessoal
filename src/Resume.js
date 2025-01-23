import React from 'react';
import './App.css';

const Resume = () => {
    return (
        <section id="resume" className="resume-section">
            <h2 className="section-title">Meu Curriculo</h2>
            <p className="section-intro">
                Aqui estão minhas experiências, habilidades e formação. Baixe meu currículo para mais detalhes!
            </p>

            {/* Experiências */}
            <div className="resume-experiences">
                <div className="experience-card">
                    <h3>Estagio em Tecnologia Educacional (Maker)</h3>
                    <span>Colégio Rio Branco</span>
                    <ul className='experience-details'>
                        <li>
                            <strong>Manutenção de dispositivos:</strong>  Chromebooks, tablets e Ipads no ambiente escolar.
                        </li>
                        <li>
                            <strong>Robótica:</strong>  Montagem e programação de robôs com Arduino e C++
                        </li>
                        <li>
                            <strong>Edição de vídeos:</strong> Auxilio na criação e legendas em vídeos. 
                        </li>
                        <li>
                            <strong>Soluções de software:</strong> Desenvolvimento de ferramentas para auxiliar professores
                        </li>

                    </ul>
                    <span>2024 - Atual</span>
                </div>
                <div className="experience-card">
                    <h3>Auxiliar de Logística</h3>
                    <span>Protec Export</span>
                    <ul className="experience-details">
                        <li>
                            <strong>Recebimento e conferência: </strong> Recebimento e verificação de notas fiscais e produtos/matéria prima.
                        </li>
                        <li>
                            <strong>Entrada de notas fiscais: </strong>Registro de notas fiscais nos sistemas.
                        </li>
                        <li>
                            <strong>Gerenciamento de pedidos:</strong> Separação de ordens de produção e pedidos.
                        </li>
                        <li>
                            <strong>Inventário e organização do estoque:</strong>Assistência no inventário e manutenção da organização do estoque.
                        </li>
                    </ul>
                    <span>2021 - 2024</span>
                </div>
                <div className="experience-card">
                    <h3>Auxiliar de Suporte Técnico</h3>
                    <span> Amor em detalhes</span>
                    <ul className="experience-details">
                        <li>
                            <strong>Responsável pelo inventário da loja:</strong> Catalogação e fotografia de peças e gerenciamento de entradas e saídas de novas peças no sistema.
                        </li>
                        <li>
                            <strong>Responsável pelo cadastro de clientes e alunos:</strong> Realização de cadastros e manutenção dos dados no sistema.
                        </li>
                        <li>
                            <strong>Responsável pela manutenção e suporte técnico:</strong> Instalação de softwares, execução de backups e montagem e manutenção de computadores.
                        </li>
                    </ul>
                    <span>2018 – 2020</span>
                </div>
            </div>

            {/* Habilidades Técnicas */}
            <div className="resume-skills">
                <h3>Habilidades Técnicas</h3>
                <ul>
                    <li>C#</li>
                    <li>Python</li>
                    <li>HTML, CSS e JavaScript (Básico)</li>
                    <li>Robótica Educacional</li>
                </ul>
            </div>

            {/* Formação Acadêmica */}
            <div className="resume-education">
                <h3>Formação Acadêmica</h3>
                <p>
                    Graduação em Sistemas de Informação - 5º Semestre <br />
                    Faculdade [Nome da Instituição]
                </p>
            </div>

            {/* Botão para Download */}
            <div className="resume-download">
                <a href="/Gabriel Marques 2025.pdf" download className="download-button">
                    Baixar Currículo em PDF
                </a>
            </div>
        </section>
    );
};

export default Resume;
