import { useState } from 'react'

const words = ['elephant', 'giraffe', 'volcano', 'compass', 'lantern', 'bracket']

function scramble(word: string): string {
    return word.split('').sort(() => Math.random() - 0.5).join('')
}

export default function WordScramble() {
    const [current, setCurrent] = useState(words[0])
    const [scrambled, setScrambled] = useState(scramble(words[0]))
    const [guess, setGuess] = useState('')
    const [message, setMessage] = useState('')

    function newWord() {
        const word = words[Math.floor(Math.random() * words.length)]
        setCurrent(word)
        setScrambled(scramble(word))
        setGuess('')
        setMessage('')
    }

    function checkGuess() {
        if (guess.toLowerCase() === current) {
            setMessage('We see you!!!')
        } else {
            setMessage('Bruv, Seriously???')
        }
    }

    return (
        <div>
            <h2>Word Scramble</h2>
            <p>{scrambled}</p>
            <input 
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                placeholder="Your answer..." 
            />
            <button onClick={checkGuess}>Check</button>
            <button onClick={newWord}>Skip</button>
            <p>{message}</p>
        </div>
    )
}