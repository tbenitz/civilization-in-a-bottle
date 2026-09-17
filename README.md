# Civilization in a Bottle

A tiny 3D world inside a glass bottle that grows its own history.

Families settle by a river. Houses go up. Fields spread. Years pass. You can watch, intervene, or hand strategy over to DeepSeek so the civilization names its own eras and writes its chronicle.

**Repo:** [github.com/tbenitz/civilization-in-a-bottle](https://github.com/tbenitz/civilization-in-a-bottle)

## Play right now

The simulation is the single HTML file you already have (`civilization_in_a_bottle4.html`). Open it in a browser (needs internet for Three.js).

To make this repo the live copy:

1. Open the repo on GitHub
2. **Add file → Upload files**
3. Drop `civilization_in_a_bottle4.html`
4. Name it `index.html` (replace the current page) *or* keep it as `sim.html` and open that path
5. Commit to `main`

That one file is the whole world: 3D bottle, people, weather, chronicle, and optional DeepSeek.

## Controls

- Drag to look around
- Right-drag or Shift-drag to move sideways / up / down
- Scroll to fly forward and back
- WASD + Q/E to fly (Shift faster)
- Double-click a person or spot to inspect / move closer
- **Fit** resets the camera to the bottle
- Space pauses time

Powers along the bottom: rain, sun, food, the black cube, fire, settlers, or a custom event written into history.

## AI (optional)

Works with no key. In **Settings**, add a [DeepSeek](https://platform.deepseek.com/) key if you want the civilization to make high-level decisions, narrate events, and name eras. The key stays in this browser's `localStorage` only.

## Run locally

```bash
git clone https://github.com/tbenitz/civilization-in-a-bottle.git
cd civilization-in-a-bottle
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## GitHub Pages

1. Repo **Settings → Pages**
2. Source: **GitHub Actions** (a workflow is already in `.github/workflows/pages.yml`)
   or **Deploy from a branch** → `main` / `/ (root)`
3. Site URL: `https://tbenitz.github.io/civilization-in-a-bottle/`

Saves live in the visitor's browser, not on the server.

## License

MIT. See [LICENSE](LICENSE).
