const path = require("path")
const isProd = process.env.NODE_ENV === "production"

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	basePath: "/",
	assetPrefix: isProd ? "https://ekimkael.github.io" : "",
}
