function customRender(reactElement, container){
   const domElement = document.createElement(reactElement.type)// create dom element based on reactElement
   domElement.innerHTML = reactElement.children
  //  domElement.setAttribute("href", reactElement.props.href); // set href attribute
  //   domElement.setAttribute("target", reactElement.props.target); // set target attribute
  //   container.appendChild(domElement); // append the created element to the container

for(const prop in reactElement.props){ 
    if(prop === children) continue;
    domElement.setAttribute(prop, reactElement.props[prop]); 
}
   container.appendChild(domElement); // append the created element to the container
}
   
  


//how it shows to react whenever html element returned in function
const reactElement = {
    type: 'a', // type of element
    props: {
      href: "https://google.com",
      target: _blank
    },
      children: "Click Me to visit google"
}

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer); //designed a method  to render the element in mainContainer