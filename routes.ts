import Router from "koa-router";

export const router = new Router();

//noinspection UnusedParameters
router.get("/hello", (ctx, next) => {
    ctx.body = "Hello World";
});
