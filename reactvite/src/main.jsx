//BUIT - IN PROPERTIES THAT BELONG ON THE ELEMENT
//type, key, ref, props


import React  from 'react'
import RaectDom from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
  return (
    <>
      <h1>Hello, World!</h1>
      <p>This is my first React app.</p>
    </>
  );
}

// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://react.dev',
//     target: '_blank'
   
//   },
//   children: 'click me to visit google'
// }

const anotherUser = "Shiwani"

const reactElement = React.createElement( // babel injectts all these.
  'a',
  {
    href: 'https://google.com', target: '_blank'},
  'click me to visit google', //  statement which you want to print in the element
   anotherUser // this will print "Shiwani" in the element
);
  
  
  
const anotherReactElement = (
  <a href = "https://google.com" target='_blank'>Visit google </a>
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
  anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <ReactElement />
  )

