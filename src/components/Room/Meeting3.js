import React, { Component, useState, useEffect } from 'react'

// ClassComponent
// class Meeting3b extends Component {
//   state = {
//     name: '',
//   }

//   componentDidMount() {
//     // Called after first render
//   }

//   componentWillMount() {
//     // Called before first render
//   }

//   componentDidUpdate() {
//     // Called every time when component update
//   }

//   componentWillUnmount() {
//     // Called when component will close (when exit page, for example)
//   }

//   render() {
//     return (
//       <div>
//         <div>{this.state.name}</div>
//         <button onClick={() => this.setState({ name: 'newName ' })}>
//           Update Name
//         </button>
//       </div>
//     )
//   }
// }

// Function component
function Meeting3() {
  const [state, setState] = useState({ name: '' })

  // useEffect(() => {
  //   // Called after first "render", and every time the param inside [] changes, in this example, every time when name change
  //   // Similar than "componentDidMount and componentWillMount"
  //   return () => {
  //     // Called when component will close (when exit page, for example)
  //     // Similar than "componentWillUnmount"
  //   }
  // }, [name])

  return (
    <div>
      <div>{state.name}</div>
      <button onClick={() => setState({ name: 'newName ' })}>
        Update Name
      </button>
    </div>
  )
}

// export default Meeting3b
export default Meeting3
