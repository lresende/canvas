/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2017. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/

const isProduction = process.env.NODE_ENV === "production";

var assign = require("object-assign");

var babelBaseOptions = {
	presets: ["@babel/preset-env", "@babel/preset-react"]
};

var babelClientOptions = assign({}, babelBaseOptions, {
	cacheDirectory: true,
	env: {
		development: {
			presets: !isProduction ? ["react-hmre"] : []
		}
	}
});

var babelTestOptions = assign({}, babelBaseOptions, {
	env: {
		test: {
			plugins: [
				[
					"babel-plugin-webpack-loaders",
					{
						// The config path is relative to the root of the project
						config: "./webpack.config.test.js",
						verbose: false
					}
				]
			]
		}
	}
});

exports.babelBaseOptions = babelBaseOptions;
exports.babelTestOptions = babelTestOptions;
exports.babelClientOptions = babelClientOptions;
