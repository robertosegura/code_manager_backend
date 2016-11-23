# code_manager_backend
Backend for the code documentator

**Install dependencies**

cd code_manager_backend

npm install

**Run migrations**

./node_modules/sequelize-cli/bin/sequelize db:migrate

**Revert last migration**

./node_modules/sequelize-cli/bin/sequelize db:migrate:undo

./node_modules/sequelize-cli/bin/sequelize db:migrate:undo:all

**Run seeders**

./node_modules/sequelize-cli/bin/sequelize db:seed:all

**Revert last seeders**

./node_modules/sequelize-cli/bin/sequelize db:seed:undo

./node_modules/sequelize-cli/bin/sequelize db:seed:undo:all