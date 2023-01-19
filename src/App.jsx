import './App.css'
import Header from './components/header'
import Card from "./components/Card"
import data from "./data"

function App() {
  const cardData = data.map((item) => {
    return (
      <Card 
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="App">
        <Header />
        {cardData}
    </div>
  )
}

export default App
