import React, { Component } from 'react'

class Button extends Component {
    plus = () => {
        this.setState({ plus: this.state.plus + 1, star: this.state.star + 1})
    }

    minus = () => {
        this.setState({ minus: this.state.minus + 1, star: this.state.star - 1})
    }
    render() {
        return (
            <div>
                <a className="button {this.props.type}" onClick={this.props.click}> {this.props.name} </a>
            </div>
        )
    }
}

export default Button