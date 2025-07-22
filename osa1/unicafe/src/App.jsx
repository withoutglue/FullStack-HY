import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Body = ({text, number}) => <div><b>{text} {number}</b></div>

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text="give feedback"/>
      <Button onClick={() => setGood(good + 1)} text="good"/>
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button onClick={() => setBad(bad + 1)} text="bad"/>
      <Header text="statistics"/>
      <Body text="good" number={good}/>
      <Body text="neutral" number={neutral}/>
      <Body text="bad" number={bad}/>
    </div>
  )
}

export default App