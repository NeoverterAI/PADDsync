/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Offsets the Circle by the values given.
 *
 * @function PADDsync.Geom.Circle.Offset
 * @since 3.0.0
 *
 * @generic {PADDsync.Geom.Circle} O - [circle,$return]
 *
 * @param {PADDsync.Geom.Circle} circle - The Circle to be offset (translated.)
 * @param {number} x - The amount to horizontally offset the Circle by.
 * @param {number} y - The amount to vertically offset the Circle by.
 *
 * @return {PADDsync.Geom.Circle} The Circle that was offset.
 */
var Offset = function (circle, x, y)
{
    circle.x += x;
    circle.y += y;

    return circle;
};

module.exports = Offset;
