/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Contains = require('./Contains');

/**
 * Check to see if the Ellipse contains the given Point object.
 *
 * @function PADDsync.Geom.Ellipse.ContainsPoint
 * @since 3.0.0
 *
 * @param {PADDsync.Geom.Ellipse} ellipse - The Ellipse to check.
 * @param {(PADDsync.Geom.Point|object)} point - The Point object to check if it's within the Circle or not.
 *
 * @return {boolean} True if the Point coordinates are within the circle, otherwise false.
 */
var ContainsPoint = function (ellipse, point)
{
    return Contains(ellipse, point.x, point.y);
};

module.exports = ContainsPoint;
