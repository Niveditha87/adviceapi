import React from "react"
import axios from "axios";
import './App.css';


class App extends React.Component {
  state = {
    advice:""
  };
  componentDidMount () {
      this.fetchAdvice();    
  }

  fetchAdvice = () => {
    axios.get("https://api.adviceslip.com/advice")
    .then((response)=>{
      const {advice} = response.data.slip;
      this.setState({ advice });

console.log(advice);
    })
    .catch((error)=>{
console.log(error);
    })
  }
  render() {
    return(
      <>
      <div className="container">
      <div className="card">{ this.state.advice}
      <div><button className="neu-btn" onClick={this.fetchAdvice}>give advice</button></div>
      </div>
      </div>
      </>
    )
  }
}

export default App;

