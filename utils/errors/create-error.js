const createError = (msg, status) => {
    const error = new Error (msg);
    error.status = status;
    return error;
};

module.exports = createError;