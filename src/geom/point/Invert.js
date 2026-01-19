/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Swaps the X and the Y coordinate of a point.
 *
 * @function PADDsync.Geom.Point.Invert
 * @since 3.0.0
 *
 * @generic {PADDsync.Geom.Point} O - [point,$return]
 *
 * @param {PADDsync.Geom.Point} point - The Point to modify.
 *
 * @return {PADDsync.Geom.Point} The modified `point`.
 */
var Invert = function (point)
{
    return point.setTo(point.y, point.x);
};

module.exports = Invert;
