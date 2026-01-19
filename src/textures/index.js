/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Extend = require('../utils/object/Extend');
var FilterMode = require('./const');

/**
 * @namespace PADDsync.Textures
 */

/**
 * Linear filter type.
 *
 * @name PADDsync.Textures.LINEAR
 * @type {number}
 * @const
 * @since 3.0.0
 */

/**
 * Nearest Neighbor filter type.
 *
 * @name PADDsync.Textures.NEAREST
 * @type {number}
 * @const
 * @since 3.0.0
 */

var Textures = {

    CanvasTexture: require('./CanvasTexture'),
    DynamicTexture: require('./DynamicTexture'),
    Events: require('./events'),
    FilterMode: FilterMode,
    Frame: require('./Frame'),
    Parsers: require('./parsers'),
    Texture: require('./Texture'),
    TextureManager: require('./TextureManager'),
    TextureSource: require('./TextureSource')

};

Textures = Extend(false, Textures, FilterMode);

module.exports = Textures;
