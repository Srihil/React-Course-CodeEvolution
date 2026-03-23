// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello';
import Counter from './components/Counter';
import ParentComponent from './components/ParentComponent';
import ConditionalRendering from './components/ConditionalRendering';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Sahil"/>
      <Greet name="Sahil">
        <h2>Children example</h2>
      </Greet>
      <Welcome name="sahil"/>
      <Hello />
      <Counter />
      <ParentComponent />
      <ConditionalRendering /> */}
      {/* <NameList /> */}
      <Stylesheet primary={true}/>
    </div>
  );
}

export default App;
