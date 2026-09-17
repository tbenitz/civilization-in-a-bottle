# Civilization in a Bottle

A tiny 3D world inside a glass bottle that grows its own history.

Families settle by a river. Houses go up. Fields spread. Years pass. You can watch, intervene, or hand strategy over to DeepSeek so the civilization names its own eras and writes its chronicle.

Open `index.html` in a browser, or use the live page once GitHub Pages is enabled.

## Play

- Drag to look around
- Right-drag or Shift-drag to move sideways / up / down
- Scroll to fly forward and back
- WASD + Q/E to fly (Shift to go faster)
- Double-click a person or spot to inspect / move closer
- **Fit** resets the camera to the bottle
- Space pauses time

Powers along the bottom let you rain, clear the sky, drop food, place the black cube, start a fire, add settlers, or write a custom event into history.

## AI (optional)

The world runs without an API key. In **Settings**, add a [DeepSeek](https://platform.deepseek.com/) key if you want the civilization to make high-level decisions, narrate events, and name eras. The key stays in this browser's `localStorage` only.

## Run locally

This is a single-file Three.js app. It loads Three from a CDN, so you need a network connection.

```bash
# from the repo root
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

Or just open `index.html` directly.

## GitHub Pages

1. Repo **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` / `/ (root)`
4. Save

The site will be at:

`https://tbenitz.github.io/civilization-in-a-bottle/`

Saves live in the visitor's browser (`localStorage`), not on the server.

## Stack

- Vanilla HTML / CSS / JS
- [Three.js r128](https://threejs.org/) for the bottle world
- Optional DeepSeek Chat / Reasoner for strategy and history

## License

MIT. See [LICENSE](LICENSE).
