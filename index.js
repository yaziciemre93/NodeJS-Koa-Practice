const Koa = require("koa");
const app = new Koa();

app.use(async (ctx) => {
  ctx.body = "Kodluyoruz";
});

app.listen(3000);
