/**
 * @typedef {object} PADDsync.Types.GameObjects.Particles.ParticleEmitterConfig
 * @since 3.0.0
 *
 * @property {boolean} [active] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#active}. Setting this to false will stop the emitter from running at all. If you just wish to stop particles from emitting, set `emitting` property instead.
 * @property {PADDsync.BlendModes|string} [blendMode] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#blendMode}.
 * @property {*} [callbackScope] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#deathCallbackScope} and {@link PADDsync.GameObjects.Particles.ParticleEmitter#emitCallbackScope}.
 * @property {boolean} [collideBottom] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#collideBottom}.
 * @property {boolean} [collideLeft] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#collideLeft}.
 * @property {boolean} [collideRight] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#collideRight}.
 * @property {boolean} [collideTop] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#collideTop}.
 * @property {function} [deathCallback] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#deathCallback}.
 * @property {*} [deathCallbackScope] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#deathCallbackScope}.
 * @property {function} [emitCallback] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#emitCallback}.
 * @property {*} [emitCallbackScope] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#emitCallbackScope}.
 * @property {PADDsync.Types.Math.Vector2Like} [follow] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#follow}.
 * @property {number} [frequency] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#frequency}.
 * @property {number} [gravityX] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#gravityX}.
 * @property {number} [gravityY] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#gravityY}.
 * @property {number} [maxParticles] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#maxParticles}.
 * @property {number} [maxAliveParticles] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#maxAliveParticles}.
 * @property {string} [name] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#name}.
 * @property {boolean} [emitting] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#emitting}.
 * @property {boolean} [particleBringToTop] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#particleBringToTop}.
 * @property {function} [particleClass] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#particleClass}.
 * @property {boolean} [radial] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#radial}.
 * @property {number} [timeScale] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#timeScale}.
 * @property {boolean} [trackVisible] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#trackVisible}.
 * @property {boolean} [visible] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#visible}.
 * @property {PADDsync.Types.GameObjects.Particles.EmitterOpOnEmitType|PADDsync.Types.GameObjects.Particles.EmitterOpOnUpdateType} [accelerationX] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#accelerationX}.
 * @property {PADDsync.Types.GameObjects.Particles.EmitterOpOnEmitType|PADDsync.Types.GameObjects.Particles.EmitterOpOnUpdateType} [accelerationY] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#accelerationY}.
 * @property {PADDsync.Types.GameObjects.Particles.EmitterOpOnEmitType|PADDsync.Types.GameObjects.Particles.EmitterOpOnUpdateType} [alpha] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#particleAlpha}.
 * @property {PADDsync.Types.GameObjects.Particles.EmitterOpOnEmitType} [angle] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#particleAngle} (emit only).
 * @property {PADDsync.Types.GameObjects.Particles.EmitterOpOnEmitType|PADDsync.Types.GameObjects.Particles.EmitterOpOnUpdateType} [bounce] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#bounce}.
 * @property {PADDsync.Types.GameObjects.Particles.EmitterOpOnEmitType} [delay] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#delay} (emit only).
 * @property {PADDsync.Types.GameObjects.Particles.EmitterOpOnEmitType} [hold] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#hold} (emit only).
 * @property {PADDsync.Types.GameObjects.Particles.EmitterOpOnEmitType} [lifespan] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#lifespan} (emit only).
 * @property {PADDsync.Types.GameObjects.Particles.EmitterOpOnEmitType|PADDsync.Types.GameObjects.Particles.EmitterOpOnUpdateType} [maxVelocityX] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#maxVelocityX}.
 * @property {PADDsync.Types.GameObjects.Particles.EmitterOpOnEmitType|PADDsync.Types.GameObjects.Particles.EmitterOpOnUpdateType} [maxVelocityY] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#maxVelocityY}.
 * @property {PADDsync.Types.GameObjects.Particles.EmitterOpOnEmitType|PADDsync.Types.GameObjects.Particles.EmitterOpOnUpdateType} [moveToX] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#moveToX}. If set, overrides `angle` and `speed` properties.
 * @property {PADDsync.Types.GameObjects.Particles.EmitterOpOnEmitType|PADDsync.Types.GameObjects.Particles.EmitterOpOnUpdateType} [moveToY] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#moveToY}. If set, overrides `angle` and `speed` properties.
 * @property {PADDsync.Types.GameObjects.Particles.EmitterOpOnEmitType} [quantity] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#quantity} (emit only).
 * @property {PADDsync.Types.GameObjects.Particles.EmitterOpOnEmitType|PADDsync.Types.GameObjects.Particles.EmitterOpOnUpdateType} [rotate] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#particleRotate}.
 * @property {PADDsync.Types.GameObjects.Particles.EmitterOpOnEmitType|PADDsync.Types.GameObjects.Particles.EmitterOpOnUpdateType} [scale] - As {@link PADDsync.GameObjects.Particles.ParticleEmitter#setScale}.
 * @property {PADDsync.Types.GameObjects.Particles.EmitterOpOnEmitType|PADDsync.Types.GameObjects.Particles.EmitterOpOnUpdateType} [scaleX] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#particleScaleX}.
 * @property {PADDsync.Types.GameObjects.Particles.EmitterOpOnEmitType|PADDsync.Types.GameObjects.Particles.EmitterOpOnUpdateType} [scaleY] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#particleScaleY}.
 * @property {PADDsync.Types.GameObjects.Particles.EmitterOpOnEmitType} [speed] - As {@link PADDsync.GameObjects.Particles.ParticleEmitter#setSpeed} (emit only).
 * @property {PADDsync.Types.GameObjects.Particles.EmitterOpOnEmitType} [speedX] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#speedX} (emit only).
 * @property {PADDsync.Types.GameObjects.Particles.EmitterOpOnEmitType} [speedY] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#speedY} (emit only).
 * @property {PADDsync.Types.GameObjects.Particles.EmitterOpOnEmitType|PADDsync.Types.GameObjects.Particles.EmitterOpOnUpdateType} [tint] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#particleTint}.
 * @property {number[]} [color] - An array of color values that the Particles interpolate through during their life. If set, overrides any `tint` property.
 * @property {string} [colorEase] - The string-based name of the Easing function to use if you have enabled Particle color interpolation via the `color` property, otherwise has no effect.
 * @property {PADDsync.Types.GameObjects.Particles.EmitterOpOnEmitType|PADDsync.Types.GameObjects.Particles.EmitterOpOnUpdateType} [x] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#particleX}.
 * @property {PADDsync.Types.GameObjects.Particles.EmitterOpOnEmitType|PADDsync.Types.GameObjects.Particles.EmitterOpOnUpdateType} [y] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#particleY}.
 * @property {PADDsync.Types.GameObjects.Particles.EmitZoneData|PADDsync.Types.GameObjects.Particles.EmitZoneData[]} [emitZone] - As {@link PADDsync.GameObjects.Particles.ParticleEmitter#setEmitZone}.
 * @property {PADDsync.Types.GameObjects.Particles.DeathZoneObject|PADDsync.Types.GameObjects.Particles.DeathZoneObject[]} [deathZone] - As {@link PADDsync.GameObjects.Particles.ParticleEmitter#setDeathZone}.
 * @property {PADDsync.Types.GameObjects.Particles.ParticleEmitterBounds|PADDsync.Types.GameObjects.Particles.ParticleEmitterBoundsAlt} [bounds] - As {@link PADDsync.GameObjects.Particles.ParticleEmitter#setBounds}.
 * @property {PADDsync.Types.Math.Vector2Like} [followOffset] - Offset coordinates that assigns to {@link PADDsync.GameObjects.Particles.ParticleEmitter#followOffset}.
 * @property {string|string[]|PADDsync.Types.GameObjects.Particles.ParticleEmitterAnimConfig} [anim] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#anims}.
 * @property {number|number[]|string|string[]|PADDsync.Textures.Frame|PADDsync.Textures.Frame[]|PADDsync.Types.GameObjects.Particles.ParticleEmitterFrameConfig} [frame] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#frames}.
 * @property {string|PADDsync.Textures.Texture} [texture] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#texture}. Overrides any texture already set on the Emitter.
 * @property {number} [reserve] - Creates specified number of inactive particles and adds them to this emitter's pool. {@link PADDsync.GameObjects.Particles.ParticleEmitter#reserve}
 * @property {number} [advance] - If you wish to 'fast forward' the emitter in time, set this value to a number representing the amount of ms the emitter should advance. Doing so implicitly sets `emitting` to `true`.
 * @property {number} [duration] - Limit the emitter to emit particles for a maximum of `duration` ms. Default to zero, meaning 'forever'.
 * @property {number} [stopAfter] - Limit the emitter to emit this exact number of particles and then stop. Default to zero, meaning no limit.
 * @property {PADDsync.Types.GameObjects.Particles.ParticleSortCallback} [sortCallback] - A custom callback that sorts particles prior to rendering. Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#sortCallback}.
 * @property {boolean} [sortOrderAsc] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#sortOrderAsc}.
 * @property {string} [sortProperty] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#sortProperty}.
 * @property {boolean} [tintFill] - Sets {@link PADDsync.GameObjects.Particles.ParticleEmitter#tintFill}.
 */
