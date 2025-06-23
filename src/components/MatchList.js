// src/components/MatchList.js
import React from 'react';
import MatchInput from './MatchInput';

const MatchList = ({ matches, onScoreSubmit }) => {
    return (
        <div className="match-list">
            <h4>Jogos:</h4>
            {matches.map((match) => (
                <MatchInput
                    key={match.id}
                    match={match}
                    onScoreSubmit={onScoreSubmit}
                />
            ))}
        </div>
    );
};

export default MatchList;