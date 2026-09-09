import { Link } from 'react-router-dom'
import '../App.css'

function Disciplinas() {
  return (
    <div className="dashboard-page">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-icon">✓</div>
          <span>MeuPrazo</span>
        </div>

        <nav className="sidebar-menu">
          <Link to="/dashboard" className="menu-item">
            Dashboard
          </Link>

          <a href="#" className="menu-item">
            Minhas tarefas
          </a>

          <Link to="/disciplinas" className="menu-item active">
            Disciplinas
          </Link>
        </nav>

        <Link to="/" className="logout-link">
          Sair
        </Link>
      </aside>

      <main className="dashboard-content">
        <header className="dashboard-header">
          <div>
            <p className="welcome-text">Organização acadêmica</p>
            <h1>Disciplinas</h1>
          </div>

          <div className="user-avatar">A</div>
        </header>

        <section className="dashboard-section">
          <div className="section-header">
            <div>
              <h2>Minhas disciplinas</h2>
              <p>Gerencie as disciplinas cadastradas no MeuPrazo.</p>
            </div>

            <button type="button" className="primary-button">
              + Nova disciplina
            </button>
          </div>

          <div className="discipline-grid">
            <div className="discipline-card">
              <div>
                <span className="discipline-tag">Disciplina</span>
                <h3>Programação Web</h3>
                <p>3 tarefas cadastradas</p>
              </div>

              <button type="button" className="secondary-button">
                Ver tarefas
              </button>
            </div>

            <div className="discipline-card">
              <div>
                <span className="discipline-tag">Disciplina</span>
                <h3>Banco de Dados</h3>
                <p>2 tarefas cadastradas</p>
              </div>

              <button type="button" className="secondary-button">
                Ver tarefas
              </button>
            </div>

            <div className="discipline-card">
              <div>
                <span className="discipline-tag">Disciplina</span>
                <h3>Projeto Integrador II</h3>
                <p>2 tarefas cadastradas</p>
              </div>

              <button type="button" className="secondary-button">
                Ver tarefas
              </button>
            </div>

            <div className="discipline-card">
              <div>
                <span className="discipline-tag">Disciplina</span>
                <h3>Engenharia de Software</h3>
                <p>1 tarefa cadastrada</p>
              </div>

              <button type="button" className="secondary-button">
                Ver tarefas
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Disciplinas