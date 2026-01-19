/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var GetBottom = require('../../bounds/GetBottom');
var GetLeft = require('../../bounds/GetLeft');
var SetBottom = require('../../bounds/SetBottom');
var SetLeft = require('../../bounds/SetLeft');

/**
 * Takes given Game Object and aligns it so that it is positioned in the bottom left of the other.
 *
 * @function PADDsync.Display.Align.In.BottomLeft
 * @since 3.0.0
 *
 * @generic {PADDsync.GameObjects.GameObject} G - [gameObject,$return]
 *
 * @param {PADDsync.GameObjects.GameObject} gameObject - The Game Object that will be positioned.
 * @param {PADDsync.GameObjects.GameObject} alignIn - The Game Object to base the alignment position on.
 * @param {number} [offsetX=0] - Optional horizontal offset from the position.
 * @param {number} [offsetY=0] - Optional vertical offset from the position.
 *
 * @return {PADDsync.GameObjects.GameObject} The Game Object that was aligned.
 */
var BottomLeft = function (gameObject, alignIn, offsetX, offsetY)
{
    if (offsetX === undefined) { offsetX = 0; }
    if (offsetY === undefined) { offsetY = 0; }

    SetLeft(gameObject, GetLeft(alignIn) - offsetX);
    SetBottom(gameObject, GetBottom(alignIn) + offsetY);

    return gameObject;
};

module.exports = BottomLeft;
