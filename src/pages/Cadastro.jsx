import { Link } from 'react-router-dom'
import '../App.css'

function Cadastro() {
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="brand">
          <div className="brand-icon">✓</div>
          <h1>Criar conta</h1>
          <p>Cadastre-se no MeuPrazo para organizar suas atividades acadêmicas.</p>
        </div>

        <form className="login-form">
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              placeholder="Digite seu nome"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
            />
          </div>

          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              placeholder="Crie uma senha"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmarSenha">Confirmar senha</label>
            <input
              type="password"
              id="confirmarSenha"
              placeholder="Digite a senha novamente"
            />
          </div>

          <button type="submit" className="login-button">
            Cadastrar
          </button>
        </form>

        <div className="register-link">
          <span>Já possui uma conta?</span>
          <Link to="/">Entrar</Link>
        </div>
      </div>
    </div>
  )
}

export default Cadastro