/**
 * @typedef {object} PADDsync.Types.Physics.Arcade.ArcadeWorldConfig
 * @since 3.0.0
 *
 * @property {number} [fps=60] - Sets {@link PADDsync.Physics.Arcade.World#fps}.
 * @property {boolean} [fixedStep=true] - Sets {@link PADDsync.Physics.Arcade.World#fixedStep}.
 * @property {number} [timeScale=1] - Sets {@link PADDsync.Physics.Arcade.World#timeScale}.
 * @property {PADDsync.Types.Math.Vector2Like} [gravity] - Sets {@link PADDsync.Physics.Arcade.World#gravity}.
 * @property {number} [x=0] - Sets {@link PADDsync.Physics.Arcade.World#bounds bounds.x}.
 * @property {number} [y=0] - Sets {@link PADDsync.Physics.Arcade.World#bounds bounds.y}.
 * @property {number} [width=0] - Sets {@link PADDsync.Physics.Arcade.World#bounds bounds.width}.
 * @property {number} [height=0] - Sets {@link PADDsync.Physics.Arcade.World#bounds bounds.height}.
 * @property {PADDsync.Types.Physics.Arcade.CheckCollisionObject} [checkCollision] - Sets {@link PADDsync.Physics.Arcade.World#checkCollision}.
 * @property {number} [overlapBias=4] - Sets {@link PADDsync.Physics.Arcade.World#OVERLAP_BIAS}.
 * @property {number} [tileBias=16] - Sets {@link PADDsync.Physics.Arcade.World#TILE_BIAS}.
 * @property {boolean} [forceX=false] - Sets {@link PADDsync.Physics.Arcade.World#forceX}.
 * @property {boolean} [isPaused=false] - Sets {@link PADDsync.Physics.Arcade.World#isPaused}.
 * @property {boolean} [debug=false] - Sets {@link PADDsync.Physics.Arcade.World#debug}.
 * @property {boolean} [debugShowBody=true] - Sets {@link PADDsync.Physics.Arcade.World#defaults debugShowBody}.
 * @property {boolean} [debugShowStaticBody=true] - Sets {@link PADDsync.Physics.Arcade.World#defaults debugShowStaticBody}.
 * @property {boolean} [debugShowVelocity=true] - Sets {@link PADDsync.Physics.Arcade.World#defaults debugShowStaticBody}.
 * @property {number} [debugBodyColor=0xff00ff] - Sets {@link PADDsync.Physics.Arcade.World#defaults bodyDebugColor}.
 * @property {number} [debugStaticBodyColor=0x0000ff] - Sets {@link PADDsync.Physics.Arcade.World#defaults staticBodyDebugColor}.
 * @property {number} [debugVelocityColor=0x00ff00] - Sets {@link PADDsync.Physics.Arcade.World#defaults velocityDebugColor}.
 * @property {number} [maxEntries=16] - Sets {@link PADDsync.Physics.Arcade.World#maxEntries}.
 * @property {boolean} [useTree=true] - Sets {@link PADDsync.Physics.Arcade.World#useTree}.
 * @property {boolean} [customUpdate=false] - If enabled, you need to call `World.update` yourself.
 */
