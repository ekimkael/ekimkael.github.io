const path = require("path")

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	images: {
		loader: "default",
		path: "/_next/image",
	},
}
