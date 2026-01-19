/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Copies the `x`, `y` and `radius` properties from the `source` Circle
 * into the given `dest` Circle, then returns the `dest` Circle.
 *
 * @function PADDsync.Geom.Circle.CopyFrom
 * @since 3.0.0
 *
 * @generic {PADDsync.Geom.Circle} O - [dest,$return]
 *
 * @param {PADDsync.Geom.Circle} source - The source Circle to copy the values from.
 * @param {PADDsync.Geom.Circle} dest - The destination Circle to copy the values to.
 *
 * @return {PADDsync.Geom.Circle} The destination Circle.
 */
var CopyFrom = function (source, dest)
{
    return dest.setTo(source.x, source.y, source.radius);
};

module.exports = CopyFrom;
