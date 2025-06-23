// src/components/Group.js
import React from 'react';
import MatchList from './MatchList';
import StandingsTable from './StandingsTable';

const Group = ({ groupData, onScoreSubmit }) => {
    // groupData agora é esperado que contenha:
    // { key: 'A', name: 'Grupo A', matches: [...], standings: [...] }

    if (!groupData || !groupData.key) {
        // Adicionar um fallback ou log de erro se groupData não estiver como esperado
        console.error("Group component received invalid groupData:", groupData);
        return <div className="group">Erro: Dados do grupo inválidos.</div>;
    }

    return (
        <div className="group">
            {/* Opcional: Mostrar a chave do grupo para fins de depuração */}
            <h3>{groupData.name} (Grupo {groupData.key})</h3>
            <MatchList
                matches={groupData.matches}
                // Ao chamar onScoreSubmit, o primeiro argumento agora é groupData.key
                // que corresponde à chave do grupo ('A', 'B', etc.)
                onScoreSubmit={(matchId, score1, score2) =>
                    onScoreSubmit(groupData.key, matchId, score1, score2)
                }
            />
            <StandingsTable standings={groupData.standings} />
        </div>
    );
};

export default Group;