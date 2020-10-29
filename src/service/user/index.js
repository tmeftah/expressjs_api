class UserService {
  async Signup(user) {
    return { user: user.email };
  }
}

module.exports = UserService;
