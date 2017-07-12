/*

fetch menu datas


((username=`xgqfrms-GitHub`, repo=`Node-CLI-Tools`) => {
    fetch(`https://api.github.com/repos/${username}/${repo}/commits`,{
        data: {
            client_id: '08ecc2f68d922f18800e',
            client_secret: '5846d428b5340812b76c9637eceaee979340b922'
        }
    })
    .then((response) => response.json())
    .then((json)=> {
        return repos = json;
    });
})();


*/

module.exports = [
    {
        "id": 1,
        "icon": 'laptop',
        "name": 'Dashboard',
        "router": '/dashboard'
    }, {
        id: 2,
        bpid: 1,
        name: 'Users',
        icon: 'user',
        router: '/user'
    }, {
        id: 7,
        bpid: 1,
        name: 'Posts',
        icon: 'shopping-cart',
        router: '/post'
    }
];


