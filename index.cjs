function omitUndefined(value) {
    return Object.fromEntries(
        Object.entries(value).filter(function(entry) {
            return typeof entry[1] !== 'undefined';
        }),
    );
}

module.exports = {
    omitUndefined,
};
