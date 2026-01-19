/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var BuildGameObject = require('../BuildGameObject');
var GameObjectCreator = require('../GameObjectCreator');
var GetAdvancedValue = require('../../utils/object/GetAdvancedValue');
var TileSprite = require('./TileSprite');

/**
 * Creates a new TileSprite Game Object and returns it.
 *
 * Note: This method will only be available if the TileSprite Game Object has been built into PADDsync.
 *
 * @method PADDsync.GameObjects.GameObjectCreator#tileSprite
 * @since 3.0.0
 *
 * @param {PADDsync.Types.GameObjects.TileSprite.TileSpriteConfig} config - The configuration object this Game Object will use to create itself.
 * @param {boolean} [addToScene] - Add this Game Object to the Scene after creating it? If set this argument overrides the `add` property in the config object.
 *
 * @return {PADDsync.GameObjects.TileSprite} The Game Object that was created.
 */
GameObjectCreator.register('tileSprite', function (config, addToScene)
{
    if (config === undefined) { config = {}; }

    var x = GetAdvancedValue(config, 'x', 0);
    var y = GetAdvancedValue(config, 'y', 0);
    var width = GetAdvancedValue(config, 'width', 512);
    var height = GetAdvancedValue(config, 'height', 512);
    var key = GetAdvancedValue(config, 'key', '');
    var frame = GetAdvancedValue(config, 'frame', '');

    var tile = new TileSprite(this.scene, x, y, width, height, key, frame);

    if (addToScene !== undefined)
    {
        config.add = addToScene;
    }

    BuildGameObject(this.scene, tile, config);

    return tile;
});
