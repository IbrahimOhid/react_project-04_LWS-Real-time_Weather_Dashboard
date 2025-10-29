import Header from "./header/Header";
import FavoriteProvider  from "./provider/FavoriteProvider";
import WeatherProvider from "./provider/WeatherProvider";
import WeatherBoard from "./weather/WeatherBoard";

function App() {
  return (
    <WeatherProvider>
      <FavoriteProvider>
        <Header />
        <main className="mt-28">
          <section>
            <WeatherBoard />
          </section>
        </main>
      </FavoriteProvider>
    </WeatherProvider>
  );
}

export default App;
