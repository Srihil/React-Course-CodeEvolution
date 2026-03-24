// import logo from './logo.svg';
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Counter from "./components/Counter";
import ParentComponent from "./components/ParentComponent";
import ConditionalRendering from "./components/ConditionalRendering";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import ParentComp from "./components/ParentComp";
import Refs from "./components/Refs";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import UserContext from "./components/userContext";
import ComponentC from "./components/ComponentC";

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
      <ConditionalRendering />
      <NameList />
      <Stylesheet primary={true}/>
      <Form />
      <LifecycleA />
      <ParentComp /> */}
      {/* <ClickCounter />
      <HoverCounter /> */}
      {/* <Refs /> */}

      {/* <Counter
        render={(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      />

      <Counter
        render={(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      /> */}
    <UserContext.Provider value={"Sahil"}>
      <ComponentC />
    </UserContext.Provider>
    </div>
  );
}

export default App;
