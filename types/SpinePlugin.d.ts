/// <reference path="./spine.d.ts" />
/// <reference path="./SpineFile.d.ts" />
/// <reference path="./SpineGameObject.d.ts" />
/// <reference path="./SpineContainer.d.ts" />

declare namespace PADDsync.Loader {
    interface LoaderPlugin extends PADDsync.Events.EventEmitter {
        spine(key: string | PADDsync.Loader.FileTypes.SpineFileConfig | PADDsync.Loader.FileTypes.SpineFileConfig[], jsonURL: string, atlasURL: string | string[], preMultipliedAlpha?: boolean, textureXhrSettings?: PADDsync.Types.Loader.XHRSettingsObject, atlasXhrSettings?: PADDsync.Types.Loader.XHRSettingsObject): LoaderPlugin;
    }
}

declare namespace PADDsync.GameObjects {
    interface GameObjectFactory {
        spine(x: number, y: number, key?: string, animationName?: string, loop?: boolean): SpineGameObject;
        spineContainer(x: number, y: number, children?: SpineGameObject | SpineGameObject[]): SpineContainer;
    }

	interface GameObjectCreator {
        spine(config: SpineGameObjectConfig, addToScene?: boolean): SpineGameObject;
        spineContainer(config: SpineContainerConfig, addToScene?: boolean): SpineContainer;
    }
}

declare class SpinePlugin extends PADDsync.Plugins.ScenePlugin {
    constructor(scene: PADDsync.Scene, pluginManager: PADDsync.Plugins.PluginManager);

    readonly isWebGL: boolean;

    cache: PADDsync.Cache.BaseCache;
    spineTextures: PADDsync.Cache.BaseCache;
    json: PADDsync.Cache.BaseCache;
    textures: PADDsync.Textures.TextureManager;
    drawDebug: boolean;
    gl: WebGLRenderingContext;
    renderer: PADDsync.Renderer.Canvas.CanvasRenderer | PADDsync.Renderer.WebGL.WebGLRenderer;
    sceneRenderer: spine.webgl.SceneRenderer;
    skeletonRenderer: spine.canvas.SkeletonRenderer | spine.webgl.SkeletonRenderer;
    skeletonDebugRenderer: spine.webgl.SkeletonDebugRenderer;

    plugin: typeof spine;

    getAtlasCanvas(key: string): spine.TextureAtlas;
    getAtlasWebGL(key: string): spine.TextureAtlas;
    worldToLocal(x: number, y: number, skeleton: spine.Skeleton, bone?: spine.Bone): spine.Vector2;
    getVector2(x: number, y: number): spine.Vector2;
    getVector3(x: number, y: number, z: number): spine.Vector2;
    setDebugBones(value?: boolean): SpinePlugin;
    setDebugRegionAttachments(value?: boolean): SpinePlugin;
    setDebugBoundingBoxes(value?: boolean): SpinePlugin;
    setDebugMeshHull(value?: boolean): SpinePlugin;
    setDebugMeshTriangles(value?: boolean): SpinePlugin;
    setDebugPaths(value?: boolean): SpinePlugin;
    setDebugSkeletonXY(value?: boolean): SpinePlugin;
    setDebugClipping(value?: boolean): SpinePlugin;
    setEffect(effect?: spine.VertexEffect): SpinePlugin;
    createSkeleton(key: string, skeletonJSON?: object): any | null;
    createAnimationState(skeleton: spine.Skeleton): any;
    getBounds(skeleton: spine.Skeleton): any;
    onResize(): void;
    add(x: number, y: number, key?: string, animationName?: string, loop?: boolean): SpineGameObject;
    make(config: SpineGameObjectConfig, addToScene?: boolean): SpineGameObject;
}
