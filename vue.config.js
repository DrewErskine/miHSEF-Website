module.exports = {
    // Use the publicPath option for deployment on GitHub Pages
    publicPath: process.env.NODE_ENV === 'production'
      ? '/miHSEF-Website/'
      : '/',
    
    // For multi-page applications, configure the pages option
    pages: {
      index: {
        entry: 'src/main.js', // Assumes your entry file is src/main.js
        template: 'public/index.html',
        filename: 'index.html',
        title: 'Home Page',
        chunks: ['chunk-vendors', 'chunk-common', 'index']
      },
      // Define additional pages with similar structure if necessary
    },
  
    // Configure webpack's devServer to rewrite URLs to index.html
    // This helps with Vue Router's history mode in development
    devServer: {
      historyApiFallback: true,
    },
  
    // Optional: configure webpack for specific needs
    configureWebpack: {
      // Example: resolve alias configuration
      resolve: {
        alias: {
          // Define your aliases here
        }
      }
    },
  
    // Optional: Enable CSS source maps in development for easier debugging
    css: {
      sourceMap: process.env.NODE_ENV !== 'production',
    },
  
    // Optional: tweak internal webpack configuration using chainWebpack
    chainWebpack: config => {
      // Example: modify the HTML plugin's options for the index page
      if (process.env.NODE_ENV === 'production') {
        config.plugin('html-index').tap(args => {
          args[0].minify.removeComments = false;
          return args;
        });
      }
    },
  };
  