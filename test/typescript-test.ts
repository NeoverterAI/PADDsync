/**
 * Comprehensive TypeScript Integration Test for PADDsync
 * This file tests that all major PADDsync APIs are correctly typed
 */

/// <reference path="../types/paddsync.d.ts" />

// Test 1: Basic Game Configuration
const gameConfig: PADDsync.Types.Core.GameConfig = {
    type: PADDsync.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'game-container',
    scene: {
        preload: function() {
            console.log('Preload');
        },
        create: function() {
            console.log('Create');
        },
        update: function(time: number, delta: number) {
            console.log('Update', time, delta);
        }
    }
};

// Test 2: Physics Configuration
const physicsConfig: PADDsync.Types.Core.GameConfig = {
    type: PADDsync.WEBGL,
    width: 1024,
    height: 768,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { x: 0, y: 300 },
            debug: false
        }
    }
};

// Test 3: Scene Class
class TestScene extends PADDsync.Scene {
    private player?: PADDsync.GameObjects.Sprite;
    private cursors?: PADDsync.Types.Input.Keyboard.CursorKeys;
    private score: number = 0;
    private scoreText?: PADDsync.GameObjects.Text;

    constructor() {
        super({ key: 'TestScene' });
    }

    preload(): void {
        this.load.image('logo', 'assets/logo.png');
        this.load.spritesheet('player', 'assets/player.png', {
            frameWidth: 32,
            frameHeight: 48
        });
    }

    create(): void {
        // Add sprite
        this.player = this.add.sprite(400, 300, 'player');
        this.player.setScale(2);

        // Add physics
        if (this.physics) {
            this.physics.add.existing(this.player);
        }

        // Add text
        this.scoreText = this.add.text(16, 16, 'Score: 0', {
            fontSize: '32px',
            color: '#fff'
        });

        // Add input
        if (this.input.keyboard) {
            this.cursors = this.input.keyboard.createCursorKeys();
        }

        // Add animation
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
    }

    update(time: number, delta: number): void {
        if (this.player && this.cursors) {
            if (this.cursors.left.isDown) {
                this.player.x -= 5;
            } else if (this.cursors.right.isDown) {
                this.player.x += 5;
            }
        }
    }
}

// Test 4: Game Objects
function testGameObjects(scene: PADDsync.Scene): void {
    // Sprite
    const sprite: PADDsync.GameObjects.Sprite = scene.add.sprite(100, 100, 'logo');

    // Image
    const image: PADDsync.GameObjects.Image = scene.add.image(200, 200, 'logo');

    // Text
    const text: PADDsync.GameObjects.Text = scene.add.text(300, 300, 'Hello PADDsync', {
        fontSize: '24px',
        color: '#ffffff'
    });

    // Graphics
    const graphics: PADDsync.GameObjects.Graphics = scene.add.graphics();
    graphics.fillStyle(0xff0000, 1);
    graphics.fillCircle(400, 400, 50);

    // Container
    const container: PADDsync.GameObjects.Container = scene.add.container(500, 500);
    container.add([sprite, image, text]);

    // TileSprite
    const tileSprite: PADDsync.GameObjects.TileSprite = scene.add.tileSprite(
        100, 100, 800, 600, 'logo'
    );
}

// Test 5: Geometry
function testGeometry(): void {
    // Point
    const point: PADDsync.Geom.Point = new PADDsync.Geom.Point(10, 20);

    // Rectangle
    const rect: PADDsync.Geom.Rectangle = new PADDsync.Geom.Rectangle(0, 0, 100, 100);

    // Circle
    const circle: PADDsync.Geom.Circle = new PADDsync.Geom.Circle(50, 50, 25);

    // Line
    const line: PADDsync.Geom.Line = new PADDsync.Geom.Line(0, 0, 100, 100);

    // Polygon
    const polygon: PADDsync.Geom.Polygon = new PADDsync.Geom.Polygon([
        { x: 0, y: 0 },
        { x: 100, y: 0 },
        { x: 50, y: 100 }
    ]);
}

