import React, { Component } from 'react'
import PropTypes from 'prop-types'
import List from './List'

class KanbanBoard extends Component {
    render(){
        return(
            <div className="app">
                <List id='todo' title="To Do" taskCallback={this.props.taskCallback}
                    cards={
                        this.props.cards.filter((card) => card.status === 'todo')
                    } />
                <List id='in-progress' title="In Progress" taskCallback={this.props.taskCallback}
                    cards={
                        this.props.cards.filter((card) => card.status === 'in-progress')
                } />
                <List id='done' title="Done" taskCallback={this.props.taskCallback}
                    cards={
                        this.props.cards.filter((card) => card.status === "done")
                } />
            </div>
        )
    }
}

KanbanBoard.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.objec),
    taskCallback: PropTypes.object
}

export default KanbanBoard