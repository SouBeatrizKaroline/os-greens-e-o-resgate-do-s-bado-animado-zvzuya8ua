import { useState } from 'react'
import { Play, BookOpen, Sparkles, Settings, Star, Heart } from 'lucide-react'
import { cn } from '@/lib/utils'

interface MenuOption {
  id: string
  label: string
  icon: typeof Play
  description: string
  color: string
}

const menuOptions: MenuOption[] = [
  {
    id: 'play',
    label: 'Jogar',
    icon: Play,
    description: 'Comece sua aventura',
    color: 'from-amber-400 to-orange-500',
  },
  {
    id: 'how',
    label: 'Como Jogar',
    icon: BookOpen,
    description: 'Aprenda os controles',
    color: 'from-purple-400 to-pink-500',
  },
  {
    id: 'creatures',
    label: 'Criaturas',
    icon: Sparkles,
    description: 'Conheça os seres mágicos',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    id: 'settings',
    label: 'Configurações',
    icon: Settings,
    description: 'Ajuste o jogo',
    color: 'from-emerald-400 to-green-500',
  },
]

const creatures = [
  { name: 'Pip', emoji: '🦊', color: 'text-orange-400', desc: 'Raposa estelar' },
  { name: 'Bolha', emoji: '🐙', color: 'text-cyan-400', desc: 'Polvo mágico' },
  { name: 'Faísca', emoji: '🐉', color: 'text-red-400', desc: 'Dragão pequeno' },
  { name: 'Musgo', emoji: '🦕', color: 'text-green-400', desc: 'Dinossauro doce' },
]

export function GameMenu() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const handleSelect = (id: string) => {
    setSelectedId(id)
  }

  return (
    <div className="relative z-10 flex flex-col items-center w-full max-w-2xl mx-auto px-4">
      <div className="text-center mb-8 animate-fade-in-down">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <Star className="w-4 h-4 text-primary fill-primary" />
          <span className="text-sm font-semibold text-primary game-body-text">
            Aventura Mágica 3D
          </span>
          <Star className="w-4 h-4 text-primary fill-primary" />
        </div>
        <h1 className="game-title-text text-5xl sm:text-6xl md:text-7xl leading-tight mb-3">
          <span className="block gradient-text-saturday drop-shadow-2xl">Os Greens</span>
          <span className="block text-2xl sm:text-3xl md:text-4xl text-foreground/80 font-bold mt-1">
            e o Resgate do
          </span>
          <span className="block text-3xl sm:text-4xl md:text-5xl gradient-text-saturday drop-shadow-2xl mt-1">
            Sábado Animado
          </span>
        </h1>
        <p className="game-body-text text-base sm:text-lg text-muted-foreground max-w-md mx-auto mt-4">
          Lilo salva criaturas mágicas para restaurar a imaginação das crianças!
        </p>
      </div>

      <div className="w-full space-y-3 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        {menuOptions.map((option) => {
          const Icon = option.icon
          const isHovered = hoveredId === option.id
          const isSelected = selectedId === option.id
          return (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              onMouseEnter={() => setHoveredId(option.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={cn(
                'menu-button group relative w-full flex items-center gap-4 px-6 py-4 rounded-2xl border-2 transition-all duration-300',
                isHovered
                  ? 'border-primary/60 bg-card shadow-glow scale-[1.02]'
                  : 'border-border bg-card/60 hover:bg-card',
                isSelected && 'ring-2 ring-primary/40',
              )}
            >
              <div
                className={cn(
                  'flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br transition-transform duration-300',
                  option.color,
                  isHovered ? 'scale-110 rotate-3' : 'scale-100',
                )}
              >
                <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex-1 text-left">
                <div className="text-lg font-bold text-foreground game-body-text">
                  {option.label}
                </div>
                <div className="text-sm text-muted-foreground game-body-text">
                  {option.description}
                </div>
              </div>
              <div
                className={cn(
                  'transition-all duration-300',
                  isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2',
                )}
              >
                <Play className="w-5 h-5 text-primary fill-primary" />
              </div>
            </button>
          )
        })}
      </div>

      <div className="mt-8 w-full animate-fade-in-up" style={{ animationDelay: '400ms' }}>
        <div className="flex items-center gap-2 mb-3 justify-center">
          <Heart className="w-4 h-4 text-accent fill-accent" />
          <span className="text-sm font-semibold text-muted-foreground game-body-text">
            Criaturas para Resgatar
          </span>
          <Heart className="w-4 h-4 text-accent fill-accent" />
        </div>
        <div className="grid grid-cols-4 gap-3">
          {creatures.map((creature, i) => (
            <div
              key={creature.name}
              className="flex flex-col items-center gap-1 p-3 rounded-xl bg-card/40 border border-border/50 hover:border-primary/30 hover:bg-card/70 transition-all duration-300 cursor-default animate-float"
              style={{ animationDelay: `${i * 0.5}s`, animationDuration: '5s' }}
            >
              <span className="text-3xl sm:text-4xl">{creature.emoji}</span>
              <span className={cn('text-xs font-bold game-body-text', creature.color)}>
                {creature.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
        <p className="text-xs text-muted-foreground/60 game-body-text">
          Use as setas do teclado para mover • Espaço para pular • E para interagir
        </p>
      </div>
    </div>
  )
}
