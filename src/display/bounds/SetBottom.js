/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Positions the Game Object so that the bottom of its bounds aligns with the given coordinate.
 *
 * @function PADDsync.Display.Bounds.SetBottom
 * @since 3.0.0
 *
 * @generic {PADDsync.GameObjects.GameObject} G - [gameObject,$return]
 *
 * @param {PADDsync.GameObjects.GameObject} gameObject - The Game Object that will be re-positioned.
 * @param {number} value - The coordinate to position the Game Object bounds on.
 *
 * @return {PADDsync.GameObjects.GameObject} The Game Object that was positioned.
 */
var SetBottom = function (gameObject, value)
{
    gameObject.y = (value - gameObject.height) + (gameObject.height * gameObject.originY);

    return gameObject;
};

module.exports = SetBottom;
