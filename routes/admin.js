const express = require('express');
const router = express.Router();

const multer =  require('multer');
const upload = multer({ dest: 'uploads/' });

router.use(express.json());

//const axios = require('axios').default;

router.get("/", (req, res) => {
    res.render('admin_autors');
});

router.post('/fio', upload.none(), (req, res) => {
    console.log('autor-s fio is send');
    res.json({ status: 'ok' });
});

router.get("/autors", (req, res) => {
    res.render('admin_autors');
});

router.get("/pages", (req, res) => {
    res.render('admin_pages');
});

module.exports = router;