export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "mystaticsvelte/_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.DJOvFjF0.js",app:"_app/immutable/entry/app.DRIctlxY.js",imports:["_app/immutable/entry/start.DJOvFjF0.js","_app/immutable/chunks/B3Ohk9w1.js","_app/immutable/chunks/BhXK8Sv5.js","_app/immutable/chunks/DOUVmBPo.js","_app/immutable/chunks/D_h8Iqox.js","_app/immutable/entry/app.DRIctlxY.js","_app/immutable/chunks/BhXK8Sv5.js","_app/immutable/chunks/CJXIdqiy.js","_app/immutable/chunks/CIbTKPDu.js","_app/immutable/chunks/D_h8Iqox.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/mystaticsvelte/","/mystaticsvelte/about"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
