# PADDsync Rebrand Checklist

This checklist tracks the complete process of forking Phaser.js and rebranding it as PADDsync.

## Phase 1: Prerequisites & Setup

- [ ] Verify prerequisites - Node.js 18.x, npm 9.x, Git 2.40+
- [ ] Install recommended tools (ripgrep, jq, gnu-sed)
- [ ] Fork Phaser repository to PADDsync
- [ ] Clone forked repository locally
- [ ] Run npm install to verify dependencies
- [ ] Run baseline build to verify original project works
- [ ] Test baseline build output works correctly
- [ ] Create feature/rebrand-to-paddsync branch

## Phase 2: Analysis & Preparation

- [ ] Create backup branch (backup/pre-rebrand)
- [ ] Analyze current Phaser namespace usage
- [ ] Rename src/phaser.js to src/paddsync.js

## Phase 3: Namespace Refactoring

- [ ] Create and run rebrand.sh script for automated namespace replacement
- [ ] Verify no remaining Phaser references in source code

## Phase 4: Configuration Updates

### Package Configuration
- [ ] Update package.json (name, description, main, module, types)
- [ ] Update package.json repository URLs and metadata

### Build Configuration
- [ ] Create update-configs.sh script for webpack configurations
- [ ] Update all webpack config files (entry points, library name, output files)
- [ ] Test updated webpack configs compile correctly

### TypeScript Definitions
- [ ] Rename types/phaser.d.ts to types/paddsync.d.ts
- [ ] Update TypeScript namespace declarations (Phaser → PADDsync)
- [ ] Create and run TypeScript compilation test

## Phase 5: Documentation Updates

- [ ] Update LICENSE.md with proper Phaser attribution
- [ ] Create new README.md with PADDsync branding
- [ ] Update CHANGELOG.md with fork notice

## Phase 6: Building

- [ ] Clean previous build artifacts (rm -rf dist/)
- [ ] Run full production build (npm run build)
- [ ] Verify build outputs (paddsync.js, paddsync.min.js, paddsync.esm.js)
- [ ] Test built files have no Phaser references

## Phase 7: Testing

### Browser Testing
- [ ] Create test/index.html for browser testing
- [ ] Run local web server and test PADDsync in browser
- [ ] Verify PADDsync namespace exists and Phaser does not

### Unit Testing
- [ ] Run existing test suite (npm test)
- [ ] Verify all tests pass with new namespace

### TypeScript Integration
- [ ] Create TypeScript integration test project
- [ ] Verify TypeScript types work correctly

## Phase 8: Publishing

- [ ] Run pre-publish verification (npm pack --dry-run)
- [ ] Commit all changes with descriptive message
- [ ] Create git tag v1.0.0 for initial release
- [ ] Push changes and tags to GitHub
- [ ] Create GitHub release with distribution files
- [ ] Publish to npm registry (npm publish)

---

## Testing Checklist

After each phase, verify the following:

### Phase 1 Test
- [ ] `node --version` returns 18.x or higher
- [ ] `npm --version` returns 9.x or higher
- [ ] `npm install` completes without errors
- [ ] `npm run build` completes successfully
- [ ] dist/ folder contains phaser.js and related files

### Phase 3 Test
- [ ] `rg "Phaser\." src/ --type js` returns minimal or no results
- [ ] `ls src/paddsync.js` file exists
- [ ] `head -50 src/paddsync.js` shows PADDsync namespace

### Phase 4 Test
- [ ] `cat package.json | jq .name` returns "paddsync"
- [ ] `cat package.json | jq .main` points to paddsync files
- [ ] `cat types/paddsync.d.ts` exists and contains PADDsync namespace
- [ ] `npx tsc --noEmit` on test TypeScript file succeeds

### Phase 6 Test
- [ ] `ls dist/paddsync*.js` shows all build variants
- [ ] `grep -c "Phaser" dist/paddsync.js` returns 0 or very low count
- [ ] `head -100 dist/paddsync.js | grep PADDsync` shows library name

### Phase 7 Test
- [ ] Browser console shows `typeof PADDsync` as "object"
- [ ] Browser console shows `typeof Phaser` as "undefined"
- [ ] Test game renders successfully
- [ ] `npm test` exits with code 0

### Phase 8 Test
- [ ] `npm pack --dry-run` shows expected files
- [ ] `git tag -l` shows v1.0.0
- [ ] GitHub release page shows v1.0.0 with assets
- [ ] `npm view paddsync version` shows published version

---

## Progress Summary

**Total Tasks:** 41
**Completed:** 0
**Remaining:** 41
**Progress:** 0%

---

## Notes

- Created from PADDsync-Fork-Guide.md
- Each phase builds on the previous phase
- Testing is critical after each major milestone
- Maintain proper attribution to Phaser in LICENSE.md
- Keep backup branches before major changes
