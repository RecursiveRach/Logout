const express = require ('express');
const router = express.Router();


router.get('/logout', function(req, res) {
        req.logout();
    res.status(200).json({
        status: 'Bye!'
    });
});
module.exports = router;
