/* global module require */

module.exports = {
    plugins: [
        require('postcss-assets')({
            loadPaths: ['src/fonts/**/*', 'src/img/'],
            relativeTo: 'src/css/'
        }),
        require('postcss-strip-units'),
        require('autoprefixer'),
        require('cssnano')({
            preset: 'default',
        })
    ]
}