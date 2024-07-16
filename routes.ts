import Router from "koa-router";
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from './services/user.service';

export const router = new Router();

//noinspection UnusedParameters
router.get("/hello", (ctx) => {
    ctx.body = "Hello World";
});

//查询所有用户列表
router.get('/users', getAllUsers);
//根据ID查询用户信息
router.get('/users/:id', getUserById);
//创建一个新的用户
router.post('/users', createUser);
//更新用户信息
router.put('/users/:id', updateUser);
//删除一个用户信息
router.delete('/users/:id', deleteUser);
