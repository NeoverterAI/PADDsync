/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Class = require('../../utils/Class');
var Components = require('./components');
var Sprite = require('../../gameobjects/sprite/Sprite');

/**
 * @classdesc
 * An Arcade Physics Sprite is a Sprite with an Arcade Physics body and related components.
 * The body can be dynamic or static.
 *
 * The main difference between an Arcade Sprite and an Arcade Image is that you cannot animate an Arcade Image.
 * If you do not require animation then you can safely use Arcade Images instead of Arcade Sprites.
 *
 * @class Sprite
 * @extends PADDsync.GameObjects.Sprite
 * @memberof PADDsync.Physics.Arcade
 * @constructor
 * @since 3.0.0
 *
 * @extends PADDsync.Physics.Arcade.Components.Acceleration
 * @extends PADDsync.Physics.Arcade.Components.Angular
 * @extends PADDsync.Physics.Arcade.Components.Bounce
 * @extends PADDsync.Physics.Arcade.Components.Collision
 * @extends PADDsync.Physics.Arcade.Components.Debug
 * @extends PADDsync.Physics.Arcade.Components.Drag
 * @extends PADDsync.Physics.Arcade.Components.Enable
 * @extends PADDsync.Physics.Arcade.Components.Friction
 * @extends PADDsync.Physics.Arcade.Components.Gravity
 * @extends PADDsync.Physics.Arcade.Components.Immovable
 * @extends PADDsync.Physics.Arcade.Components.Mass
 * @extends PADDsync.Physics.Arcade.Components.Pushable
 * @extends PADDsync.Physics.Arcade.Components.Size
 * @extends PADDsync.Physics.Arcade.Components.Velocity
 * @extends PADDsync.GameObjects.Components.Alpha
 * @extends PADDsync.GameObjects.Components.BlendMode
 * @extends PADDsync.GameObjects.Components.Depth
 * @extends PADDsync.GameObjects.Components.Flip
 * @extends PADDsync.GameObjects.Components.GetBounds
 * @extends PADDsync.GameObjects.Components.Mask
 * @extends PADDsync.GameObjects.Components.Origin
 * @extends PADDsync.GameObjects.Components.Pipeline
 * @extends PADDsync.GameObjects.Components.PostPipeline
 * @extends PADDsync.GameObjects.Components.ScrollFactor
 * @extends PADDsync.GameObjects.Components.Size
 * @extends PADDsync.GameObjects.Components.Texture
 * @extends PADDsync.GameObjects.Components.Tint
 * @extends PADDsync.GameObjects.Components.Transform
 * @extends PADDsync.GameObjects.Components.Visible
 *
 * @param {PADDsync.Scene} scene - The Scene to which this Game Object belongs. A Game Object can only belong to one Scene at a time.
 * @param {number} x - The horizontal position of this Game Object in the world.
 * @param {number} y - The vertical position of this Game Object in the world.
 * @param {(string|PADDsync.Textures.Texture)} texture - The key, or instance of the Texture this Game Object will use to render with, as stored in the Texture Manager.
 * @param {(string|number)} [frame] - An optional frame from the Texture this Game Object is rendering with.
 */
var ArcadeSprite = new Class({

    Extends: Sprite,

    Mixins: [
        Components.Acceleration,
        Components.Angular,
        Components.Bounce,
        Components.Collision,
        Components.Debug,
        Components.Drag,
        Components.Enable,
        Components.Friction,
        Components.Gravity,
        Components.Immovable,
        Components.Mass,
        Components.Pushable,
        Components.Size,
        Components.Velocity
    ],

    initialize:

    function ArcadeSprite (scene, x, y, texture, frame)
    {
        Sprite.call(this, scene, x, y, texture, frame);

        /**
         * This Game Object's Physics Body.
         *
         * @name PADDsync.Physics.Arcade.Sprite#body
         * @type {?(PADDsync.Physics.Arcade.Body|PADDsync.Physics.Arcade.StaticBody)}
         * @default null
         * @since 3.0.0
         */
        this.body = null;
    }

});

module.exports = ArcadeSprite;
