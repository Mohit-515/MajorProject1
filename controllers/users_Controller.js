module.exports.profile = function(req, res){
    //  res.end('<h1>Users Profile</h1>'); 
    return res.render('user_profile',{
        title: "users profile"
    })
}