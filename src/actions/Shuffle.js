/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var ArrayShuffle = require('../utils/array/Shuffle');

/**
 * Shuffles the array in place. The shuffled array is both modified and returned.
 *
 * @function PADDsync.Actions.Shuffle
 * @since 3.0.0
 * @see PADDsync.Utils.Array.Shuffle
 *
 * @generic {PADDsync.GameObjects.GameObject[]} G - [items,$return]
 *
 * @param {(array|PADDsync.GameObjects.GameObject[])} items - An array of Game Objects. The contents of this array are updated by this Action.
 *
 * @return {(array|PADDsync.GameObjects.GameObject[])} The array of Game Objects that was passed to this Action.
 */
var Shuffle = function (items)
{
    return ArrayShuffle(items);
};

module.exports = Shuffle;
