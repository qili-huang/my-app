import Koa from "koa";
import {router} from "./routers";

const app = new Koa();
const port = 3000; 


app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log("Server is running on port http://localhost:${port}/")
})