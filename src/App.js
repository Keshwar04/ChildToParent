import { Child } from "./Child";
import "./styles.css";

export default function App() {
  const getChildValue = (chidData) => {
    console.log(chidData);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Child getChildValue={getChildValue} />
    </div>
  );
}
