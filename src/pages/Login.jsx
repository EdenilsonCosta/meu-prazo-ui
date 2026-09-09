import { Link } from 'react-router-dom'
import '../App.css'

function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="brand">
          <div className="brand-icon">✓</div>
          <h1>MeuPrazo</h1>
          <p>Organize suas tarefas acadêmicas em um só lugar.</p>
        </div>

        <form className="login-form">
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
              placeholder="Digite sua senha"
            />
          </div>

          <div className="login-options">
            <label className="remember">
              <input type="checkbox" />
              <span>Lembrar-me</span>
            </label>

            <a href="#">Esqueci minha senha</a>
          </div>

          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>

        <div className="register-link">
          <span>Ainda não possui uma conta?</span>
          <Link to="/cadastro">Cadastre-se</Link>
        </div>
      </div>
    </div>
  )
}

export default Login