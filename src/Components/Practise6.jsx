import React , {useState , useEffect } from 'react'

function Practise6() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(()=>{
        setCount(count+1)
    },1000)
    // eslint-disable-next-line
  },[])
  const user = "Hobbies";
  return (
    <>
        <h1 className="container">The Timer is : {count} </h1>
        <h2 className="container">The One I Got from Practise7 is : {user}</h2>
    </>
  )
}

export default Practise6