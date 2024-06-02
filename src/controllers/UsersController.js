const { hash, compare } = require("bcryptjs");

const AppError = require("../utils/AppError");

const sqliteConnection = require("../database/sqlite");

const knex = require("../database/knex");

const UserRepository = require("../repositories/UserRepository");
const UserCreateService = require("../services/UserCreateService");

class UsersController {
  async create(request, response) {
    const { name, email, password, role } = request.body;

    const userRepository = new UserRepository();
    const userCreateService = new UserCreateService(userRepository);

    const user = await userCreateService.execute({
      name,
      email,
      password,
      role,
    });

    return response.status(201).json(user);
  }

  async update(request, response) {
    const { name, email, password, oldPassword } = request.body;
    const user_id = request.user.id;

    const database = await sqliteConnection();
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [
      user_id,
    ]);

    const userWithUpdatedEmail = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    );

    if (!user) {
      throw new AppError("Usuário não encontrado");
    }

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError("Este e-mail já está em uso.");
    }
    user.name = name ?? user.name;
    user.email = email ?? user.email;

    if (password && oldPassword) {
      const checkOldPassword = await compare(oldPassword, user.password);

      if (!checkOldPassword) {
        throw new AppError("A senha antiga não confere");
      }
    }

    if (password && !oldPassword) {
      throw new AppError("Informe a senha atual para definir a nova senha");
    }

    if (!password && oldPassword) {
      throw new AppError("Informe a nova senha");
    }

    try {
      user.password = await hash(password, 8);
    } catch (error) {}
    await database.run(
      `UPDATE users SET
    name = ?,
    email = ?,
    password = ?,
    updated_at = DATETIME ('now')
    WHERE id = ?
    `,
      [user.name, user.email, user.password, user_id]
    );

    return response.json();
  }
}

module.exports = UsersController;
