/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Texture Load Event.
 *
 * This event is dispatched by the Texture Manager when a texture has finished loading on it.
 * This only happens for base64 encoded textures. All other texture types are loaded via the Loader Plugin.
 *
 * Listen to this event from within a Scene using: `this.textures.on('onload', listener)`.
 *
 * This event is dispatched after the [ADD]{@linkcode PADDsync.Textures.Events#event:ADD} event.
 *
 * @event PADDsync.Textures.Events#LOAD
 * @type {string}
 * @since 3.0.0
 *
 * @param {string} key - The key of the Texture that was loaded by the Texture Manager.
 * @param {PADDsync.Textures.Texture} texture - A reference to the Texture that was loaded by the Texture Manager.
 */
module.exports = 'onload';
