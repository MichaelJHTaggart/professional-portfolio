import Navigation from './Components/Navigation'
import routes from './routes'
import './scss/main.scss'

function App() {
  return (
    <div className="App">
      <Navigation />
      {routes}
    </div>
  );
}

export default App;
