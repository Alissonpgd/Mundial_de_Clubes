// initialData.js

export const teams = [
    { id: 'palmeiras', name: 'Palmeiras', logo: 'palmeiras.png' },
    { id: 'porto', name: 'Porto', logo: 'porto.png' },
    { id: 'al_ahly', name: 'Al Ahly', logo: 'al_ahly.png' },
    { id: 'inter_miami', name: 'Inter Miami', logo: 'inter_miami.png' },
    { id: 'botafogo', name: 'Botafogo', logo: 'botafogo.png' },
    { id: 'psg', name: 'Paris Saint-Germain', logo: 'psg.png' },
    { id: 'atletico_de_madrid', name: 'Atlético de Madrid', logo: 'atletico_madrid.png' },
    { id: 'seattle_sounders', name: 'Seattle Sounders', logo: 'seattle_sounders.png' },
    { id: 'bayern_de_munique', name: 'Bayern de Munique', logo: 'bayern_munich.png' },
    { id: 'benfica', name: 'Benfica', logo: 'benfica.png' },
    { id: 'boca_juniors', name: 'Boca Juniors', logo: 'boca_juniors.png' },
    { id: 'auckland_city', name: 'Auckland City', logo: 'auckland_city.png' },
    { id: 'flamengo', name: 'Flamengo', logo: 'flamengo.png' },
    { id: 'chelsea', name: 'Chelsea', logo: 'chelsea.png' },
    { id: 'esperance', name: 'Espérance', logo: 'esperance.png' },
    { id: 'los_angeles_fc', name: 'Los Angeles FC', logo: 'los_angeles_fc.png' },
    { id: 'river_plate', name: 'River Plate', logo: 'river_plate.png' },
    { id: 'inter_de_milao', name: 'Inter de Milão', logo: 'inter_milan.png' },
    { id: 'monterrey', name: 'Monterrey', logo: 'monterrey.png' },
    { id: 'urawa_red_diamonds', name: 'Urawa Red Diamonds', logo: 'urawa_red_diamonds.png' },
    { id: 'fluminense', name: 'Fluminense', logo: 'fluminense.png' },
    { id: 'borussia_dortmund', name: 'Borussia Dortmund', logo: 'borussia_dortmund.png' },
    { id: 'mamelodi_sundowns', name: 'Mamelodi Sundowns', logo: 'mamelodi_sundowns.png' },
    { id: 'ulsan_hd', name: 'Ulsan Hyundai', logo: 'ulsan_hyundai.png' },
    { id: 'juventus', name: 'Juventus', logo: 'juventus.png' },
    { id: 'manchester_city', name: 'Manchester City', logo: 'manchester_city.png' },
    { id: 'wydad_casablanca', name: 'Wydad Casablanca', logo: 'wydad_casablanca.png' },
    { id: 'al_ain', name: 'Al-Ain', logo: 'al_ain.png' },
    { id: 'rb_salzburg', name: 'RB Salzburg', logo: 'rb_salzburg.png' },
    { id: 'al_hilal', name: 'Al-Hilal', logo: 'al_hilal.png' },
    { id: 'real_madrid', name: 'Real Madrid', logo: 'real_madrid.png' },
    { id: 'pachuca', name: 'Pachuca', logo: 'pachuca.png' }
];

