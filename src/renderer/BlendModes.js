/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Phaser Blend Modes.
 *
 * @namespace PADDsync.BlendModes
 * @since 3.0.0
 */

module.exports = {

    /**
     * Skips the Blend Mode check in the renderer.
     *
     * @name PADDsync.BlendModes.SKIP_CHECK
     * @type {number}
     * @const
     * @since 3.0.0
     */
    SKIP_CHECK: -1,

    /**
     * Normal blend mode. For Canvas and WebGL.
     * This is the default setting and draws new shapes on top of the existing canvas content.
     *
     * @name PADDsync.BlendModes.NORMAL
     * @type {number}
     * @const
     * @since 3.0.0
     */
    NORMAL: 0,

    /**
     * Add blend mode. For Canvas and WebGL.
     * Where both shapes overlap the color is determined by adding color values.
     *
     * @name PADDsync.BlendModes.ADD
     * @type {number}
     * @const
     * @since 3.0.0
     */
    ADD: 1,

    /**
     * Multiply blend mode. For Canvas and WebGL.
     * The pixels are of the top layer are multiplied with the corresponding pixel of the bottom layer. A darker picture is the result.
     *
     * @name PADDsync.BlendModes.MULTIPLY
     * @type {number}
     * @const
     * @since 3.0.0
     */
    MULTIPLY: 2,

    /**
     * Screen blend mode. For Canvas and WebGL.
     * The pixels are inverted, multiplied, and inverted again. A lighter picture is the result (opposite of multiply)
     *
     * @name PADDsync.BlendModes.SCREEN
     * @type {number}
     * @const
     * @since 3.0.0
     */
    SCREEN: 3,

    /**
     * Overlay blend mode. For Canvas only.
     * A combination of multiply and screen. Dark parts on the base layer become darker, and light parts become lighter.
     *
     * @name PADDsync.BlendModes.OVERLAY
     * @type {number}
     * @const
     * @since 3.0.0
     */
    OVERLAY: 4,

    /**
     * Darken blend mode. For Canvas only.
     * Retains the darkest pixels of both layers.
     *
     * @name PADDsync.BlendModes.DARKEN
     * @type {number}
     * @const
     * @since 3.0.0
     */
    DARKEN: 5,

    /**
     * Lighten blend mode. For Canvas only.
     * Retains the lightest pixels of both layers.
     *
     * @name PADDsync.BlendModes.LIGHTEN
     * @type {number}
     * @const
     * @since 3.0.0
     */
    LIGHTEN: 6,

    /**
     * Color Dodge blend mode. For Canvas only.
     * Divides the bottom layer by the inverted top layer.
     *
     * @name PADDsync.BlendModes.COLOR_DODGE
     * @type {number}
     * @const
     * @since 3.0.0
     */
    COLOR_DODGE: 7,

    /**
     * Color Burn blend mode. For Canvas only.
     * Divides the inverted bottom layer by the top layer, and then inverts the result.
     *
     * @name PADDsync.BlendModes.COLOR_BURN
     * @type {number}
     * @const
     * @since 3.0.0
     */
    COLOR_BURN: 8,

    /**
     * Hard Light blend mode. For Canvas only.
     * A combination of multiply and screen like overlay, but with top and bottom layer swapped.
     *
     * @name PADDsync.BlendModes.HARD_LIGHT
     * @type {number}
     * @const
     * @since 3.0.0
     */
    HARD_LIGHT: 9,

    /**
     * Soft Light blend mode. For Canvas only.
     * A softer version of hard-light. Pure black or white does not result in pure black or white.
     *
     * @name PADDsync.BlendModes.SOFT_LIGHT
     * @type {number}
     * @const
     * @since 3.0.0
     */
    SOFT_LIGHT: 10,

    /**
     * Difference blend mode. For Canvas only.
     * Subtracts the bottom layer from the top layer or the other way round to always get a positive value.
     *
     * @name PADDsync.BlendModes.DIFFERENCE
     * @type {number}
     * @const
     * @since 3.0.0
     */
    DIFFERENCE: 11,

    /**
     * Exclusion blend mode. For Canvas only.
     * Like difference, but with lower contrast.
     *
     * @name PADDsync.BlendModes.EXCLUSION
     * @type {number}
     * @const
     * @since 3.0.0
     */
    EXCLUSION: 12,

    /**
     * Hue blend mode. For Canvas only.
     * Preserves the luma and chroma of the bottom layer, while adopting the hue of the top layer.
     *
     * @name PADDsync.BlendModes.HUE
     * @type {number}
     * @const
     * @since 3.0.0
     */
    HUE: 13,

    /**
     * Saturation blend mode. For Canvas only.
     * Preserves the luma and hue of the bottom layer, while adopting the chroma of the top layer.
     *
     * @name PADDsync.BlendModes.SATURATION
     * @type {number}
     * @const
     * @since 3.0.0
     */
    SATURATION: 14,

    /**
     * Color blend mode. For Canvas only.
     * Preserves the luma of the bottom layer, while adopting the hue and chroma of the top layer.
     *
     * @name PADDsync.BlendModes.COLOR
     * @type {number}
     * @const
     * @since 3.0.0
     */
    COLOR: 15,

    /**
     * Luminosity blend mode. For Canvas only.
     * Preserves the hue and chroma of the bottom layer, while adopting the luma of the top layer.
     *
     * @name PADDsync.BlendModes.LUMINOSITY
     * @type {number}
     * @const
     * @since 3.0.0
     */
    LUMINOSITY: 16,

    /**
     * Alpha erase blend mode. For Canvas and WebGL.
     *
     * @name PADDsync.BlendModes.ERASE
     * @type {number}
     * @const
     * @since 3.0.0
     */
    ERASE: 17,

    /**
     * Source-in blend mode. For Canvas only.
     * The new shape is drawn only where both the new shape and the destination canvas overlap. Everything else is made transparent.
     *
     * @name PADDsync.BlendModes.SOURCE_IN
     * @type {number}
     * @const
     * @since 3.0.0
     */
    SOURCE_IN: 18,

    /**
     * Source-out blend mode. For Canvas only.
     * The new shape is drawn where it doesn't overlap the existing canvas content.
     *
     * @name PADDsync.BlendModes.SOURCE_OUT
     * @type {number}
     * @const
     * @since 3.0.0
     */
    SOURCE_OUT: 19,

    /**
     * Source-out blend mode. For Canvas only.
     * The new shape is only drawn where it overlaps the existing canvas content.
     *
     * @name PADDsync.BlendModes.SOURCE_ATOP
     * @type {number}
     * @const
     * @since 3.0.0
     */
    SOURCE_ATOP: 20,

    /**
     * Destination-over blend mode. For Canvas only.
     * New shapes are drawn behind the existing canvas content.
     *
     * @name PADDsync.BlendModes.DESTINATION_OVER
     * @type {number}
     * @const
     * @since 3.0.0
     */
    DESTINATION_OVER: 21,

    /**
     * Destination-in blend mode. For Canvas only.
     * The existing canvas content is kept where both the new shape and existing canvas content overlap. Everything else is made transparent.
     *
     * @name PADDsync.BlendModes.DESTINATION_IN
     * @type {number}
     * @const
     * @since 3.0.0
     */
    DESTINATION_IN: 22,

    /**
     * Destination-out blend mode. For Canvas only.
     * The existing content is kept where it doesn't overlap the new shape.
     *
     * @name PADDsync.BlendModes.DESTINATION_OUT
     * @type {number}
     * @const
     * @since 3.0.0
     */
    DESTINATION_OUT: 23,

    /**
     * Destination-out blend mode. For Canvas only.
     * The existing canvas is only kept where it overlaps the new shape. The new shape is drawn behind the canvas content.
     *
     * @name PADDsync.BlendModes.DESTINATION_ATOP
     * @type {number}
     * @const
     * @since 3.0.0
     */
    DESTINATION_ATOP: 24,

    /**
     * Lighten blend mode. For Canvas only.
     * Where both shapes overlap the color is determined by adding color values.
     *
     * @name PADDsync.BlendModes.LIGHTER
     * @type {number}
     * @const
     * @since 3.0.0
     */
    LIGHTER: 25,

    /**
     * Copy blend mode. For Canvas only.
     * Only the new shape is shown.
     *
     * @name PADDsync.BlendModes.COPY
     * @type {number}
     * @const
     * @since 3.0.0
     */
    COPY: 26,

    /**
     * Xor blend mode. For Canvas only.
     * Shapes are made transparent where both overlap and drawn normal everywhere else.
     *
     * @name PADDsync.BlendModes.XOR
     * @type {number}
     * @const
     * @since 3.0.0
     */
    XOR: 27

};
