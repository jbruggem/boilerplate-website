var path = require('path');

var f = {
    src: 'src',
    build: 'build',
    dust: 'dust',
    less: 'less',
    css: 'css',
    main_css: 'main.css',
    main_less: 'main.less',
}

module.exports = {
    dust: path.join(f.src, f.dust),
    main_less: path.join(f.src, f.less, f.main_less),
    main_built_css: path.join(f.build, f.css, f.main_css),
    build: f.build,
}