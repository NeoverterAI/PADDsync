/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Copy the values of one Rectangle to a destination Rectangle.
 *
 * @function PADDsync.Geom.Rectangle.CopyFrom
 * @since 3.0.0
 *
 * @generic {PADDsync.Geom.Rectangle} O - [dest,$return]
 *
 * @param {PADDsync.Geom.Rectangle} source - The source Rectangle to copy the values from.
 * @param {PADDsync.Geom.Rectangle} dest - The destination Rectangle to copy the values to.
 *
 * @return {PADDsync.Geom.Rectangle} The destination Rectangle.
 */
var CopyFrom = function (source, dest)
{
    return dest.setTo(source.x, source.y, source.width, source.height);
};

module.exports = CopyFrom;
