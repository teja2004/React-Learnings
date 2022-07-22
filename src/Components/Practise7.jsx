import React , {useState , createContext} from 'react'

export default function Practise7() {
    const UserContext = createContext();
    const [initialState , setInitialState] = useState("Teja");
  return (
    <UserContext.Provider value={initialState}>
        <div className="container">
            <h1>{initialState}</h1>
            <button className="btn btn-primary btn-sm" onClick={()=>{setInitialState("Nagateja")}}>Change State</button>
        </div>
    </UserContext.Provider>
  )
}
