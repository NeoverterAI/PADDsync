/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var GetRight = require('../../bounds/GetRight');
var GetTop = require('../../bounds/GetTop');
var SetBottom = require('../../bounds/SetBottom');
var SetRight = require('../../bounds/SetRight');

/**
 * Takes given Game Object and aligns it so that it is positioned next to the top right position of the other.
 *
 * @function PADDsync.Display.Align.To.TopRight
 * @since 3.0.0
 *
 * @generic {PADDsync.GameObjects.GameObject} G - [gameObject,$return]
 *
 * @param {PADDsync.GameObjects.GameObject} gameObject - The Game Object that will be positioned.
 * @param {PADDsync.GameObjects.GameObject} alignTo - The Game Object to base the alignment position on.
 * @param {number} [offsetX=0] - Optional horizontal offset from the position.
 * @param {number} [offsetY=0] - Optional vertical offset from the position.
 *
 * @return {PADDsync.GameObjects.GameObject} The Game Object that was aligned.
 */
var TopRight = function (gameObject, alignTo, offsetX, offsetY)
{
    if (offsetX === undefined) { offsetX = 0; }
    if (offsetY === undefined) { offsetY = 0; }

    SetRight(gameObject, GetRight(alignTo) + offsetX);
    SetBottom(gameObject, GetTop(alignTo) - offsetY);

    return gameObject;
};

module.exports = TopRight;
