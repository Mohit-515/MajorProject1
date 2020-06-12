const Post = require('../models/post');

module.exports.home = function(req, res){
    // res.end('<h1>Express is up for codial!</h1>');
    
    // console.log(req.cookies);
    // res.cookie('user-id', 25);

    // Post.find({}, function(err, posts){
    //     return res.render('home',{
    //         title:"Codeial | Home",
    //         posts: posts
    //     });
    // });
//populating the user of each post
    Post.find({}).populate('user').exec(function(err, posts){
        return res.render('home',{
            title:"Codeial | Home",
            posts: posts
        });
    });
    
}