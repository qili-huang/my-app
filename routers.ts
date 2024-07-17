import Router from "koa-router";
import { userRouter } from './routers/user.router';
import bodyParser from '@koa/bodyparser';

export const router = new Router();

router.use(bodyParser());

router.use(userRouter.routes()).use(userRouter.allowedMethods());