import Router from "koa-router";

export const router = new Router();

//noinspection UnusedParameters
router.get("/hello", (ctx) => {
    ctx.body = "Hello World";
});
