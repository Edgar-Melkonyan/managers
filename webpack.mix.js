const mix = require('laravel-mix');

mix
  .js('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')
  .webpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'resources/js'),
      }
    },
    output: {
      chunkFilename: 'js/[name].js?id=[chunkhash]',
    }
  });
    // .postCss('resources/css/app.scss', 'public/css', [
    //     require('postcss-import'),
    //     require('tailwindcss'),
    // ]);
