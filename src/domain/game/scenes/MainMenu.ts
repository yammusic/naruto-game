import type { GameObjects, Tweens, Types } from 'phaser'
import { Scene } from 'phaser'

import { EventBus } from '../EventBus'
import { Naruto } from '../entities/Naruto'

const SCALE = 2
export const NARUTO_FRAME_SIZE = 90

export class MainMenu extends Scene {
  naruto: Naruto
  background: GameObjects.Image
  logo: GameObjects.Image
  title: GameObjects.Text
  logoTween: Tweens.Tween | null
  controls?: Types.Input.Keyboard.CursorKeys

  constructor() {
    super('MainMenu')
  }

  preload() {
    Naruto.preload(this)
  }

  create() {
    this.logoTween = null
    this.background = this.add.image(512, 384, 'background')
    this.logo = this.add.image(512, 160, 'logo').setDepth(100)

    this.title = this.add.text(512, 460, 'Main Menu', {
      fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
      stroke: '#000000', strokeThickness: 8,
      align: 'center'
    }).setOrigin(0.5).setDepth(100)

    this.naruto = new Naruto(this, 512, 384, 'naruto')
    this.naruto.setScale(SCALE)
    this.naruto.startAnimation()

    this.controls = this.input?.keyboard?.createCursorKeys()

    EventBus.emit('current-scene-ready', this)
  }

  changeScene() {
    if (this.logoTween) {
      this.logoTween.stop()
      this.logoTween = null
    }

    this.scene.start('Game')
  }

  update() {
    if (this.controls) {
      const { left, right, up } = this.controls

      if (left.isDown) {
        this.naruto.moveLeft()
      } else if (right.isDown) {
        this.naruto.moveRight()
      } else {
        this.naruto.stopMovement()
      }

      if (up.isDown) {
        // this.naruto.jump()
      }

      this.naruto.update()
    }
  }

  moveLogo(vueCallback: ({ x, y }: { x: number, y: number }) => void) {
    if (this.logoTween) {
      if (this.logoTween.isPlaying()) {
        this.logoTween.pause()
      }
      else {
        this.logoTween.play()
      }
    }
    else {
      this.logoTween = this.tweens.add({
        targets: this.logo,
        x: { value: 750, duration: 3000, ease: 'Back.easeInOut' },
        y: { value: 80, duration: 1500, ease: 'Sine.easeOut' },
        yoyo: true,
        repeat: -1,
        onUpdate: () => {
          if (vueCallback) {
            vueCallback({
              x: Math.floor(this.logo.x),
              y: Math.floor(this.logo.y)
            })
          }
        }
      })
    }
  }
}
