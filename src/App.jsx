import Header from "./header/Header";
import WeatherProvider from "./provider/WeatherProvider";
import WeatherBoard from "./weather/WeatherBoard";

function App() {
  return (
    <WeatherProvider>
      <div className="place-content-center h-screen">
        <Header />
        <main>
          <section>
            <WeatherBoard />
          </section>
        </main>
      </div>
    </WeatherProvider>
  );
}

export default App;
