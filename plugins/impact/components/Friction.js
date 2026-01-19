/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Impact Friction component.
 * Should be applied as a mixin.
 *
 * @namespace PADDsync.Physics.Impact.Components.Friction
 * @since 3.0.0
 */
var Friction = {

    /**
     * [description]
     *
     * @method PADDsync.Physics.Impact.Components.Friction#setFrictionX
     * @since 3.0.0
     *
     * @param {number} x - [description]
     *
     * @return {PADDsync.GameObjects.GameObject} This Game Object.
     */
    setFrictionX: function (x)
    {
        this.friction.x = x;

        return this;
    },

    /**
     * [description]
     *
     * @method PADDsync.Physics.Impact.Components.Friction#setFrictionY
     * @since 3.0.0
     *
     * @param {number} y - [description]
     *
     * @return {PADDsync.GameObjects.GameObject} This Game Object.
     */
    setFrictionY: function (y)
    {
        this.friction.y = y;

        return this;
    },

    /**
     * [description]
     *
     * @method PADDsync.Physics.Impact.Components.Friction#setFriction
     * @since 3.0.0
     *
     * @param {number} x - [description]
     * @param {number} y - [description]
     *
     * @return {PADDsync.GameObjects.GameObject} This Game Object.
     */
    setFriction: function (x, y)
    {
        this.friction.x = x;
        this.friction.y = y;

        return this;
    }

};

module.exports = Friction;
