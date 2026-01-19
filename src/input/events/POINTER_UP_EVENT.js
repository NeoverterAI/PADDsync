/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Pointer Up Input Event.
 *
 * This event is dispatched by the Input Plugin belonging to a Scene if a pointer is released anywhere.
 *
 * Listen to this event from within a Scene using: `this.input.on('pointerup', listener)`.
 *
 * The event hierarchy is as follows:
 *
 * 1. [GAMEOBJECT_POINTER_UP]{@linkcode PADDsync.Input.Events#event:GAMEOBJECT_POINTER_UP}
 * 2. [GAMEOBJECT_UP]{@linkcode PADDsync.Input.Events#event:GAMEOBJECT_UP}
 * 3. [POINTER_UP]{@linkcode PADDsync.Input.Events#event:POINTER_UP} or [POINTER_UP_OUTSIDE]{@linkcode PADDsync.Input.Events#event:POINTER_UP_OUTSIDE}
 *
 * With the top event being dispatched first and then flowing down the list. Note that higher-up event handlers can stop
 * the propagation of this event.
 *
 * @event PADDsync.Input.Events#POINTER_UP
 * @type {string}
 * @since 3.0.0
 *
 * @param {PADDsync.Input.Pointer} pointer - The Pointer responsible for triggering this event.
 * @param {PADDsync.GameObjects.GameObject[]} currentlyOver - An array containing all interactive Game Objects that the pointer was over when the event was created.
 */
module.exports = 'pointerup';
