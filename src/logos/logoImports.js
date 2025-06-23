// src/logos/logoImports.js

// --- Importe cada logo individualmente ---
// Certifique-se de que os nomes dos arquivos aqui correspondem EXATAMENTE aos nomes na sua pasta /src/logos/
// E que a extensão (.png) está correta.

import alAhlyLogo from './Al Ahly (EGI).png';
import alAinLogo from './Al_Ain_FC.png'; // Supondo que você renomeou para um nome mais simples, ou use o nome exato do arquivo
import alHilalLogo from './Al-Hilal (ARA).png';
import atleticoDeMadridLogo from './Atlético de Madrid (ESP).png';
import aucklandCityLogo from './Auckland City (NZE).png';
import bayernDeMuniqueLogo from './Bayern de Munique (ALE).png';
import benficaLogo from './Benfica (POR).png';
import bocaJuniorsLogo from './Boca Juniors (ARG).png';
import borussiaDortmundLogo from './Borussia Dortmund (ALE).png';
import botafogoLogo from './Botafogo (BRA).png';
import chelseaLogo from './Chelsea (ING).png';
import esperanceLogo from './Espérance (TUN).png'; // Atenção ao acento se estiver no nome do arquivo
import flamengoLogo from './Flamengo (BRA).png';
import fluminenseLogo from './Fluminense (BRA).png';
import interDeMilaoLogo from './Inter de Milão (ITA).png'; // Atenção ao acento
import interMiamiLogo from './Inter Miami (EUA).png';
import juventusLogo from './Juventus (ITA).png'; // Supondo que este é o nome do arquivo para Juventus
import losAngelesFcLogo from './Los Angeles FC (EUA).png';
import mamelodiSundownsLogo from './Mamelodi Sundowns (AFS).png';
import manchesterCityLogo from './Manchester City (ING).png';
import monterreyLogo from './Monterrey (MEX).png';
import pachucaLogo from './Pachuca (MEX).png';
import palmeirasLogo from './Palmeiras (BRA).png';
import psgLogo from './Paris Saint-Germain (PSG) (FRA).png';
import portoLogo from './Porto (POR).png';
import rbSalzburgLogo from './RB Salzburg (AUT).png';
import realMadridLogo from './Real Madrid (ESP).png';
import riverPlateLogo from './River Plate (ARG).png';
import seattleSoundersLogo from './Seattle Sounders (EUA).png';
import ulsanHdLogo from './Ulsan Hyundai (COR).png'; // Corresponde ao ID 'ulsan_hd'
import urawaRedDiamondsLogo from './Urawa Red Diamonds (JAP).png';
import wydadCasablancaLogo from './Wydad Casablanca (MAR).png';

// --- Crie um objeto que mapeia o ID do time (do initialData.js) para o logo importado ---
// !! AS CHAVES AQUI (ex: 'al_ahly') DEVEM CORRESPONDER AOS IDs USADOS NO SEU initialData.js !!
const teamLogos = {
    // Grupo A
    'palmeiras': palmeirasLogo,
    'porto': portoLogo,
    'al_ahly': alAhlyLogo,
    'inter_miami': interMiamiLogo,

    // Grupo B
    'botafogo': botafogoLogo,
    'psg': psgLogo, // Supondo que o ID em initialData.js é 'psg'
    'atletico_de_madrid': atleticoDeMadridLogo, // Supondo ID 'atletico_de_madrid'
    'seattle_sounders': seattleSoundersLogo, // Supondo ID 'seattle_sounders'

    // Grupo C
    'bayern_de_munique': bayernDeMuniqueLogo, // Supondo ID 'bayern_de_munique'
    'benfica': benficaLogo,
    'boca_juniors': bocaJuniorsLogo,
    'auckland_city': aucklandCityLogo,

    // Grupo D
    'flamengo': flamengoLogo,
    'chelsea': chelseaLogo,
    'esperance': esperanceLogo, // Supondo ID 'esperance'
    'los_angeles_fc': losAngelesFcLogo,

    // Grupo E
    'river_plate': riverPlateLogo, // Supondo ID 'river_plate'
    'inter_de_milao': interDeMilaoLogo, // Supondo ID 'inter_de_milao'
    'monterrey': monterreyLogo,
    'urawa_red_diamonds': urawaRedDiamondsLogo,

    // Grupo F
    'fluminense': fluminenseLogo,
    'borussia_dortmund': borussiaDortmundLogo,
    'mamelodi_sundowns': mamelodiSundownsLogo,
    'ulsan_hd': ulsanHdLogo, // ID 'ulsan_hd'

    // Grupo G
    'juventus': juventusLogo, // Supondo que o ID no initialData é 'juventus'
    'manchester_city': manchesterCityLogo,
    'wydad_casablanca': wydadCasablancaLogo,
    'al_ain': alAinLogo, // Supondo que o ID no initialData é 'al_ain'

    // Grupo H
    'rb_salzburg': rbSalzburgLogo,
    'al_hilal': alHilalLogo,
    'real_madrid': realMadridLogo,
    'pachuca': pachucaLogo,
};

// --- Função Helper para obter o logo ---
export const getTeamLogoById = (teamId) => {
    const logo = teamLogos[teamId];
    if (!logo) {
        // console.warn(`Logo não encontrado para o ID: ${teamId}. Verifique o mapeamento em logoImports.js e os IDs em initialData.js.`);
        // Você pode retornar um logo placeholder aqui se tiver um
        // import placeholderLogo from './placeholder.png';
        // return placeholderLogo;
        return null; // Ou null se preferir não mostrar nada
    }
    return logo;
};

// Opcional: exportar o objeto inteiro se precisar dele em outro lugar
export default teamLogos;