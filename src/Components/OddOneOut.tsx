import { useState } from "react"

const puzzles = [
    {
        items: ['Dog', 'Cat', 'Eagle', 'Rabbit'],
        answer: 'Eagle',
        explanation: 'Eagle is a bird, the rest are mammals.'
    },
    {
        items: ['Piano', 'Guitar', 'Violin', 'Trumpet'],
        answer: 'Piano',
        explanation: 'Piano is a percussion instrument, the rest are string/wind.'
    },
    {
        items: ['Paris', 'London', 'Berlin', 'Sydney'],
        answer: 'Sydney',
        explanation: 'Sydney is not a capital city, the rest are.'
    }
]

export default function OddOneOut() {
    const [index, setIndex] = useState(0)
    const [selected, setSelected] = useState<string | null>(null)

    const puzzle = puzzles[index]
    const isCorrect = selected === puzzle.answer

    function nextPuzzle() {
        setIndex((i) => (i+1) % puzzles.length)
        setSelected(null)
    }


    return (
        <div>
            <h2>Odd One Out</h2>
            <p>Which one doesn't belong?</p>

            <div>
                {puzzle.items.map((item) => (
                    <button key={item} onClick={() => setSelected(item)}>
                        {item}
                    </button>
                ))}
            </div>

            {selected && (
                <div>
                    <p>{isCorrect ? 'Did That!' : 'FUUUUUH!!!'}</p>
                    <p>{puzzle.explanation}</p>
                    <button onClick={nextPuzzle}>Next</button>
                </div>
            )}

        </div>
    )
}