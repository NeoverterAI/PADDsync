/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Copy the values of one line to a destination line.
 *
 * @function PADDsync.Geom.Line.CopyFrom
 * @since 3.0.0
 *
 * @generic {PADDsync.Geom.Line} O - [dest,$return]
 *
 * @param {PADDsync.Geom.Line} source - The source line to copy the values from.
 * @param {PADDsync.Geom.Line} dest - The destination line to copy the values to.
 *
 * @return {PADDsync.Geom.Line} The destination line.
 */
var CopyFrom = function (source, dest)
{
    return dest.setTo(source.x1, source.y1, source.x2, source.y2);
};

module.exports = CopyFrom;
