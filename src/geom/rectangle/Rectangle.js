/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Class = require('../../utils/Class');
var Contains = require('./Contains');
var GetPoint = require('./GetPoint');
var GetPoints = require('./GetPoints');
var GEOM_CONST = require('../const');
var Line = require('../line/Line');
var Random = require('./Random');

/**
 * @classdesc
 * Encapsulates a 2D rectangle defined by its corner point in the top-left and its extends in x (width) and y (height)
 *
 * @class Rectangle
 * @memberof PADDsync.Geom
 * @constructor
 * @since 3.0.0
 *
 * @param {number} [x=0] - The X coordinate of the top left corner of the Rectangle.
 * @param {number} [y=0] - The Y coordinate of the top left corner of the Rectangle.
 * @param {number} [width=0] - The width of the Rectangle.
 * @param {number} [height=0] - The height of the Rectangle.
 */
var Rectangle = new Class({

    initialize:

    function Rectangle (x, y, width, height)
    {
        if (x === undefined) { x = 0; }
        if (y === undefined) { y = 0; }
        if (width === undefined) { width = 0; }
        if (height === undefined) { height = 0; }

        /**
         * The geometry constant type of this object: `GEOM_CONST.RECTANGLE`.
         * Used for fast type comparisons.
         *
         * @name PADDsync.Geom.Rectangle#type
         * @type {number}
         * @readonly
         * @since 3.19.0
         */
        this.type = GEOM_CONST.RECTANGLE;

        /**
         * The X coordinate of the top left corner of the Rectangle.
         *
         * @name PADDsync.Geom.Rectangle#x
         * @type {number}
         * @default 0
         * @since 3.0.0
         */
        this.x = x;

        /**
         * The Y coordinate of the top left corner of the Rectangle.
         *
         * @name PADDsync.Geom.Rectangle#y
         * @type {number}
         * @default 0
         * @since 3.0.0
         */
        this.y = y;

        /**
         * The width of the Rectangle, i.e. the distance between its left side (defined by `x`) and its right side.
         *
         * @name PADDsync.Geom.Rectangle#width
         * @type {number}
         * @default 0
         * @since 3.0.0
         */
        this.width = width;

        /**
         * The height of the Rectangle, i.e. the distance between its top side (defined by `y`) and its bottom side.
         *
         * @name PADDsync.Geom.Rectangle#height
         * @type {number}
         * @default 0
         * @since 3.0.0
         */
        this.height = height;
    },

    /**
     * Checks if the given point is inside the Rectangle's bounds.
     *
     * @method PADDsync.Geom.Rectangle#contains
     * @since 3.0.0
     *
     * @param {number} x - The X coordinate of the point to check.
     * @param {number} y - The Y coordinate of the point to check.
     *
     * @return {boolean} `true` if the point is within the Rectangle's bounds, otherwise `false`.
     */
    contains: function (x, y)
    {
        return Contains(this, x, y);
    },

    /**
     * Calculates the coordinates of a point at a certain `position` on the Rectangle's perimeter.
     *
     * The `position` is a fraction between 0 and 1 which defines how far into the perimeter the point is.
     *
     * A value of 0 or 1 returns the point at the top left corner of the rectangle, while a value of 0.5 returns the point at the bottom right corner of the rectangle. Values between 0 and 0.5 are on the top or the right side and values between 0.5 and 1 are on the bottom or the left side.
     *
     * @method PADDsync.Geom.Rectangle#getPoint
     * @since 3.0.0
     *
     * @generic {PADDsync.Geom.Point} O - [output,$return]
     *
     * @param {number} position - The normalized distance into the Rectangle's perimeter to return.
     * @param {(PADDsync.Geom.Point|object)} [output] - An object to update with the `x` and `y` coordinates of the point.
     *
     * @return {(PADDsync.Geom.Point|object)} The updated `output` object, or a new Point if no `output` object was given.
     */
    getPoint: function (position, output)
    {
        return GetPoint(this, position, output);
    },

    /**
     * Returns an array of points from the perimeter of the Rectangle, each spaced out based on the quantity or step required.
     *
     * @method PADDsync.Geom.Rectangle#getPoints
     * @since 3.0.0
     *
     * @generic {PADDsync.Geom.Point[]} O - [output,$return]
     *
     * @param {number} quantity - The number of points to return. Set to `false` or 0 to return an arbitrary number of points (`perimeter / stepRate`) evenly spaced around the Rectangle based on the `stepRate`.
     * @param {number} [stepRate] - If `quantity` is 0, determines the normalized distance between each returned point.
     * @param {(array|PADDsync.Geom.Point[])} [output] - An array to which to append the points.
     *
     * @return {(array|PADDsync.Geom.Point[])} The modified `output` array, or a new array if none was provided.
     */
    getPoints: function (quantity, stepRate, output)
    {
        return GetPoints(this, quantity, stepRate, output);
    },

    /**
     * Returns a random point within the Rectangle's bounds.
     *
     * @method PADDsync.Geom.Rectangle#getRandomPoint
     * @since 3.0.0
     *
     * @generic {PADDsync.Geom.Point} O - [point,$return]
     *
     * @param {PADDsync.Geom.Point} [point] - The object in which to store the `x` and `y` coordinates of the point.
     *
     * @return {PADDsync.Geom.Point} The updated `point`, or a new Point if none was provided.
     */
    getRandomPoint: function (point)
    {
        return Random(this, point);
    },

    /**
     * Sets the position, width, and height of the Rectangle.
     *
     * @method PADDsync.Geom.Rectangle#setTo
     * @since 3.0.0
     *
     * @param {number} x - The X coordinate of the top left corner of the Rectangle.
     * @param {number} y - The Y coordinate of the top left corner of the Rectangle.
     * @param {number} width - The width of the Rectangle.
     * @param {number} height - The height of the Rectangle.
     *
     * @return {this} This Rectangle object.
     */
    setTo: function (x, y, width, height)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        return this;
    },

    /**
     * Resets the position, width, and height of the Rectangle to 0.
     *
     * @method PADDsync.Geom.Rectangle#setEmpty
     * @since 3.0.0
     *
     * @return {this} This Rectangle object.
     */
    setEmpty: function ()
    {
        return this.setTo(0, 0, 0, 0);
    },

    /**
     * Sets the position of the Rectangle.
     *
     * @method PADDsync.Geom.Rectangle#setPosition
     * @since 3.0.0
     *
     * @param {number} x - The X coordinate of the top left corner of the Rectangle.
     * @param {number} [y=x] - The Y coordinate of the top left corner of the Rectangle.
     *
     * @return {this} This Rectangle object.
     */
    setPosition: function (x, y)
    {
        if (y === undefined) { y = x; }

        this.x = x;
        this.y = y;

        return this;
    },

    /**
     * Sets the width and height of the Rectangle.
     *
     * @method PADDsync.Geom.Rectangle#setSize
     * @since 3.0.0
     *
     * @param {number} width - The width to set the Rectangle to.
     * @param {number} [height=width] - The height to set the Rectangle to.
     *
     * @return {this} This Rectangle object.
     */
    setSize: function (width, height)
    {
        if (height === undefined) { height = width; }

        this.width = width;
        this.height = height;

        return this;
    },

    /**
     * Determines if the Rectangle is empty. A Rectangle is empty if its width or height is less than or equal to 0.
     *
     * @method PADDsync.Geom.Rectangle#isEmpty
     * @since 3.0.0
     *
     * @return {boolean} `true` if the Rectangle is empty. A Rectangle object is empty if its width or height is less than or equal to 0.
     */
    isEmpty: function ()
    {
        return (this.width <= 0 || this.height <= 0);
    },

    /**
     * Returns a Line object that corresponds to the top of this Rectangle.
     *
     * @method PADDsync.Geom.Rectangle#getLineA
     * @since 3.0.0
     *
     * @generic {PADDsync.Geom.Line} O - [line,$return]
     *
     * @param {PADDsync.Geom.Line} [line] - A Line object to set the results in. If `undefined` a new Line will be created.
     *
     * @return {PADDsync.Geom.Line} A Line object that corresponds to the top of this Rectangle.
     */
    getLineA: function (line)
    {
        if (line === undefined) { line = new Line(); }

        line.setTo(this.x, this.y, this.right, this.y);

        return line;
    },

    /**
     * Returns a Line object that corresponds to the right of this Rectangle.
     *
     * @method PADDsync.Geom.Rectangle#getLineB
     * @since 3.0.0
     *
     * @generic {PADDsync.Geom.Line} O - [line,$return]
     *
     * @param {PADDsync.Geom.Line} [line] - A Line object to set the results in. If `undefined` a new Line will be created.
     *
     * @return {PADDsync.Geom.Line} A Line object that corresponds to the right of this Rectangle.
     */
    getLineB: function (line)
    {
        if (line === undefined) { line = new Line(); }

        line.setTo(this.right, this.y, this.right, this.bottom);

        return line;
    },

    /**
     * Returns a Line object that corresponds to the bottom of this Rectangle.
     *
     * @method PADDsync.Geom.Rectangle#getLineC
     * @since 3.0.0
     *
     * @generic {PADDsync.Geom.Line} O - [line,$return]
     *
     * @param {PADDsync.Geom.Line} [line] - A Line object to set the results in. If `undefined` a new Line will be created.
     *
     * @return {PADDsync.Geom.Line} A Line object that corresponds to the bottom of this Rectangle.
     */
    getLineC: function (line)
    {
        if (line === undefined) { line = new Line(); }

        line.setTo(this.right, this.bottom, this.x, this.bottom);

        return line;
    },

    /**
     * Returns a Line object that corresponds to the left of this Rectangle.
     *
     * @method PADDsync.Geom.Rectangle#getLineD
     * @since 3.0.0
     *
     * @generic {PADDsync.Geom.Line} O - [line,$return]
     *
     * @param {PADDsync.Geom.Line} [line] - A Line object to set the results in. If `undefined` a new Line will be created.
     *
     * @return {PADDsync.Geom.Line} A Line object that corresponds to the left of this Rectangle.
     */
    getLineD: function (line)
    {
        if (line === undefined) { line = new Line(); }

        line.setTo(this.x, this.bottom, this.x, this.y);

        return line;
    },

    /**
     * The x coordinate of the left of the Rectangle.
     * Changing the left property of a Rectangle object has no effect on the y and height properties. However it does affect the width property, whereas changing the x value does not affect the width property.
     *
     * @name PADDsync.Geom.Rectangle#left
     * @type {number}
     * @since 3.0.0
     */
    left: {

        get: function ()
        {
            return this.x;
        },

        set: function (value)
        {
            if (value >= this.right)
            {
                this.width = 0;
            }
            else
            {
                this.width = this.right - value;
            }

            this.x = value;
        }

    },

    /**
     * The sum of the x and width properties.
     * Changing the right property of a Rectangle object has no effect on the x, y and height properties, however it does affect the width property.
     *
     * @name PADDsync.Geom.Rectangle#right
     * @type {number}
     * @since 3.0.0
     */
    right: {

        get: function ()
        {
            return this.x + this.width;
        },

        set: function (value)
        {
            if (value <= this.x)
            {
                this.width = 0;
            }
            else
            {
                this.width = value - this.x;
            }
        }

    },

    /**
     * The y coordinate of the top of the Rectangle. Changing the top property of a Rectangle object has no effect on the x and width properties.
     * However it does affect the height property, whereas changing the y value does not affect the height property.
     *
     * @name PADDsync.Geom.Rectangle#top
     * @type {number}
     * @since 3.0.0
     */
    top: {

        get: function ()
        {
            return this.y;
        },

        set: function (value)
        {
            if (value >= this.bottom)
            {
                this.height = 0;
            }
            else
            {
                this.height = (this.bottom - value);
            }

            this.y = value;
        }

    },

    /**
     * The sum of the y and height properties.
     * Changing the bottom property of a Rectangle object has no effect on the x, y and width properties, but does change the height property.
     *
     * @name PADDsync.Geom.Rectangle#bottom
     * @type {number}
     * @since 3.0.0
     */
    bottom: {

        get: function ()
        {
            return this.y + this.height;
        },

        set: function (value)
        {
            if (value <= this.y)
            {
                this.height = 0;
            }
            else
            {
                this.height = value - this.y;
            }
        }

    },

    /**
     * The x coordinate of the center of the Rectangle.
     *
     * @name PADDsync.Geom.Rectangle#centerX
     * @type {number}
     * @since 3.0.0
     */
    centerX: {

        get: function ()
        {
            return this.x + (this.width / 2);
        },

        set: function (value)
        {
            this.x = value - (this.width / 2);
        }

    },

    /**
     * The y coordinate of the center of the Rectangle.
     *
     * @name PADDsync.Geom.Rectangle#centerY
     * @type {number}
     * @since 3.0.0
     */
    centerY: {

        get: function ()
        {
            return this.y + (this.height / 2);
        },

        set: function (value)
        {
            this.y = value - (this.height / 2);
        }

    }

});

module.exports = Rectangle;
