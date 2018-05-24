import React from 'react'
import RepoDetail from './components/repoDetail'

class ReactPage extends React.Component {
    render() {
        return(
            <RepoDetail repo="facebook/react" />
        )
    }
}

export default ReactPage