import React from 'react';
import ResourceList from './ResourceList';

class App extends React.Component {
  state = { resource: 'posts' };

  onButtonClick = (resource) => {
    this.setState({ resource });
  };

  render() {
    return (
      <div className="app">
        <div className="buttons">
          <button onClick={() => this.onButtonClick('posts')}>Posts</button>
          <button onClick={() => this.onButtonClick('todos')}>TODOs</button>
        </div>
        <ResourceList resource={this.state.resource} />
      </div>
    );
  }
}

export default App;
