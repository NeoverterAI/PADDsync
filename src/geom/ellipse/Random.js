/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Point = require('../point/Point');

/**
 * Returns a uniformly distributed random point from anywhere within the given Ellipse.
 *
 * @function PADDsync.Geom.Ellipse.Random
 * @since 3.0.0
 *
 * @generic {PADDsync.Geom.Point} O - [out,$return]
 *
 * @param {PADDsync.Geom.Ellipse} ellipse - The Ellipse to get a random point from.
 * @param {(PADDsync.Geom.Point|object)} [out] - A Point or point-like object to set the random `x` and `y` values in.
 *
 * @return {(PADDsync.Geom.Point|object)} A Point object with the random values set in the `x` and `y` properties.
 */
var Random = function (ellipse, out)
{
    if (out === undefined) { out = new Point(); }

    var p = Math.random() * Math.PI * 2;
    var s = Math.sqrt(Math.random());

    out.x = ellipse.x + ((s * Math.cos(p)) * ellipse.width / 2);
    out.y = ellipse.y + ((s * Math.sin(p)) * ellipse.height / 2);

    return out;
};

module.exports = Random;
