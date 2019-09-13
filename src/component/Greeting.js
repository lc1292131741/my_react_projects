import React from 'react'

class Greeting extends React.Component {
    constructor() {
      super();
      this.state = {
        name: "",
      };
    }
  
    componentDidMount() {
      // AJAX
      this.setState(() => {
        return {
          name: "Chaos",
          componentName:'Greeting'
        };
      });
    }
  
    render() {
      return (
        <div>
          <h1>Hello {this.state.name} ! this is my first react project!--{this.state.componentName}</h1>
        </div>
      );
    }
  }

export default Greeting;