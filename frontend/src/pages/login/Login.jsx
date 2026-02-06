import './style.css'

export default function Login(){
    return(
        <div className="containerPrincipal">
            <div className="containerinputs">
                {/* 
                  TODO: Lógica de Login (Integração)
                  1. Criar estados para email e senha:
                     const [email, setEmail] = useState('')
                     const [senha, setSenha] = useState('')
                     
                  2. Capturar o que o usuário digita nos inputs abaixo (onChange).
                */}
                <h2>Login Sistema</h2>
                <div className="inputs">
                    <label>Email:</label>
                    <input type="text" name="" id="" />

                    <label>Senha:</label>
                    <input type="password" name="" id="" /> {/* DICA: Mudei type para password */}
                </div>
                {/* 
                  3. No onClick do botão, chamar função de login:
                     - axios.post('http://localhost:3000/api/loginUsuario', { email, senha })
                     - Se sucesso (200):
                       - localStorage.setItem('token', response.data.token)
                       - navigate('/main') // Redirecionar para home
                     - Se erro:
                       - alert('Email ou senha inválidos') 
                */}
                <button type="submit">Realizar Login</button>
            </div>
        </div>
    )
}