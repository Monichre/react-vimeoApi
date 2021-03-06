

module.exports = {

    entry: './app.js',
    output: {
        // path: 'build', This is an optional property
        filename: 'bundle.js'
    },

    // target: 'node',
    // externals: [nodeExternals()],
    //This handles which transformations we'd like to make on our code
    node: {
        fs: 'empty'
    },
    module: {

        loaders: [

            {
                test: [/\.js$/, './plugins'], //This is a reg Ex telling webpack to look for all .js files
                loaders: ['react-hot-loader', 'babel-loader'],
                exclude: /node_modules/ //Changed to 'loaders' since we're using multiple - added react-hot to maintain Component states during reload
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader' //Style loader runs first and then pipes output into the CSS loader
            },
            // Load images
            {
                test: /\.jpg/,
                loader: "url-loader?limit=10000&mimetype=image/jpg"
            },
            {
                test: /\.gif/,
                loader: "url-loader?limit=10000&mimetype=image/gif"
            },
            {
                test: /\.png/,
                loader: "url-loader?limit=10000&mimetype=image/png"
            },
            {
                test: /\.svg/,
                loader: "url-loader?limit=10000&mimetype=image/svg"
            }
        ]
    },
    devServer: {
      historyApiFallback: true
  }
};
