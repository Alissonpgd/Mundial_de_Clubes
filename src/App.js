// src/App.js
import React from 'react';
import './App.css';
import { useTournament } from './hooks/useTournament'; // Importa o custom hook
import GroupStageView from './components/GroupStageView';
import KnockoutBracketView from './components/KnockoutBracketView';
<link rel="apple-touch-icon" href="../src/logos/Club World Cup 25 Fifa.png" />
// initialData e a função calculateStandingsForGroup não são mais necessários aqui

function App() {
  // Usa o hook para obter o estado e os handlers
  const {
    // teams, // Descomente se precisar da lista de times aqui
    groupsData,
    knockoutMatches,
    handleGroupScoreSubmit,
    handleKnockoutScoreSubmit
  } = useTournament();

  return (
    <div id="background-container"> {/* NOVO CONTAINER */}
      <div className="parallax-background-layer"></div> {/* CAMADA DO BACKGROUND PARALLAX */}

      <div className="tournament-dashboard">
        <h1>Mundial de Clubes FIFA 2025</h1>

        <GroupStageView
          allGroupsData={groupsData}
          onGroupScoreSubmit={handleGroupScoreSubmit}
        />
        <KnockoutBracketView
          knockoutMatches={knockoutMatches}
          onKnockoutScoreSubmit={handleKnockoutScoreSubmit}
        />
        <footer>
          OBS.: Horários de Brasília
          {/* Se você adicionar o resetTournament:
          <button onClick={resetTournament} style={{display: 'block', margin: '10px auto'}}>
            Resetar Torneio
          </button>
          */}
        </footer>
      </div>
    </div>
  );
}

export default App;