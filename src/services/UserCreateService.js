const AppError = require("../utils/AppError");
const { hash } = require("bcryptjs");

class UserCreateService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async execute({ name, email, password, role }) {
    const checkUserExists = await this.userRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError("Este email já está em uso");
    }

    const hashedPassword = await hash(password, 8);

    typeof role === "undefined" && (role = "customer");

    const user = await this.userRepository.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    
    return user;
  }
}
module.exports = UserCreateService;
