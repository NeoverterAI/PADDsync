/**
 * @typedef {object} PADDsync.Types.Cameras.Controls.FixedKeyControlConfig
 * @since 3.0.0
 *
 * @property {PADDsync.Cameras.Scene2D.Camera} [camera] - The Camera that this Control will update.
 * @property {PADDsync.Input.Keyboard.Key} [left] - The Key to be pressed that will move the Camera left.
 * @property {PADDsync.Input.Keyboard.Key} [right] - The Key to be pressed that will move the Camera right.
 * @property {PADDsync.Input.Keyboard.Key} [up] - The Key to be pressed that will move the Camera up.
 * @property {PADDsync.Input.Keyboard.Key} [down] - The Key to be pressed that will move the Camera down.
 * @property {PADDsync.Input.Keyboard.Key} [zoomIn] - The Key to be pressed that will zoom the Camera in.
 * @property {PADDsync.Input.Keyboard.Key} [zoomOut] - The Key to be pressed that will zoom the Camera out.
 * @property {number} [zoomSpeed=0.01] - The speed at which the camera will zoom if the `zoomIn` or `zoomOut` keys are pressed.
 * @property {(number|{x:number,y:number})} [speed=0] - The horizontal and vertical speed the camera will move.
 * @property {number} [minZoom=0.001] - The smallest zoom value the camera will reach when zoomed out.
 * @property {number} [maxZoom=1000] - The largest zoom value the camera will reach when zoomed in.
 */
