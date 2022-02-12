import './App.css';
import Header from "./components/header/header"
import Card from "./components/card/card"
import data from "./data"


function App() {
  const cards = data.map(card => {
    return <Card key={card.id} {...card} />
  })  
  
  return (
    <div className="App">
      <Header />
      <main>
        {cards}
      </main>
    </div>
  );
}

export default App;
