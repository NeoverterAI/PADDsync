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
