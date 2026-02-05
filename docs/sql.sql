CREATE TABLE usuario(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(150) NOT NULL,
    data_nascimento DATETIME NOT NULL
);

CREATE TABLE produto(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    descricao VARCHAR(255),
    preco DECIMAL(10,2) NOT NULL,
    codigo VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE movimentacaoEstoque(
	id INT PRIMARY KEY AUTO_INCREMENT,
    quantidade INT NOT NULL,
    status ENUM ('ENTRADA', 'SAIDA', 'N/A') DEFAULT ('N/A'),
    data_movimentacao DATETIME NOT NULL,
    usuario_id INT NOT NULL,
    produto_id INT NOT NULL,
    
    INDEX idx_usuario (usuario_id),
    INDEX idx_produto (produto_id),
    
    FOREIGN KEY (usuario_id) REFERENCES usuario(id),
    FOREIGN KEY (produto_id) REFERENCES produto(id)
);

INSERT INTO usuario (nome, email, senha, data_nascimento) VALUES
('João Silva', 'joao.silva@email.com', 'senha123', '1990-05-15');

INSERT INTO produto (nome, descricao, preco, codigo) VALUES
('Notebook Dell', 'Notebook Dell Inspiron 15', 3500.00, 'ND15-2021'),
('Smartphone Samsung', 'Smartphone Samsung Galaxy S21', 2500.00, 'SSG21-2021');

INSERT INTO movimentacaoEstoque (quantidade, status, data_movimentacao, usuario_id, produto_id) VALUES
(10, 'ENTRADA', '2024-06-01 10:00:00', 1, 1),
(5, 'SAIDA', '2024-06-02 14:30:00', 1, 2);