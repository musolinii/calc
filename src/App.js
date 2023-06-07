import { useState } from 'react';
import './App.css';



function App() {

  const [num, setNum] = useState(0)
  const [num1, setNum1] = useState(0)
  const [operator, setOperator] = useState("")


  const handleNum =(e)=>{
    if (num === 0){
      setNum(e.target.innerText)
    }else{
      setNum(num + e.target.innerText)
    }
  }


  const handleOperator = (e)=>{
    setOperator(e.target.innerText)
    setNum1(num)
    setNum(0)
  }

  const calculate = ()=>{
    if (operator === "+"){
      setNum(parseInt(num)+parseInt(num1))
    }
  }
 


  return (
    <>
      <section>
        <div className='container'>

          <div className='display'><p>{num}</p></div>

          <table>
            <tbody>

              <tr>
                <td><button id='ac' className='btn special'>AC</button></td>
                <td><button id='sign' className='btn special'>+/-</button></td>
                <td><button id='percentage' className='btn special'>%</button></td>
                <td><button id='division' className='btn operator' onClick={handleOperator}>/</button></td>
              </tr>


              <tr>
                <td><button id='number' onClick= {handleNum} className='btn number'>7</button></td>
                <td><button id='8' className='btn number' onClick= {handleNum}>8</button></td>
                <td><button id='9' className='btn number' onClick= {handleNum}>9</button></td>
                <td><button id='mul' className='btn operator' onClick={handleOperator}>*</button></td>
              </tr>

              <tr>
                <td><button id='6' className='btn number' onClick= {handleNum}>6</button></td>
                <td><button id='5' className='btn number' onClick= {handleNum}>5</button></td>
                <td><button id='4' className='btn number' onClick= {handleNum}>4</button></td>
                <td><button id='min' className='btn operator' onClick={handleOperator}>-</button></td>
              </tr>

              <tr>
                <td><button id='3' className='btn number' onClick= {handleNum}>3</button></td>
                <td><button id='2' className='btn number' onClick= {handleNum}>2</button></td>
                <td><button id='1' className='btn number' onClick= {handleNum} >1</button></td>
                <td><button id='add' className='btn operator' onClick={handleOperator}>+</button></td>
              </tr>

              <tr>
                <td colSpan="2"><button id='zero' className='btn number' onClick= {handleNum}><p>0</p></button></td>
                <td><button id='point' className='btn decimal'>.</button></td>
                <td><button id='equal' className='btn operator' onClick={calculate}>=</button></td>

              </tr>




            </tbody>
          </table>


        </div>
      </section>
    </>
  )
}




export default App;
