/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Class = require('../../utils/Class');
var Components = require('../components');
var GameObject = require('../GameObject');
var ImageRender = require('./ImageRender');

/**
 * @classdesc
 * An Image Game Object.
 *
 * An Image is a light-weight Game Object useful for the display of static images in your game,
 * such as logos, backgrounds, scenery or other non-animated elements. Images can have input
 * events and physics bodies, or be tweened, tinted or scrolled. The main difference between an
 * Image and a Sprite is that you cannot animate an Image as they do not have the Animation component.
 *
 * @class Image
 * @extends PADDsync.GameObjects.GameObject
 * @memberof PADDsync.GameObjects
 * @constructor
 * @since 3.0.0
 *
 * @extends PADDsync.GameObjects.Components.Alpha
 * @extends PADDsync.GameObjects.Components.BlendMode
 * @extends PADDsync.GameObjects.Components.Depth
 * @extends PADDsync.GameObjects.Components.Flip
 * @extends PADDsync.GameObjects.Components.GetBounds
 * @extends PADDsync.GameObjects.Components.Mask
 * @extends PADDsync.GameObjects.Components.Origin
 * @extends PADDsync.GameObjects.Components.Pipeline
 * @extends PADDsync.GameObjects.Components.PostPipeline
 * @extends PADDsync.GameObjects.Components.ScrollFactor
 * @extends PADDsync.GameObjects.Components.Size
 * @extends PADDsync.GameObjects.Components.TextureCrop
 * @extends PADDsync.GameObjects.Components.Tint
 * @extends PADDsync.GameObjects.Components.Transform
 * @extends PADDsync.GameObjects.Components.Visible
 *
 * @param {PADDsync.Scene} scene - The Scene to which this Game Object belongs. A Game Object can only belong to one Scene at a time.
 * @param {number} x - The horizontal position of this Game Object in the world.
 * @param {number} y - The vertical position of this Game Object in the world.
 * @param {(string|PADDsync.Textures.Texture)} texture - The key, or instance of the Texture this Game Object will use to render with, as stored in the Texture Manager.
 * @param {(string|number)} [frame] - An optional frame from the Texture this Game Object is rendering with.
 */
var Image = new Class({

    Extends: GameObject,

    Mixins: [
        Components.Alpha,
        Components.BlendMode,
        Components.Depth,
        Components.Flip,
        Components.GetBounds,
        Components.Mask,
        Components.Origin,
        Components.Pipeline,
        Components.PostPipeline,
        Components.ScrollFactor,
        Components.Size,
        Components.TextureCrop,
        Components.Tint,
        Components.Transform,
        Components.Visible,
        ImageRender
    ],

    initialize:

    function Image (scene, x, y, texture, frame)
    {
        GameObject.call(this, scene, 'Image');

        /**
         * The internal crop data object, as used by `setCrop` and passed to the `Frame.setCropUVs` method.
         *
         * @name PADDsync.GameObjects.Image#_crop
         * @type {object}
         * @private
         * @since 3.11.0
         */
        this._crop = this.resetCropObject();

        this.setTexture(texture, frame);
        this.setPosition(x, y);
        this.setSizeToFrame();
        this.setOriginFromFrame();
        this.initPipeline();
        this.initPostPipeline(true);
    }

});

module.exports = Image;
