/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Impact Offset component.
 * Should be applied as a mixin.
 *
 * @namespace PADDsync.Physics.Impact.Components.Offset
 * @since 3.0.0
 */
var Offset = {

    /**
     * [description]
     *
     * @method PADDsync.Physics.Impact.Components.Offset#setOffset
     * @since 3.0.0
     *
     * @param {number} x - [description]
     * @param {number} y - [description]
     * @param {number} [width] - [description]
     * @param {number} [height] - [description]
     *
     * @return {PADDsync.GameObjects.GameObject} This Game Object.
     */
    setOffset: function (x, y, width, height)
    {
        this.body.offset.x = x;
        this.body.offset.y = y;

        if (width)
        {
            this.setBodySize(width, height);
        }

        return this;
    }

};

module.exports = Offset;
