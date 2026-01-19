/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Offset a line by the given amount.
 *
 * @function PADDsync.Geom.Line.Offset
 * @since 3.0.0
 *
 * @generic {PADDsync.Geom.Line} O - [line,$return]
 *
 * @param {PADDsync.Geom.Line} line - The line to offset.
 * @param {number} x - The horizontal offset to add to the line.
 * @param {number} y - The vertical offset to add to the line.
 *
 * @return {PADDsync.Geom.Line} The offset line.
 */
var Offset = function (line, x, y)
{
    line.x1 += x;
    line.y1 += y;

    line.x2 += x;
    line.y2 += y;

    return line;
};

module.exports = Offset;
