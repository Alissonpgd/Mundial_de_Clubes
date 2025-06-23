// src/hooks/useTournament.js
import { useState, useEffect, useCallback } from 'react';
import {
    groups as initialGroupsDataStructure, // Renomeado para clareza
    knockoutStages as initialKnockoutStagesStructure, // Renomeado para clareza
    teams as initialTeams
} from '../data/initialData';

// Chaves para o localStorage
const LOCAL_STORAGE_KEYS = {
    GROUPS_DATA: 'mundialClubes2025_groupsData',
    KNOCKOUT_MATCHES: 'mundialClubes2025_knockoutMatches',
};

// Função de cálculo de classificação (mantida como antes)
const calculateStandingsForGroup = (groupMatches, groupTeamIds) => {
    // ... (seu código de calculateStandingsForGroup aqui, sem alterações)
    const standingsMap = new Map();

    groupTeamIds.forEach(teamId => {
        standingsMap.set(teamId, {
            teamId,
            played: 0,
            wins: 0,
            draws: 0,
            losses: 0,
            goalsFor: 0,
            goalsAgainst: 0,
            goalDifference: 0,
            points: 0,
        });
    });

    groupMatches.forEach(match => {
        if (match.played && typeof match.score1 === 'number' && typeof match.score2 === 'number') {
            const team1Stats = standingsMap.get(match.team1Id);
            const team2Stats = standingsMap.get(match.team2Id);

            if (!team1Stats || !team2Stats) {
                console.warn(`Time não encontrado no grupo para o jogo: ${match.id}`);
                return;
            }

            team1Stats.played++;
            team2Stats.played++;
            team1Stats.goalsFor += match.score1;
            team1Stats.goalsAgainst += match.score2;
            team2Stats.goalsFor += match.score2;
            team2Stats.goalsAgainst += match.score1;

            if (match.score1 > match.score2) {
                team1Stats.wins++;
                team1Stats.points += 3;
                team2Stats.losses++;
            } else if (match.score2 > match.score1) {
                team2Stats.wins++;
                team2Stats.points += 3;
                team1Stats.losses++;
            } else {
                team1Stats.draws++;
                team2Stats.draws++;
                team1Stats.points += 1;
                team2Stats.points += 1;
            }
        }
    });

    const standingsArray = Array.from(standingsMap.values());
    standingsArray.forEach(team => {
        team.goalDifference = team.goalsFor - team.goalsAgainst;
    });

    standingsArray.sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference;
        if (b.goalsFor !== a.goalsFor) return b.goalsFor - a.goalsFor;
        return a.teamId.localeCompare(b.teamId);
    });

    return standingsArray;
};