export const groups = {
    A: {
        name: 'Grupo A',
        teams: ['palmeiras', 'porto', 'al_ahly', 'inter_miami'],
        matches: [
            { id: 'GA_M1', round: 1, team1Id: 'al_ahly', team2Id: 'inter_miami', date: '14/06', time: '16H', venue: 'Rose Bowl (Pasadena)', score1: null, score2: null, played: false },
            { id: 'GA_M2', round: 1, team1Id: 'palmeiras', team2Id: 'porto', date: '14/06', time: '21H', venue: 'Hard Rock ST (Miami)', score1: null, score2: null, played: false },
            { id: 'GA_M3', round: 2, team1Id: 'palmeiras', team2Id: 'al_ahly', date: '17/06', time: '19H', venue: 'Rose Bowl (Pasadena)', score1: null, score2: null, played: false },
            { id: 'GA_M4', round: 2, team1Id: 'inter_miami', team2Id: 'porto', date: '17/06', time: '21H', venue: 'Hard Rock ST (Miami)', score1: null, score2: null, played: false },
            { id: 'GA_M5', round: 3, team1Id: 'inter_miami', team2Id: 'palmeiras', date: '23/06', time: '22H', venue: 'Rose Bowl (Pasadena)', score1: null, score2: null, played: false },
            { id: 'GA_M6', round: 3, team1Id: 'porto', team2Id: 'al_ahly', date: '23/06', time: '22H', venue: 'Hard Rock ST (Miami)', score1: null, score2: null, played: false },
        ]
    },
    B: {
        name: 'Grupo B',
        teams: ['botafogo', 'psg', 'atletico_de_madrid', 'seattle_sounders'],
        matches: [
            { id: 'GB_M1', round: 1, team1Id: 'psg', team2Id: 'atletico_de_madrid', date: '14/06', time: '19H', venue: 'MetLife Stadium (NY)', score1: null, score2: null, played: false },
            { id: 'GB_M2', round: 1, team1Id: 'botafogo', team2Id: 'seattle_sounders', date: '14/06', time: '21H', venue: 'Lumen Field (Seattle)', score1: null, score2: null, played: false },
            { id: 'GB_M3', round: 2, team1Id: 'seattle_sounders', team2Id: 'atletico_de_madrid', date: '17/06', time: '20H', venue: 'Lumen Field (Seattle)', score1: null, score2: null, played: false },
            { id: 'GB_M4', round: 2, team1Id: 'psg', team2Id: 'botafogo', date: '17/06', time: '21H', venue: 'MetLife Stadium (NY)', score1: null, score2: null, played: false },
            { id: 'GB_M5', round: 3, team1Id: 'seattle_sounders', team2Id: 'psg', date: '23/06', time: '16H', venue: 'Lumen Field (Seattle)', score1: null, score2: null, played: false },
            { id: 'GB_M6', round: 3, team1Id: 'atletico_de_madrid', team2Id: 'botafogo', date: '23/06', time: '16H', venue: 'MetLife Stadium (NY)', score1: null, score2: null, played: false },
        ]
    },
    C: {
        name: 'Grupo C',
        teams: ['bayern_de_munique', 'benfica', 'boca_juniors', 'auckland_city'],
        matches: [
            { id: 'GC_M1', round: 1, team1Id: 'bayern_de_munique', team2Id: 'auckland_city', date: '15/06', time: '17H', venue: 'Allianz Arena (Munique)', score1: null, score2: null, played: false },
            { id: 'GC_M2', round: 1, team1Id: 'boca_juniors', team2Id: 'benfica', date: '15/06', time: '20H', venue: 'La Bombonera (Buenos Aires)', score1: null, score2: null, played: false },
            { id: 'GC_M3', round: 2, team1Id: 'benfica', team2Id: 'auckland_city', date: '18/06', time: '18H', venue: 'Estádio da Luz (Lisboa)', score1: null, score2: null, played: false },
            { id: 'GC_M4', round: 2, team1Id: 'bayern_de_munique', team2Id: 'boca_juniors', date: '18/06', time: '21H', venue: 'Allianz Arena (Munique)', score1: null, score2: null, played: false },
            { id: 'GC_M5', round: 3, team1Id: 'benfica', team2Id: 'bayern_de_munique', date: '24/06', time: '16H', venue: 'Estádio da Luz (Lisboa)', score1: null, score2: null, played: false },
            { id: 'GC_M6', round: 3, team1Id: 'auckland_city', team2Id: 'boca_juniors', date: '24/06', time: '16H', venue: 'Mount Smart Stadium (Auckland)', score1: null, score2: null, played: false },
        ]
    },
    D: {
        name: 'Grupo D',
        teams: ['flamengo', 'chelsea', 'esperance', 'los_angeles_fc'],
        matches: [
            { id: 'GD_M1', round: 1, team1Id: 'chelsea', team2Id: 'los_angeles_fc', date: '15/06', time: '19H', venue: 'Stamford Bridge (Londres)', score1: null, score2: null, played: false },
            { id: 'GD_M2', round: 1, team1Id: 'flamengo', team2Id: 'esperance', date: '15/06', time: '21H', venue: 'Maracanã (Rio de Janeiro)', score1: null, score2: null, played: false },
            { id: 'GD_M3', round: 2, team1Id: 'flamengo', team2Id: 'chelsea', date: '18/06', time: '20H', venue: 'Maracanã (Rio de Janeiro)', score1: null, score2: null, played: false },
            { id: 'GD_M4', round: 2, team1Id: 'los_angeles_fc', team2Id: 'esperance', date: '18/06', time: '22H', venue: 'Banc of California (LA)', score1: null, score2: null, played: false },
            { id: 'GD_M5', round: 3, team1Id: 'esperance', team2Id: 'chelsea', date: '24/06', time: '22H', venue: 'Tunis Arena (Tunísia)', score1: null, score2: null, played: false },
            { id: 'GD_M6', round: 3, team1Id: 'los_angeles_fc', team2Id: 'flamengo', date: '24/06', time: '22H', venue: 'Banc of California (LA)', score1: null, score2: null, played: false },
        ]
    },
    E: {
        name: 'Grupo E',
        teams: ['river_plate', 'inter_de_milao', 'monterrey', 'urawa_red_diamonds'],
        matches: [
            { id: 'GE_M1', round: 1, team1Id: 'river_plate', team2Id: 'urawa_red_diamonds', date: '15/06', time: '19H', venue: 'Monumental (Buenos Aires)', score1: null, score2: null, played: false },
            { id: 'GE_M2', round: 1, team1Id: 'monterrey', team2Id: 'inter_de_milao', date: '15/06', time: '21H', venue: 'Estadio BBVA (Monterrey)', score1: null, score2: null, played: false },
            { id: 'GE_M3', round: 2, team1Id: 'inter_de_milao', team2Id: 'urawa_red_diamonds', date: '18/06', time: '18H', venue: 'San Siro (Milão)', score1: null, score2: null, played: false },
            { id: 'GE_M4', round: 2, team1Id: 'river_plate', team2Id: 'monterrey', date: '18/06', time: '21H', venue: 'Monumental (Buenos Aires)', score1: null, score2: null, played: false },
            { id: 'GE_M5', round: 3, team1Id: 'inter_de_milao', team2Id: 'river_plate', date: '25/06', time: '22H', venue: 'San Siro (Milão)', score1: null, score2: null, played: false },
            { id: 'GE_M6', round: 3, team1Id: 'urawa_red_diamonds', team2Id: 'monterrey', date: '25/06', time: '22H', venue: 'Saitama Stadium (Japão)', score1: null, score2: null, played: false },
        ]
    },
    F: {
        name: 'Grupo F',
        teams: ['fluminense', 'borussia_dortmund', 'mamelodi_sundowns', 'ulsan_hd'],
        matches: [
            { id: 'GF_M1', round: 1, team1Id: 'fluminense', team2Id: 'borussia_dortmund', date: '15/06', time: '19H', venue: 'Maracanã (Rio de Janeiro)', score1: null, score2: null, played: false },
            { id: 'GF_M2', round: 1, team1Id: 'ulsan_hd', team2Id: 'mamelodi_sundowns', date: '15/06', time: '21H', venue: 'Ulsan Munsu Stadium (Coreia)', score1: null, score2: null, played: false },
            { id: 'GF_M3', round: 2, team1Id: 'mamelodi_sundowns', team2Id: 'borussia_dortmund', date: '18/06', time: '18H', venue: 'FNB Stadium (Joanesburgo)', score1: null, score2: null, played: false },
            { id: 'GF_M4', round: 2, team1Id: 'fluminense', team2Id: 'ulsan_hd', date: '18/06', time: '21H', venue: 'Maracanã (Rio de Janeiro)', score1: null, score2: null, played: false },
            { id: 'GF_M5', round: 3, team1Id: 'mamelodi_sundowns', team2Id: 'fluminense', date: '25/06', time: '16H', venue: 'FNB Stadium (Joanesburgo)', score1: null, score2: null, played: false },
            { id: 'GF_M6', round: 3, team1Id: 'borussia_dortmund', team2Id: 'ulsan_hd', date: '25/06', time: '16H', venue: 'Signal Iduna Park (Dortmund)', score1: null, score2: null, played: false },
        ]
    },
    G: {
        name: 'Grupo G',
        teams: ['juventus', 'manchester_city', 'wydad_casablanca', 'al_ain'],
        matches: [
            { id: 'GG_M1', round: 1, team1Id: 'manchester_city', team2Id: 'wydad_casablanca', date: '14/06', time: '19H', venue: 'Etihad Stadium (Manchester)', score1: null, score2: null, played: false },
            { id: 'GG_M2', round: 1, team1Id: 'al_ain', team2Id: 'juventus', date: '14/06', time: '21H', venue: 'Hazza Bin Zayed Stadium (Al Ain)', score1: null, score2: null, played: false },
            { id: 'GG_M3', round: 2, team1Id: 'juventus', team2Id: 'wydad_casablanca', date: '22/06', time: '13H', venue: 'Allianz Stadium (Turim)', score1: null, score2: null, played: false },
            { id: 'GG_M4', round: 2, team1Id: 'manchester_city', team2Id: 'al_ain', date: '22/06', time: '22H', venue: 'Etihad Stadium (Manchester)', score1: null, score2: null, played: false },
            { id: 'GG_M5', round: 3, team1Id: 'juventus', team2Id: 'manchester_city', date: '26/06', time: '16H', venue: 'Allianz Stadium (Turim)', score1: null, score2: null, played: false },
            { id: 'GG_M6', round: 3, team1Id: 'wydad_casablanca', team2Id: 'al_ain', date: '26/06', time: '16H', venue: 'Mohammed V Stadium (Casablanca)', score1: null, score2: null, played: false },
        ]
    },
    H: {
        name: 'Grupo H',
        teams: ['rb_salzburg', 'al_hilal', 'real_madrid', 'pachuca'],
        matches: [
            { id: 'GH_M1', round: 1, team1Id: 'real_madrid', team2Id: 'al_hilal', date: '15/06', time: '19H', venue: 'Santiago Bernabéu (Madri)', score1: null, score2: null, played: false },
            { id: 'GH_M2', round: 1, team1Id: 'pachuca', team2Id: 'rb_salzburg', date: '15/06', time: '21H', venue: 'Estadio Hidalgo (México)', score1: null, score2: null, played: false },
            { id: 'GH_M3', round: 2, team1Id: 'real_madrid', team2Id: 'pachuca', date: '22/06', time: '16H', venue: 'Santiago Bernabéu (Madri)', score1: null, score2: null, played: false },
            { id: 'GH_M4', round: 2, team1Id: 'rb_salzburg', team2Id: 'al_hilal', date: '22/06', time: '19H', venue: 'Red Bull Arena (Salzburgo)', score1: null, score2: null, played: false },
            { id: 'GH_M5', round: 3, team1Id: 'rb_salzburg', team2Id: 'real_madrid', date: '26/06', time: '22H', venue: 'Red Bull Arena (Salzburgo)', score1: null, score2: null, played: false },
            { id: 'GH_M6', round: 3, team1Id: 'al_hilal', team2Id: 'pachuca', date: '26/06', time: '22H', venue: 'King Fahd Stadium (Riade)', score1: null, score2: null, played: false },
        ]
    }
};

