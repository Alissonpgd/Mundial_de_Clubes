// src/components/KnockoutMatchInput.js
import React, { useState, useEffect } from 'react';
import { getTeamName } from '../data/initialData';
import { getTeamLogoById } from '../logos/logoImports';

const KnockoutMatchInput = ({ match, onScoreSubmit }) => {
    const [score1, setScore1] = useState(match.score1 !== null ? String(match.score1) : '');
    const [score2, setScore2] = useState(match.score2 !== null ? String(match.score2) : '');

    useEffect(() => {
        setScore1(match.score1 !== null ? String(match.score1) : '');
        setScore2(match.score2 !== null ? String(match.score2) : '');
    }, [match.score1, match.score2]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!match.team1Id || !match.team2Id) {
            alert("Times ainda não definidos para esta partida.");
            return;
        }
        if (score1 === '' || score2 === '') {
            alert("Por favor, insira ambos os placares.");
            return;
        }
        onScoreSubmit(match.id, parseInt(score1, 10), parseInt(score2, 10));
    };

    const team1Name = match.team1Id ? getTeamName(match.team1Id) : match.team1Placeholder;
    const team2Name = match.team2Id ? getTeamName(match.team2Id) : match.team2Placeholder;
    const logo1Src = match.team1Id ? getTeamLogoById(match.team1Id) : null;
    const logo2Src = match.team2Id ? getTeamLogoById(match.team2Id) : null;

    const areTeamsDefined = match.team1Id && match.team2Id;

    return (
        <form onSubmit={handleSubmit} className="knockout-match-input">
            <div className="knockout-match-info">
                <strong>{match.label || match.stage}</strong>
                <span> ({match.date} - {match.time} - {match.venue})</span>
            </div>

            {/* Contêiner para o Time 1 (logo + nome) */}
            <div className="team-logo-name-container team1">
                {logo1Src && areTeamsDefined && (
                    <img src={logo1Src} alt={`${team1Name} logo`} />
                )}
                <span className="team-name">{team1Name}</span>
            </div>

            {/* Inputs de Placar - Só mostra se os times estiverem definidos */}
            {areTeamsDefined ? (
                <div className="score-inputs-container" style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '0 10px' }}>
                    <input
                        type="number"
                        min="0"
                        value={score1}
                        onChange={(e) => setScore1(e.target.value)}
                        disabled={match.played || !areTeamsDefined}
                        aria-label={`Placar ${team1Name}`}
                    />
                    <span>vs</span>
                    <input
                        type="number"
                        min="0"
                        value={score2}
                        onChange={(e) => setScore2(e.target.value)}
                        disabled={match.played || !areTeamsDefined}
                        aria-label={`Placar ${team2Name}`}
                    />
                </div>
            ) : (
                <span style={{ margin: '0 10px', fontStyle: 'italic', color: '#777' }}>vs</span>
            )}

            {/* Contêiner para o Time 2 (nome + logo) */}
            <div className="team-logo-name-container team2">
                <span className="team-name">{team2Name}</span>
                {logo2Src && areTeamsDefined && (
                    <img src={logo2Src} alt={`${team2Name} logo`} />
                )}
            </div>

            {/* Botão Salvar e Informações do Jogo */}
            <div className="match-actions-info-container" style={{ flexBasis: '100%', marginTop: '10px', textAlign: 'center' }}>
                {areTeamsDefined && ( // Só mostra o botão se os times estiverem definidos
                    <button type="submit" disabled={match.played || !areTeamsDefined}>
                        {match.played ? 'Salvo' : (match.team1Id && match.team2Id ? 'Salvar' : 'Aguardando Times')}
                    </button>
                )}
                {/* Você pode querer mostrar o ID do jogo mesmo se os times não estiverem definidos */}
                <div style={{ fontSize: '0.8em', color: '#555', marginTop: '5px' }}>
                    <small>ID: {match.id}</small>
                </div>
            </div>
        </form>
    );
};

export default KnockoutMatchInput;