import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import KanbanBoardContainer from './containers/KanbanBoard/'


let cardList = [
  {
    id: 1,
    title: "card one title",
    description: "I should read the whole book",
    color: '#BD8D31',
    status: "in-progress",
    tasks: []
  },
  {
    id: 2,
    title: "Write some code",
    description: "Code along with the samples in the book",
    color: '#3A7E28',
    status: "todo",
    tasks: [
      {
        id: 1,
        name: "ContactList Example",
        done: true
      },
      {
        id: 2,
        name: "Kanban Example",
        done: false
      },
      { id: 3,
        name: "My own experiments",
        done: false
      }
    ]
  },
  {
    id: 3,
    title: "card three title",
    description: "This is the third card",
    color: '#BD8D31',
    status: "done",
    tasks: [
      {
        id: 1,
        name: "ContactList Example",
        done: true
      },
      {
        id: 2,
        name: "Kanban Example",
        done: false
      },
      { id: 3,
        name: "My own experiments",
        done: false
      }
    ]
  },
  {
    id: 4,
    title: "card forth title",
    description: "I should read the whole book",
    color: '#BD8D31',
    status: "in-progress",
    tasks: [
      {
        id: 1,
        name: "ContactList Example",
        done: true
      },
      {
        id: 2,
        name: "Kanban Example",
        done: false
      },
      { id: 3,
        name: "My own experiments",
        done: false
      }
    ]
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <KanbanBoardContainer cards={cardList}/>
      </div>
    );
  }
}

export default App;
