// made reactvite folder by using command "npm create vite@latest reactvite --template react

import Demo from "./demo.jsx";


function App() {
  

  return (
    <>
    //in jsx for using more than 1 element , we need to wrap them in a single parent element(can use div or framgment(<> </>))
    <Demo/>  // using Demo component here
    <h1>Anshika {username}</h1>
    <p>welcome!!</p>
    
    </>
    
  )
}

export default App
