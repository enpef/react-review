import React, { Component } from 'react'
import { Link } from 'react-router'
import 'bulma/css/bulma.css';

class Layout extends Component {
    render() {
        return (
            <div>
                <div className="header-top">
                    <nav className="level">
                        <p className="level-item has-text-centered">
                            <Link to="/" className="link is-info">Home</Link>
                        </p>
                        <p className="level-item has-text-centered">
                            <Link to="/vue" className="link is-info">Vue</Link>
                        </p>
                        <p className="level-item has-text-centered">
                        <Link to="react" className="link is-info">React</Link>
                        </p>
                        <p className="level-item has-text-centered">
                            <Link to='/button' className="link is-info">Button Page</Link>
                        </p>
                        <p className="level-item has-text-centered">
                            <a className="link is-info">Contact</a>
                        </p>
                    </nav>
                </div>
                <div className="container is-fluid name" >
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout