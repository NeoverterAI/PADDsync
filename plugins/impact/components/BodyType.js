/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var TYPE = require('../TYPE');

/**
 * The Impact Body Type component.
 * Should be applied as a mixin.
 *
 * @namespace PADDsync.Physics.Impact.Components.BodyType
 * @since 3.0.0
 */
var BodyType = {

    /**
     * [description]
     *
     * @method PADDsync.Physics.Impact.Components.BodyType#getBodyType
     * @since 3.0.0
     *
     * @return {number} [description]
     */
    getBodyType: function ()
    {
        return this.body.type;
    },

    /**
     * [description]
     *
     * @method PADDsync.Physics.Impact.Components.BodyType#setTypeNone
     * @since 3.0.0
     *
     * @return {PADDsync.GameObjects.GameObject} This Game Object.
     */
    setTypeNone: function ()
    {
        this.body.type = TYPE.NONE;

        return this;
    },

    /**
     * [description]
     *
     * @method PADDsync.Physics.Impact.Components.BodyType#setTypeA
     * @since 3.0.0
     *
     * @return {PADDsync.GameObjects.GameObject} This Game Object.
     */
    setTypeA: function ()
    {
        this.body.type = TYPE.A;

        return this;
    },

    /**
     * [description]
     *
     * @method PADDsync.Physics.Impact.Components.BodyType#setTypeB
     * @since 3.0.0
     *
     * @return {PADDsync.GameObjects.GameObject} This Game Object.
     */
    setTypeB: function ()
    {
        this.body.type = TYPE.B;

        return this;
    }

};

module.exports = BodyType;