export const knockoutStages = [
    // Oitavas de Final
    { id: 'O1', stage: 'Oitavas', label: '1º GR A vs 2º GR B', date: '28/06', time: '13H', venue: 'Lincoln Financial Field (Filadélfia)', team1Placeholder: '1º GR A', team2Placeholder: '2º GR B', team1Id: null, team2Id: null, score1: null, score2: null, winnerId: null },
    { id: 'O2', stage: 'Oitavas', label: '1º GR C vs 2º GR D', date: '28/06', time: '17H', venue: 'Bank of America ST (Charlotte)', team1Placeholder: '1º GR C', team2Placeholder: '2º GR D', team1Id: null, team2Id: null, score1: null, score2: null, winnerId: null },
    { id: 'O3', stage: 'Oitavas', label: '1º GR E vs 2º GR F', date: '29/06', time: '13H', venue: 'SoFi Stadium (Los Angeles)', team1Placeholder: '1º GR E', team2Placeholder: '2º GR F', team1Id: null, team2Id: null, score1: null, score2: null, winnerId: null },
    { id: 'O4', stage: 'Oitavas', label: '1º GR G vs 2º GR H', date: '29/06', time: '17H', venue: 'Mercedes-Benz Stadium (Atlanta)', team1Placeholder: '1º GR G', team2Placeholder: '2º GR H', team1Id: null, team2Id: null, score1: null, score2: null, winnerId: null },
    { id: 'O5', stage: 'Oitavas', label: '1º GR B vs 2º GR A', date: '30/06', time: '13H', venue: 'NRG Stadium (Houston)', team1Placeholder: '1º GR B', team2Placeholder: '2º GR A', team1Id: null, team2Id: null, score1: null, score2: null, winnerId: null },
    { id: 'O6', stage: 'Oitavas', label: '1º GR D vs 2º GR C', date: '30/06', time: '17H', venue: 'Gillette Stadium (Boston)', team1Placeholder: '1º GR D', team2Placeholder: '2º GR C', team1Id: null, team2Id: null, score1: null, score2: null, winnerId: null },
    { id: 'O7', stage: 'Oitavas', label: '1º GR F vs 2º GR E', date: '01/07', time: '13H', venue: 'Levi’s Stadium (San Francisco)', team1Placeholder: '1º GR F', team2Placeholder: '2º GR E', team1Id: null, team2Id: null, score1: null, score2: null, winnerId: null },
    { id: 'O8', stage: 'Oitavas', label: '1º GR H vs 2º GR G', date: '01/07', time: '17H', venue: 'MetLife Stadium (Nova York)', team1Placeholder: '1º GR H', team2Placeholder: '2º GR G', team1Id: null, team2Id: null, score1: null, score2: null, winnerId: null },

    // Quartas de Final
    { id: 'Q1', stage: 'Quartas', label: 'Vencedor O1 vs Vencedor O2', date: '04/07', time: '22H', venue: 'Lincoln Financial Field (Filadélfia)', team1Placeholder: 'Vencedor O1', team2Placeholder: 'Vencedor O2', team1Id: null, team2Id: null, score1: null, score2: null, winnerId: null },
    { id: 'Q2', stage: 'Quartas', label: 'Vencedor O3 vs Vencedor O4', date: '05/07', time: '18H', venue: 'SoFi Stadium (Los Angeles)', team1Placeholder: 'Vencedor O3', team2Placeholder: 'Vencedor O4', team1Id: null, team2Id: null, score1: null, score2: null, winnerId: null },
    { id: 'Q3', stage: 'Quartas', label: 'Vencedor O5 vs Vencedor O6', date: '06/07', time: '18H', venue: 'Gillette Stadium (Boston)', team1Placeholder: 'Vencedor O5', team2Placeholder: 'Vencedor O6', team1Id: null, team2Id: null, score1: null, score2: null, winnerId: null },
    { id: 'Q4', stage: 'Quartas', label: 'Vencedor O7 vs Vencedor O8', date: '06/07', time: '21H', venue: 'Levi’s Stadium (San Francisco)', team1Placeholder: 'Vencedor O7', team2Placeholder: 'Vencedor O8', team1Id: null, team2Id: null, score1: null, score2: null, winnerId: null },

    // Semifinais
    { id: 'S1', stage: 'Semifinal', label: 'Vencedor Q1 vs Vencedor Q2', date: '09/07', time: '20H', venue: 'MetLife Stadium (Nova York)', team1Placeholder: 'Vencedor Q1', team2Placeholder: 'Vencedor Q2', team1Id: null, team2Id: null, score1: null, score2: null, winnerId: null },
    { id: 'S2', stage: 'Semifinal', label: 'Vencedor Q3 vs Vencedor Q4', date: '10/07', time: '20H', venue: 'Mercedes-Benz Stadium (Atlanta)', team1Placeholder: 'Vencedor Q3', team2Placeholder: 'Vencedor Q4', team1Id: null, team2Id: null, score1: null, score2: null, winnerId: null },

    // Final
    { id: 'F1', stage: 'Final', label: 'Vencedor S1 vs Vencedor S2', date: '14/07', time: '21H', venue: 'Rose Bowl (Pasadena)', team1Placeholder: 'Vencedor S1', team2Placeholder: 'Vencedor S2', team1Id: null, team2Id: null, score1: null, score2: null, winnerId: null }
];

// Helper para buscar nome do time pelo ID
export const getTeamName = (teamId) => {
    const team = teams.find(t => t.id === teamId);
    return team ? team.name : 'Time indefinido';
};