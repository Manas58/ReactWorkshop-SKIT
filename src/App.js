// // // import logo from './logo.svg';
// // // import './App.css';

// // // function App() {
// // //   return (
// // //     <div className="App">
// // //       <header className="App-header">
// // //         <img src={logo} className="App-logo" alt="logo" />
// // //         <p>
// // //           Edit <code>src/App.js</code> and save to reload.
// // //         </p>
// // //         <a
// // //           className="App-link"
// // //           href="https://reactjs.org"
// // //           target="_blank"
// // //           rel="noopener noreferrer"
// // //         >
// // //           Learn React
// // //         </a>
// // //       </header>
// // //     </div>
// // //   );
// // // }

// // // export default App;

// // // import React, { useState, useEffect } from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Dummy1 from './Dummy1'
// import Dummy2 from './Dummy2'
// import Dummy3 from './Dummy3'
// // import MuiStyle from './componentsMUI/MuiStyle'

// const NAME = () => {
//     return (
//       <Router>
//         <div className = "NAME">
//             <Routes>
//               <Route path="/" element={<Dummy1  />} />
//               <Route path="/Dummy2" element={<Dummy2  />} />
//               <Route path="/user/:userId" element={<Dummy3  />} />
//             </Routes>
//         </div>
//       </Router>
//     )
// //     //name our state counter at 0th index of array, initial value will be 0 {const is an array}
// //     // const [counter, setCounter] = useState(0)//setCounter affects the value of counter
// //     // const [anotherCounter, anotherSetCounter] = useState(0)

// //   //[] it is dependency array, used for console log
// //   //Component which is present in dependecy array that CANNOT change its state (leads to infintie rerendering), if you still want to do it under a conditional statement 
// //     // useEffect(() => {
// //     //   console.log("Empty")
// //     // })

// //     // useEffect(() => {
// //     //   console.log("counter")
// //     // }, [counter])

// //     // useEffect(() => {
// //     //   console.log("BOTH")
// //     // }, [counter, anotherCounter])

// //     // useEffect(() => {
// //     //   console.log("anotherCounter")
// //     // }, [anotherCounter])

// //     // return(
// //     //   <>
// //     //     This is a counter: {counter} 
// //     //     <button onClick={() => setCounter(prev => prev + 1)}>CLICK ME</button>
// //     //   <hr />
// //     //     This is another counter: {anotherCounter} 
// //     //     <button onClick={() => anotherSetCounter(prev => prev + 1)}>CLICK ME</button>
// //     //   </>
// //     // )

// // //     const minusClick = () => {
// // //       // setCounter(counter - 1) //Does not update immediately
// // // //State must have reference to prev value always, so we use this method
// // //       setCounter((prev) => prev - 1) //directly fetches the prev value and update
// // //     }

// // //     const plusClick = () => {
// // //       setCounter((prev) => prev + 1)
// // //     }
    
// // //   return(//returns a single component, so you may insert it all in a div container 
// // //     <div>
// // //       <h1> Counter: {counter} </h1> {/* curly braces are used to fetch value of counter */}
// // //       <button onClick={minusClick}> MINUS</button>
// // //       <button onClick={plusClick}> PLUS </button>
// // //     </div>
// // //   )
// } 

// export default NAME

// // import React from "react";
// // import Stopwatch from "./Watch";
// // import { CssBaseline, Container, Typography } from "@mui/material";

// // function App() {
// //   return (
// //     <>
// //       {/* CssBaseline gives you a clean, consistent base style */}
// //       <CssBaseline />
// //       <Container maxWidth="md" sx={{ textAlign: "center", mt: 5 }}>
// //         <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
// //           React + MUI Stopwatch
// //         </Typography>
// //         <Stopwatch />
// //       </Container>
// //     </>
// //   );
// // }

// // export default App;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Todo from './components/Todo';
import Stopwatch from './components/Watch';
import Weather from './components/Weather';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="*" element={<Weather />} />
      </Routes>
    </Router>
  );
}

export default App;
