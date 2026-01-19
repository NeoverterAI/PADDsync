/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Class = require('../utils/Class');
var PluginCache = require('../plugins/PluginCache');
var SceneEvents = require('../scene/events');

/**
 * @classdesc
 * The Game Object Factory is a Scene plugin that allows you to quickly create many common
 * types of Game Objects and have them automatically registered with the Scene.
 *
 * Game Objects directly register themselves with the Factory and inject their own creation
 * methods into the class.
 *
 * @class GameObjectFactory
 * @memberof PADDsync.GameObjects
 * @constructor
 * @since 3.0.0
 *
 * @param {PADDsync.Scene} scene - The Scene to which this Game Object Factory belongs.
 */
var GameObjectFactory = new Class({

    initialize:

    function GameObjectFactory (scene)
    {
        /**
         * The Scene to which this Game Object Factory belongs.
         *
         * @name PADDsync.GameObjects.GameObjectFactory#scene
         * @type {PADDsync.Scene}
         * @protected
         * @since 3.0.0
         */
        this.scene = scene;

        /**
         * A reference to the Scene.Systems.
         *
         * @name PADDsync.GameObjects.GameObjectFactory#systems
         * @type {PADDsync.Scenes.Systems}
         * @protected
         * @since 3.0.0
         */
        this.systems = scene.sys;

        /**
         * A reference to the Scene Event Emitter.
         *
         * @name PADDsync.GameObjects.GameObjectFactory#events
         * @type {PADDsync.Events.EventEmitter}
         * @protected
         * @since 3.50.0
         */
        this.events = scene.sys.events;

        /**
         * A reference to the Scene Display List.
         *
         * @name PADDsync.GameObjects.GameObjectFactory#displayList
         * @type {PADDsync.GameObjects.DisplayList}
         * @protected
         * @since 3.0.0
         */
        this.displayList;

        /**
         * A reference to the Scene Update List.
         *
         * @name PADDsync.GameObjects.GameObjectFactory#updateList
         * @type {PADDsync.GameObjects.UpdateList}
         * @protected
         * @since 3.0.0
         */
        this.updateList;

        this.events.once(SceneEvents.BOOT, this.boot, this);
        this.events.on(SceneEvents.START, this.start, this);
    },

    /**
     * This method is called automatically, only once, when the Scene is first created.
     * Do not invoke it directly.
     *
     * @method PADDsync.GameObjects.GameObjectFactory#boot
     * @private
     * @since 3.5.1
     */
    boot: function ()
    {
        this.displayList = this.systems.displayList;
        this.updateList = this.systems.updateList;

        this.events.once(SceneEvents.DESTROY, this.destroy, this);
    },

    /**
     * This method is called automatically by the Scene when it is starting up.
     * It is responsible for creating local systems, properties and listening for Scene events.
     * Do not invoke it directly.
     *
     * @method PADDsync.GameObjects.GameObjectFactory#start
     * @private
     * @since 3.5.0
     */
    start: function ()
    {
        this.events.once(SceneEvents.SHUTDOWN, this.shutdown, this);
    },

    /**
     * Adds an existing Game Object to this Scene.
     *
     * If the Game Object renders, it will be added to the Display List.
     * If it has a `preUpdate` method, it will be added to the Update List.
     *
     * @method PADDsync.GameObjects.GameObjectFactory#existing
     * @since 3.0.0
     *
     * @generic {(PADDsync.GameObjects.GameObject|PADDsync.GameObjects.Group|PADDsync.GameObjects.Layer)} G - [child,$return]
     *
     * @param {(PADDsync.GameObjects.GameObject|PADDsync.GameObjects.Group|PADDsync.GameObjects.Layer)} child - The child to be added to this Scene.
     *
     * @return {PADDsync.GameObjects.GameObject} The Game Object that was added.
     */
    existing: function (child)
    {
        if (child.renderCanvas || child.renderWebGL)
        {
            this.displayList.add(child);
        }

        //  For when custom objects have overridden `preUpdate` but don't hook into the ADDED_TO_SCENE event:
        //  Adding to the list multiple times is safe, as it won't add duplicates into the list anyway.
        if (child.preUpdate)
        {
            this.updateList.add(child);
        }

        return child;
    },

    /**
     * The Scene that owns this plugin is shutting down.
     * We need to kill and reset all internal properties as well as stop listening to Scene events.
     *
     * @method PADDsync.GameObjects.GameObjectFactory#shutdown
     * @private
     * @since 3.0.0
     */
    shutdown: function ()
    {
        this.events.off(SceneEvents.SHUTDOWN, this.shutdown, this);
    },

    /**
     * The Scene that owns this plugin is being destroyed.
     * We need to shutdown and then kill off all external references.
     *
     * @method PADDsync.GameObjects.GameObjectFactory#destroy
     * @private
     * @since 3.0.0
     */
    destroy: function ()
    {
        this.shutdown();

        this.events.off(SceneEvents.START, this.start, this);

        this.scene = null;
        this.systems = null;
        this.events = null;

        this.displayList = null;
        this.updateList = null;
    }

});

/**
 * Static method called directly by the Game Object factory functions.
 * With this method you can register a custom GameObject factory in the GameObjectFactory,
 * providing a name (`factoryType`) and the constructor (`factoryFunction`) in order
 * to be called when you call to PADDsync.Scene.add[ factoryType ] method.
 *
 * @method PADDsync.GameObjects.GameObjectFactory.register
 * @static
 * @since 3.0.0
 *
 * @param {string} factoryType - The key of the factory that you will use to call to PADDsync.Scene.add[ factoryType ] method.
 * @param {function} factoryFunction - The constructor function to be called when you invoke to the PADDsync.Scene.add method.
 */
GameObjectFactory.register = function (factoryType, factoryFunction)
{
    if (!GameObjectFactory.prototype.hasOwnProperty(factoryType))
    {
        GameObjectFactory.prototype[factoryType] = factoryFunction;
    }
};

/**
 * Static method called directly by the Game Object factory functions.
 * With this method you can remove a custom GameObject factory registered in the GameObjectFactory,
 * providing a its `factoryType`.
 *
 * @method PADDsync.GameObjects.GameObjectFactory.remove
 * @static
 * @since 3.0.0
 *
 * @param {string} factoryType - The key of the factory that you want to remove from the GameObjectFactory.
 */
GameObjectFactory.remove = function (factoryType)
{
    if (GameObjectFactory.prototype.hasOwnProperty(factoryType))
    {
        delete GameObjectFactory.prototype[factoryType];
    }
};

PluginCache.register('GameObjectFactory', GameObjectFactory, 'add');

module.exports = GameObjectFactory;
