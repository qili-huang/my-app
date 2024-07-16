import Koa from "koa";
import {router} from "./routes";
import bodyParser from '@koa/bodyparser';

const app = new Koa();
const port = 3000; 


app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log("Server is running on port http://localhost:${port}/")
})