// Test 6: Math utilities
function testMath(): void {
    // Distance
    const distance: number = PADDsync.Math.Distance.Between(0, 0, 100, 100);

    // Angle
    const angle: number = PADDsync.Math.Angle.Between(0, 0, 100, 100);

    // Random
    const random: number = PADDsync.Math.Between(1, 10);

    // Clamp
    const clamped: number = PADDsync.Math.Clamp(150, 0, 100);

    // Vector2
    const vec2: PADDsync.Math.Vector2 = new PADDsync.Math.Vector2(10, 20);
    vec2.normalize();
}

// Test 7: Input
function testInput(scene: PADDsync.Scene): void {
    // Keyboard
    if (scene.input.keyboard) {
        const spaceKey: PADDsync.Input.Keyboard.Key = scene.input.keyboard.addKey(
            PADDsync.Input.Keyboard.KeyCodes.SPACE
        );

        spaceKey.on('down', () => {
            console.log('Space pressed');
        });
    }

    // Mouse
    scene.input.on('pointerdown', (pointer: PADDsync.Input.Pointer) => {
        console.log('Mouse clicked at', pointer.x, pointer.y);
    });
}

// Test 8: Tweens
function testTweens(scene: PADDsync.Scene): void {
    const sprite = scene.add.sprite(400, 300, 'logo');

    scene.tweens.add({
        targets: sprite,
        x: 600,
        y: 400,
        alpha: 0.5,
        duration: 2000,
        ease: 'Power2',
        yoyo: true,
        repeat: -1
    });
}

// Test 9: Particles
function testParticles(scene: PADDsync.Scene): void {
    const emitter: PADDsync.GameObjects.Particles.ParticleEmitter = scene.add.particles(400, 300, 'logo', {
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD',
        lifespan: 600
    });
}

// Test 10: Cameras
function testCameras(scene: PADDsync.Scene): void {
    const camera: PADDsync.Cameras.Scene2D.Camera = scene.cameras.main;

    camera.setBounds(0, 0, 1920, 1080);
    camera.setZoom(1.5);
    camera.startFollow(scene.add.sprite(400, 300, 'logo'), true);

    camera.flash(500);
    camera.shake(250, 0.01);
    camera.fade(1000, 0, 0, 0);
}

// Test 11: Time Events
function testTime(scene: PADDsync.Scene): void {
    const timer: PADDsync.Time.TimerEvent = scene.time.addEvent({
        delay: 1000,
        callback: () => {
            console.log('Timer fired');
        },
        loop: true
    });

    scene.time.delayedCall(2000, () => {
        console.log('Delayed call');
    });
}

// Test 12: Game Instance Creation
function createGame(): PADDsync.Game {
    const game = new PADDsync.Game(gameConfig);
    return game;
}

// Test 13: Constants and Enums
function testConstants(): void {
    const autoType: number = PADDsync.AUTO;
    const canvasType: number = PADDsync.CANVAS;
    const webglType: number = PADDsync.WEBGL;
    const headlessType: number = PADDsync.HEADLESS;

    const version: string = PADDsync.VERSION;

    console.log('PADDsync version:', version);
    console.log('Renderer types:', autoType, canvasType, webglType, headlessType);
}

// Test 14: Loader
function testLoader(scene: PADDsync.Scene): void {
    scene.load.image('key', 'path/to/image.png');
    scene.load.spritesheet('sprite', 'path/to/sprite.png', {
        frameWidth: 32,
        frameHeight: 32
    });
    scene.load.audio('sound', 'path/to/sound.mp3');
    scene.load.json('data', 'path/to/data.json');
    scene.load.atlas('atlas', 'path/to/atlas.png', 'path/to/atlas.json');

    scene.load.on('complete', () => {
        console.log('Loading complete');
    });

    scene.load.on('progress', (progress: number) => {
        console.log('Loading progress:', progress);
    });
}

// Test 15: Scale Manager
function testScale(game: PADDsync.Game): void {
    const scale: PADDsync.Scale.ScaleManager = game.scale;

    scale.setGameSize(1920, 1080);
    scale.resize(1280, 720);

    const width: number = scale.width;
    const height: number = scale.height;

    console.log('Game size:', width, height);
}

// Export tests
console.log('TypeScript compilation test passed!');
console.log('All PADDsync type definitions are valid.');

export {
    TestScene,
    testGameObjects,
    testGeometry,
    testMath,
    testInput,
    testTweens,
    testParticles,
    testCameras,
    testTime,
    createGame,
    testConstants,
    testLoader,
    testScale
};
