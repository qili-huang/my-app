import Router from "koa-router";
import { userRouter } from './routers/user.router';
import bodyParser from '@koa/bodyparser';
import { logMiddleware } from './log-middleware';

export const router = new Router();

router.use(bodyParser());
//应用日志中间件
router.use(logMiddleware);
router.use(userRouter.routes()).use(userRouter.allowedMethods());