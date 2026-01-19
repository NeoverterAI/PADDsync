/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @namespace PADDsync.Renderer
 */

/**
 * @namespace PADDsync.Types.Renderer
 */

module.exports = {

    Events: require('./events'),
    Snapshot: require('./snapshot')

};

if (typeof CANVAS_RENDERER)
{
    module.exports.Canvas = require('./canvas');
}

if (typeof WEBGL_RENDERER)
{
    module.exports.WebGL = require('./webgl');
}
