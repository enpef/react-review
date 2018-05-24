import React from 'react'

class RepoDetail extends React.Component {
    state = {
        star: "Loading..",
        Languages: "Loading..",
        fork: "Loading..",
        img: "http://blog.teamtreehouse.com/wp-content/uploads/2015/05/InternetSlowdown_Day.gif"
    }
    
    componentDidMount() {
        fetch('https://api.github.com/repos/'+this.props.repo)
        .then( res => {
            return res.json()
        })
        .then( res => this.setState({ 
            star: res.stargazers_count,
            Languages: res.language,
            fork: res.forks,
            img: res.organization.avatar_url
        }))
    }

    render() {
        return(
            <div>
                <img className="img" src={this.state.img} alt={this.props.repo}></img>
                <ul className="menu-list">
                    <li>Languages: {this.state.Languages}</li>
                    <li>Star: {this.state.star}</li>
                    <li>Forks: {this.state.fork}</li>
                </ul>
            </div>
        )
    }
}

export default RepoDetail