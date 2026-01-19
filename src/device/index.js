/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

//  This singleton is instantiated as soon as Phaser loads,
//  before a PADDsync.Game instance has even been created.
//  Which means all instances of Phaser Games can share it,
//  without having to re-poll the device all over again

/**
 * @namespace PADDsync.Device
 * @since 3.0.0
 */

/**
 * @typedef {object} PADDsync.DeviceConf
 *
 * @property {PADDsync.Device.OS} os - The OS Device functions.
 * @property {PADDsync.Device.Browser} browser - The Browser Device functions.
 * @property {PADDsync.Device.Features} features - The Features Device functions.
 * @property {PADDsync.Device.Input} input - The Input Device functions.
 * @property {PADDsync.Device.Audio} audio - The Audio Device functions.
 * @property {PADDsync.Device.Video} video - The Video Device functions.
 * @property {PADDsync.Device.Fullscreen} fullscreen - The Fullscreen Device functions.
 * @property {PADDsync.Device.CanvasFeatures} canvasFeatures - The Canvas Device functions.
 */

module.exports = {

    os: require('./OS'),
    browser: require('./Browser'),
    features: require('./Features'),
    input: require('./Input'),
    audio: require('./Audio'),
    video: require('./Video'),
    fullscreen: require('./Fullscreen'),
    canvasFeatures: require('./CanvasFeatures')

};
