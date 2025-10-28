import Header from "./header/Header";
import WeatherProvider from "./provider/WeatherProvider";
import WeatherBoard from "./weather/WeatherBoard";

function App() {
  return (
    <WeatherProvider>
      <Header />
      <main className="mt-28">
        <section>
          <WeatherBoard />
        </section>
      </main>
    </WeatherProvider>
  );
}

export default App;
