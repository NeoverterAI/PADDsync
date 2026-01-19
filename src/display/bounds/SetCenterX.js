/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Positions the Game Object so that the center top of its bounds aligns with the given coordinate.
 *
 * @function PADDsync.Display.Bounds.SetCenterX
 * @since 3.0.0
 *
 * @generic {PADDsync.GameObjects.GameObject} G - [gameObject,$return]
 *
 * @param {PADDsync.GameObjects.GameObject} gameObject - The Game Object that will be re-positioned.
 * @param {number} x - The coordinate to position the Game Object bounds on.
 *
 * @return {PADDsync.GameObjects.GameObject} The Game Object that was positioned.
 */
var SetCenterX = function (gameObject, x)
{
    var offsetX = gameObject.width * gameObject.originX;

    gameObject.x = (x + offsetX) - (gameObject.width * 0.5);

    return gameObject;
};

module.exports = SetCenterX;
