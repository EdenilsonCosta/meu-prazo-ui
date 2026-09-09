import { Link } from 'react-router-dom'
import '../App.css'

function Dashboard() {
  return (
    <div className="dashboard-page">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-icon">✓</div>
          <span>MeuPrazo</span>
        </div>

        <nav className="sidebar-menu">
          <Link to="/dashboard" className="menu-item active">
            Dashboard
          </Link>

          <a href="#" className="menu-item">
            Minhas tarefas
          </a>

          <a href="#" className="menu-item">
            Disciplinas
          </a>
        </nav>

        <Link to="/" className="logout-link">
          Sair
        </Link>
      </aside>

      <main className="dashboard-content">
        <header className="dashboard-header">
          <div>
            <p className="welcome-text">Bem-vindo ao MeuPrazo</p>
            <h1>Dashboard</h1>
          </div>

          <div className="user-avatar">A</div>
        </header>

        <section className="summary-grid">
          <div className="summary-card">
            <span className="summary-label">Total de tarefas</span>
            <strong>8</strong>
            <p>Atividades cadastradas</p>
          </div>

          <div className="summary-card">
            <span className="summary-label">Pendentes</span>
            <strong>5</strong>
            <p>Tarefas aguardando conclusão</p>
          </div>

          <div className="summary-card">
            <span className="summary-label">Concluídas</span>
            <strong>3</strong>
            <p>Tarefas finalizadas</p>
          </div>

          <div className="summary-card">
            <span className="summary-label">Disciplinas</span>
            <strong>4</strong>
            <p>Disciplinas cadastradas</p>
          </div>
        </section>

        <section className="dashboard-section">
          <div className="section-header">
            <div>
              <h2>Próximas tarefas</h2>
              <p>Acompanhe seus próximos prazos acadêmicos.</p>
            </div>

            <button type="button" className="primary-button">
              + Nova tarefa
            </button>
          </div>

          <div className="task-list">
            <div className="task-card">
              <div>
                <span className="discipline-tag">Programação Web</span>
                <h3>Atividade de React</h3>
                <p>Entrega: 15/09/2026</p>
              </div>
              <span className="status pending">Pendente</span>
            </div>

            <div className="task-card">
              <div>
                <span className="discipline-tag">Banco de Dados</span>
                <h3>Modelo relacional</h3>
                <p>Entrega: 18/09/2026</p>
              </div>
              <span className="status pending">Pendente</span>
            </div>

            <div className="task-card">
              <div>
                <span className="discipline-tag">Projeto Integrador II</span>
                <h3>Entrega 2</h3>
                <p>Entrega: 13/09/2026</p>
              </div>
              <span className="status completed">Concluída</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Dashboard