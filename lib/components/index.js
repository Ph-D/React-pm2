import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    answer: 42,
  };

  asynFunc = () => {
    return Promise.resolve(37);
  };

  async componentDidMount(){
    this.setState({
      answer: await this.asynFunc()
    });
  }

  render(){
    return (
      <h2>Hello Class Components -- {this.state.answer}</h2>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);