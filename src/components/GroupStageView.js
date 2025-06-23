// src/components/GroupStageView.js
import React from 'react';
import Group from './Group';

const GroupStageView = ({ allGroupsData, onGroupScoreSubmit }) => {
    // allGroupsData é um objeto onde as chaves são 'A', 'B', etc.
    // e os valores são objetos com { name, teams, matches, standings }
    return (
        <div className="group-stage-view">
            <h2>Fase de Grupos</h2>
            {Object.entries(allGroupsData).map(([groupKey, groupDetails]) => (
                <Group
                    key={groupKey} // React key para a lista
                    // groupData agora inclui a 'key' do grupo ('A', 'B', etc.) junto com os outros detalhes.
                    groupData={{
                        key: groupKey, // A chave do grupo (ex: 'A', 'B')
                        name: groupDetails.name,
                        matches: groupDetails.matches,
                        standings: groupDetails.standings
                        // Se groupDetails também contiver 'teams', você pode passá-lo também se Group precisar
                        // teams: groupDetails.teams 
                    }}
                    onScoreSubmit={onGroupScoreSubmit} // Esta prop espera (groupKey, matchId, score1, score2)
                />
            ))}
        </div>
    );
};

export default GroupStageView;