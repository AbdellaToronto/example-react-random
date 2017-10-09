import React, { Component } from 'react';
import './App.css';
import Button from 'material-ui/Button';
import List, { ListItem, ListItemText } from 'material-ui/List';


const SpecialReturn = (props) => {
  switch(props.type) {
    case 'foo':
      return <h3>I am a foo special return</h3>;
    case 'bar':
      return <h2>I am a bar special return</h2>;
    case 'foobar':
      return <h1>I am a foobar special return</h1>;
  }
};


const SpecialListItem = (props) => <ListItem> <ListItemText primary={`My Number is: ${props.num}`} /> <Button raised color="accent" onClick={() => props.handleDelete(props.num)}>Delete</Button></ListItem>;


const NumberHolder = (props) => (
  <div>
    <h2>Length of List: {props.list.length}</h2>
    <List>
      {props.list.map(item => <SpecialListItem num={item} key={item} handleDelete={props.deleteItem} />)}
    </List>
  </div>
  );

class App extends Component {

  state = {
    listOfNumbers: Array.from({ length: 100 }, (x, i) => i + 1),
    currentType: 'foobar'
  };


  render() {
    return (
      <div className="App">

        <select value={this.state.currentType} onChange={(e) => this.setState({currentType: e.target.value})}>
          <option value="foo">foo</option>
          <option value="bar">bar</option>
          <option value="foobar">foobar</option>
        </select>
        <SpecialReturn type={this.state.currentType} />

        <NumberHolder list={this.state.listOfNumbers} deleteItem={(num) => this.setState({listOfNumbers: this.state.listOfNumbers.filter(item => item !== num)})} />

      </div>
    );
  }
}

export default App;
