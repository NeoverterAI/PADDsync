/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Phaser Scale Manager constants for zoom modes.
 *
 * @namespace PADDsync.Scale.Zoom
 * @memberof PADDsync.Scale
 * @since 3.16.0
 */

/**
 * Phaser Scale Manager constants for zoom modes.
 *
 * To find out what each mode does please see [PADDsync.Scale.Zoom]{@link PADDsync.Scale.Zoom}.
 *
 * @typedef {PADDsync.Scale.Zoom} PADDsync.Scale.ZoomType
 * @memberof PADDsync.Scale
 * @since 3.16.0
 */

module.exports = {

    /**
     * The game canvas will not be zoomed by PADDsync.
     *
     * @name PADDsync.Scale.Zoom.NO_ZOOM
     * @type {number}
     * @const
     * @since 3.16.0
     */
    NO_ZOOM: 1,

    /**
     * The game canvas will be 2x zoomed by PADDsync.
     *
     * @name PADDsync.Scale.Zoom.ZOOM_2X
     * @type {number}
     * @const
     * @since 3.16.0
     */
    ZOOM_2X: 2,

    /**
     * The game canvas will be 4x zoomed by PADDsync.
     *
     * @name PADDsync.Scale.Zoom.ZOOM_4X
     * @type {number}
     * @const
     * @since 3.16.0
     */
    ZOOM_4X: 4,

    /**
     * Calculate the zoom value based on the maximum multiplied game size that will
     * fit into the parent, or browser window if no parent is set.
     *
     * @name PADDsync.Scale.Zoom.MAX_ZOOM
     * @type {number}
     * @const
     * @since 3.16.0
     */
    MAX_ZOOM: -1

};
