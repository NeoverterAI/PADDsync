/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Arcade Physics consts.
 *
 * @ignore
 */

var CONST = {

    /**
     * Dynamic Body.
     *
     * @name PADDsync.Physics.Arcade.DYNAMIC_BODY
     * @readonly
     * @type {number}
     * @since 3.0.0
     *
     * @see PADDsync.Physics.Arcade.Body#physicsType
     * @see PADDsync.Physics.Arcade.Group#physicsType
     */
    DYNAMIC_BODY: 0,

    /**
     * Static Body.
     *
     * @name PADDsync.Physics.Arcade.STATIC_BODY
     * @readonly
     * @type {number}
     * @since 3.0.0
     *
     * @see PADDsync.Physics.Arcade.Body#physicsType
     * @see PADDsync.Physics.Arcade.StaticBody#physicsType
     */
    STATIC_BODY: 1,

    /**
     * Arcade Physics Group containing Dynamic Bodies.
     *
     * @name PADDsync.Physics.Arcade.GROUP
     * @readonly
     * @type {number}
     * @since 3.0.0
     */
    GROUP: 2,

    /**
     * A Tilemap Layer.
     *
     * @name PADDsync.Physics.Arcade.TILEMAPLAYER
     * @readonly
     * @type {number}
     * @since 3.0.0
     */
    TILEMAPLAYER: 3,

    /**
     * Facing no direction (initial value).
     *
     * @name PADDsync.Physics.Arcade.FACING_NONE
     * @readonly
     * @type {number}
     * @since 3.0.0
     *
     * @see PADDsync.Physics.Arcade.Body#facing
     */
    FACING_NONE: 10,

    /**
     * Facing up.
     *
     * @name PADDsync.Physics.Arcade.FACING_UP
     * @readonly
     * @type {number}
     * @since 3.0.0
     *
     * @see PADDsync.Physics.Arcade.Body#facing
     */
    FACING_UP: 11,

    /**
     * Facing down.
     *
     * @name PADDsync.Physics.Arcade.FACING_DOWN
     * @readonly
     * @type {number}
     * @since 3.0.0
     *
     * @see PADDsync.Physics.Arcade.Body#facing
     */
    FACING_DOWN: 12,

    /**
     * Facing left.
     *
     * @name PADDsync.Physics.Arcade.FACING_LEFT
     * @readonly
     * @type {number}
     * @since 3.0.0
     *
     * @see PADDsync.Physics.Arcade.Body#facing
     */
    FACING_LEFT: 13,

    /**
     * Facing right.
     *
     * @name PADDsync.Physics.Arcade.FACING_RIGHT
     * @readonly
     * @type {number}
     * @since 3.0.0
     *
     * @see PADDsync.Physics.Arcade.Body#facing
     */
    FACING_RIGHT: 14

};

module.exports = CONST;
