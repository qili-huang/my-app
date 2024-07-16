import Router from "koa-router";
import * as UserService from './services/user.service';

export const router = new Router();

//noinspection UnusedParameters
router.get("/hello", (ctx) => {
    ctx.body = "Hello World";
});

//查询所有用户列表
router.get('/users', (ctx) => {
    ctx.body = UserService.getAllUsers();
});

//根据ID查询用户信息
router.get('/users/:id', (ctx) => {
    const user = UserService.getUserById(parseInt(ctx.params.id));
    if (!user) {
        ctx.status = 404;
        ctx.body = { error: 'User not found' };
        ctx.body = user;
    }
    ctx.body = user;
});


//创建一个新的用户
router.post('/users', (ctx) => {
    const newUser = UserService.createUser(ctx.request.body);
    ctx.status = 201;
    ctx.body = newUser;
});

//更新用户信息
router.put('/users/:id', (ctx) => {
    const updatedUser = UserService.updateUser(parseInt(ctx.params.id), ctx.request.body);
    if(!updatedUser){
        ctx.status = 404;
        ctx.body = { error: 'User not found' };
    }
    ctx.body = updatedUser;
});

//删除一个用户信息
router.delete('/users/:id', (ctx) => {
    const success = UserService.deleteUser(parseInt(ctx.params.id));
    if(!success){
        ctx.status = 404;
        ctx.body = { error: 'User not found' };
    }
    ctx.status = 204;
});