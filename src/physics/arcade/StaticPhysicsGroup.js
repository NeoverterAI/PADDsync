/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var ArcadeSprite = require('./ArcadeSprite');
var Class = require('../../utils/Class');
var CollisionComponent = require('./components/Collision');
var CONST = require('./const');
var GetFastValue = require('../../utils/object/GetFastValue');
var Group = require('../../gameobjects/group/Group');
var IsPlainObject = require('../../utils/object/IsPlainObject');

/**
 * @classdesc
 * An Arcade Physics Static Group object.
 *
 * All Game Objects created by or added to this Group will automatically be given static Arcade Physics bodies, if they have no body.
 *
 * Its dynamic counterpart is {@link PADDsync.Physics.Arcade.Group}.
 *
 * @class StaticGroup
 * @extends PADDsync.GameObjects.Group
 * @memberof PADDsync.Physics.Arcade
 * @constructor
 * @since 3.0.0
 *
 * @extends PADDsync.Physics.Arcade.Components.Collision
 *
 * @param {PADDsync.Physics.Arcade.World} world - The physics simulation.
 * @param {PADDsync.Scene} scene - The scene this group belongs to.
 * @param {(PADDsync.GameObjects.GameObject[]|PADDsync.Types.GameObjects.Group.GroupConfig|PADDsync.Types.GameObjects.Group.GroupCreateConfig)} [children] - Game Objects to add to this group; or the `config` argument.
 * @param {PADDsync.Types.GameObjects.Group.GroupConfig|PADDsync.Types.GameObjects.Group.GroupCreateConfig} [config] - Settings for this group.
 */
var StaticPhysicsGroup = new Class({

    Extends: Group,

    Mixins: [
        CollisionComponent
    ],

    initialize:

    function StaticPhysicsGroup (world, scene, children, config)
    {
        if (!children && !config)
        {
            config = {
                internalCreateCallback: this.createCallbackHandler,
                internalRemoveCallback: this.removeCallbackHandler,
                createMultipleCallback: this.createMultipleCallbackHandler,
                classType: ArcadeSprite
            };
        }
        else if (IsPlainObject(children))
        {
            //  children is a plain object, so swizzle them:
            config = children;
            children = null;

            config.internalCreateCallback = this.createCallbackHandler;
            config.internalRemoveCallback = this.removeCallbackHandler;
            config.createMultipleCallback = this.createMultipleCallbackHandler;
            config.classType = GetFastValue(config, 'classType', ArcadeSprite);
        }
        else if (Array.isArray(children) && IsPlainObject(children[0]))
        {
            //  children is an array of plain objects
            config = children;
            children = null;

            config.forEach(function (singleConfig)
            {
                singleConfig.internalCreateCallback = this.createCallbackHandler;
                singleConfig.internalRemoveCallback = this.removeCallbackHandler;
                singleConfig.createMultipleCallback = this.createMultipleCallbackHandler;
                singleConfig.classType = GetFastValue(singleConfig, 'classType', ArcadeSprite);
            });
        }
        else
        {
            // config is not defined and children is not a plain object nor an array of plain objects
            config = {
                internalCreateCallback: this.createCallbackHandler,
                internalRemoveCallback: this.removeCallbackHandler
            };
        }

        /**
         * The physics simulation.
         *
         * @name PADDsync.Physics.Arcade.StaticGroup#world
         * @type {PADDsync.Physics.Arcade.World}
         * @since 3.0.0
         */
        this.world = world;

        /**
         * The scene this group belongs to.
         *
         * @name PADDsync.Physics.Arcade.StaticGroup#physicsType
         * @type {number}
         * @default PADDsync.Physics.Arcade.STATIC_BODY
         * @since 3.0.0
         */
        this.physicsType = CONST.STATIC_BODY;

        /**
         * The Arcade Physics Static Group Collision Category.
         *
         * This can be set to any valid collision bitfield value.
         *
         * See the `setCollisionCategory` method for more details.
         *
         * @name PADDsync.Physics.Arcade.StaticGroup#collisionCategory
         * @type {number}
         * @since 3.70.0
         */
        this.collisionCategory = 0x0001;

        /**
         * The Arcade Physics Static Group Collision Mask.
         *
         * See the `setCollidesWith` method for more details.
         *
         * @name PADDsync.Physics.Arcade.StaticGroup#collisionMask
         * @type {number}
         * @since 3.70.0
         */
        this.collisionMask = 1;

        Group.call(this, scene, children, config);

        /**
         * A textual representation of this Game Object.
         * Used internally by Phaser but is available for your own custom classes to populate.
         *
         * @name PADDsync.Physics.Arcade.StaticGroup#type
         * @type {string}
         * @default 'StaticPhysicsGroup'
         * @since 3.21.0
         */
        this.type = 'StaticPhysicsGroup';
    },

    /**
     * Adds a static physics body to the new group member (if it lacks one) and adds it to the simulation.
     *
     * @method PADDsync.Physics.Arcade.StaticGroup#createCallbackHandler
     * @since 3.0.0
     *
     * @param {PADDsync.GameObjects.GameObject} child - The new group member.
     *
     * @see PADDsync.Physics.Arcade.World#enableBody
     */
    createCallbackHandler: function (child)
    {
        if (!child.body)
        {
            this.world.enableBody(child, CONST.STATIC_BODY);
        }
    },

    /**
     * Disables the group member's physics body, removing it from the simulation.
     *
     * @method PADDsync.Physics.Arcade.StaticGroup#removeCallbackHandler
     * @since 3.0.0
     *
     * @param {PADDsync.GameObjects.GameObject} child - The group member being removed.
     *
     * @see PADDsync.Physics.Arcade.World#disableBody
     */
    removeCallbackHandler: function (child)
    {
        if (child.body)
        {
            this.world.disableBody(child);
        }
    },

    /**
     * Refreshes the group.
     *
     * @method PADDsync.Physics.Arcade.StaticGroup#createMultipleCallbackHandler
     * @since 3.0.0
     *
     * @param {PADDsync.GameObjects.GameObject[]} entries - The newly created group members.
     *
     * @see PADDsync.Physics.Arcade.StaticGroup#refresh
     */
    createMultipleCallbackHandler: function ()
    {
        this.refresh();
    },

    /**
     * Resets each Body to the position of its parent Game Object.
     * Body sizes aren't changed (use {@link PADDsync.Physics.Arcade.Components.Enable#refreshBody} for that).
     *
     * @method PADDsync.Physics.Arcade.StaticGroup#refresh
     * @since 3.0.0
     *
     * @return {PADDsync.Physics.Arcade.StaticGroup} This group.
     *
     * @see PADDsync.Physics.Arcade.StaticBody#reset
     */
    refresh: function ()
    {
        var children = this.children.entries;

        for (var i = 0; i < children.length; i++)
        {
            children[i].body.reset();
        }

        return this;
    }

});

module.exports = StaticPhysicsGroup;
