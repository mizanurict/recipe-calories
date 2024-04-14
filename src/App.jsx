import './App.css'
import Banner from './components/Banner/Banner'
import Cards from './components/Cards/Cards'
import Header from './components/Header/Header'

function App() {
  

  return (
    <>
      <div className=' max-w-6xl mx-auto my-4'>
      <Header></Header>
      </div>
      <div className=' max-w-6xl mx-auto my-4 '>
        <Banner></Banner>
      </div>
      <div className=' max-w-6xl mx-auto mt-12 '>
        <Cards></Cards>
      </div>
      
      
    </>
  )
}

export default App
