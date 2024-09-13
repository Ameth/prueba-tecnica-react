import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageURL } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de Perros</h1>
      <button onClick={handleClick}>Obtener nueva frase</button>
      <section>
        {fact && <p>{fact}</p>}
        {imageURL && <img src={imageURL} alt={fact} />}
      </section>
    </main>
  )
}

export default App
