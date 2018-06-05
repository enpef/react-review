export function loadRepos(repos) {
    console.log(repos)
    return (dispatch) => {
        return dispatch(fetchRepos(repos))
    }
}

function fetchRepos(repos) {
    console.log("after dispath  /" + repos)
    return {
        type: 'LOAD_REPOS',
        payload: fetch('https://api.github.com/repos/'+repos)
        .then(result => result.json())
    }
}