import { Physics } from 'phaser'
import type { Scene } from 'phaser'

import { GAME_GRAVITY } from '@/domain/constants/game'

export class Naruto extends Physics.Arcade.Sprite {
  framRate: number = 8
  movementVelocity: number = 300
  jumpVelocity: number = 400
  isRunning: boolean = false
  isJumping: boolean = false

  constructor(scene: Scene, x: number, y: number, name: string = 'naruto') {
    super(scene, x, y, name)

    scene.add.existing(this)
    scene.physics.add.existing(this)
    scene.physics.world.enable(this)

    this.setCollideWorldBounds(true)
    this.animations()
  }

  static preload(scene: Scene, frameSize = 90) {
    scene.load.spritesheet('naruto', '/assets/sprites/naruto/basic.png', {
      frameWidth: frameSize,
      frameHeight: frameSize,
      margin: 2,
    })
  }

  animations() {
    this.anims.create({
      key: 'init',
      frames: this.anims.generateFrameNumbers('naruto', { frames: [0, 1, 2, 3, 4, 5] }),
      frameRate: this.framRate,
    })

    this.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNumbers('naruto', { frames: [5, 6, 7, 8] }),
      frameRate: this.framRate,
      repeat: -1,
    })

    this.anims.create({
      key: 'run',
      frames: this.anims.generateFrameNumbers('naruto', { frames: [11, 12, 13, 14, 15, 16] }),
      frameRate: this.framRate,
      repeat: -1,
    })

    this.anims.create({
      key: 'jump',
      frames: this.anims.generateFrameNumbers('naruto', { frames: [17, 18, 19] }),
      frameRate: this.framRate,
    })
  }

  startAnimation() {
    this.play('init')

    this.on('animationcomplete-init', () => {
      this.play('idle')
    })
  }

  stopAnimation() {
    this.stop()
  }

  enableGravity() {
    this.setVelocityY(GAME_GRAVITY)
  }

  disableGravity() {
    this.setVelocityY(0)
  }

  moveLeft() {
    if (!this.isRunning) {
      this.play('run')
      this.isRunning = true
    }
    this.setVelocityX(-this.movementVelocity)
    this.flipX = true
  }

  moveRight() {
    if (!this.isRunning) {
      this.play('run')
      this.isRunning = true
    }
    this.setVelocityX(this.movementVelocity)
    this.flipX = false
  }

  jump() {
    if (!this.isJumping) {
      // this.setVelocityY(this.jumpVelocity)
      this.play('jump')
      this.isJumping = true
      // this.enableGravity()
    }
  }

  stopMovement() {
    if (this.isRunning) {
      this.play('idle')
      this.isRunning = false
    }
    this.setVelocityX(0)
  }

  update() {
    if (this.body?.blocked.down) {
      this.isJumping = false
      // this.disableGravity()
    }
  }
}
