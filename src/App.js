
import Input from './components/Input';
import './App.css';
import Card from './components/Cards';
import Buttom from './components/Butttom';
import { Useweather } from './context/Weather';

function App() {
  const weather = Useweather();
  
  return (
    <div className="App">
      <h1>The Weather Web App</h1>
      <Input/>
      <Buttom onclick={weather.fetchData}value="Search"/>
      <Card/>
      <Buttom value ="Refresh"/>
    </div>
  );
}

export default App;
