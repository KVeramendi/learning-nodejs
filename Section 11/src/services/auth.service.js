const { JwtHelper } = require('../helpers');
let _userService = null;

class AuthService {
    constructor({ UserService }) {
        _userService = UserService;
    }

    async signUp(user) {
        const { username } = user;
        const currentUser = await _userService.getUserByUsername(username);
        if (currentUser) {
            const error = new Error();
            error.status = 400;
            error.message = 'User already exist';
            throw error;
        }
        return await _userService.create(user);
    }

    async signIn(user) {
        const { username, password } = user;
        const currentUser = await _userService.getUserByUsername(username);
        if (!currentUser) {
            const error = new Error();
            error.status = 404;
            error.message = 'User does not exist';
            throw error;
        }
        const isValidPassword = await currentUser.comparePasswords(password);
        if (!isValidPassword) {
            const error = new Error();
            error.status = 400;
            error.message = 'Invalid Password';
            throw error;
        }
        const userToEncode = {
            id: currentUser._id,
            username: currentUser.username
        };
        const token = JwtHelper.generateToken(userToEncode);
        return { user: currentUser, token };
    }
}

module.exports = AuthService;