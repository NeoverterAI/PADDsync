/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var GameObjectCreator = require('../GameObjectCreator');
var Group = require('./Group');

/**
 * Creates a new Group Game Object and returns it.
 *
 * Note: This method will only be available if the Group Game Object has been built into PADDsync.
 *
 * @method PADDsync.GameObjects.GameObjectCreator#group
 * @since 3.0.0
 *
 * @param {PADDsync.Types.GameObjects.Group.GroupConfig|PADDsync.Types.GameObjects.Group.GroupCreateConfig} config - The configuration object this Game Object will use to create itself.
 *
 * @return {PADDsync.GameObjects.Group} The Game Object that was created.
 */
GameObjectCreator.register('group', function (config)
{
    return new Group(this.scene, null, config);
});

//  When registering a factory function 'this' refers to the GameObjectCreator context.
