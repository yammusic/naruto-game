import { Scene } from 'phaser'

export class Boot extends Scene {
  constructor() {
    super('Boot')
  }

  preload() {
    this.load.image('background', 'assets/bg.jpeg')
  }

  create() {
    this.scene.start('Preloader')
  }
}
