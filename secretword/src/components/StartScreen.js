import './StartScreen.css'

const StartScreen = ({ StartGame }) => {
  return (
    <div className="start">
      <h1>Secret word</h1>
      <p>Click no botão abaixo para jogar</p>
      <button onClick={StartGame}>Começar o jogo</button>
    </div>
  )
}

export default StartScreen
