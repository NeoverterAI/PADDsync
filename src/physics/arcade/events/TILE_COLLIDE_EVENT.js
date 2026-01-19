/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Arcade Physics Tile Collide Event.
 *
 * This event is dispatched by an Arcade Physics World instance if a body collides with a Tile _and_
 * has its [onCollide]{@link PADDsync.Physics.Arcade.Body#onCollide} property set to `true`.
 *
 * It provides an alternative means to handling collide events rather than using the callback approach.
 *
 * Listen to it from a Scene using: `this.physics.world.on('tilecollide', listener)`.
 *
 * Please note that 'collide' and 'overlap' are two different things in Arcade Physics.
 *
 * @event PADDsync.Physics.Arcade.Events#TILE_COLLIDE
 * @type {string}
 * @since 3.16.1
 *
 * @param {PADDsync.GameObjects.GameObject} gameObject - The Game Object involved in the collision. This is the parent of `body`.
 * @param {PADDsync.Tilemaps.Tile} tile - The tile the body collided with.
 * @param {PADDsync.Physics.Arcade.Body} body - The Arcade Physics Body of the Game Object involved in the collision.
 */
module.exports = 'tilecollide';
