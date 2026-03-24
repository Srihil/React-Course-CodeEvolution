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
import GetRequest from "./components/GetRequest";
import PostRequest from "./components/PostRequest";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";
import HookCounterOne from "./components/HookCounterOne";
import CounterOne from "./components/CounterOne";
import InputFocus from "./components/InputFocus";
import CounterTwo from "./components/CounterTwo";
import ParentComponentOne from "./components/ParentComponentOne";
import UseState from "./components/UseState/UseState";

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
    {/* <UserContext.Provider value={"Sahil"}>
      <ComponentC />
    </UserContext.Provider> */}
    {/* <GetRequest /> */}
    {/* <PostRequest /> */}
    {/* <HookCounterTwo /> */}
    {/* <HookCounterThree /> */}
    {/* <HookCounterFour /> */}
    {/* <HookCounterOne /> */}
    {/* <CounterOne /> */}
    {/* <InputFocus /> */}
    {/* <CounterTwo /> */}
    {/* <ParentComponentOne /> */}
    <UseState />
    </div>
  );
}

export default App;
