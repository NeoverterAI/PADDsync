/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var WEBGL_CONST = {

    /**
     * 	8-bit twos complement signed integer.
     *
     * @name PADDsync.Renderer.WebGL.BYTE
     * @type {PADDsync.Types.Renderer.WebGL.WebGLConst}
     * @since 3.50.0
     */
    BYTE: { enum: 0x1400, size: 1 },

    /**
     * 8-bit twos complement unsigned integer.
     *
     * @name PADDsync.Renderer.WebGL.UNSIGNED_BYTE
     * @type {PADDsync.Types.Renderer.WebGL.WebGLConst}
     * @since 3.50.0
     */
    UNSIGNED_BYTE: { enum: 0x1401, size: 1 },

    /**
     * 16-bit twos complement signed integer.
     *
     * @name PADDsync.Renderer.WebGL.SHORT
     * @type {PADDsync.Types.Renderer.WebGL.WebGLConst}
     * @since 3.50.0
     */
    SHORT: { enum: 0x1402, size: 2 },

    /**
     * 16-bit twos complement unsigned integer.
     *
     * @name PADDsync.Renderer.WebGL.UNSIGNED_SHORT
     * @type {PADDsync.Types.Renderer.WebGL.WebGLConst}
     * @since 3.50.0
     */
    UNSIGNED_SHORT: { enum: 0x1403, size: 2 },

    /**
     * 32-bit twos complement signed integer.
     *
     * @name PADDsync.Renderer.WebGL.INT
     * @type {PADDsync.Types.Renderer.WebGL.WebGLConst}
     * @since 3.50.0
     */
    INT: { enum: 0x1404, size: 4 },

    /**
     * 32-bit twos complement unsigned integer.
     *
     * @name PADDsync.Renderer.WebGL.UNSIGNED_INT
     * @type {PADDsync.Types.Renderer.WebGL.WebGLConst}
     * @since 3.50.0
     */
    UNSIGNED_INT: { enum: 0x1405, size: 4 },

    /**
     * 32-bit IEEE floating point number.
     *
     * @name PADDsync.Renderer.WebGL.FLOAT
     * @type {PADDsync.Types.Renderer.WebGL.WebGLConst}
     * @since 3.50.0
     */
    FLOAT: { enum: 0x1406, size: 4 }

};

module.exports = WEBGL_CONST;
