const request = require("request");

getUserDetail = (user)=>{
    // return new promise 
    return new Promise((resolve, reject)=>{
        // perform business logic
        var url =  `https://api.github.com/users/${user}`;
        console.log(`url ->${url}`)
        request({
                url : url,
                json : true,
                headers: {
                    'User-Agent': 'request'
                }
            },
            (error, response, body)=>{
                if(error)
                    reject(error);
                else 
                  /* resolve({
                       login : body.login,
                        bio : body.bio,
                         repo_url : body.repos_url
                  
                   }) */resolve(body)
                      
            }
        )
    })
}


exports = module.exports = {
    getUserDetail
}
