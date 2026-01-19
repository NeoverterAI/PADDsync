/**
 * @typedef {object} PADDsync.Types.Core.InputConfig
 * @since 3.0.0
 *
 * @property {(boolean|PADDsync.Types.Core.KeyboardInputConfig)} [keyboard=true] - Keyboard input configuration. `true` uses the default configuration and `false` disables keyboard input.
 * @property {(boolean|PADDsync.Types.Core.MouseInputConfig)} [mouse=true] - Mouse input configuration. `true` uses the default configuration and `false` disables mouse input.
 * @property {(boolean|PADDsync.Types.Core.TouchInputConfig)} [touch=true] - Touch input configuration. `true` uses the default configuration and `false` disables touch input.
 * @property {(boolean|PADDsync.Types.Core.GamepadInputConfig)} [gamepad=false] - Gamepad input configuration. `true` enables gamepad input.
 * @property {number} [activePointers=1] - The maximum number of touch pointers. See {@link PADDsync.Input.InputManager#pointers}.
 * @property {number} [smoothFactor=0] - The smoothing factor to apply during Pointer movement. See {@link PADDsync.Input.Pointer#smoothFactor}.
 * @property {boolean} [windowEvents=true] - Should Phaser listen for input events on the Window? If you disable this, events like 'POINTER_UP_OUTSIDE' will no longer fire.
 */
