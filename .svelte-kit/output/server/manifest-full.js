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
		client: {start:"_app/immutable/entry/start.DAYGevAx.js",app:"_app/immutable/entry/app.Bw7QwyHY.js",imports:["_app/immutable/entry/start.DAYGevAx.js","_app/immutable/chunks/BKCYEtc_.js","_app/immutable/chunks/yIO1uz3L.js","_app/immutable/chunks/CMenIghA.js","_app/immutable/entry/app.Bw7QwyHY.js","_app/immutable/chunks/yIO1uz3L.js","_app/immutable/chunks/VKO4yhbf.js","_app/immutable/chunks/D-le3NxK.js","_app/immutable/chunks/CMenIghA.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
