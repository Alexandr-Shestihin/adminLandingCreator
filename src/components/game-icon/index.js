import React from "react";

import noImage from '../../img/no-image.png';
import apexLegends from '../../img/games/apex-legends.png';
import arenaOfValor from '../../img/games/arena-of-valor.png';
import asphalt from '../../img/games/asphalt.png';
import assetoCorsaCompetitzione from '../../img/games/asseto-corsa-competitzione.png';
import assettoCorsa from '../../img/games/assetto-corsa.png';
import brawlStars from '../../img/games/brawl-stars.png';
import clashRoyale from '../../img/games/clash-royale.png';
import codMobile from '../../img/games/cod-mobile.png';
import codModernWarfare from '../../img/games/cod-modern-warfare.png';
import codWarzone from '../../img/games/cod-warzone.png';
import dirtRally from '../../img/games/dirt-rally.png';
import f1 from '../../img/games/f1.png';
import fifa20 from '../../img/games/fifa-20.png';
import fortnite from '../../img/games/fortnite.png';
import forzaMotorsport7 from '../../img/games/forza-motorsport-7.png';
import hearthstone from '../../img/games/hearthstone.png';
import iracing from '../../img/games/iracing.png';
import leagueOfLegends from '../../img/games/league-of-legends.png';
import liveForSpeed from '../../img/games/live-for-speed.png';
import mortalKombat11 from '../../img/games/mortal-kombat-11.png';
import needForSpeedShift from '../../img/games/need-for-speed-shift.png';
import pes from '../../img/games/pes.png';
import pesMobile from '../../img/games/pes-mobile.png';
import projectCars from '../../img/games/project-cars.png';
import pubgMobile from '../../img/games/pubg-mobile.png';
import raceDriverGrid from '../../img/games/race-driver-grid.png';
import realRacing from '../../img/games/real-racing.png';
import rfactor from '../../img/games/rfactor.png';
import rocketLeague from '../../img/games/rocket-league.png';
import streetFighterV from '../../img/games/street-fighter-v.png';
import tekken7 from '../../img/games/tekken-7.png';
import valorant from '../../img/games/valorant.png';
import dota2 from '../../img/games/dota2.png';
import csGo from '../../img/games/cs-go.png';


const GameIcon = ({gameKey = null}) => {
    switch (gameKey) {
        case 'apex-legends':
            return <img src={apexLegends} alt="apex-legends" />
        case 'arena-of-valor':
            return <img src={arenaOfValor} alt="arena-of-valor" />
        case 'asphalt':
            return <img src={asphalt} alt="asphalt" />
        case 'asseto-corsa-competitzione':
            return <img src={assetoCorsaCompetitzione} alt="asseto-corsa-competitzione" />
        case 'assetto-corsa':
            return <img src={assettoCorsa} alt="assetto-corsa" />
        case 'brawl-stars':
            return <img src={brawlStars} alt="brawl-stars" />
        case 'clash-royale':
            return <img src={clashRoyale} alt="clash-royale" />
        case 'cod-mobile':
            return <img src={codMobile} alt="cod-mobile" />
        case 'cod-modern-warfare':
            return <img src={codModernWarfare} alt="cod-modern-warfare" />
        case 'cod-warzone':
            return <img src={codWarzone} alt="cod-warzone" />
        case 'dirt-rally':
            return <img src={dirtRally} alt="dirt-rally" />
        case 'f1':
            return <img src={f1} alt="f1" />
        case 'fifa-20':
            return <img src={fifa20} alt="fifa-20" />
        case 'fortnite':
            return <img src={fortnite} alt="fortnite" />
        case 'forza-motorsport-7':
            return <img src={forzaMotorsport7} alt="forza-motorsport-7" />
        case 'hearthstone':
            return <img src={hearthstone} alt="hearthstone" />
        case 'iracing':
            return <img src={iracing} alt="iracing" />
        case 'league-of-legends':
            return <img src={leagueOfLegends} alt="league-of-legends" />
        case 'live-for-speed':
            return <img src={liveForSpeed} alt="live-for-speed" />
        case 'mortal-kombat-11':
            return <img src={mortalKombat11} alt="mortal-kombat-11" />
        case 'need-for-speed-shift':
            return <img src={needForSpeedShift} alt="need-for-speed-shift" />
        case 'pes':
            return <img src={pes} alt="pes" />
        case 'pes-mobile':
            return <img src={pesMobile} alt="pes-mobile" />
        case 'project-cars':
            return <img src={projectCars} alt="project-cars" />
        case 'pubg-mobile':
            return <img src={pubgMobile} alt="pubg-mobile" />
        case 'race-driver-grid':
            return <img src={raceDriverGrid} alt="race-driver-grid" />
        case 'real-racing':
            return <img src={realRacing} alt="real-racing" />
        case 'rfactor':
            return <img src={rfactor} alt="rfactor" />
        case 'rocket-league':
            return <img src={rocketLeague} alt="rocket-league" />
        case 'street-fighter-v':
            return <img src={streetFighterV} alt="street-fighter-v" />
        case 'tekken-7':
            return <img src={tekken7} alt="tekken-7" />
        case 'valorant':
            return <img src={valorant} alt="valorant" />
        case 'dota2':
            return <img src={dota2} alt="dota2" />
        case 'cs-go':
            return <img src={csGo} alt="cs-go" />
        default:
            return <img src={noImage} alt="missed" />
    }
}

export default GameIcon