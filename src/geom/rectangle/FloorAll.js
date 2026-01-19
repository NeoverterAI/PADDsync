/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Rounds a Rectangle's position and size down to the largest integer less than or equal to each current coordinate or dimension.
 *
 * @function PADDsync.Geom.Rectangle.FloorAll
 * @since 3.0.0
 *
 * @generic {PADDsync.Geom.Rectangle} O - [rect,$return]
 *
 * @param {PADDsync.Geom.Rectangle} rect - The Rectangle to adjust.
 *
 * @return {PADDsync.Geom.Rectangle} The adjusted Rectangle.
 */
var FloorAll = function (rect)
{
    rect.x = Math.floor(rect.x);
    rect.y = Math.floor(rect.y);
    rect.width = Math.floor(rect.width);
    rect.height = Math.floor(rect.height);

    return rect;
};

module.exports = FloorAll;
