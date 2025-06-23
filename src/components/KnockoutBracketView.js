// src/components/KnockoutBracketView.js
import React from 'react';
import KnockoutMatchInput from './KnockoutMatchInput';
// teams as allTeamsList não é mais necessário aqui se KnockoutMatchInput não precisar dele diretamente

const KnockoutBracketView = ({ knockoutMatches, onKnockoutScoreSubmit }) => {
    const renderRound = (stageName, stageTitle) => { // Adicionado stageTitle para mais flexibilidade
        const roundMatches = knockoutMatches.filter(match => match.stage === stageName);
        if (roundMatches.length === 0) return null;

        return (
            // Adicionando uma classe para o contêiner da rodada para estilização opcional
            <div className={`round-container round-${stageName.toLowerCase().replace(/\s+/g, '-')}`}>
                <h4>{stageTitle || stageName}</h4> {/* Usa stageTitle se fornecido, senão stageName */}
                {roundMatches.map(match => (
                    <KnockoutMatchInput
                        key={match.id}
                        match={match}
                        onScoreSubmit={onKnockoutScoreSubmit}
                    // teams={allTeamsList} // Removido, pois KnockoutMatchInput não usa mais
                    />
                ))}
            </div>
        );
    };

    return (
        <div className="knockout-bracket-view">
            <h2>Fase Eliminatória (Mata-Mata)</h2>
            {/* Passando títulos mais amigáveis para as seções */}
            {renderRound('Oitavas', 'Oitavas de Final')}
            {renderRound('Quartas', 'Quartas de Final')}
            {renderRound('Semifinal', 'Semifinais')} {/* Usando 'Semifinal' como no seu initialData */}
            {renderRound('Final', 'Final')}
        </div>
    );
};

export default KnockoutBracketView;