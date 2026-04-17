import { useState } from 'react'

import WordSearch from './Components/WordSearch'
import WordScramble from './Components/WordScramble'
import Anagram from './Components/Anagram'
import OddOneOut from './Components/OddOneOut'


type Game = 'wordsearch' | 'scramble' | 'anagram' | 'oddoneout'

export default function App() {
  const [activeGame, setActiveGame] = useState<Game>('wordsearch')

  return (
    <div className="app">
      <nav>
        <button onClick={() => setActiveGame('wordsearch')}>Word Search</button>
        <button onClick={() => setActiveGame('scramble')}>Word Scramble</button>
        <button onClick={() => setActiveGame('anagram')}>Anagrma</button>
        <button onClick={() => setActiveGame('oddoneout')}>Odd One Out</button>
      </nav>

      {activeGame === 'wordsearch' && <WordSearch />}
      {activeGame === 'scramble' && <WordScramble />}
      {activeGame === 'anagram' && <Anagram />}
      {activeGame === 'oddoneout' && <OddOneOut />}
    </div>
  )
}