import "./App.css";
import Lab_18_1 from "./lab-18/Lab_18_1";
import Lab_18_2 from "./lab-18/Lab_18_2";
import Lab_18_3 from "./lab-18/Lab_18_3";
import Lab_18_4 from "./lab-18/Lab_18_4";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./lab-20/Home"
import About from "./lab-20/About"
import ContactUs from "./lab-20/ContactUs"
import Layout from "./lab-20/Layout";

function App() {
  return (
    <>
      {/* <Lab_18_1/> */}
      {/* <Lab_18_2/> */}
      {/* <Lab_18_3/> */}
      {/* <Lab_18_4/> */}
      //lab 20
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element ={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path='Home' element={<Home/>}/>
              <Route path='About' element={<About/>}/>
              <Route path='ContactUs' element={<ContactUs/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </>

    </>
  );
}

export default App;
