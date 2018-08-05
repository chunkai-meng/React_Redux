import React, { Component } from 'react'
import KanbanBoard from './components/KanbanBoard'

const API_URL = 'http://kanbanapi.pro-react.com'
const API_HEADERS = {
    'Content-Type': 'application/json',
    Authorization: 'any-string-you-like'
}

class KanbanBoardContainer extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            cards: []
        }
    }

    componentDidMount() {
        fetch(API_URL + '/cards', {headers: API_HEADERS})
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({cards: responseData})
        })
        .catch((error) => {
            console.log('Eooro fetching and parsing data', error)
        })
    }

    addTask(cardId, taskName) {

    }
    
    deleteTask(cardId, taskId, taskIndex) {

    }

    toggleTask(cardId, taskId, taskIndex) {

    }

    render() {
        return <KanbanBoard cards={this.state.cards}
                            taskCallback={{
                                add: this.addTask.bind(this),
                                delete: this.deleteTask.bind(this),
                                toggle: this.toggleTask.bind(this)
                            }}/>
    }
}

export default KanbanBoardContainer