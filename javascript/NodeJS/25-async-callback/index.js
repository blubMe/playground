console.log('Before')
getUser(1,(user) => {
    console.log('User',user)
    getRepo(user.githubUsername, (repos) => {
        console.log('Repos',repos)
    })
})
console.log('After')

function getUser(id,call){
    setTimeout(() =>{
        console.log('Reading a user from a database...')
        call({id: id, githubUsername: 'fahmi'})
    },2000)
}

function getRepo(username,call){
    setTimeout(() =>{
        console.log('Calling Github API...')
        call(['repo1','repo2','repo3'])
    },2000)
}