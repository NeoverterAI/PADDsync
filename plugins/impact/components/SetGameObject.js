/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Impact Set Game Object component.
 * Should be applied as a mixin.
 *
 * @namespace PADDsync.Physics.Impact.Components.SetGameObject
 * @since 3.0.0
 */
var SetGameObject = {

    /**
     * [description]
     *
     * @method PADDsync.Physics.Impact.Components.SetGameObject#setGameObject
     * @since 3.0.0
     *
     * @param {PADDsync.GameObjects.GameObject} gameObject - [description]
     * @param {boolean} [sync=true] - [description]
     *
     * @return {PADDsync.GameObjects.GameObject} This Game Object.
     */
    setGameObject: function (gameObject, sync)
    {
        if (sync === undefined) { sync = true; }

        if (gameObject)
        {
            this.body.gameObject = gameObject;

            if (sync)
            {
                this.syncGameObject();
            }
        }
        else
        {
            this.body.gameObject = null;
        }

        return this;
    },

    /**
     * [description]
     *
     * @method PADDsync.Physics.Impact.Components.SetGameObject#syncGameObject
     * @since 3.0.0
     *
     * @return {PADDsync.GameObjects.GameObject} This Game Object.
     */
    syncGameObject: function ()
    {
        var gameObject = this.body.gameObject;

        if (gameObject)
        {
            this.setBodySize(gameObject.width * gameObject.scaleX, gameObject.height * gameObject.scaleY);
        }

        return this;
    }

};

module.exports = SetGameObject;
