/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculates the area of the Ellipse.
 *
 * @function PADDsync.Geom.Ellipse.Area
 * @since 3.0.0
 *
 * @param {PADDsync.Geom.Ellipse} ellipse - The Ellipse to get the area of.
 *
 * @return {number} The area of the Ellipse.
 */
var Area = function (ellipse)
{
    if (ellipse.isEmpty())
    {
        return 0;
    }

    //  units squared
    return (ellipse.getMajorRadius() * ellipse.getMinorRadius() * Math.PI);
};

module.exports = Area;
