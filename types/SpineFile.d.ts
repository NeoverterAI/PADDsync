declare namespace PADDsync.Loader.FileTypes {
    interface SpineFileConfig {
        key: string;
        textureURL?: string;
        textureExtension?: string;
        textureXhrSettings?: PADDsync.Types.Loader.XHRSettingsObject;
        normalMap?: string;
        atlasURL?: string;
        atlasExtension?: string;
        atlasXhrSettings?: PADDsync.Types.Loader.XHRSettingsObject;
    }

    class SpineFile extends PADDsync.Loader.MultiFile {
        constructor(loader: PADDsync.Loader.LoaderPlugin, key: string | PADDsync.Loader.FileTypes.SpineFileConfig, jsonURL: string | string[], atlasURL: string, preMultipliedAlpha: boolean, jsonXhrSettings: PADDsync.Types.Loader.XHRSettingsObject, atlasXhrSettings: PADDsync.Types.Loader.XHRSettingsObject)

        addToCache();
	}
}
