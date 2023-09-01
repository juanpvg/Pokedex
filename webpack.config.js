var config = {
  entry: './main.jsx',

  output: {
    path: 'build/',
    filename: 'index.js',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      }
    ]
  }
}

module.exports = config;

/*
module.exports = {
    //...
  
    module: {
      loaders: [
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          loaders: ["babel-loader"]
        },
        //...
      ]
    }
}
*/