export const useTournament = () => {
    const [teams] = useState(initialTeams);

    // 1. CARREGAR DADOS DO LOCALSTORAGE OU USAR VALORES INICIAIS
    const [groupsData, setGroupsData] = useState(() => {
        const savedGroupsData = localStorage.getItem(LOCAL_STORAGE_KEYS.GROUPS_DATA);
        if (savedGroupsData) {
            try {
                return JSON.parse(savedGroupsData);
            } catch (e) {
                console.error("Erro ao parsear groupsData do localStorage", e);
                // Se houver erro, cair para o estado inicial
            }
        }
        // Se não houver nada salvo, inicialize com a estrutura base
        const initializedGroups = {};
        for (const groupKey in initialGroupsDataStructure) {
            const group = initialGroupsDataStructure[groupKey];
            initializedGroups[groupKey] = {
                ...group, // Inclui nome, times, e a ESTRUTURA dos matches
                // As classificações e os scores dos matches serão carregados ou estarão nulos
                // Se precisar recalcular standings aqui ao carregar pela primeira vez sem dados salvos:
                standings: calculateStandingsForGroup(group.matches, group.teams)
            };
        }
        return initializedGroups;
    });

    const [knockoutMatches, setKnockoutMatches] = useState(() => {
        const savedKnockoutMatches = localStorage.getItem(LOCAL_STORAGE_KEYS.KNOCKOUT_MATCHES);
        if (savedKnockoutMatches) {
            try {
                return JSON.parse(savedKnockoutMatches);
            } catch (e) {
                console.error("Erro ao parsear knockoutMatches do localStorage", e);
            }
        }
        return initialKnockoutStagesStructure; // Estrutura inicial se nada salvo
    });

    // 2. SALVAR groupsData NO LOCALSTORAGE SEMPRE QUE MUDAR
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEYS.GROUPS_DATA, JSON.stringify(groupsData));
        console.log("groupsData salvo no localStorage");
    }, [groupsData]);

    // 3. SALVAR knockoutMatches NO LOCALSTORAGE SEMPRE QUE MUDAR
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEYS.KNOCKOUT_MATCHES, JSON.stringify(knockoutMatches));
        console.log("knockoutMatches salvo no localStorage");
    }, [knockoutMatches]);


    // Funções de manipulação (handleGroupScoreSubmit, etc.) permanecem as mesmas
    const handleGroupScoreSubmit = useCallback((groupKey, matchId, score1, score2) => {
        setGroupsData(prevGroupsData => {
            // ... (lógica existente, já deve estar correta)
            const updatedGroups = { ...prevGroupsData };
            const groupToUpdate = { ...updatedGroups[groupKey] };
            groupToUpdate.matches = groupToUpdate.matches.map(m =>
                m.id === matchId ? { ...m, score1, score2, played: true } : m
            );
            groupToUpdate.standings = calculateStandingsForGroup(groupToUpdate.matches, groupToUpdate.teams);
            updatedGroups[groupKey] = groupToUpdate;
            return updatedGroups;
        });
    }, []);

    // Efeito para preencher o mata-mata (permanece o mesmo)
    useEffect(() => {
        // ... (lógica existente para preencher oitavas)
        const allGroupsFinished = Object.values(groupsData).every(group =>
            group.matches.every(match => match.played)
        );

        if (allGroupsFinished) {
            setKnockoutMatches(prevKnockout => {
                let updatedKnockout = [...prevKnockout];
                const getTeamForPlaceholder = (placeholder) => {
                    if (!placeholder) return null;
                    const parts = placeholder.split(' ');
                    if (parts.length < 3) return null;
                    const position = parseInt(parts[0], 10);
                    const groupKey = parts[2];
                    if (groupsData[groupKey] && groupsData[groupKey].standings.length >= position) {
                        return groupsData[groupKey].standings[position - 1].teamId;
                    }
                    return null;
                };

                updatedKnockout = updatedKnockout.map(match => {
                    if (match.stage === 'Oitavas' && (!match.team1Id || !match.team2Id)) {
                        const team1Id = getTeamForPlaceholder(match.team1Placeholder);
                        const team2Id = getTeamForPlaceholder(match.team2Placeholder);
                        if (team1Id && team2Id) {
                            // Só atualiza se o ID não for igual ao placeholder para evitar loops desnecessários
                            // e garantir que só atualizamos uma vez ou se os times realmente mudarem.
                            if (match.team1Id !== team1Id || match.team2Id !== team2Id) {
                                return { ...match, team1Id, team2Id };
                            }
                        }
                    }
                    return match;
                });
                return updatedKnockout;
            });
        }
    }, [groupsData]); // A dependência groupsData já dispara isso corretamente


    const handleKnockoutScoreSubmit = useCallback((matchId, score1, score2) => {
        setKnockoutMatches(prevMatches => {
            // ... (lógica existente para salvar placar e avançar vencedor)
            let updatedMatches = prevMatches.map(m => {
                if (m.id === matchId) {
                    if (!m.team1Id || !m.team2Id) {
                        alert("Os times para esta partida ainda não foram definidos.");
                        return m;
                    }
                    let winnerId = null;
                    if (score1 > score2) winnerId = m.team1Id;
                    else if (score2 > score1) winnerId = m.team2Id;
                    else {
                        console.warn(`Jogo ${matchId} terminou empatado. Implementar lógica de desempate.`);
                    }
                    return { ...m, score1, score2, played: true, winnerId };
                }
                return m;
            });

            const currentMatch = updatedMatches.find(m => m.id === matchId);
            if (currentMatch && currentMatch.played && currentMatch.winnerId) {
                updatedMatches = updatedMatches.map(nextMatch => {
                    let matchWasUpdated = false; // Flag para saber se o nextMatch foi modificado
                    let tempNextMatch = { ...nextMatch }; // Começa com uma cópia para modificação

                    if (tempNextMatch.team1Placeholder === `Vencedor ${currentMatch.id}` && tempNextMatch.team1Id !== currentMatch.winnerId) {
                        tempNextMatch.team1Id = currentMatch.winnerId;
                        matchWasUpdated = true;
                    }
                    if (tempNextMatch.team2Placeholder === `Vencedor ${currentMatch.id}` && tempNextMatch.team2Id !== currentMatch.winnerId) {
                        tempNextMatch.team2Id = currentMatch.winnerId;
                        matchWasUpdated = true;
                    }
                    return matchWasUpdated ? tempNextMatch : nextMatch; // Retorna a cópia modificada ou o original
                });
            }
            return updatedMatches;
        });
    }, []); // Adicionar dependências se houver (ex: se usar algo de fora do hook diretamente)

    return {
        teams,
        groupsData,
        knockoutMatches,
        handleGroupScoreSubmit,
        handleKnockoutScoreSubmit,
        // Adicionar uma função de reset se quiser
    };
};