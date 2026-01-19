/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Point = require('../point/Point');

/**
 * Returns a random point on a given Line.
 *
 * @function PADDsync.Geom.Line.Random
 * @since 3.0.0
 *
 * @generic {PADDsync.Geom.Point} O - [out,$return]
 *
 * @param {PADDsync.Geom.Line} line - The Line to calculate the random Point on.
 * @param {(PADDsync.Geom.Point|object)} [out] - An instance of a Point to be modified.
 *
 * @return {(PADDsync.Geom.Point|object)} A random Point on the Line.
 */
var Random = function (line, out)
{
    if (out === undefined) { out = new Point(); }

    var t = Math.random();

    out.x = line.x1 + t * (line.x2 - line.x1);
    out.y = line.y1 + t * (line.y2 - line.y1);

    return out;
};

module.exports = Random;
