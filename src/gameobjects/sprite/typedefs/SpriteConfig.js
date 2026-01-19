/**
 * @typedef {object} PADDsync.Types.GameObjects.Sprite.SpriteConfig
 * @extends PADDsync.Types.GameObjects.GameObjectConfig
 * @since 3.0.0
 *
 * @property {(string|PADDsync.Textures.Texture)} [key] - The key, or instance of the Texture this Game Object will use to render with, as stored in the Texture Manager.
 * @property {(string|number)} [frame] - An optional frame from the Texture this Game Object is rendering with.
 * @property {(string|PADDsync.Animations.Animation|PADDsync.Types.Animations.PlayAnimationConfig)} [anims] - The string-based key of the animation to play, or an Animation instance, or a `PlayAnimationConfig` object.
 * @property {boolean} [useSpriteSheet] - This property is used exclusively by `Tilemap.createFromTiles`. Set to `true` if this Sprite is being created by a Tilemap and is part of a spritesheet.
 */
