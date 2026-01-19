/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Class = require('../../utils/Class');
var COLLIDES = require('./COLLIDES');
var GetVelocity = require('./GetVelocity');
var TYPE = require('./TYPE');
var UpdateMotion = require('./UpdateMotion');

/**
 * @callback PADDsync.Types.Physics.Impact.BodyUpdateCallback
 * @since 3.0.0
 *
 * @param {PADDsync.Physics.Impact.Body} body - [description]
 */

/**
 * @classdesc
 * An Impact.js compatible physics body.
 * This re-creates the properties you'd get on an Entity and the math needed to update them.
 *
 * @class Body
 * @memberof PADDsync.Physics.Impact
 * @constructor
 * @since 3.0.0
 *
 * @param {PADDsync.Physics.Impact.World} world - [description]
 * @param {number} x - [description]
 * @param {number} y - [description]
 * @param {number} [sx=16] - [description]
 * @param {number} [sy=16] - [description]
 */
var Body = new Class({

    initialize:

    function Body (world, x, y, sx, sy)
    {
        if (sx === undefined) { sx = 16; }
        if (sy === undefined) { sy = sx; }

        /**
         * [description]
         *
         * @name PADDsync.Physics.Impact.Body#world
         * @type {PADDsync.Physics.Impact.World}
         * @since 3.0.0
         */
        this.world = world;

        /**
         * [description]
         *
         * @name PADDsync.Physics.Impact.Body#gameObject
         * @type {PADDsync.GameObjects.GameObject}
         * @default null
         * @since 3.0.0
         */
        this.gameObject = null;

        /**
         * [description]
         *
         * @name PADDsync.Physics.Impact.Body#enabled
         * @type {boolean}
         * @default true
         * @since 3.0.0
         */
        this.enabled = true;

        /**
         * The ImpactBody, ImpactSprite or ImpactImage object that owns this Body, if any.
         *
         * @name PADDsync.Physics.Impact.Body#parent
         * @type {?(PADDsync.Physics.Impact.ImpactBody|PADDsync.Physics.Impact.ImpactImage|PADDsync.Physics.Impact.ImpactSprite)}
         * @since 3.0.0
         */
        this.parent;

        /**
         * [description]
         *
         * @name PADDsync.Physics.Impact.Body#id
         * @type {integer}
         * @since 3.0.0
         */
        this.id = world.getNextID();

        /**
         * [description]
         *
         * @name PADDsync.Physics.Impact.Body#name
         * @type {string}
         * @default ''
         * @since 3.0.0
         */
        this.name = '';

        /**
         * [description]
         *
         * @name PADDsync.Physics.Impact.Body#size
         * @type {PADDsync.Types.Math.Vector2Like}
         * @since 3.0.0
         */
        this.size = { x: sx, y: sy };

        /**
         * [description]
         *
         * @name PADDsync.Physics.Impact.Body#offset
         * @type {PADDsync.Types.Math.Vector2Like}
         * @since 3.0.0
         */
        this.offset = { x: 0, y: 0 };

        /**
         * [description]
         *
         * @name PADDsync.Physics.Impact.Body#pos
         * @type {PADDsync.Types.Math.Vector2Like}
         * @since 3.0.0
         */
        this.pos = { x: x, y: y };

        /**
         * [description]
         *
         * @name PADDsync.Physics.Impact.Body#last
         * @type {PADDsync.Types.Math.Vector2Like}
         * @since 3.0.0
         */
        this.last = { x: x, y: y };

        /**
         * [description]
         *
         * @name PADDsync.Physics.Impact.Body#vel
         * @type {PADDsync.Types.Math.Vector2Like}
         * @since 3.0.0
         */
        this.vel = { x: 0, y: 0 };

        /**
         * [description]
         *
         * @name PADDsync.Physics.Impact.Body#accel
         * @type {PADDsync.Types.Math.Vector2Like}
         * @since 3.0.0
         */
        this.accel = { x: 0, y: 0 };

        /**
         * [description]
         *
         * @name PADDsync.Physics.Impact.Body#friction
         * @type {PADDsync.Types.Math.Vector2Like}
         * @since 3.0.0
         */
        this.friction = { x: 0, y: 0 };

        /**
         * [description]
         *
         * @name PADDsync.Physics.Impact.Body#maxVel
         * @type {PADDsync.Types.Math.Vector2Like}
         * @since 3.0.0
         */
        this.maxVel = { x: world.defaults.maxVelocityX, y: world.defaults.maxVelocityY };

        /**
         * [description]
         *
         * @name PADDsync.Physics.Impact.Body#standing
         * @type {boolean}
         * @default false
         * @since 3.0.0
         */
        this.standing = false;

        /**
         * [description]
         *
         * @name PADDsync.Physics.Impact.Body#gravityFactor
         * @type {number}
         * @since 3.0.0
         */
        this.gravityFactor = world.defaults.gravityFactor;

        /**
         * [description]
         *
         * @name PADDsync.Physics.Impact.Body#bounciness
         * @type {number}
         * @since 3.0.0
         */
        this.bounciness = world.defaults.bounciness;

        /**
         * [description]
         *
         * @name PADDsync.Physics.Impact.Body#minBounceVelocity
         * @type {number}
         * @since 3.0.0
         */
        this.minBounceVelocity = world.defaults.minBounceVelocity;

        /**
         * [description]
         *
         * @name PADDsync.Physics.Impact.Body#accelGround
         * @type {number}
         * @default 0
         * @since 3.0.0
         */
        this.accelGround = 0;

        /**
         * [description]
         *
         * @name PADDsync.Physics.Impact.Body#accelAir
         * @type {number}
         * @default 0
         * @since 3.0.0
         */
        this.accelAir = 0;

        /**
         * [description]
         *
         * @name PADDsync.Physics.Impact.Body#jumpSpeed
         * @type {number}
         * @default 0
         * @since 3.0.0
         */
        this.jumpSpeed = 0;

        /**
         * [description]
         *
         * @name PADDsync.Physics.Impact.Body#type
         * @type {PADDsync.Physics.Impact.TYPE}
         * @since 3.0.0
         */
        this.type = TYPE.NONE;

        /**
         * [description]
         *
         * @name PADDsync.Physics.Impact.Body#checkAgainst
         * @type {PADDsync.Physics.Impact.TYPE}
         * @since 3.0.0
         */
        this.checkAgainst = TYPE.NONE;

        /**
         * [description]
         *
         * @name PADDsync.Physics.Impact.Body#collides
         * @type {PADDsync.Physics.Impact.COLLIDES}
         * @since 3.0.0
         */
        this.collides = COLLIDES.NEVER;

        /**
         * [description]
         *
         * @name PADDsync.Physics.Impact.Body#debugShowBody
         * @type {boolean}
         * @since 3.0.0
         */
        this.debugShowBody = world.defaults.debugShowBody;

        /**
         * [description]
         *
         * @name PADDsync.Physics.Impact.Body#debugShowVelocity
         * @type {boolean}
         * @since 3.0.0
         */
        this.debugShowVelocity = world.defaults.debugShowVelocity;

        /**
         * [description]
         *
         * @name PADDsync.Physics.Impact.Body#debugBodyColor
         * @type {integer}
         * @since 3.0.0
         */
        this.debugBodyColor = world.defaults.bodyDebugColor;

        /**
         * [description]
         *
         * @name PADDsync.Physics.Impact.Body#updateCallback
         * @type {?PADDsync.Types.Physics.Impact.BodyUpdateCallback}
         * @since 3.0.0
         */
        this.updateCallback;

        /**
         * min 44 deg, max 136 deg
         *
         * @name PADDsync.Physics.Impact.Body#slopeStanding
         * @type {{ min: number, max: number }}
         * @since 3.0.0
         */
        this.slopeStanding = { min: 0.767944870877505, max: 2.3736477827122884 };
    },

    /**
     * [description]
     *
     * @method PADDsync.Physics.Impact.Body#reset
     * @since 3.0.0
     *
     * @param {number} x - [description]
     * @param {number} y - [description]
     */
    reset: function (x, y)
    {
        this.pos = { x: x, y: y };
        this.last = { x: x, y: y };
        this.vel = { x: 0, y: 0 };
        this.accel = { x: 0, y: 0 };
        this.friction = { x: 0, y: 0 };
        this.maxVel = { x: 100, y: 100 };

        this.standing = false;

        this.gravityFactor = 1;
        this.bounciness = 0;
        this.minBounceVelocity = 40;

        this.accelGround = 0;
        this.accelAir = 0;
        this.jumpSpeed = 0;

        this.type = TYPE.NONE;
        this.checkAgainst = TYPE.NONE;
        this.collides = COLLIDES.NEVER;
    },

    /**
     * [description]
     *
     * @method PADDsync.Physics.Impact.Body#update
     * @since 3.0.0
     *
     * @param {number} delta - The delta time in ms since the last frame. This is a smoothed and capped value based on the FPS rate.
     */
    update: function (delta)
    {
        var pos = this.pos;

        this.last.x = pos.x;
        this.last.y = pos.y;

        this.vel.y += this.world.gravity * delta * this.gravityFactor;

        this.vel.x = GetVelocity(delta, this.vel.x, this.accel.x, this.friction.x, this.maxVel.x);
        this.vel.y = GetVelocity(delta, this.vel.y, this.accel.y, this.friction.y, this.maxVel.y);

        var mx = this.vel.x * delta;
        var my = this.vel.y * delta;

        var res = this.world.collisionMap.trace(pos.x, pos.y, mx, my, this.size.x, this.size.y);

        if (this.handleMovementTrace(res))
        {
            UpdateMotion(this, res);
        }

        var go = this.gameObject;

        if (go)
        {
            go.x = (pos.x - this.offset.x) + go.displayOriginX * go.scaleX;
            go.y = (pos.y - this.offset.y) + go.displayOriginY * go.scaleY;
        }

        if (this.updateCallback)
        {
            this.updateCallback(this);
        }
    },

    /**
     * [description]
     *
     * @method PADDsync.Physics.Impact.Body#drawDebug
     * @since 3.0.0
     *
     * @param {PADDsync.GameObjects.Graphics} graphic - [description]
     */
    drawDebug: function (graphic)
    {
        var pos = this.pos;

        if (this.debugShowBody)
        {
            graphic.lineStyle(1, this.debugBodyColor, 1);
            graphic.strokeRect(pos.x, pos.y, this.size.x, this.size.y);
        }

        if (this.debugShowVelocity)
        {
            var x = pos.x + this.size.x / 2;
            var y = pos.y + this.size.y / 2;

            graphic.lineStyle(1, this.world.defaults.velocityDebugColor, 1);
            graphic.lineBetween(x, y, x + this.vel.x, y + this.vel.y);
        }
    },

    /**
     * [description]
     *
     * @method PADDsync.Physics.Impact.Body#willDrawDebug
     * @since 3.0.0
     *
     * @return {boolean} [description]
     */
    willDrawDebug: function ()
    {
        return (this.debugShowBody || this.debugShowVelocity);
    },

    /**
     * [description]
     *
     * @method PADDsync.Physics.Impact.Body#skipHash
     * @since 3.0.0
     *
     * @return {boolean} [description]
     */
    skipHash: function ()
    {
        return (!this.enabled || (this.type === 0 && this.checkAgainst === 0 && this.collides === 0));
    },

    /**
     * Determines whether the body collides with the `other` one or not.
     *
     * @method PADDsync.Physics.Impact.Body#touches
     * @since 3.0.0
     *
     * @param {PADDsync.Physics.Impact.Body} other - [description]
     *
     * @return {boolean} [description]
     */
    touches: function (other)
    {
        return !(
            this.pos.x >= other.pos.x + other.size.x ||
            this.pos.x + this.size.x <= other.pos.x ||
            this.pos.y >= other.pos.y + other.size.y ||
            this.pos.y + this.size.y <= other.pos.y
        );
    },

    /**
     * Reset the size and position of the physics body.
     *
     * @method PADDsync.Physics.Impact.Body#resetSize
     * @since 3.0.0
     *
     * @param {number} x - The x coordinate to position the body.
     * @param {number} y - The y coordinate to position the body.
     * @param {number} width - The width of the body.
     * @param {number} height - The height of the body.
     *
     * @return {PADDsync.Physics.Impact.Body} This Body object.
     */
    resetSize: function (x, y, width, height)
    {
        this.pos.x = x;
        this.pos.y = y;
        this.size.x = width;
        this.size.y = height;

        return this;
    },

    /**
     * Export this body object to JSON.
     *
     * @method PADDsync.Physics.Impact.Body#toJSON
     * @since 3.0.0
     *
     * @return {PADDsync.Types.Physics.Impact.JSONImpactBody} JSON representation of this body object.
     */
    toJSON: function ()
    {
        var output = {
            name: this.name,
            size: { x: this.size.x, y: this.size.y },
            pos: { x: this.pos.x, y: this.pos.y },
            vel: { x: this.vel.x, y: this.vel.y },
            accel: { x: this.accel.x, y: this.accel.y },
            friction: { x: this.friction.x, y: this.friction.y },
            maxVel: { x: this.maxVel.x, y: this.maxVel.y },
            gravityFactor: this.gravityFactor,
            bounciness: this.bounciness,
            minBounceVelocity: this.minBounceVelocity,
            type: this.type,
            checkAgainst: this.checkAgainst,
            collides: this.collides
        };

        return output;
    },

    /**
     * [description]
     *
     * @method PADDsync.Physics.Impact.Body#fromJSON
     * @todo Code it!
     * @since 3.0.0
     *
     * @param {object} config - [description]
     */
    fromJSON: function ()
    {
    },

    /**
     * Can be overridden by user code
     *
     * @method PADDsync.Physics.Impact.Body#check
     * @since 3.0.0
     *
     * @param {PADDsync.Physics.Impact.Body} other - [description]
     */
    check: function ()
    {
    },

    /**
     * Can be overridden by user code
     *
     * @method PADDsync.Physics.Impact.Body#collideWith
     * @since 3.0.0
     *
     * @param {PADDsync.Physics.Impact.Body} other - [description]
     * @param {string} axis - [description]
     */
    collideWith: function (other, axis)
    {
        if (this.parent && this.parent._collideCallback)
        {
            this.parent._collideCallback.call(this.parent._callbackScope, this, other, axis);
        }
    },

    /**
     * Can be overridden by user code but must return a boolean.
     *
     * @method PADDsync.Physics.Impact.Body#handleMovementTrace
     * @since 3.0.0
     *
     * @param {number} res - [description]
     *
     * @return {boolean} [description]
     */
    handleMovementTrace: function ()
    {
        return true;
    },

    /**
     * [description]
     *
     * @method PADDsync.Physics.Impact.Body#destroy
     * @since 3.0.0
     */
    destroy: function ()
    {
        this.world.remove(this);

        this.enabled = false;

        this.world = null;

        this.gameObject = null;

        this.parent = null;
    }

});

module.exports = Body;
