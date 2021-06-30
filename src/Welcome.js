import React from "react";

// the following is a functional components
function Welcome(props) {
  return (
    <div className="Welcome">
        <h1>Hello, {props.name}</h1>
    </div>
  );
}

// the following is a class component
// class Welcome extends React.Component {
//     render() {
//         return (
                // <div className="Welcome">
                //     <h1>Hello, {props.name}</h1>
                // </div>
//          );
//     }
// }

// both are working example and are the same in Reacts system

export default Welcome;
