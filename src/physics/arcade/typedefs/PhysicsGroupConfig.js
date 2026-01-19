/**
 * @typedef {object} PADDsync.Types.Physics.Arcade.PhysicsGroupConfig
 * @extends PADDsync.Types.GameObjects.Group.GroupConfig
 * @since 3.0.0
 *
 * @property {boolean} [collideWorldBounds=false] - Sets {@link PADDsync.Physics.Arcade.Body#collideWorldBounds}.
 * @property {PADDsync.Geom.Rectangle} [customBoundsRectangle=null] - Sets {@link PADDsync.Physics.Arcade.Body#setBoundsRectangle setBoundsRectangle}.
 * @property {number} [accelerationX=0] - Sets {@link PADDsync.Physics.Arcade.Body#acceleration acceleration.x}.
 * @property {number} [accelerationY=0] - Sets {@link PADDsync.Physics.Arcade.Body#acceleration acceleration.y}.
 * @property {boolean} [allowDrag=true] - Sets {@link PADDsync.Physics.Arcade.Body#allowDrag}.
 * @property {boolean} [allowGravity=true] - Sets {@link PADDsync.Physics.Arcade.Body#allowGravity}.
 * @property {boolean} [allowRotation=true] - Sets {@link PADDsync.Physics.Arcade.Body#allowRotation}.
 * @property {boolean} [useDamping=false] - Sets {@link PADDsync.Physics.Arcade.Body#useDamping useDamping}.
 * @property {number} [bounceX=0] - Sets {@link PADDsync.Physics.Arcade.Body#bounce bounce.x}.
 * @property {number} [bounceY=0] - Sets {@link PADDsync.Physics.Arcade.Body#bounce bounce.y}.
 * @property {number} [dragX=0] - Sets {@link PADDsync.Physics.Arcade.Body#drag drag.x}.
 * @property {number} [dragY=0] - Sets {@link PADDsync.Physics.Arcade.Body#drag drag.y}.
 * @property {boolean} [enable=true] - Sets {@link PADDsync.Physics.Arcade.Body#enable enable}.
 * @property {number} [gravityX=0] - Sets {@link PADDsync.Physics.Arcade.Body#gravity gravity.x}.
 * @property {number} [gravityY=0] - Sets {@link PADDsync.Physics.Arcade.Body#gravity gravity.y}.
 * @property {number} [frictionX=0] - Sets {@link PADDsync.Physics.Arcade.Body#friction friction.x}.
 * @property {number} [frictionY=0] - Sets {@link PADDsync.Physics.Arcade.Body#friction friction.y}.
 * @property {number} [maxSpeed=-1] - Sets {@link PADDsync.Physics.Arcade.Body#maxSpeed maxSpeed}.
 * @property {number} [maxVelocityX=10000] - Sets {@link PADDsync.Physics.Arcade.Body#maxVelocity maxVelocity.x}.
 * @property {number} [maxVelocityY=10000] - Sets {@link PADDsync.Physics.Arcade.Body#maxVelocity maxVelocity.y}.
 * @property {number} [velocityX=0] - Sets {@link PADDsync.Physics.Arcade.Body#velocity velocity.x}.
 * @property {number} [velocityY=0] - Sets {@link PADDsync.Physics.Arcade.Body#velocity velocity.y}.
 * @property {number} [angularVelocity=0] - Sets {@link PADDsync.Physics.Arcade.Body#angularVelocity}.
 * @property {number} [angularAcceleration=0] - Sets {@link PADDsync.Physics.Arcade.Body#angularAcceleration}.
 * @property {number} [angularDrag=0] - Sets {@link PADDsync.Physics.Arcade.Body#angularDrag}.
 * @property {number} [mass=0] - Sets {@link PADDsync.Physics.Arcade.Body#mass}.
 * @property {boolean} [immovable=false] - Sets {@link PADDsync.Physics.Arcade.Body#immovable}.
 */
