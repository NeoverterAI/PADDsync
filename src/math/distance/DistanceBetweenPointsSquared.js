/**
 * @author       samme
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculate the squared distance between two points.
 *
 * @function PADDsync.Math.Distance.BetweenPointsSquared
 * @since 3.22.0
 *
 * @param {PADDsync.Types.Math.Vector2Like} a - The first point.
 * @param {PADDsync.Types.Math.Vector2Like} b - The second point.
 *
 * @return {number} The squared distance between the points.
 */
var DistanceBetweenPointsSquared = function (a, b)
{
    var dx = a.x - b.x;
    var dy = a.y - b.y;

    return dx * dx + dy * dy;
};

module.exports = DistanceBetweenPointsSquared;
