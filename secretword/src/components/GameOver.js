import './GameOver.css'

const GameOver = ({ RetryGame }) => {
  return (
    <div>
      <h1>Game over</h1>

      <button onClick={RetryGame}>Resetar jogo</button>
    </div>
  )
}

export default GameOver
