(async () => {
  const b64 = "SEE_FILE";
  const bin = Uint8Array.from(atob(b64), c => c.charCodeAt(0));
  const ds = new DecompressionStream("gzip");
  const stream = new Blob([bin]).stream().pipeThrough(ds);
  const text = await new Response(stream).text();
  (0, eval)(text);
})().catch(err => {
  document.body.insertAdjacentHTML("beforeend",
    "<div style=\"position:fixed;inset:0;display:grid;place-items:center;color:#e8f6f3;font-family:system-ui;background:#07141c\"><div><h1>Could not start the world</h1><p>" + String(err) + "</p></div></div>");
});
