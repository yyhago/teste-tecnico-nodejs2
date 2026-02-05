import Router from 'express';
import userRoute from "../routes/userRoute.js"
import productRoute from "../routes/productRoute.js"
import movimentacaoEstoque from "../routes/movimentacaoRoute.js"
const routes = Router()

routes.use("/", userRoute)
routes.use("/", productRoute)
routes.use("/", movimentacaoEstoque)

export default routes