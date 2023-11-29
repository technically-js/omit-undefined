function omitUndefined(value) {
    return Object.fromEntries(
        Object.keys(value)
            .filter(function (key) {
                return typeof value[key] !== 'undefined';
            })
            .map(function (key) {
                return [key, value[key]];
            }),
    );
}

module.exports = {
    omitUndefined,
}