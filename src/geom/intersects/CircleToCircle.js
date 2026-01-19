/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var DistanceBetween = require('../../math/distance/DistanceBetween');

/**
 * Checks if two Circles intersect.
 *
 * @function PADDsync.Geom.Intersects.CircleToCircle
 * @since 3.0.0
 *
 * @param {PADDsync.Geom.Circle} circleA - The first Circle to check for intersection.
 * @param {PADDsync.Geom.Circle} circleB - The second Circle to check for intersection.
 *
 * @return {boolean} `true` if the two Circles intersect, otherwise `false`.
 */
var CircleToCircle = function (circleA, circleB)
{
    return (DistanceBetween(circleA.x, circleA.y, circleB.x, circleB.y) <= (circleA.radius + circleB.radius));
};

module.exports = CircleToCircle;
