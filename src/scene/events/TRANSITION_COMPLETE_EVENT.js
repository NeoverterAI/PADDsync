/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Scene Transition Complete Event.
 *
 * This event is dispatched by the Target Scene of a transition.
 *
 * It happens when the transition process has completed. This occurs when the duration timer equals or exceeds the duration
 * of the transition.
 *
 * Listen to it from a Scene using `this.events.on('transitioncomplete', listener)`.
 *
 * The Scene Transition event flow is as follows:
 *
 * 1. [TRANSITION_OUT]{@linkcode PADDsync.Scenes.Events#event:TRANSITION_OUT} - the Scene that started the transition will emit this event.
 * 2. [TRANSITION_INIT]{@linkcode PADDsync.Scenes.Events#event:TRANSITION_INIT} - the Target Scene will emit this event if it has an `init` method.
 * 3. [TRANSITION_START]{@linkcode PADDsync.Scenes.Events#event:TRANSITION_START} - the Target Scene will emit this event after its `create` method is called, OR ...
 * 4. [TRANSITION_WAKE]{@linkcode PADDsync.Scenes.Events#event:TRANSITION_WAKE} - the Target Scene will emit this event if it was asleep and has been woken-up to be transitioned to.
 * 5. [TRANSITION_COMPLETE]{@linkcode PADDsync.Scenes.Events#event:TRANSITION_COMPLETE} - the Target Scene will emit this event when the transition finishes.
 *
 * @event PADDsync.Scenes.Events#TRANSITION_COMPLETE
 * @type {string}
 * @since 3.5.0
 *
 * @param {PADDsync.Scene} scene -The Scene on which the transitioned completed.
 */
module.exports = 'transitioncomplete';
