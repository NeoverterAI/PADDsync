/**
 * @typedef {object} PADDsync.Types.Loader.FileTypes.AudioSpriteFileConfig
 *
 * @property {string} key - The key of the file. Must be unique within both the Loader and the Audio Cache.
 * @property {string} jsonURL - The absolute or relative URL to load the json file from. Or a well formed JSON object to use instead.
 * @property {PADDsync.Types.Loader.XHRSettingsObject} [jsonXhrSettings] - Extra XHR Settings specifically for the json file.
 * @property {{(string|string[])}} [audioURL] - The absolute or relative URL to load the audio file from.
 * @property {any} [audioConfig] - The audio configuration options.
 * @property {PADDsync.Types.Loader.XHRSettingsObject} [audioXhrSettings] - Extra XHR Settings specifically for the audio file.
 */
