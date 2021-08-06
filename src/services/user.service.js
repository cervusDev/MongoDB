const User = require("../models/user");


class UserService {
  async findAll() {
    return await User.find();
  }

  async findById(id) {
    return await User.findById(id);
  }

  async createUser(user) {
    return await new filmeModel(user).save();
  }

  async updateUser(user, id) {
    return await User.findOneAndUpdate({ _id: id }, user);
  }

  async delete(id) {
    await User.findByIdAndDelete(id);
  }
}

module.exports = UserService;