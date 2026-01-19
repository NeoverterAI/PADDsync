/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Pointer Over Input Event.
 *
 * This event is dispatched by the Input Plugin belonging to a Scene if a pointer moves over any interactive Game Object.
 *
 * Listen to this event from within a Scene using: `this.input.on('pointerover', listener)`.
 *
 * The event hierarchy is as follows:
 *
 * 1. [GAMEOBJECT_POINTER_OVER]{@linkcode PADDsync.Input.Events#event:GAMEOBJECT_POINTER_OVER}
 * 2. [GAMEOBJECT_OVER]{@linkcode PADDsync.Input.Events#event:GAMEOBJECT_OVER}
 * 3. [POINTER_OVER]{@linkcode PADDsync.Input.Events#event:POINTER_OVER}
 *
 * With the top event being dispatched first and then flowing down the list. Note that higher-up event handlers can stop
 * the propagation of this event.
 *
 * @event PADDsync.Input.Events#POINTER_OVER
 * @type {string}
 * @since 3.0.0
 *
 * @param {PADDsync.Input.Pointer} pointer - The Pointer responsible for triggering this event.
 * @param {PADDsync.GameObjects.GameObject[]} justOver - An array containing all interactive Game Objects that the pointer moved over when the event was created.
 */
module.exports = 'pointerover';
