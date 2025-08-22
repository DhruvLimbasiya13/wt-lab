import './App.css'
import Lab_18_1 from './lab-18/Lab_18_1'
import Lab_18_2 from './lab-18/Lab_18_2'
import Lab_18_3 from './lab-18/Lab_18_3'
import Lab_18_4 from './lab-18/Lab_18_4'

function AddToNumbers(props){
  return (
    <>
    <h1>{props.num1+props.num2}</h1>
    <button on={()=>{
      alert('clicked')
    }}></button>

    {props.isDisplay && <h2>secret</h2>}
    </>
  )
}

function App() {

  return (
    <>
    {/* <Lab_18_1/> */}
    {/* <Lab_18_2/> */}
    {/* <Lab_18_3/> */}
    <Lab_18_4/>
    </>
  )
}

export default App
