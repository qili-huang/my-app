class UserDTO {
    id: number;
    name: string;
    age: number;

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

const Users: UserDTO [] = [
    {
        id: 1,
        name: '张三',
        age: 18
    },
    {
        id: 2,
        name: '李四',
        age: 20
    },
    {
        id: 3,
        name: '王五',
        age: 22
    }
];

//查询所有用户列表
export const getAllUsers = (): UserDTO[] => {
    return Users;
};

//根据ID查询用户信息
export const getUserById = (id: number): UserDTO | undefined => {
    return Users.find(u => u.id === id);
};

//创建一个新的用户
export const createUser = (user: UserDTO): UserDTO => {
    user.id = Users.length ? Math.max(...Users.map(u => u.id!)) + 1 : 1;
    Users.push(user);
    return user;
};

//更新用户信息
export const updateUser = (id: number, user: UserDTO): UserDTO | null => {
    const index = Users.findIndex(u => u.id === id);
    if (index !== -1) {
        Users[index] = {...Users[index], ...user};
        return Users[index];
    }
    return null;
};

//删除一个用户信息
export const deleteUser = (id: number): boolean => {
    const index = Users.findIndex(u => u.id === id);
    if (index !== -1) {
        Users.splice(index, 1);
        return true;
    }
    return false;
};