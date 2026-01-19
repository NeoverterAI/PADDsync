/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Offsets the Ellipse by the values given.
 *
 * @function PADDsync.Geom.Ellipse.Offset
 * @since 3.0.0
 *
 * @generic {PADDsync.Geom.Ellipse} O - [ellipse,$return]
 *
 * @param {PADDsync.Geom.Ellipse} ellipse - The Ellipse to be offset (translated.)
 * @param {number} x - The amount to horizontally offset the Ellipse by.
 * @param {number} y - The amount to vertically offset the Ellipse by.
 *
 * @return {PADDsync.Geom.Ellipse} The Ellipse that was offset.
 */
var Offset = function (ellipse, x, y)
{
    ellipse.x += x;
    ellipse.y += y;

    return ellipse;
};

module.exports = Offset;
