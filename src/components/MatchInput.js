// src/components/MatchInput.js
import React, { useState, useEffect } from 'react';
import { getTeamName } from '../data/initialData';
import { getTeamLogoById } from '../logos/logoImports';

const MatchInput = ({ match, onScoreSubmit }) => {
    const [score1, setScore1] = useState(match.score1 !== null ? String(match.score1) : '');
    const [score2, setScore2] = useState(match.score2 !== null ? String(match.score2) : '');

    useEffect(() => {
        setScore1(match.score1 !== null ? String(match.score1) : '');
        setScore2(match.score2 !== null ? String(match.score2) : '');
    }, [match.score1, match.score2]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (score1 === '' || score2 === '') {
            alert("Por favor, insira ambos os placares.");
            return;
        }
        onScoreSubmit(match.id, parseInt(score1, 10), parseInt(score2, 10));
    };

    const team1Name = getTeamName(match.team1Id);
    const team2Name = getTeamName(match.team2Id);
    const logo1Src = getTeamLogoById(match.team1Id);
    const logo2Src = getTeamLogoById(match.team2Id);

    return (
        <form onSubmit={handleSubmit} className="match-input">
            {/* Contêiner para o Time 1 (logo + nome) */}
            <div className="team-logo-name-container team1"> {/* Adicionada classe */}
                {logo1Src && (
                    <img
                        src={logo1Src}
                        alt={`${team1Name} logo`}
                    // Os estilos de tamanho do logo serão aplicados via CSS geral para .match-input img
                    />
                )}
                <span className="team-name">{team1Name}</span>
            </div>

            {/* Inputs de Placar */}
            <div className="score-inputs-container" style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '0 10px' }}>
                <input
                    type="number"
                    min="0"
                    value={score1}
                    onChange={(e) => setScore1(e.target.value)}
                    disabled={match.played}
                    aria-label={`Placar ${team1Name}`}
                // Estilos de width e text-align serão aplicados via CSS
                />
                <span>vs</span>
                <input
                    type="number"
                    min="0"
                    value={score2}
                    onChange={(e) => setScore2(e.target.value)}
                    disabled={match.played}
                    aria-label={`Placar ${team2Name}`}
                // Estilos de width e text-align serão aplicados via CSS
                />
            </div>

            {/* Contêiner para o Time 2 (nome + logo) */}
            <div className="team-logo-name-container team2"> {/* Adicionada classe e .team2 */}
                <span className="team-name">{team2Name}</span>
                {logo2Src && (
                    <img
                        src={logo2Src}
                        alt={`${team2Name} logo`}
                    // Os estilos de tamanho do logo serão aplicados via CSS geral para .match-input img
                    />
                )}
            </div>

            {/* Botão Salvar e Informações do Jogo */}
            <div className="match-actions-info-container" style={{ flexBasis: '100%', marginTop: '10px', textAlign: 'center' }}>
                <button type="submit" disabled={match.played}>
                    {match.played ? 'Salvo' : 'Salvar'}
                </button>
                <div style={{ fontSize: '0.8em', color: '#555', marginTop: '5px' }}>
                    <small>ID: {match.id} ({match.date} - {match.time} - {match.venue})</small>
                </div>
            </div>
        </form>
    );
};

export default MatchInput;