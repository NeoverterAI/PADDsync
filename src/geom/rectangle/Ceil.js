/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Rounds a Rectangle's position up to the smallest integer greater than or equal to each current coordinate.
 *
 * @function PADDsync.Geom.Rectangle.Ceil
 * @since 3.0.0
 *
 * @generic {PADDsync.Geom.Rectangle} O - [rect,$return]
 *
 * @param {PADDsync.Geom.Rectangle} rect - The Rectangle to adjust.
 *
 * @return {PADDsync.Geom.Rectangle} The adjusted Rectangle.
 */
var Ceil = function (rect)
{
    rect.x = Math.ceil(rect.x);
    rect.y = Math.ceil(rect.y);

    return rect;
};

module.exports = Ceil;
