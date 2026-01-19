/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Key Up Event.
 *
 * This event is dispatched by a [Key]{@link PADDsync.Input.Keyboard.Key} object when it is released.
 *
 * Listen for this event from the Key object instance directly:
 *
 * ```javascript
 * var spaceBar = this.input.keyboard.addKey(PADDsync.Input.Keyboard.KeyCodes.SPACE);
 *
 * spaceBar.on('up', listener)
 * ```
 *
 * You can also create a generic 'global' listener. See [Keyboard.Events.ANY_KEY_UP]{@linkcode PADDsync.Input.Keyboard.Events#event:ANY_KEY_UP} for details.
 *
 * @event PADDsync.Input.Keyboard.Events#UP
 * @type {string}
 * @since 3.0.0
 *
 * @param {PADDsync.Input.Keyboard.Key} key - The Key object that was released.
 * @param {KeyboardEvent} event - The native DOM Keyboard Event. You can inspect this to learn more about any modifiers, etc.
 */
module.exports = 'up';
