// src/components/StandingsTable.js
import React from 'react';
import { getTeamName } from '../data/initialData'; // Para buscar nomes
import { getTeamLogoById } from '../logos/logoImports'; // << 1. IMPORTAR A FUNÇÃO DOS LOGOS

const StandingsTable = ({ standings }) => {
    // O seu tratamento para standings vazio/nulo está bom.
    // Se quiser mostrar uma tabela vazia com cabeçalhos em vez de nada,
    // você poderia remover o if ou retornar uma estrutura de tabela vazia.
    // Por enquanto, manterei como está, pois não mostrar nada se não houver dados é razoável.
    if (!standings || standings.length === 0) {
        // Para fins de UI, pode ser melhor sempre renderizar a estrutura da tabela,
        // mesmo que vazia, ou com uma mensagem "Nenhum jogo disputado ainda."
        // Exemplo:
        // if (!standings) return <p>Carregando classificação...</p>;
        // if (standings.length === 0) return <p>Nenhum jogo disputado ainda para gerar classificação.</p>;
    }

    return (
        <table className="standings-table">
            <thead>
                <tr>
                    <th>Pos</th>
                    <th style={{ textAlign: 'left' }}>Time</th> {/* Ajuste para alinhar à esquerda se necessário */}
                    <th>P</th>
                    <th>J</th>
                    <th>V</th>
                    <th>E</th>
                    <th>D</th>
                    <th>GP</th>
                    <th>GC</th>
                    <th>SG</th>
                </tr>
            </thead>
            <tbody>
                {standings.map((teamStanding, index) => {
                    // << 2. OBTER O CAMINHO DO LOGO E O NOME DO TIME
                    const logoSrc = getTeamLogoById(teamStanding.teamId);
                    const teamName = getTeamName(teamStanding.teamId);

                    return (
                        <tr key={teamStanding.teamId}>
                            <td>{index + 1}</td>
                            {/* // << 3. CÉLULA DO TIME COM LOGO E NOME */}
                            <td style={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>
                                {logoSrc && (
                                    <img
                                        src={logoSrc}
                                        alt={`${teamName} logo`} // Boa prática para acessibilidade
                                        style={{
                                            width: '24px', // Ajuste o tamanho conforme necessário
                                            height: '24px', // Ajuste o tamanho conforme necessário
                                            marginRight: '8px', // Espaçamento entre logo e nome
                                            objectFit: 'contain' // Para garantir que o logo não seja distorcido
                                        }}
                                    />
                                )}
                                {teamName}
                            </td>
                            <td>{teamStanding.points}</td>
                            <td>{teamStanding.played}</td>
                            <td>{teamStanding.wins}</td>
                            <td>{teamStanding.draws}</td>
                            <td>{teamStanding.losses}</td>
                            <td>{teamStanding.goalsFor}</td>
                            <td>{teamStanding.goalsAgainst}</td>
                            <td>{teamStanding.goalDifference}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default StandingsTable;