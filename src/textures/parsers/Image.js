/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Adds an Image Element to a Texture.
 *
 * @function PADDsync.Textures.Parsers.Image
 * @memberof PADDsync.Textures.Parsers
 * @private
 * @since 3.0.0
 *
 * @param {PADDsync.Textures.Texture} texture - The Texture to add the Frames to.
 * @param {number} sourceIndex - The index of the TextureSource.
 *
 * @return {PADDsync.Textures.Texture} The Texture modified by this parser.
 */
var Image = function (texture, sourceIndex)
{
    var source = texture.source[sourceIndex];

    texture.add('__BASE', sourceIndex, 0, 0, source.width, source.height);

    return texture;
};

module.exports = Image;
