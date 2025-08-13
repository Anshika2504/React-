
import {createRoot} from 'react-dom/client'; // react-dom:-library and client:- sub-module
// create a root
const root = createRoot(document.getElementById('root')).root
.render( // render some markup to the root
  <div>
    <h1>Hello, World!</h1>
    <p>Welcome to my React application.</p>
  </div>
  
);
