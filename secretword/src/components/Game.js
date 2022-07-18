import { useState, useRef } from 'react'
import './Game.css'

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  wordLetters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
  letters
}) => {
  const [letra, setLetra] = useState('')
  const letterInputRef = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()

    verifyLetter(letra)

    setLetra('')

    letterInputRef.current.focus()
  }

  return (
    <div className="game">
      <p className="points"></p>
      <span>Pontuação : {score}</span>
      <h1>Advinhe a palavra </h1>
      <h3 className="tip">
        Dica sobre a palavra : <span>{pickedCategory}</span>
      </h3>
      <p>Voce ainda tem {guesses} tentativas(s).</p>
      <div className="wordContainer">
        {letters.map((letters, i) =>
          guessedLetters.includes(letters) ? (
            <span keys={i} className="letter"></span>
          ) : (
            <span keys={i} className="blankSquare"></span>
          )
        )}
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra :</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            maxLength="1"
            name="letter"
            required
            onChange={e => setLetra(e.target.value)}
            value={letra}
            ref={letterInputRef}
          />
          <button>Jogar</button>
        </form>
      </div>

      <div className="wrongLettersContainer">
        <p>Letras ja utilizadas :</p>

        {wordLetters.map((letters, i) => (
          <span key={i}>{letters}</span>
        ))}
      </div>
    </div>
  )
}

export default Game
