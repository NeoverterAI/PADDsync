/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Point = require('./Point');

/**
 * Calculates the vector projection of `pointA` onto the nonzero `pointB`. This is the
 * orthogonal projection of `pointA` onto a straight line paralle to `pointB`.
 *
 * @function PADDsync.Geom.Point.ProjectUnit
 * @since 3.0.0
 *
 * @generic {PADDsync.Geom.Point} O - [out,$return]
 *
 * @param {PADDsync.Geom.Point} pointA - Point A, to be projected onto Point B. Must be a normalized point with a magnitude of 1.
 * @param {PADDsync.Geom.Point} pointB - Point B, to have Point A projected upon it.
 * @param {PADDsync.Geom.Point} [out] - The Point object to store the position in. If not given, a new Point instance is created.
 *
 * @return {PADDsync.Geom.Point} A unit Point object holding the coordinates of the vector projection of `pointA` onto `pointB`.
 */
var ProjectUnit = function (pointA, pointB, out)
{
    if (out === undefined) { out = new Point(); }

    var amt = ((pointA.x * pointB.x) + (pointA.y * pointB.y));

    if (amt !== 0)
    {
        out.x = amt * pointB.x;
        out.y = amt * pointB.y;
    }

    return out;
};

module.exports = ProjectUnit;
