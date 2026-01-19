# PADDsync - HTML5 Game Framework

> **Note:** PADDsync is a fork of [Phaser](https://github.com/phaserjs/phaser), the popular open-source game framework created by Phaser Studio Inc.

PADDsync is a fast, free, and fun open source HTML5 game framework that offers WebGL and Canvas rendering across desktop and mobile web browsers. It is based on Phaser v3.90.0 and has been rebranded for specialized use cases.

Games can be built for the web, or compiled to iOS, Android, and native apps using 3rd party tools. You can use JavaScript or TypeScript for development.

## Installation

### NPM

```bash
npm install paddsync
```

### CDN

```html
<script src="https://unpkg.com/paddsync@latest/dist/paddsync.min.js"></script>
```

## Quick Start

Here's a simple example to get you started:

```javascript
const config = {
  type: PADDsync.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

const game = new PADDsync.Game(config);

function preload() {
  this.load.image("logo", "assets/logo.png");
}

function create() {
  this.add.image(400, 300, "logo");
}

function update() {
  // Game loop
}
```

## Building PADDsync from Source

If you want to build PADDsync from source:

```bash
# Clone the repository
git clone https://github.com/NeoverterAI/PADDsync.git
cd PADDsync

# Install dependencies
npm install

# Build the project
npm run build

# The built files will be in the dist/ directory
```

## TypeScript Support

PADDsync includes TypeScript definitions. Add to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["paddsync"]
  }
}
```

## Documentation

- [Original Phaser Documentation](https://docs.phaser.io) - Most documentation applies to PADDsync with namespace changes
- API Documentation: Replace `Phaser.` with `PADDsync.` in all examples
- Examples: The original Phaser examples can be adapted by changing the namespace

## Key Differences from Phaser

PADDsync maintains full API compatibility with Phaser v3.90.0 with the following changes:

- **Namespace**: All references to `Phaser` have been changed to `PADDsync`
- **Package Name**: Published as `paddsync` instead of `phaser`
- **Build Files**: Generated files use `paddsync.js` naming convention

## License

MIT License - see [license.md](./license.md)

Based on Phaser by Phaser Studio Inc. Original work Copyright (c) 2024 Richard Davey, Phaser Studio Inc.

## Credits

PADDsync is a fork of [Phaser](https://github.com/phaserjs/phaser) developed by Phaser Studio Inc. We are grateful for their excellent work on the original framework.

## Contributing

Contributions are welcome! Please ensure all contributions maintain compatibility with the base Phaser framework where possible.

## Links

- **GitHub Repository**: https://github.com/NeoverterAI/PADDsync
- **Original Phaser**: https://github.com/phaserjs/phaser
- **Phaser Website**: https://phaser.io
