import React from 'react'
import { connect } from 'react-redux'
import { loadRepos } from '../actions'

class RepoDetail extends React.Component {
    // state = {
    //     star: "Loading..",
    //     Languages: "Loading..",
    //     fork: "Loading..",
    //     img: "http://blog.teamtreehouse.com/wp-content/uploads/2015/05/InternetSlowdown_Day.gif"
    // }
    
    // componentDidMount() {
    //     fetch('https://api.github.com/repos/'+this.props.repo)
    //     .then( res => {
    //         return res.json()
    //     })
    //     .then( res => this.setState({ 
    //         star: res.stargazers_count,
    //         Languages: res.language,
    //         fork: res.forks,
    //         img: res.organization.avatar_url
    //     }))
    // }

    componentDidMount() {
        this.props.dispatch(loadRepos(this.props.repo))
    }

    render() {
        const { RepoDetail } = this.props
        console.log(RepoDetail.data)
        if(RepoDetail.isRejected){
            return <div>Error...</div>
        }

        return(
            <div>
                <img className="img" src={RepoDetail.img} alt={this.props.repo}></img>
                <ul className="menu-list">
                    <li>Languages: {RepoDetail.Languages}</li>
                    <li>Star: {RepoDetail.star}</li>
                    <li>Forks: {RepoDetail.fork}</li>
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        RepoDetail: state.ReposDetail
    }
}

export default connect(mapStateToProps)(RepoDetail)