# userscript-kit

Lightweight script for building userscripts. Handles bundling, a "dev server," and pseudo-HMR (auto-reload on save).


## Prerequisites

- **Node.js**
- **esbuild** (global install)

```sh
npm install -g esbuild
```

## Setup

placeholder but bbasically u grab the build and config and put it into ur project folder

## Usage

### Development

```sh
node build.js --watch
```

This starts the dev server. It:

- Builds your script and serves it at `http://localhost:7653`
- Watches `src/` for changes and rebuilds on save
- Sends a reload signal to connected browser tabs automatically

After the first `--watch` build, `dist/dev.user.js` appears. Install it in Tampermonkey or Greasemonkey or Violentmonkey or whatever. This is done once per project.

### Build

```sh
node build.js
```

Outputs `dist/myscript.user.js` for distribution.


## Known Caveats

- Circular imports will probably break the build.
- Config `meta` fields must be static (for now). 
- I'll add an example folder soon.