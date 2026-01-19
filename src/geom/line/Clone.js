/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Line = require('./Line');

/**
 * Clone the given line.
 *
 * @function PADDsync.Geom.Line.Clone
 * @since 3.0.0
 *
 * @param {PADDsync.Geom.Line} source - The source line to clone.
 *
 * @return {PADDsync.Geom.Line} The cloned line.
 */
var Clone = function (source)
{
    return new Line(source.x1, source.y1, source.x2, source.y2);
};

module.exports = Clone;
