import { MagicalBackground } from '@/components/MagicalBackground'
import { GameMenu } from '@/components/GameMenu'

const Index = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen w-full py-12">
      <MagicalBackground />
      <div className="relative z-10 w-full">
        <GameMenu />
      </div>
    </div>
  )
}

export default Index
