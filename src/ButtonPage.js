import React from 'react'
import Button from './components/button';
import { connect } from 'react-redux';

class ButtonPage extends React.Component{

    render() {
        return(
            <div>
                <section className="hero is-warning is-small is-bold">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title">
                                + VS - : {this.props.totalclick}
                            </h1>
                        </div>
                    </div>
                </section>

                <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                    <thead>
                        <tr>
                            <th>Amount of plus button clicked : {this.props.plus}</th>
                            <th>Amount of minus button clicked : {this.props.minus}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Button click={this.props.incretePlus} name="+" type="is-success"/></td>
                            <td><Button click={this.props.increteMinus} name="-" type="is-danger"/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        plus: state.plus,
        minus: state.minus,
        totalclick: state.totalclick
    }
}

function mapDispatchToProps(dispatch) {
    return {
        incretePlus: () => {
            dispatch({ type: 'PLUS'})
        },
        increteMinus: () => {
            dispatch({ type: 'MINUS'})
        },
        totalClick: () => {
            dispatch({ type: 'COUNT'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonPage)