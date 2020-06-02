module.exports.home = function(req, res){
    // res.end('<h1>Express is up for codial!</h1>');
    console.log(req.cookies);
    res.cookie('user-id', 25);
    return res.render('home',{
        title:"Home"
    });
}