import Header from "./header/Header";
import WeatherBoard from "./weather/WeatherBoard";

function App() {
  return (
    <div>
      <Header />
      <main className="mt-40">
        <section>
          <WeatherBoard />
        </section>
      </main>
    </div>
  );
}

export default App;
