import './App.css';
import Header from "./components/Header";
import {Footer} from "./components/Footer";
import {Todos} from "./components/Todos";

function App() {
  let todo = [
    {
      sno: 1,
      title:"Do The Bootcamp Session",
      desc:"Add The code"
    },
    {
      sno: 2,
      title:"Do the assignment",
      desc:"Complete the assignment"
    },
    {
      sno: 3,
      title:"Submit the assignment",
      desc:"Submit on time"
    },

  ]
  return (
    <>
    <Header title="My TODO List"/>
    <Todos todo={todo}/>
    <Footer/>
    </>
    

    // <div classNameName="App">
    //   <div></div>
    //   <header classNameName="App-header">
    //     <img src={logo} classNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       classNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
