# PADDsync Fork Guide

## Forking and Rebranding Phaser.js to PADDsync

This guide provides step-by-step instructions for forking the Phaser.js game framework and rebranding it as "PADDsync" while maintaining full functionality.

---

## Table of Contents

1. [Prerequisites](#1-prerequisites)
2. [Forking the Repository](#2-forking-the-repository)
3. [Local Environment Setup](#3-local-environment-setup)
4. [File Structure Overview](#4-file-structure-overview)
5. [Namespace Refactoring](#5-namespace-refactoring)
6. [Package Configuration Updates](#6-package-configuration-updates)
7. [Build Configuration Updates](#7-build-configuration-updates)
8. [TypeScript Definition Updates](#8-typescript-definition-updates)
9. [Documentation Updates](#9-documentation-updates)
10. [Building the Project](#10-building-the-project)
11. [Testing](#11-testing)
12. [Publishing](#12-publishing)

---

## 1. Prerequisites

### Required Software

| Software              | Minimum Version | Purpose                       | Installation                                |
| --------------------- | --------------- | ----------------------------- | ------------------------------------------- |
| Node.js               | 18.x LTS        | JavaScript runtime            | https://nodejs.org                          |
| npm                   | 9.x             | Package management            | Included with Node.js                       |
| Git                   | 2.40+           | Version control               | https://git-scm.com                         |
| GitHub CLI (optional) | 2.x             | Streamlined GitHub operations | `brew install gh` or https://cli.github.com |

### Recommended Tools

| Tool               | Purpose                                      |
| ------------------ | -------------------------------------------- |
| Visual Studio Code | Code editor with good find/replace           |
| `sed`              | Stream editor for automated text replacement |
| `ripgrep` (`rg`)   | Fast recursive search tool                   |
| `jq`               | JSON processor for package.json manipulation |

## 1. Check each of the recommended tools are working

## 2. Forking the Repository

### Using GitHub CLI

```bash
# Authenticate with GitHub (one-time setup)
gh auth login

# Fork the repository
gh repo fork phaserjs/phaser --clone=false --fork-name PADDsync

# Clone your fork
gh repo clone YOUR_USERNAME/PADDsync
```

### Option C: Manual Git Operations

```bash
# Clone the original repository
git clone https://github.com/phaserjs/phaser.git PADDsync
cd PADDsync

# Remove the original remote
git remote remove origin

# Add your new repository as origin (create empty repo on GitHub first)
git remote add origin https://github.com/NeoverterAI/PADDsync.git

# Push to your new repository
git push -u origin master
```

---

## 3. Local Environment Setup

### Clone and Initialize

```bash
# Clone your forked repository
git clone https://github.com/YOUR_USERNAME/PADDsync.git
cd PADDsync

# Verify you're on the correct branch
git branch -a

# Install all dependencies
npm install

# Verify the original build works before making changes
npm run build

# Create a new branch for the rebrand work
git checkout -b feature/initialization
```

### Verify Installation

```bash
# Check Node.js version
node --version  # Should be 18.x or higher

# Check npm version
npm --version   # Should be 9.x or higher

# List installed dependencies
npm list --depth=0

# Run existing tests to establish baseline
npm test
```

---

## 4. File Structure Overview

Understanding the Phaser repository structure is critical before making changes:

```
PADDsync/
├── .github/                    # GitHub-specific files (workflows, templates)
├── changelog/                  # Version changelogs
├── config/                     # Webpack build configurations ⚠️ MODIFY
│   ├── webpack.config.js
│   ├── webpack.dist.config.js
│   └── ...
├── dist/                       # Built output files (generated)
├── plugins/                    # Official plugins
├── scripts/                    # Build and utility scripts ⚠️ MODIFY
├── src/                        # Source code ⚠️ MODIFY (main work here)
│   ├── phaser.js              # Main entry point ⚠️ RENAME & MODIFY
│   ├── actions/
│   ├── animations/
│   ├── cache/
│   ├── cameras/
│   ├── core/                  # Core framework classes ⚠️ MODIFY
│   ├── ... (many more modules)
│   └── textures/
├── types/                      # TypeScript definitions ⚠️ MODIFY
│   └── phaser.d.ts            # Main type definitions ⚠️ RENAME & MODIFY
├── .eslintrc.json             # ESLint configuration
├── CHANGELOG.md               # ⚠️ MODIFY
├── LICENSE.md                 # ⚠️ MODIFY (add attribution)
├── README.md                  # ⚠️ MODIFY (complete rebrand)
├── package.json               # ⚠️ MODIFY
└── package-lock.json          # Will regenerate
```

### Key Files Requiring Changes

| File/Directory  | Type of Change                   | Priority    |
| --------------- | -------------------------------- | ----------- |
| `package.json`  | Name, description, URLs          | Critical    |
| `src/phaser.js` | Rename file, change namespace    | Critical    |
| `src/**/*.js`   | Replace `Phaser.` references     | Critical    |
| `config/*.js`   | Build output names, library name | Critical    |
| `types/*.d.ts`  | TypeScript namespace             | Critical    |
| `LICENSE.md`    | Add attribution                  | Required    |
| `README.md`     | Complete rebrand                 | Required    |
| `CHANGELOG.md`  | Add rebrand note                 | Recommended |

---

## 5. Namespace Refactoring

This is the core of the rebranding process. We need to replace all instances of `Phaser` with `PADDsync`.

### 5.1 Analyze Current Usage

Before making changes, understand what you're replacing:

```bash
# Count occurrences of "Phaser" in source files
rg -c "Phaser" src/ --type js | head -20

# Find all unique patterns involving "Phaser"
rg -o "Phaser\.\w+" src/ --type js | sort | uniq -c | sort -rn | head -30

# Find namespace declarations
rg "@namespace Phaser" src/ --type js

# Find window.Phaser assignments
rg "window\.Phaser" src/ --type js
```

### 5.2 Create Backup

```bash
# Create a backup branch
git checkout -b backup/old
git checkout feature/initialization

# Or create a tarball backup
tar -czvf ../phaser-backup-$(date +%Y%m%d).tar.gz .
```

### 5.3 Rename Main Entry File

```bash
# Rename the main entry point
mv src/phaser.js src/paddsync.js

# Verify the rename
ls -la src/paddsync.js
```

### 5.4 Automated Namespace Replacement

Create a shell script for the replacements:

```bash
# Create the rebrand script
cat > rebrand.sh << 'EOF'
#!/bin/bash
set -e

echo "=== PADDsync Initialization Script ==="
echo "Starting namespace replacement..."

# Define colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to count replacements
count_matches() {
    rg -c "$1" src/ types/ config/ --type js --type ts 2>/dev/null | \
    awk -F: '{sum += $2} END {print sum}'
}

# Pre-replacement counts
echo -e "${YELLOW}Pre-replacement counts:${NC}"
echo "  Phaser. occurrences: $(count_matches 'Phaser\.')"
echo "  window.Phaser: $(count_matches 'window\.Phaser')"
echo "  @namespace Phaser: $(count_matches '@namespace Phaser')"

# ============================================
# SOURCE CODE REPLACEMENTS (src/)
# ============================================
echo -e "\n${GREEN}Processing src/ directory...${NC}"

# Replace Phaser. with PADDsync. (main namespace)
find src -name "*.js" -type f -exec sed -i.bak 's/Phaser\./PADDsync./g' {} \;

# Replace window.Phaser with window.PADDsync
find src -name "*.js" -type f -exec sed -i.bak 's/window\.Phaser/window.PADDsync/g' {} \;

# Replace typeof Phaser with typeof PADDsync
find src -name "*.js" -type f -exec sed -i.bak 's/typeof Phaser/typeof PADDsync/g' {} \;

# Replace JSDoc namespace annotations
find src -name "*.js" -type f -exec sed -i.bak 's/@namespace Phaser/@namespace PADDsync/g' {} \;

# Replace JSDoc memberof annotations
find src -name "*.js" -type f -exec sed -i.bak 's/@memberof Phaser/@memberof PADDsync/g' {} \;

# Replace JSDoc extends annotations
find src -name "*.js" -type f -exec sed -i.bak 's/@extends Phaser/@extends PADDsync/g' {} \;

# Replace JSDoc type annotations
find src -name "*.js" -type f -exec sed -i.bak 's/{Phaser\./{PADDsync./g' {} \;

# Replace string literals 'Phaser' (be careful with this one)
find src -name "*.js" -type f -exec sed -i.bak "s/'Phaser'/'PADDsync'/g" {} \;

# Replace standalone var Phaser declarations
find src -name "*.js" -type f -exec sed -i.bak 's/var Phaser/var PADDsync/g' {} \;

# Replace const Phaser declarations
find src -name "*.js" -type f -exec sed -i.bak 's/const Phaser/const PADDsync/g' {} \;

# Replace let Phaser declarations
find src -name "*.js" -type f -exec sed -i.bak 's/let Phaser/let PADDsync/g' {} \;

# ============================================
# TYPESCRIPT DEFINITIONS (types/)
# ============================================
echo -e "${GREEN}Processing types/ directory...${NC}"

# Rename type definition file if it exists
if [ -f "types/phaser.d.ts" ]; then
    mv types/phaser.d.ts types/paddsync.d.ts
    echo "  Renamed phaser.d.ts -> paddsync.d.ts"
fi

# Replace namespace declarations in TypeScript
find types -name "*.d.ts" -type f -exec sed -i.bak 's/namespace Phaser/namespace PADDsync/g' {} \;
find types -name "*.d.ts" -type f -exec sed -i.bak 's/Phaser\./PADDsync./g' {} \;
find types -name "*.d.ts" -type f -exec sed -i.bak 's/typeof Phaser/typeof PADDsync/g' {} \;

# ============================================
# CONFIG FILES (config/)
# ============================================
echo -e "${GREEN}Processing config/ directory...${NC}"

# Replace library name in webpack configs
find config -name "*.js" -type f -exec sed -i.bak "s/library: 'Phaser'/library: 'PADDsync'/g" {} \;
find config -name "*.js" -type f -exec sed -i.bak "s/library: \"Phaser\"/library: \"PADDsync\"/g" {} \;

# Replace output filenames
find config -name "*.js" -type f -exec sed -i.bak 's/phaser\.js/paddsync.js/g' {} \;
find config -name "*.js" -type f -exec sed -i.bak 's/phaser\.min\.js/paddsync.min.js/g' {} \;
find config -name "*.js" -type f -exec sed -i.bak 's/phaser\.esm\.js/paddsync.esm.js/g' {} \;
find config -name "*.js" -type f -exec sed -i.bak 's/phaser-/paddsync-/g' {} \;

# ============================================
# PLUGINS DIRECTORY (plugins/)
# ============================================
echo -e "${GREEN}Processing plugins/ directory...${NC}"

find plugins -name "*.js" -type f -exec sed -i.bak 's/Phaser\./PADDsync./g' {} \; 2>/dev/null || true
find plugins -name "*.js" -type f -exec sed -i.bak 's/window\.Phaser/window.PADDsync/g' {} \; 2>/dev/null || true

# ============================================
# CLEANUP
# ============================================
echo -e "\n${GREEN}Cleaning up backup files...${NC}"
find . -name "*.bak" -type f -delete

# ============================================
# POST-REPLACEMENT VERIFICATION
# ============================================
echo -e "\n${YELLOW}Post-replacement verification:${NC}"

# Check for any remaining Phaser references (excluding documentation files)
remaining=$(rg -c "Phaser\." src/ types/ config/ --type js --type ts 2>/dev/null | \
    awk -F: '{sum += $2} END {print sum}')

if [ "$remaining" -gt 0 ] 2>/dev/null; then
    echo -e "${RED}Warning: $remaining 'Phaser.' references remain${NC}"
    echo "Review with: rg 'Phaser\.' src/ types/ config/"
else
    echo -e "${GREEN}All 'Phaser.' references replaced successfully${NC}"
fi

echo -e "\n${GREEN}=== Rebrand script complete ===${NC}"
echo "Next steps:"
echo "  1. Update package.json manually"
echo "  2. Update LICENSE.md with attribution"
echo "  3. Update README.md"
echo "  4. Run: npm run build"
echo "  5. Test the build"
EOF

# Make the script executable
chmod +x rebrand.sh
```

### 5.5 Run the Rebrand Script

```bash
# Execute the rebrand script
./rebrand.sh

# Review changes
git status
git diff --stat
```

### 5.6 Manual Verification

After automated replacement, manually verify critical files:

```bash
# Check the main entry point
head -50 src/paddsync.js

# Verify no stray Phaser references in core files
rg "Phaser" src/core/ --type js

# Check a sample of modified files
git diff src/core/Game.js | head -100
```

---

## 6. Package Configuration Updates

### 6.1 Update package.json

Use `jq` for safe JSON manipulation or edit manually:

```bash
# Create a backup
cp package.json package.json.backup

# Using jq to update fields
jq '.name = "paddsync" |
    .description = "PADDsync - A 2D game framework for HTML5 games" |
    .main = "./dist/paddsync.js" |
    .module = "./dist/paddsync.esm.js" |
    .homepage = "https://github.com/YOUR_USERNAME/PADDsync" |
    .repository.url = "https://github.com/YOUR_USERNAME/PADDsync.git" |
    .bugs.url = "https://github.com/YOUR_USERNAME/PADDsync/issues" |
    .author = "Your Name <your.email@example.com>"' \
    package.json > package.json.tmp && mv package.json.tmp package.json
```

### 6.2 Manual package.json Edits

Open `package.json` and verify/update these fields:

```json
{
  "name": "paddsync",
  "version": "1.0.0",
  "description": "PADDsync - A 2D game framework for HTML5 games (forked from Phaser)",
  "author": "Your Name <your.email@example.com>",
  "homepage": "https://github.com/YOUR_USERNAME/PADDsync",
  "license": "MIT",
  "main": "./dist/paddsync.js",
  "module": "./dist/paddsync.esm.js",
  "types": "./types/paddsync.d.ts",
  "browser": "./dist/paddsync.min.js",
  "repository": {
    "type": "git",
    "url": "https://github.com/YOUR_USERNAME/PADDsync.git"
  },
  "bugs": {
    "url": "https://github.com/YOUR_USERNAME/PADDsync/issues"
  },
  "keywords": [
    "paddsync",
    "game",
    "html5",
    "javascript",
    "canvas",
    "webgl",
    "2d"
  ],
  "files": ["dist/", "types/", "plugins/", "LICENSE.md", "README.md"]
}
```

### 6.3 Update Entry Point References

Check and update any npm script references:

```bash
# Find references to phaser.js in package.json scripts
grep -n "phaser" package.json

# Update scripts if needed (example)
sed -i 's/src\/phaser\.js/src\/paddsync.js/g' package.json
```

---

## 7. Build Configuration Updates

### 7.1 Webpack Configuration Files

Update all webpack configuration files in the `config/` directory:

```bash
# List all config files
ls -la config/

# Common files that need updates:
# - webpack.config.js
# - webpack.dist.config.js
# - webpack.fb.config.js (Facebook Instant Games)
# - etc.
```

### 7.2 Manual Config Updates

For each webpack config file, update:

```javascript
// config/webpack.config.js

module.exports = {
  entry: {
    // FROM:
    // phaser: './src/phaser.js'
    // TO:
    paddsync: "./src/paddsync.js",
  },
  output: {
    // FROM:
    // filename: 'phaser.js',
    // library: 'Phaser',
    // TO:
    filename: "paddsync.js",
    library: "PADDsync",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: "this",
  },
  // ... rest of config
};
```

### 7.3 Automated Config Update Script

```bash
# Update webpack configs
cat > update-configs.sh << 'EOF'
#!/bin/bash

for config_file in config/*.js; do
    echo "Updating $config_file..."

    # Update entry point
    sed -i "s/phaser: '\.\/src\/phaser\.js'/paddsync: '.\/src\/paddsync.js'/g" "$config_file"
    sed -i 's/phaser: "\.\/src\/phaser\.js"/paddsync: ".\/src\/paddsync.js"/g' "$config_file"

    # Update library name
    sed -i "s/library: 'Phaser'/library: 'PADDsync'/g" "$config_file"
    sed -i 's/library: "Phaser"/library: "PADDsync"/g' "$config_file"

    # Update output filenames
    sed -i 's/phaser\.js/paddsync.js/g' "$config_file"
    sed -i 's/phaser\.min\.js/paddsync.min.js/g' "$config_file"
    sed -i 's/phaser\.esm\.js/paddsync.esm.js/g' "$config_file"
    sed -i 's/phaser-core/paddsync-core/g' "$config_file"
    sed -i 's/phaser-arcade-physics/paddsync-arcade-physics/g' "$config_file"
done

echo "Config files updated."
EOF

chmod +x update-configs.sh
./update-configs.sh
```

### 7.4 Verify Build Scripts

Check that npm scripts still work:

```bash
# View all available scripts
npm run

# Check specific build scripts
cat package.json | jq '.scripts'
```

---

## 8. TypeScript Definition Updates

### 8.1 Rename Definition File

```bash
# Rename the main type definition file
mv types/phaser.d.ts types/paddsync.d.ts

# Update any index files
if [ -f "types/index.d.ts" ]; then
    sed -i 's/phaser\.d\.ts/paddsync.d.ts/g' types/index.d.ts
fi
```

### 8.2 Update Type Definitions

```bash
# Replace all namespace references
find types -name "*.d.ts" -exec sed -i 's/declare namespace Phaser/declare namespace PADDsync/g' {} \;
find types -name "*.d.ts" -exec sed -i 's/namespace Phaser/namespace PADDsync/g' {} \;
find types -name "*.d.ts" -exec sed -i 's/Phaser\./PADDsync./g' {} \;

# Update module declarations
find types -name "*.d.ts" -exec sed -i "s/declare module 'phaser'/declare module 'paddsync'/g" {} \;
find types -name "*.d.ts" -exec sed -i 's/declare module "phaser"/declare module "paddsync"/g' {} \;
```

### 8.3 Verify TypeScript Compilation

```bash
# Install TypeScript if not present
npm install -g typescript

# Create a test file
cat > test-types.ts << 'EOF'
/// <reference path="./types/paddsync.d.ts" />

const config: PADDsync.Types.Core.GameConfig = {
    type: PADDsync.AUTO,
    width: 800,
    height: 600
};

const game = new PADDsync.Game(config);
EOF

# Compile to check for errors
tsc test-types.ts --noEmit --skipLibCheck

# Clean up
rm test-types.ts
```

---

## 9. Documentation Updates

### 9.1 Update LICENSE.md

Add proper attribution as required by MIT license:

```bash
cat > LICENSE.md << 'EOF'
# MIT License

Copyright (c) 2024 [Your Name or Organization]

Based on Phaser (https://github.com/phaserjs/phaser)
Original work Copyright (c) 2011-2024 Phaser Studio Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
EOF
```

### 9.2 Update README.md

Create a new README for your fork:

````bash
cat > README.md << 'EOF'
# PADDsync

PADDsync is a 2D game framework for making HTML5 games for desktop and mobile web browsers, supporting Canvas and WebGL rendering.

> **Note:** PADDsync is a fork of [Phaser](https://github.com/phaserjs/phaser), the popular open-source game framework created by Phaser Studio Inc.

## Installation

### NPM

```bash
npm install paddsync
````

### CDN

```html
<script src="https://unpkg.com/paddsync@latest/dist/paddsync.min.js"></script>
```

## Quick Start

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

- [API Documentation](./docs/api)
- [Examples](./examples)
- [Original Phaser Documentation](https://docs.phaser.io)

## License

MIT License - see [LICENSE.md](./LICENSE.md)

Based on Phaser by Phaser Studio Inc.
EOF

````

### 9.3 Update CHANGELOG.md

Add an entry for the fork:

```bash
# Prepend to CHANGELOG.md
cat > CHANGELOG_HEADER.md << 'EOF'
# PADDsync Changelog

## [1.0.0] - $(date +%Y-%m-%d)

### Fork Notice
- Forked from Phaser v3.88.2 (or current version)
- Rebranded all namespaces from `Phaser` to `PADDsync`
- Updated package name to `paddsync`
- Updated TypeScript definitions

---

# Original Phaser Changelog

EOF

cat CHANGELOG_HEADER.md CHANGELOG.md > CHANGELOG_NEW.md
mv CHANGELOG_NEW.md CHANGELOG.md
rm CHANGELOG_HEADER.md
````

---

## 10. Building the Project

### 10.1 Clean Previous Builds

```bash
# Remove old dist files
rm -rf dist/

# Clear npm cache (optional)
npm cache clean --force

# Remove node_modules and reinstall (optional, for clean build)
rm -rf node_modules/
rm package-lock.json
npm install
```

### 10.2 Run the Build

```bash
# Standard build
npm run build

# If the project uses webpack directly
npx webpack --config config/webpack.config.js

# Watch mode for development
npm run watch
# OR
npx webpack --config config/webpack.config.js --watch
```

### 10.3 Build All Variants

Phaser typically builds multiple variants. Check available scripts:

```bash
# List build scripts
npm run | grep build

# Common build commands
npm run build          # Standard build
npm run build-min      # Minified build
npm run build-esm      # ES Module build
npm run build-full     # All variants
```

### 10.4 Verify Build Output

```bash
# Check dist folder contents
ls -la dist/

# Expected files:
# - paddsync.js
# - paddsync.min.js
# - paddsync.esm.js
# - paddsync.esm.min.js
# - (possibly other variants)

# Check file sizes
du -h dist/*

# Verify the namespace is correct in output
head -100 dist/paddsync.js | grep -i "paddsync\|library"

# Check for any remaining "Phaser" references in built files
grep -c "Phaser" dist/paddsync.js || echo "No Phaser references found (good!)"
```

---

## 11. Testing

### 11.1 Create Test HTML File

```bash
mkdir -p test
cat > test/index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PADDsync Test</title>
    <style>
        body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
        #game-container { border: 1px solid #ccc; }
        .status { margin: 10px 0; padding: 10px; border-radius: 4px; }
        .success { background: #d4edda; color: #155724; }
        .error { background: #f8d7da; color: #721c24; }
    </style>
</head>
<body>
    <h1>PADDsync Test Page</h1>
    <div id="status" class="status">Initializing...</div>
    <div id="game-container"></div>

    <script src="../dist/paddsync.js"></script>
    <script>
        const statusEl = document.getElementById('status');

        // Test 1: Check global namespace
        if (typeof PADDsync === 'undefined') {
            statusEl.className = 'status error';
            statusEl.textContent = 'FAIL: PADDsync namespace not found';
            throw new Error('PADDsync not defined');
        }

        // Test 2: Check old namespace is gone
        if (typeof Phaser !== 'undefined') {
            console.warn('Warning: Phaser namespace still exists');
        }

        // Test 3: Create a game
        try {
            const config = {
                type: PADDsync.AUTO,
                width: 800,
                height: 600,
                parent: 'game-container',
                backgroundColor: '#2d2d2d',
                scene: {
                    create: function() {
                        // Add test text
                        this.add.text(400, 280, 'PADDsync Works!', {
                            fontSize: '48px',
                            color: '#ffffff'
                        }).setOrigin(0.5);

                        this.add.text(400, 350, 'Namespace: ' + (typeof PADDsync), {
                            fontSize: '24px',
                            color: '#aaaaaa'
                        }).setOrigin(0.5);

                        // Update status
                        statusEl.className = 'status success';
                        statusEl.textContent = 'SUCCESS: PADDsync initialized and running!';
                    }
                }
            };

            const game = new PADDsync.Game(config);

        } catch (error) {
            statusEl.className = 'status error';
            statusEl.textContent = 'FAIL: ' + error.message;
            console.error(error);
        }
    </script>
</body>
</html>
EOF
```

### 11.2 Run Local Server

```bash
# Using Python
python3 -m http.server 8080

# Using Node.js http-server
npx http-server -p 8080

# Using PHP
php -S localhost:8080

# Then open: http://localhost:8080/test/index.html
```

### 11.3 Run Existing Tests

```bash
# Run the project's test suite
npm test

# Run specific test files
npm test -- --grep "Game"

# Run with coverage
npm run test:coverage
```

### 11.4 TypeScript Integration Test

```bash
# Create a TypeScript test project
mkdir -p test/ts-test
cd test/ts-test

# Initialize
npm init -y
npm install typescript --save-dev

# Create tsconfig
cat > tsconfig.json << 'EOF'
{
    "compilerOptions": {
        "target": "ES2020",
        "module": "commonjs",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "typeRoots": ["../../types"],
        "types": ["paddsync"]
    }
}
EOF

# Create test file
cat > test.ts << 'EOF'
/// <reference types="paddsync" />

const config: PADDsync.Types.Core.GameConfig = {
    type: PADDsync.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { x: 0, y: 300 }
        }
    }
};

const game = new PADDsync.Game(config);
console.log('TypeScript compilation successful!');
EOF

# Compile
npx tsc --noEmit

cd ../..
```

---

## 12. Publishing

### 12.1 Pre-publish Checklist

```bash
# Verify package.json is correct
cat package.json | jq '{name, version, main, module, types}'

# Verify files that will be published
npm pack --dry-run

# Run final build
npm run build

# Run all tests
npm test
```

### 12.2 Publish to npm

```bash
# Login to npm (one-time)
npm login

# Publish (first time)
npm publish

# Publish with tag (for beta/pre-release)
npm publish --tag beta

# Publish scoped package (if using @scope/paddsync)
npm publish --access public
```

### 12.3 Publish to GitHub Packages

```bash
# Update package.json for GitHub Packages
jq '.publishConfig = {"registry": "https://npm.pkg.github.com"}' package.json > tmp.json
mv tmp.json package.json

# Login to GitHub Packages
npm login --registry=https://npm.pkg.github.com

# Publish
npm publish
```

### 12.4 Create GitHub Release

```bash
# Tag the release
git tag -a v1.0.0 -m "PADDsync v1.0.0 - Initial fork release"

# Push tags
git push origin v1.0.0

# Create release using GitHub CLI
gh release create v1.0.0 \
    dist/paddsync.js \
    dist/paddsync.min.js \
    --title "PADDsync v1.0.0" \
    --notes "Initial release of PADDsync, forked from Phaser v3.88.2"
```

---

## Quick Reference Commands

```bash
# === SETUP ===
git clone https://github.com/YOUR_USERNAME/PADDsync.git && cd PADDsync
npm install

# === REBRAND ===
./rebrand.sh                    # Run automated replacements
npm run build                   # Build the project

# === VERIFY ===
rg "Phaser\." src/ --type js    # Check for remaining references
npm test                        # Run tests

# === PUBLISH ===
npm version patch               # Bump version
npm publish                     # Publish to npm
gh release create v1.0.0        # Create GitHub release
```

---

## Troubleshooting

### Common Issues

| Issue                              | Solution                                      |
| ---------------------------------- | --------------------------------------------- |
| Build fails after rename           | Check webpack entry points in `config/`       |
| TypeScript errors                  | Verify `types/paddsync.d.ts` namespace        |
| "Phaser is not defined" in browser | Check `window.PADDsync` export in entry file  |
| Tests fail                         | Update test files to use `PADDsync` namespace |
| npm publish fails                  | Verify package name isn't taken               |

### Debug Commands

```bash
# Find problematic files
rg -l "Phaser" src/ --type js

# Check webpack output
npx webpack --config config/webpack.config.js --stats verbose

# Verify global export
node -e "const P = require('./dist/paddsync.js'); console.log(Object.keys(P).slice(0,10))"
```

---

## Summary

This guide covered the complete process of forking Phaser and rebranding it as PADDsync:

1. **Fork** the repository via GitHub
2. **Clone** and set up local environment
3. **Rename** files (`phaser.js` → `paddsync.js`)
4. **Replace** namespace references (`Phaser` → `PADDsync`)
5. **Update** configuration files
6. **Update** TypeScript definitions
7. **Update** documentation with attribution
8. **Build** and test
9. **Publish** to npm/GitHub

The MIT license permits this use case as long as proper attribution is maintained in the LICENSE file.
