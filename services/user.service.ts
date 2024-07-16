import Koa from 'koa';
const Users = [
    { id: 1, name: '张三', age: 18 },
    { id: 2, name: '李四', age: 20 },
    { id: 3, name: '王五', age: 22 },
];

//查询所有用户列表
export const getAllUsers = async (ctx: Koa.Context) => {
    ctx.body = Users;
};

//根据ID查询用户信息
export const getUserById = async (ctx: Koa.Context) => {
    const user = Users.find(u => u.id === parseInt(ctx.params.id));
    if (!user) {
        ctx.status = 404;
        ctx.body = 'User not found';
        return;
    }
    ctx.body = user;
};

//创建一个新的用户
export const createUser = async (ctx: Koa.Context) => {
    const { name, age } = ctx.request.body;
    const newUser = { id: Users.length + 1, name, age };
    Users.push(newUser);
    ctx.status = 201;
    ctx.body = newUser;
};

//更新用户信息
export const updateUser = async (ctx: Koa.Context) => {
    const user = Users.find(u => u.id === parseInt(ctx.params.id));
    if (!user) {
        ctx.status = 404;
        ctx.body = 'User not found';
        return;
    }
    const { name, age } = ctx.request.body;
    user.name = name;
    user.age = age;
    ctx.body = user;
};

//删除一个用户信息
export const deleteUser = async (ctx: Koa.Context) => {
    const index = Users.findIndex(u => u.id === parseInt(ctx.params.id));
    if (index === -1) {
        ctx.status = 404;
        ctx.body = 'User not found';
        return;
    }
    Users.splice(index, 1);
    ctx.status = 204;
};