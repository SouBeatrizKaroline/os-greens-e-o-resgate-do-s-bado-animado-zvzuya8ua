import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  const location = useLocation()

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold mb-4 game-title-text gradient-text-saturday">404</h1>
        <p className="text-xl text-muted-foreground mb-6 game-body-text">
          Ops! Esta página se perdeu no mundo mágico.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold game-body-text hover:scale-105 transition-transform duration-200"
        >
          Voltar ao Início
        </Link>
      </div>
    </div>
  )
}

export default NotFound
