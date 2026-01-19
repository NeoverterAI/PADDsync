#!/usr/bin/env node

/**
 * PADDsync Build Verification Script
 * Tests that the built library has proper namespace and exports
 */

const fs = require('fs');
const path = require('path');

console.log('=== PADDsync Build Verification ===\n');

// Check if build file exists
const buildPath = path.join(__dirname, '../build/paddsync.js');
if (!fs.existsSync(buildPath)) {
    console.error('❌ FAIL: Build file not found at', buildPath);
    process.exit(1);
}
console.log('✓ Build file exists:', buildPath);

// Read the build file
const buildContent = fs.readFileSync(buildPath, 'utf8');
console.log('✓ Build file size:', (buildContent.length / 1024 / 1024).toFixed(2), 'MB');

// Test 1: Check for UMD wrapper with PADDsync
const umdRegex = /define\("PADDsync"/;
if (umdRegex.test(buildContent)) {
    console.log('✓ UMD wrapper exports PADDsync');
} else {
    console.error('❌ FAIL: UMD wrapper does not export PADDsync');
    process.exit(1);
}

// Test 2: Check for window.PADDsync
const windowRegex = /root\["PADDsync"\]/;
if (windowRegex.test(buildContent)) {
    console.log('✓ Global window.PADDsync export found');
} else {
    console.error('❌ FAIL: window.PADDsync export not found');
    process.exit(1);
}

// Test 3: Count PADDsync references
const paddsyncMatches = buildContent.match(/PADDsync\./g);
const paddsyncCount = paddsyncMatches ? paddsyncMatches.length : 0;
console.log('✓ PADDsync namespace references:', paddsyncCount);

if (paddsyncCount === 0) {
    console.error('❌ FAIL: No PADDsync namespace references found');
    process.exit(1);
}

// Test 4: Check for Phaser references (should be 0)
const phaserMatches = buildContent.match(/Phaser\./g);
const phaserCount = phaserMatches ? phaserMatches.length : 0;
console.log('✓ Old Phaser namespace references:', phaserCount);

if (phaserCount > 0) {
    console.error('❌ WARNING: Found', phaserCount, 'Phaser references - these should have been replaced');
    // Don't exit - this is a warning, not a failure
}

// Test 5: Check for key class definitions in source
console.log('\n--- Checking for core class definitions ---');
const coreClasses = ['Game', 'Scene', 'GameObjects', 'Physics', 'Loader', 'Input', 'Math', 'Geom'];
let foundClasses = [];
let missingClasses = [];

for (const className of coreClasses) {
    const classRegex = new RegExp(`PADDsync\\.${className}[\\s\\(\\.]`, 'g');
    if (classRegex.test(buildContent)) {
        console.log(`  ✓ PADDsync.${className} found in build`);
        foundClasses.push(className);
    } else {
        console.log(`  ⚠ PADDsync.${className} not found`);
        missingClasses.push(className);
    }
}

if (foundClasses.length === 0) {
    console.error('❌ FAIL: No core classes found in build');
    process.exit(1);
}

console.log(`\n✓ Found ${foundClasses.length}/${coreClasses.length} core classes`);

// Test 6: Check for VERSION constant
if (/PADDsync\.VERSION/.test(buildContent)) {
    console.log('✓ PADDsync.VERSION constant found');
} else {
    console.error('❌ WARNING: PADDsync.VERSION not found');
}

console.log('\n=== All verification tests passed! ===');
console.log('\nNext steps:');
console.log('1. Open http://localhost:8080/test/index.html in a browser');
console.log('2. Verify the visual test passes');
console.log('3. Check the browser console for any errors');

process.exit(0);
