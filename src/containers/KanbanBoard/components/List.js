import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

class List extends Component {
    render() {
        // 接收 cards
        var cards = this.props.cards.map((card) => {
            return <Card id={card.id}
                            title={card.title}
                            description={card.description}
                            color={card.color}
                            tasks={card.tasks} 
                            taskCallback={this.props.taskCallback}
                    />
        })
        return(
            // 渲染 cards
            <div className="list">
                <h1>{this.props.title}</h1>
                {cards}
            </div>
        )
    }
}

List.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object),
    taskCallback: PropTypes.object
}

export default List