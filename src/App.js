import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
        <Weather />
        
        <footer>This project was coded by  {" "}
        Line Granseth and is {" "} <a href="https://github.com/linegrr/react-weather-app" target='blank'> open-sourced on GitHub</a> </footer>
      </div>
    
    </div>
  );
}


