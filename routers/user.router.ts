import Router from "koa-router";
import * as UserService from "../services/user.service";

export const userRouter = new Router;


//noinspection UnusedParameters
userRouter.get("/hello", (ctx) => {
    ctx.body = "Hello World";
});

//查询所有用户列表
userRouter.get('/users', (ctx) => {
    ctx.body = UserService.getAllUsers();
});

//根据ID查询用户信息
userRouter.get('/users/:id', (ctx) => {
    const user = UserService.getUserById(parseInt(ctx.params.id));
    if (!user) {
        ctx.status = 404;
        ctx.body = { error: 'User not found' };
        ctx.body = user;
    }
    ctx.body = user;
});


//创建一个新的用户
userRouter.post('/users', (ctx) => {
    const newUser = UserService.createUser(ctx.request.body);
    ctx.status = 201;
    ctx.body = newUser;
});

//更新用户信息
userRouter.put('/users/:id', (ctx) => {
    const updatedUser = UserService.updateUser(parseInt(ctx.params.id), ctx.request.body);
    if(!updatedUser){
        ctx.status = 404;
        ctx.body = { error: 'User not found' };
    }
    ctx.body = updatedUser;
});

//删除一个用户信息
userRouter.delete('/users/:id', (ctx) => {
    const success = UserService.deleteUser(parseInt(ctx.params.id));
    if(!success){
        ctx.status = 404;
        ctx.body = { error: 'User not found' };
    }
    ctx.status = 204;
});