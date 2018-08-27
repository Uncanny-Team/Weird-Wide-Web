const router = require('express').Router();
const passport = require('passport');

//auth login local
router.post('/login-local', passport.authenticate('local'),(req, res) => {
    res.json(req.user);
});

//auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

//auth logout
router.get('/logout', (req, res) => {
    //handle with passport
    req.logout();
    res.redirect('/');
});


//callback route for google to redirect
router.get('google/redirect', passport.authenticate('google'), (req, res) => {
    
    // res.send(req.user)

    res.redirect('/profile');
})

module.exports = router;