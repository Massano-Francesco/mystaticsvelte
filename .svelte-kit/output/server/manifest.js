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
		client: {start:"_app/immutable/entry/start.DGX19Y9U.js",app:"_app/immutable/entry/app.6woXL_fG.js",imports:["_app/immutable/entry/start.DGX19Y9U.js","_app/immutable/chunks/DG_6MdVg.js","_app/immutable/chunks/yIO1uz3L.js","_app/immutable/chunks/83hEE43M.js","_app/immutable/chunks/CMenIghA.js","_app/immutable/entry/app.6woXL_fG.js","_app/immutable/chunks/yIO1uz3L.js","_app/immutable/chunks/VKO4yhbf.js","_app/immutable/chunks/D-le3NxK.js","_app/immutable/chunks/CMenIghA.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
