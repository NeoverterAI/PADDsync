/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Rectangle = require('../rectangle/Rectangle');

/**
 * Returns the bounds of the Ellipse object.
 *
 * @function PADDsync.Geom.Ellipse.GetBounds
 * @since 3.0.0
 *
 * @generic {PADDsync.Geom.Rectangle} O - [out,$return]
 *
 * @param {PADDsync.Geom.Ellipse} ellipse - The Ellipse to get the bounds from.
 * @param {(PADDsync.Geom.Rectangle|object)} [out] - A Rectangle, or rectangle-like object, to store the ellipse bounds in. If not given a new Rectangle will be created.
 *
 * @return {(PADDsync.Geom.Rectangle|object)} The Rectangle object containing the Ellipse bounds.
 */
var GetBounds = function (ellipse, out)
{
    if (out === undefined) { out = new Rectangle(); }

    out.x = ellipse.left;
    out.y = ellipse.top;
    out.width = ellipse.width;
    out.height = ellipse.height;

    return out;
};

module.exports = GetBounds;
