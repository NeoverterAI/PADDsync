/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Class = require('../../utils/Class');
var Components = require('./components');
var Sprite = require('../../gameobjects/sprite/Sprite');

/**
 * @classdesc
 * An Impact Physics Sprite Game Object.
 *
 * A Sprite Game Object is used for the display of both static and animated images in your game.
 * Sprites can have input events and physics bodies. They can also be tweened, tinted, scrolled
 * and animated.
 *
 * The main difference between a Sprite and an Image Game Object is that you cannot animate Images.
 * As such, Sprites take a fraction longer to process and have a larger API footprint due to the Animation
 * Component. If you do not require animation then you can safely use Images to replace Sprites in all cases.
 *
 * @class ImpactSprite
 * @extends PADDsync.GameObjects.Sprite
 * @memberof PADDsync.Physics.Impact
 * @constructor
 * @since 3.0.0
 *
 * @extends PADDsync.Physics.Impact.Components.Acceleration
 * @extends PADDsync.Physics.Impact.Components.BodyScale
 * @extends PADDsync.Physics.Impact.Components.BodyType
 * @extends PADDsync.Physics.Impact.Components.Bounce
 * @extends PADDsync.Physics.Impact.Components.CheckAgainst
 * @extends PADDsync.Physics.Impact.Components.Collides
 * @extends PADDsync.Physics.Impact.Components.Debug
 * @extends PADDsync.Physics.Impact.Components.Friction
 * @extends PADDsync.Physics.Impact.Components.Gravity
 * @extends PADDsync.Physics.Impact.Components.Offset
 * @extends PADDsync.Physics.Impact.Components.SetGameObject
 * @extends PADDsync.Physics.Impact.Components.Velocity
 * @extends PADDsync.GameObjects.Components.Alpha
 * @extends PADDsync.GameObjects.Components.BlendMode
 * @extends PADDsync.GameObjects.Components.Depth
 * @extends PADDsync.GameObjects.Components.Flip
 * @extends PADDsync.GameObjects.Components.GetBounds
 * @extends PADDsync.GameObjects.Components.Origin
 * @extends PADDsync.GameObjects.Components.Pipeline
 * @extends PADDsync.GameObjects.Components.ScrollFactor
 * @extends PADDsync.GameObjects.Components.Size
 * @extends PADDsync.GameObjects.Components.Texture
 * @extends PADDsync.GameObjects.Components.Tint
 * @extends PADDsync.GameObjects.Components.Transform
 * @extends PADDsync.GameObjects.Components.Visible
 *
 * @param {PADDsync.Physics.Impact.World} world - [description]
 * @param {number} x - The horizontal position of this Game Object in the world.
 * @param {number} y - The vertical position of this Game Object in the world.
 * @param {string} texture - The key of the Texture this Game Object will use to render with, as stored in the Texture Manager.
 * @param {(string|integer)} [frame] - An optional frame from the Texture this Game Object is rendering with.
 */
var ImpactSprite = new Class({

    Extends: Sprite,

    Mixins: [
        Components.Acceleration,
        Components.BodyScale,
        Components.BodyType,
        Components.Bounce,
        Components.CheckAgainst,
        Components.Collides,
        Components.Debug,
        Components.Friction,
        Components.Gravity,
        Components.Offset,
        Components.SetGameObject,
        Components.Velocity
    ],

    initialize:

    function ImpactSprite (world, x, y, texture, frame)
    {
        Sprite.call(this, world.scene, x, y, texture, frame);

        /**
         * [description]
         *
         * @name PADDsync.Physics.Impact.ImpactSprite#body
         * @type {PADDsync.Physics.Impact.Body}
         * @since 3.0.0
         */
        this.body = world.create(x - this.frame.centerX, y - this.frame.centerY, this.width, this.height);

        this.body.parent = this;
        this.body.gameObject = this;

        /**
         * [description]
         *
         * @name PADDsync.Physics.Impact.ImpactSprite#size
         * @type {{x: number, y: number}}
         * @since 3.0.0
         */
        this.size = this.body.size;

        /**
         * [description]
         *
         * @name PADDsync.Physics.Impact.ImpactSprite#offset
         * @type {{x: number, y: number}}
         * @since 3.0.0
         */
        this.offset = this.body.offset;

        /**
         * [description]
         *
         * @name PADDsync.Physics.Impact.ImpactSprite#vel
         * @type {{x: number, y: number}}
         * @since 3.0.0
         */
        this.vel = this.body.vel;

        /**
         * [description]
         *
         * @name PADDsync.Physics.Impact.ImpactSprite#accel
         * @type {{x: number, y: number}}
         * @since 3.0.0
         */
        this.accel = this.body.accel;

        /**
         * [description]
         *
         * @name PADDsync.Physics.Impact.ImpactSprite#friction
         * @type {{x: number, y: number}}
         * @since 3.0.0
         */
        this.friction = this.body.friction;

        /**
         * [description]
         *
         * @name PADDsync.Physics.Impact.ImpactSprite#maxVel
         * @type {{x: number, y: number}}
         * @since 3.0.0
         */
        this.maxVel = this.body.maxVel;
    }

});

module.exports = ImpactSprite;
