import React , {useState}from 'react'

function Temp() {
    const [count, setCount] = useState(10);
    const increase=()=>{
        setCount(count+1);
    }
    const decrease=()=>{
        setCount(count-1);
    }
    const color = count>15 ?"brown":"rgb(6, 107, 157)";
  return (
    <div className='content flex-center'>
      <div className=''>
        <div className='display flex-center'>
            <h2 className='flex-center' style={{"backgroundColor": color}}>{count}°C</h2>
        </div>
        <div className='btns'>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        </div>
      </div>
    </div>
  )
}

export default Temp
