# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is `@acrool/js-logger`, a TypeScript library that provides styled console.log functionality with color themes. The library exports a logger object with methods for different log levels (primary, success, info, warning, danger) that display colored badges in the console.

## Architecture

The codebase is minimal and focused:

- `src/logger.ts` - Main logger implementation with styled console output functions
- `src/index.ts` - Simple re-export of the default logger
- `src/logger.spec.ts` - Jest tests for all logger methods

The logger uses CSS-in-JS styling applied to console.log messages, with a predefined color theme and base styles for consistent appearance.

## Common Commands

### Development
```bash
yarn dev              # Build in watch mode
```

### Building
```bash
yarn build           # Clean dist, run TypeScript compiler, then Vite build
yarn build:claer     # Clean the dist directory only
```

### Testing
```bash
yarn test            # Run Jest tests
```

### Code Quality
```bash
yarn lint:fix        # Run ESLint with auto-fix
```

### Release Management
```bash
yarn release:patch   # Patch version release
yarn release:minor   # Minor version release  
yarn release:major   # Major version release
yarn release:alpha   # Alpha prerelease
```

## Build System

- **Vite** for bundling with dual format output (ESM/CJS)
- **TypeScript** for type checking and declaration generation
- **Jest** for testing with jsdom environment
- **ESLint** with TypeScript support and import sorting
- **standard-version** for automated versioning and changelog

## Output Configuration

The library builds to:
- `dist/acrool-js-logger.mjs` (ESM format)
- `dist/acrool-js-logger.cjs` (CommonJS format)  
- `dist/index.d.ts` (TypeScript declarations)

## Testing Notes

Tests use Jest with jsdom environment. All logger methods are tested by spying on `console.log` calls. Note: there are some bugs in the test file where `logger.primary()` is called instead of the intended method in some test cases.