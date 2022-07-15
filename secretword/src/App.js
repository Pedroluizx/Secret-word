//css
import './App.css'

//data

import { wordsList } from './data/Words'

//react
import { useCallback, useEffect, useState } from 'react'

//components
import StartScreen from './components/StartScreen'
import GameOver from './components/GameOver'
import Game from './components/Game'

const stages = [
  { Id: 1, name: 'start' },
  { Id: 2, name: 'game' },
  { Id: 3, name: 'end' }
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [pickedLetters, setPickedLetters] = useState([])

  const pickWordAndCategory = () => {
    //pick random category

    const categories = Object.keys(words)
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)]

    //pick random word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)]

    return { word, category }
  }

  //Start the game
  const StartGame = () => {
    const { word, category } = pickWordAndCategory()
    console.log(category, word)

    //create an array  of letters

    let wordLetters = word.split('')
    wordLetters = wordLetters.map(l => l.toLowerCase())
    console.log(wordLetters)

    //fill states

    setPickedWord(word)
    setPickedCategory(category)
    setPickedLetters(wordLetters)

    setGameStage(stages[1].name)
  }

  //Process
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  //Retry the game
  const RetryGame = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen StartGame={StartGame} />}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
      {gameStage === 'end' && <GameOver RetryGame={RetryGame} />}
    </div>
  )
}

export default App
