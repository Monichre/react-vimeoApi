module.exports = {
    entry: './app.js',
    output: {
        // path: 'build', This is an optional property
        filename: 'bundle.js'
    },
    //This handles which transformations we'd like to make on our code
    module: {
        loaders: [
            {
                test: [/\.js$/, './plugins'], //This is a reg Ex telling webpack to look for all .js files
                exclude: /node_modules/,
                loaders: ['react-hot-loader', 'babel-loader'] //Changed to 'loaders' since we're using multiple - added react-hot to maintain Component states during reload
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader' //Style loader runs first and then pipes output into the CSS loader
            }
        ]
    },
    devServer: {
      historyApiFallback: true
  }
};
