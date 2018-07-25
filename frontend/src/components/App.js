import React, { Component } from 'react';
import Singup from './singup/singup'
class App extends Component {
  state = {
    test: []
  }

  componentDidMount(){
const that = this;
    var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  // console.log("this",that);
    if (xhr.readyState === 4 && xhr.status === 200) {
  const test = JSON.parse(xhr.responseText);
  // console.log("res",test);
  that.setState({
    test
  })

    }

};
xhr.open("GET", "/test", true);
xhr.send();
  }
  render() {
    return (
      <div className="App">
      
        <Singup />
      </div>
    );
  }
}

export default App;
