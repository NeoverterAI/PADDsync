/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Group = require('./Group');
var GameObjectFactory = require('../GameObjectFactory');

/**
 * Creates a new Group Game Object and adds it to the Scene.
 *
 * Note: This method will only be available if the Group Game Object has been built into PADDsync.
 *
 * @method PADDsync.GameObjects.GameObjectFactory#group
 * @since 3.0.0
 *
 * @param {(PADDsync.GameObjects.GameObject[]|PADDsync.Types.GameObjects.Group.GroupConfig|PADDsync.Types.GameObjects.Group.GroupConfig[]|PADDsync.Types.GameObjects.Group.GroupCreateConfig)} [children] - Game Objects to add to this Group; or the `config` argument.
 * @param {PADDsync.Types.GameObjects.Group.GroupConfig|PADDsync.Types.GameObjects.Group.GroupCreateConfig} [config] - A Group Configuration object.
 *
 * @return {PADDsync.GameObjects.Group} The Game Object that was created.
 */
GameObjectFactory.register('group', function (children, config)
{
    return this.updateList.add(new Group(this.scene, children, config));
});
