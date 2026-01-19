/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Class = require('../utils/Class');
var Systems = require('./Systems');

/**
 * @classdesc
 * A base PADDsync.Scene class which can be extended for your own use.
 *
 * You can also define the optional methods {@link PADDsync.Types.Scenes.SceneInitCallback init()}, {@link PADDsync.Types.Scenes.ScenePreloadCallback preload()}, and {@link PADDsync.Types.Scenes.SceneCreateCallback create()}.
 *
 * @class Scene
 * @memberof PADDsync
 * @constructor
 * @since 3.0.0
 *
 * @param {(string|PADDsync.Types.Scenes.SettingsConfig)} [config] - The scene key or scene specific configuration settings.
 */
var Scene = new Class({

    initialize:

    function Scene (config)
    {
        /**
         * The Scene Systems. You must never overwrite this property, or all hell will break loose.
         *
         * @name PADDsync.Scene#sys
         * @type {PADDsync.Scenes.Systems}
         * @since 3.0.0
         */
        this.sys = new Systems(this, config);

        /**
         * A reference to the PADDsync.Game instance.
         *
         * This property will only be available if defined in the Scene Injection Map.
         *
         * @name PADDsync.Scene#game
         * @type {PADDsync.Game}
         * @since 3.0.0
         */
        this.game;

        /**
         * A reference to the global Animation Manager.
         *
         * This property will only be available if defined in the Scene Injection Map.
         *
         * @name PADDsync.Scene#anims
         * @type {PADDsync.Animations.AnimationManager}
         * @since 3.0.0
         */
        this.anims;

        /**
         * A reference to the global Cache.
         *
         * This property will only be available if defined in the Scene Injection Map.
         *
         * @name PADDsync.Scene#cache
         * @type {PADDsync.Cache.CacheManager}
         * @since 3.0.0
         */
        this.cache;

        /**
         * A reference to the global Data Manager.
         *
         * This property will only be available if defined in the Scene Injection Map.
         *
         * @name PADDsync.Scene#registry
         * @type {PADDsync.Data.DataManager}
         * @since 3.0.0
         */
        this.registry;

        /**
         * A reference to the Sound Manager.
         *
         * This property will only be available if defined in the Scene Injection Map and the plugin is installed.
         *
         * @name PADDsync.Scene#sound
         * @type {(PADDsync.Sound.NoAudioSoundManager|PADDsync.Sound.HTML5AudioSoundManager|PADDsync.Sound.WebAudioSoundManager)}
         * @since 3.0.0
         */
        this.sound;

        /**
         * A reference to the Texture Manager.
         *
         * This property will only be available if defined in the Scene Injection Map.
         *
         * @name PADDsync.Scene#textures
         * @type {PADDsync.Textures.TextureManager}
         * @since 3.0.0
         */
        this.textures;

        /**
         * A Scene specific Event Emitter.
         *
         * This property will only be available if defined in the Scene Injection Map.
         *
         * @name PADDsync.Scene#events
         * @type {PADDsync.Events.EventEmitter}
         * @since 3.0.0
         */
        this.events;

        /**
         * The Scene Camera Manager.
         *
         * This property will only be available if defined in the Scene Injection Map.
         *
         * @name PADDsync.Scene#cameras
         * @type {PADDsync.Cameras.Scene2D.CameraManager}
         * @since 3.0.0
         */
        this.cameras;

        /**
         * The Scene Game Object Factory.
         *
         * This property will only be available if defined in the Scene Injection Map.
         *
         * @name PADDsync.Scene#add
         * @type {PADDsync.GameObjects.GameObjectFactory}
         * @since 3.0.0
         */
        this.add;

        /**
         * The Scene Game Object Creator.
         *
         * This property will only be available if defined in the Scene Injection Map.
         *
         * @name PADDsync.Scene#make
         * @type {PADDsync.GameObjects.GameObjectCreator}
         * @since 3.0.0
         */
        this.make;

        /**
         * A reference to the Scene Manager Plugin.
         *
         * This property will only be available if defined in the Scene Injection Map.
         *
         * @name PADDsync.Scene#scene
         * @type {PADDsync.Scenes.ScenePlugin}
         * @since 3.0.0
         */
        this.scene;

        /**
         * The Game Object Display List belonging to this Scene.
         *
         * This property will only be available if defined in the Scene Injection Map.
         *
         * @name PADDsync.Scene#children
         * @type {PADDsync.GameObjects.DisplayList}
         * @since 3.0.0
         */
        this.children;

        /**
         * The Scene Lights Manager Plugin.
         *
         * This property will only be available if defined in the Scene Injection Map and the plugin is installed.
         *
         * @name PADDsync.Scene#lights
         * @type {PADDsync.GameObjects.LightsManager}
         * @since 3.0.0
         */
        this.lights;

        /**
         * A Scene specific Data Manager Plugin.
         *
         * See the `registry` property for the global Data Manager.
         *
         * This property will only be available if defined in the Scene Injection Map and the plugin is installed.
         *
         * @name PADDsync.Scene#data
         * @type {PADDsync.Data.DataManager}
         * @since 3.0.0
         */
        this.data;

        /**
         * The Scene Input Manager Plugin.
         *
         * This property will only be available if defined in the Scene Injection Map and the plugin is installed.
         *
         * @name PADDsync.Scene#input
         * @type {PADDsync.Input.InputPlugin}
         * @since 3.0.0
         */
        this.input;

        /**
         * The Scene Loader Plugin.
         *
         * This property will only be available if defined in the Scene Injection Map and the plugin is installed.
         *
         * @name PADDsync.Scene#load
         * @type {PADDsync.Loader.LoaderPlugin}
         * @since 3.0.0
         */
        this.load;

        /**
         * The Scene Time and Clock Plugin.
         *
         * This property will only be available if defined in the Scene Injection Map and the plugin is installed.
         *
         * @name PADDsync.Scene#time
         * @type {PADDsync.Time.Clock}
         * @since 3.0.0
         */
        this.time;

        /**
         * The Scene Tween Manager Plugin.
         *
         * This property will only be available if defined in the Scene Injection Map and the plugin is installed.
         *
         * @name PADDsync.Scene#tweens
         * @type {PADDsync.Tweens.TweenManager}
         * @since 3.0.0
         */
        this.tweens;

        /**
         * The Scene Arcade Physics Plugin.
         *
         * This property will only be available if defined in the Scene Injection Map, the plugin is installed and configured.
         *
         * @name PADDsync.Scene#physics
         * @type {PADDsync.Physics.Arcade.ArcadePhysics}
         * @since 3.0.0
         */
        this.physics;

        /**
         * The Scene Matter Physics Plugin.
         *
         * This property will only be available if defined in the Scene Injection Map, the plugin is installed and configured.
         *
         * @name PADDsync.Scene#matter
         * @type {PADDsync.Physics.Matter.MatterPhysics}
         * @since 3.0.0
         */
        this.matter;

        if (typeof PLUGIN_FBINSTANT)
        {
            /**
             * The Facebook Instant Games Plugin.
             *
             * This property will only be available if defined in the Scene Injection Map, the plugin is installed and configured.
             *
             * @name PADDsync.Scene#facebook
             * @type {PADDsync.FacebookInstantGamesPlugin}
             * @since 3.12.0
             */
            this.facebook;
        }

        /**
         * A reference to the global Scale Manager.
         *
         * This property will only be available if defined in the Scene Injection Map.
         *
         * @name PADDsync.Scene#scale
         * @type {PADDsync.Scale.ScaleManager}
         * @since 3.16.2
         */
        this.scale;

        /**
         * A reference to the global Plugin Manager.
         *
         * The Plugin Manager is a global system that allows plugins to register themselves with it, and can then install
         * those plugins into Scenes as required.
         *
         * @name PADDsync.Scene#plugins
         * @type {PADDsync.Plugins.PluginManager}
         * @since 3.0.0
         */
        this.plugins;

        /**
         * A reference to the renderer instance Phaser is using, either Canvas Renderer or WebGL Renderer.
         *
         * @name PADDsync.Scene#renderer
         * @type {(PADDsync.Renderer.Canvas.CanvasRenderer|PADDsync.Renderer.WebGL.WebGLRenderer)}
         * @since 3.50.0
         */
        this.renderer;
    },

    /**
     * This method should be overridden by your own Scenes.
     *
     * This method is called once per game step while the scene is running.
     *
     * @method PADDsync.Scene#update
     * @since 3.0.0
     *
     * @param {number} time - The current time. Either a High Resolution Timer value if it comes from Request Animation Frame, or Date.now if using SetTimeout.
     * @param {number} delta - The delta time in ms since the last frame. This is a smoothed and capped value based on the FPS rate.
     */
    update: function ()
    {
    }

});

module.exports = Scene;
