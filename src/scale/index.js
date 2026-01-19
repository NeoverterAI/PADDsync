/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Extend = require('../utils/object/Extend');
var CONST = require('./const');

/**
 * @namespace PADDsync.Scale
 *
 * @borrows PADDsync.Scale.Center.NO_CENTER as NO_CENTER
 * @borrows PADDsync.Scale.Center.CENTER_BOTH as CENTER_BOTH
 * @borrows PADDsync.Scale.Center.CENTER_HORIZONTALLY as CENTER_HORIZONTALLY
 * @borrows PADDsync.Scale.Center.CENTER_VERTICALLY as CENTER_VERTICALLY
 *
 * @borrows PADDsync.Scale.Orientation.LANDSCAPE as LANDSCAPE
 * @borrows PADDsync.Scale.Orientation.PORTRAIT as PORTRAIT
 *
 * @borrows PADDsync.Scale.ScaleModes.NONE as NONE
 * @borrows PADDsync.Scale.ScaleModes.WIDTH_CONTROLS_HEIGHT as WIDTH_CONTROLS_HEIGHT
 * @borrows PADDsync.Scale.ScaleModes.HEIGHT_CONTROLS_WIDTH as HEIGHT_CONTROLS_WIDTH
 * @borrows PADDsync.Scale.ScaleModes.FIT as FIT
 * @borrows PADDsync.Scale.ScaleModes.ENVELOP as ENVELOP
 * @borrows PADDsync.Scale.ScaleModes.RESIZE as RESIZE
 * @borrows PADDsync.Scale.ScaleModes.EXPAND as EXPAND 
 *
 * @borrows PADDsync.Scale.Zoom.NO_ZOOM as NO_ZOOM
 * @borrows PADDsync.Scale.Zoom.ZOOM_2X as ZOOM_2X
 * @borrows PADDsync.Scale.Zoom.ZOOM_4X as ZOOM_4X
 * @borrows PADDsync.Scale.Zoom.MAX_ZOOM as MAX_ZOOM
 */

var Scale = {

    Center: require('./const/CENTER_CONST'),
    Events: require('./events'),
    Orientation: require('./const/ORIENTATION_CONST'),
    ScaleManager: require('./ScaleManager'),
    ScaleModes: require('./const/SCALE_MODE_CONST'),
    Zoom: require('./const/ZOOM_CONST')

};

Scale = Extend(false, Scale, CONST.CENTER);
Scale = Extend(false, Scale, CONST.ORIENTATION);
Scale = Extend(false, Scale, CONST.SCALE_MODE);
Scale = Extend(false, Scale, CONST.ZOOM);

module.exports = Scale;
