var merge = require("lodash.merge");

module.exports = function() {
	var src = {
		default: {},
		development: {
			siteBaseUrl: "https://www.conveyconsciousness.com/"
		},
		production: {
			siteBaseUrl: "https://smix.netlify.app"
		}
	};

	var config = merge({}, src.default);
	process.env.NODE_ENV === "production"
		? merge(config, src.production)
		: merge(config, src.development);

	return config;
};
