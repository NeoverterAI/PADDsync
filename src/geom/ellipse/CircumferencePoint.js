/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Point = require('../point/Point');

/**
 * Returns a Point object containing the coordinates of a point on the circumference of the Ellipse based on the given angle.
 *
 * @function PADDsync.Geom.Ellipse.CircumferencePoint
 * @since 3.0.0
 *
 * @generic {PADDsync.Geom.Point} O - [out,$return]
 *
 * @param {PADDsync.Geom.Ellipse} ellipse - The Ellipse to get the circumference point on.
 * @param {number} angle - The angle from the center of the Ellipse to the circumference to return the point from. Given in radians.
 * @param {(PADDsync.Geom.Point|object)} [out] - A Point, or point-like object, to store the results in. If not given a Point will be created.
 *
 * @return {(PADDsync.Geom.Point|object)} A Point object where the `x` and `y` properties are the point on the circumference.
 */
var CircumferencePoint = function (ellipse, angle, out)
{
    if (out === undefined) { out = new Point(); }

    var halfWidth = ellipse.width / 2;
    var halfHeight = ellipse.height / 2;

    out.x = ellipse.x + halfWidth * Math.cos(angle);
    out.y = ellipse.y + halfHeight * Math.sin(angle);

    return out;
};

module.exports = CircumferencePoint;
