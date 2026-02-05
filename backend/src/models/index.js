import User from "./userModel";
import Product from "./productModel";
import MovimentacaoEstoque from "./movimentacaoEstoqueModel";

User.hasMany(MovimentacaoEstoque, {
  foreignKey: 'usuario_id',
  as: 'movimentacoes',
});

MovimentacaoEstoque.belongsTo(User, {
  foreignKey: 'usuario_id',
  as: 'usuario',
});

Product.hasMany(MovimentacaoEstoque, {
  foreignKey: 'produto_id',
  as: 'movimentacoes',
});

MovimentacaoEstoque.belongsTo(Product, {
  foreignKey: 'produto_id',
  as: 'produto',
});

export { User, Product, MovimentacaoEstoque };