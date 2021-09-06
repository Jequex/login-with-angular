exports.SERVER_ERROR = {
    code: 500,
    data: {message: 'server error'}
};

exports.USER_ERROR = {
    code: 400,
    data: {message: 'invalid credentials'}
};

exports.FORGOT_ERROR = {
    code: 401,
    data: {message: 'user already exists'}
};