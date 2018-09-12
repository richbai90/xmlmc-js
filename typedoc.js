module.exports = {
    out: './docs/dist/api/',

    readme: 'none',
    includes: './',
    exclude: '**/browser/**/*',
    mode: 'modules',
    excludeExternals: true,
    excludeNotExported: true,
    excludePrivate: true
};
