import { AUTO, Game } from 'phaser'

// Scenes
import { Boot } from './scenes/Boot'
import { Preloader } from './scenes/Preloader'
import { MainMenu } from './scenes/MainMenu'
import { Game as MainGame } from './scenes/Game'
import { GameOver } from './scenes/GameOver'

import {
  GAME_BACKGROUND,
  GAME_CONTAINER_ID,
  GAME_GRAVITY,
  GAME_HEIGHT,
  GAME_WIDTH,
} from '../constants/game'

const config: Phaser.Types.Core.GameConfig = {
  type: AUTO,
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  parent: GAME_CONTAINER_ID,
  backgroundColor: GAME_BACKGROUND,
  scene: [
    Boot,
    Preloader,
    MainMenu,
    MainGame,
    GameOver
  ],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 0,
        x: 0,
      },
    }
  }
}

const StartGame = (parent: string) => new Game({ ...config, parent })
export default StartGame
