import React, { Component } from 'react'

export default class SCUTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            refresh: 0,
            noRefresh: 0
        }
        this.correct = this.correct.bind(this);
        
    }
    correct(event) {
        this.setState({
            [event.target.id]: 1
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.noRefresh !==  this.state.noRefresh ) {
            return false;
        }
        return true;
      }
    render() {
        console.log('SCUTest rendering')
        return (
            <div>
                <button id="refresh" onClick={this.correct}>Refresh</button>
                <p>{this.state.refresh}</p>
                <button id="noRefresh" onClick={this.correct}>No Refresh</button>
                <p>{this.state.noRefresh}</p>
            </div>
        )
    }
}
