(async () => {
  try {
    const files = ['src/state-world.js', 'src/controls-sim.js', 'src/ai-ui.js'];
    const parts = await Promise.all(files.map(async (f) => {
      const res = await fetch(f, { cache: 'no-store' });
      if (!res.ok) throw new Error('Missing ' + f + ' (' + res.status + ')');
      return res.text();
    }));
    (0, eval)(parts.join('\n'));
  } catch (err) {
    console.error(err);
    document.body.insertAdjacentHTML('beforeend',
      '<div style="position:fixed;inset:0;display:grid;place-items:center;color:#e8f6f3;font-family:system-ui;background:#07141c;z-index:99"><div style="max-width:28rem;padding:1.5rem"><h1 style="margin:0 0 .5rem">World engine not loaded</h1><p style="color:#8ba5a2">Add the three files in <code>src/</code> or drop the original HTML into the repo as a single-file fallback.</p><p style="color:#8ba5a2">' + String(err) + '</p></div></div>'
    );
  }
})();
