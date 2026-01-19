/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Random = require('../geom/circle/Random');

/**
 * Takes an array of Game Objects and positions them at random locations within the Circle.
 * 
 * If you wish to pass a `PADDsync.GameObjects.Circle` Shape to this function, you should pass its `geom` property.
 *
 * @function PADDsync.Actions.RandomCircle
 * @since 3.0.0
 *
 * @generic {PADDsync.GameObjects.GameObject[]} G - [items,$return]
 *
 * @param {(array|PADDsync.GameObjects.GameObject[])} items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param {PADDsync.Geom.Circle} circle - The Circle to position the Game Objects within.
 *
 * @return {(array|PADDsync.GameObjects.GameObject[])} The array of Game Objects that was passed to this Action.
 */
var RandomCircle = function (items, circle)
{
    for (var i = 0; i < items.length; i++)
    {
        Random(circle, items[i]);
    }

    return items;
};

module.exports = RandomCircle;
