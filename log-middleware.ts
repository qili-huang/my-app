import Koa from "koa";

//日志中间件
export async function logMiddleware(ctx: Koa.Context, next: () => Promise<any>) {
    //请求开始时间
    const start = Date.now();

    //请求信息
    console.log('Request in:', {
        path: ctx.path,
        query: ctx.query,
        body: ctx.request.body,
    });

    // 等待其他中间件处理请求
    await next();
    //请求处理时间
    const ms = Date.now() - start;

    //响应信息
    console.log('Response out:', {
        path: ctx.path,
        status: ctx.status,
        body: ctx.response.body,
        duration: `${ms}ms`,
    });
    //console.log(ctx);

}