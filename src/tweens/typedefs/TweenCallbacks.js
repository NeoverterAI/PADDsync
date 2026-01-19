/**
 * @typedef {object} PADDsync.Types.Tweens.TweenCallbacks
 * @since 3.60.0
 *
 * @property {PADDsync.Types.Tweens.TweenOnActiveCallback} [onActive] - A function to call when the tween becomes active within the Tween Manager.
 * @property {PADDsync.Types.Tweens.TweenOnStartCallback} [onStart] - A function to call when the tween starts playback, after any delays have expired.
 * @property {PADDsync.Types.Tweens.TweenOnCompleteCallback} [onComplete] - A function to call when the tween completes.
 * @property {PADDsync.Types.Tweens.TweenOnLoopCallback} [onLoop] - A function to call each time the tween loops.
 * @property {PADDsync.Types.Tweens.TweenOnPauseCallback} [onPause] - A function to call each time the tween is paused.
 * @property {PADDsync.Types.Tweens.TweenOnResumeCallback} [onResume] - A function to call each time the tween is resumed.
 * @property {PADDsync.Types.Tweens.TweenOnRepeatCallback} [onRepeat] - A function to call each time the tween repeats. Called once per property per target.
 * @property {PADDsync.Types.Tweens.TweenOnStopCallback} [onStop] - A function to call when the tween is stopped.
 * @property {PADDsync.Types.Tweens.TweenOnUpdateCallback} [onUpdate] - A function to call each time the tween steps. Called once per property per target.
 * @property {PADDsync.Types.Tweens.TweenOnYoyoCallback} [onYoyo] - A function to call each time the tween yoyos. Called once per property per target.
 */
