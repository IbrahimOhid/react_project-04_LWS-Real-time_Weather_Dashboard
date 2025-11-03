import Header from './header/Header'
import WeatherBoard from './weather/WeatherBoard'

function App() {

  return (
   <div className='place-content-center h-screen'>
    <Header/>
    <main>
      <section>
        <WeatherBoard/>
      </section>
    </main>
   </div>
  )
}

export default App
