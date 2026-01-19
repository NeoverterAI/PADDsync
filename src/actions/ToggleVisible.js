/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Takes an array of Game Objects and toggles the visibility of each one.
 * Those previously `visible = false` will become `visible = true`, and vice versa.
 *
 * @function PADDsync.Actions.ToggleVisible
 * @since 3.0.0
 *
 * @generic {PADDsync.GameObjects.GameObject[]} G - [items,$return]
 *
 * @param {(array|PADDsync.GameObjects.GameObject[])} items - An array of Game Objects. The contents of this array are updated by this Action.
 *
 * @return {(array|PADDsync.GameObjects.GameObject[])} The array of Game Objects that was passed to this Action.
 */
var ToggleVisible = function (items)
{
    for (var i = 0; i < items.length; i++)
    {
        items[i].visible = !items[i].visible;
    }

    return items;
};

module.exports = ToggleVisible;
