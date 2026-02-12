import './Header.css'

interface HeaderProps {
  points: number
  level: number
}

export default function Header({ points, level }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <h1 className="logo">🚀 Camino del Éxito <span style={{ color: '#ffd700', fontWeight: 900, textShadow: '0 3px 6px rgba(255, 215, 0, 0.6)' }}>Welli</span></h1>
          <p className="tagline">¡Gamifica tu éxito!</p>
        </div>
        
        <div className="stats-section">
          <div className="stat-card points-card">
            <span className="stat-icon">⭐</span>
            <div className="stat-content">
              <p className="stat-label"><span style={{ color: '#ffd700', fontWeight: 900 }}>Welli</span> Puntos</p>
              <p className="stat-value">{points.toLocaleString()}</p>
            </div>
          </div>
          
          <div className="stat-card level-card">
            <span className="stat-icon">🎖️</span>
            <div className="stat-content">
              <p className="stat-label">Nivel</p>
              <p className="stat-value">{level}</p>
            </div>
          </div>

          <div className="stat-card streak-card">
            <span className="stat-icon">🔥</span>
            <div className="stat-content">
              <p className="stat-label">Racha</p>
              <p className="stat-value">7 días</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}