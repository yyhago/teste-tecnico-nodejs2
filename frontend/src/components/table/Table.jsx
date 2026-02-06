import './style.css'

export default function Table() {
    return (
        <div className="containerTable">
            <div class="container mt-4">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h2>Listagem de Produtos</h2>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalCadastro">
                        <i class="bi bi-plus-circle"></i> Novo Produto
                    </button>
                </div>

                <div class="table-responsive shadow-sm rounded">
                    {/* 
                      TODO: Lógica de Listagem (Integração)
                      1. Criar estado para lista de produtos:
                         const [produtos, setProdutos] = useState([])
                         
                      2. Usar useEffect para buscar dados ao carregar a página:
                         useEffect(() => {
                           const token = localStorage.getItem('token')
                           axios.get('.../buscarProduto', { headers: { Authorization: `Bearer ${token}` } })
                             .then(response => setProdutos(response.data))
                         }, [])
                    */}
                    <table className="table table-hover align-middle"> {/* DICA: Use className em React, não class */}
                        <thead className="table-dark">
                            <tr>
                                <th>Cód.</th>
                                <th>Produto</th>
                                <th>Descrição</th>
                                <th>Preço</th>
                                <th className="text-center">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* 
                          TODO: Renderização Dinâmica
                          Em vez dessa linha estática, você fará um map:
                          
                          {produtos.map(produto => (
                            <tr key={produto.id}>
                              <td>{produto.codigo}</td>
                              <td>{produto.nome}</td>
                              <td>{produto.descricao}</td>
                              <td>{produto.preco}</td>
                              <td>...botões...</td>
                            </tr>
                          ))}
                        */}
                            <tr>
                                <td><span className="badge bg-secondary">#PROD001</span></td>
                                <td><strong>Monitor Gamer 24"</strong></td>
                                <td>Painel IPS 144Hz...</td>
                                <td>R$ 1.200,00</td>
                                <td className="text-center">
                                    <div className="btn-group" role="group">
                                        <button className="btn btn-sm btn-outline-warning" title="Editar"><i className="bi bi-pencil">EDIT.</i></button>
                                        <button className="btn btn-sm btn-outline-danger" title="Excluir"><i className="bi bi-trash">EXCL.</i></button>
                                        <button className="btn btn-sm btn-outline-success" title="Movimentar"><i className="bi bi-box-seam">MOV.</i></button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}