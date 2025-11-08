import Header from "./header/Header";
import FavoriteProvider from "./provider/FavoriteProvider";
import WeatherProvider from "./provider/WeatherProvider";
import WeatherBoard from "./weather/WeatherBoard";

function App() {
  return (
    <WeatherProvider>
      <FavoriteProvider>
        <div className="place-content-center h-screen">
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      </FavoriteProvider>
    </WeatherProvider>
  );
}

export default App;
