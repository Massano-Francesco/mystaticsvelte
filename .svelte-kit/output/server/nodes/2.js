

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.jn4Yi7-C.js","_app/immutable/chunks/D-le3NxK.js","_app/immutable/chunks/yIO1uz3L.js","_app/immutable/chunks/DXJGlvIB.js"];
export const stylesheets = [];
export const fonts = [];
