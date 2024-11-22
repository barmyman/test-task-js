class User {
    static count = 0;

    constructor(name, login, password) {
        this._name = name;
        this._login = login;
        this._password = password;
        User.count++;
    }

// геттер для имени
    get name() {
        return this._name;
    }

// сеттер для имени
    set name(newName) {
        this._name = newName;
    }

// геттер для логина
    get login() {
        return this._login;
    }

// сеттер для логина (запрещен)
    set login(newLogin) {
        throw new Error("Ошибка: нельзя изменять логин");
    }

// сеттер для пароля
    set password(newPassword) {
        this._password = newPassword;
    }

// геттер для пароля (скрыт, возвращает звезды)
    get password() {
        return "*".repeat(this._password.length);
    }

// метод для отображения информации о пользователе
    showInfo() {
        console.log(`Name: ${this.name}, Login: ${this.login}`);
    }
}

class SuperUser extends User {
    static count = 0;

    constructor(name, login, password, role) {
        super(name, login, password);
        this._role = role;
        SuperUser.count++;
    }

// геттер для роли
    get role() {
        return this._role;
    }

// сеттер для роли
    set role(newRole) {
        this._role = newRole;
    }

// переопределение метода showInfo
    showInfo() {
        console.log(`Name: ${this.name}, Login: ${this.login}, Role: ${this.role}`);
    }
}

// пример использования
const user1 = new User('Paul McCartney', 'paul', '1234');
const user2 = new User('George Harrison', 'george', '5678');
const user3 = new User('Richard Starkey', 'ringo', '8523');
const admin = new SuperUser('John Lennon', 'john', '0000', 'admin');

user1.showInfo();
admin.showInfo();

let users = User.count;
let admins = SuperUser.count;

console.log(`Всего обычных пользователей: ${users}`);
console.log(`Всего супер-пользователей: ${admins}`);

// Проверка изменения атрибутов
user3.name = 'Ringo Starr';
user1.password = 'Pa$$w0rd';

console.log(user3.name); // Ringo Starr
console.log(user2.password); // ********
console.log(user2.login); // george

try {
    user2.login = 'geo'; // Ошибка
} catch (e) {
    console.error(e.message);
}
