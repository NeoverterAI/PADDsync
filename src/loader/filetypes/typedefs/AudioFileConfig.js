/**
 * @typedef {object} PADDsync.Types.Loader.FileTypes.AudioFileConfig
 *
 * @property {string} key - The key of the file. Must be unique within the Loader and Audio Cache.
 * @property {(string|string[]|PADDsync.Types.Loader.FileTypes.AudioFileURLConfig|PADDsync.Types.Loader.FileTypes.AudioFileURLConfig[])} [url] - The absolute or relative URLs to load the audio files from.
 * @property {PADDsync.Types.Loader.XHRSettingsObject} [xhrSettings] - Extra XHR Settings specifically for this file.
 * @property {AudioContext} [context] - The optional AudioContext this file will use to process itself.
 */
