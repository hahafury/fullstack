module.exports.errorHandler = (err, req, res, next) => {
    if (res.headersSent) return;
    console.log('Error:>>', err);
    res.status(500).send({
        data: null,
        errors: [{title: err?.message ?? 'Internal server error'}]
    });
};