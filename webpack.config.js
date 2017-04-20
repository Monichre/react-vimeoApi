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
                test: /\.js$/, //This is a reg Ex telling webpack to look for all .js files
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};
