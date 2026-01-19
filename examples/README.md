# PADDsync Examples

This directory contains example projects demonstrating various features of the PADDsync game framework.

## Running the Examples

To run these examples locally:

1. **Build PADDsync first** (if you haven't already):
   ```bash
   cd /path/to/PADDsync
   npm run dist
   ```

2. **Start a local web server** in the PADDsync root directory:
   ```bash
   # Using Python
   python3 -m http.server 8080

   # Or using Node.js
   npx http-server -p 8080
   ```

3. **Open the examples** in your browser:
   - Basic Game: http://localhost:8080/examples/basic-game/index.html

## Available Examples

### 1. Basic Game (`basic-game/`)

A simple platformer game demonstrating core PADDsync features:

- **Physics**: Arcade physics with gravity and collisions
- **Sprites**: Dynamic sprite creation and management
- **Input**: Keyboard controls and mouse interaction
- **Particles**: Particle emitter system
- **Tweens**: Animation and effects
- **Game Objects**: Text, graphics, and sprites

**Features:**
- Player movement (arrow keys)
- Jumping (up arrow or space)
- Collectible stars with scoring
- Particle effects on click and collection
- Animated text with fade effects

## Creating Your Own Example

To create a new example:

1. Create a new directory in `examples/`
2. Create an `index.html` file
3. Load PADDsync from the dist folder:
   ```html
   <script src="../../dist/paddsync.js"></script>
   ```
4. Create your game using the PADDsync API:
   ```javascript
   const config = {
       type: PADDsync.AUTO,
       width: 800,
       height: 600,
       scene: {
           preload: preload,
           create: create,
           update: update
       }
   };

   const game = new PADDsync.Game(config);
   ```

## API Reference

For complete API documentation, refer to:
- [PADDsync README](../../README.md)
- [Original Phaser Documentation](https://docs.phaser.io) (PADDsync maintains API compatibility)

## Key Differences from Phaser

PADDsync uses the `PADDsync` namespace instead of `Phaser`:

```javascript
// Phaser syntax
const game = new Phaser.Game(config);
const sprite = this.add.sprite(x, y, 'key');

// PADDsync syntax (same API, different namespace)
const game = new PADDsync.Game(config);
const sprite = this.add.sprite(x, y, 'key');
```

## TypeScript Examples

For TypeScript examples, see the `test/typescript-test.ts` file in the root directory.

## Troubleshooting

### Example doesn't load
- Make sure you've built the dist files: `npm run dist`
- Check that you're running a local web server (files won't work with `file://` protocol)
- Check browser console for errors

### Textures or assets not loading
- Examples use programmatically generated textures to avoid asset dependencies
- For production games, load external assets in the `preload()` function

## Contributing

If you create an interesting example, consider contributing it to the repository!

## License

These examples are provided under the same MIT license as PADDsync.
