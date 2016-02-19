var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../config.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

/* 加载新闻列表到前端页面 */
router.post('/loadnews', function(req, res, next) {
    var connection = mysql.createConnection({
        host: config.host,
        user: config.user,
        password: config.password,
        database: config.database
    });
    connection.connect();
    var bdNewsType = req.body.newstype;
    connection.query('SELECT * FROM `news` WHERE newstype = ?', [bdNewsType], function(err, rows, fields) {
        if (err) throw err;
        res.json(rows);
    });

    connection.end();

});

// 加载所有的新闻内容到管理界面
router.get('/downloadnews', function(req, res, next) {
    var connection = mysql.createConnection({
        host: config.host,
        user: config.user,
        password: config.password,
        database: config.database
    });
    connection.connect();
    connection.query('SELECT * FROM news ORDER BY newsid DESC', function(err, rows, fields) {
        if (err) throw err;
        res.json(rows);
    });

    connection.end();
});

// 删除新闻
router.post('/deletenews', function(req, res, next) {
    var connection = mysql.createConnection({
        host: config.host,
        user: config.user,
        password: config.password,
        database: config.database
    });

    connection.connect();
    var deleteNewsId = req.body.deleteId;

    connection.query('DELETE FROM `news` WHERE newsid = ?', [deleteNewsId], function(err, rows, fields) {
        if (err) {
            res.send('删除失败！');
        } else {
            res.send('删除成功！');
        };
    });

    connection.end();
});


//返回需要修改的新闻内容，展示再修改界面中
router.post('/updatenews', function(req, res, next) {


    var connection = mysql.createConnection({
        host: config.host,
        user: config.user,
        password: config.password,
        database: config.database
    });
    connection.connect();
    var updateId = req.body.updateId;
    connection.query('SELECT * FROM `news` WHERE newsid = ?', [updateId], function(err, rows, fields) {
        if (err) throw err;
        res.json(rows[0]);
    });

    connection.end();
});

// 在新闻修改界面中对新闻内容修改之后重新提交之后的处理
router.post('/updatedatabase', function(req, res) {
    var updateNews = {
        newsid: req.body.updateid,
        newstitle: req.body.updatetitle,
        newstype: req.body.updatetype,
        newsimg: req.body.updateimg,
        newslink: req.body.updatelink,
        addtime: req.body.updateaddtime,
        newscontent: req.body.updatecontent
    };
    // var newsid = req.body.updateid;
    // var varnewstitle = req.body.updatetitle;
    // var newstype = req.body.updatetype;
    // var newsimg = req.body.updateimg;
    // var newslink = req.body.updatelink;
    // var addtime = req.body.updateaddtime;
    // var newscontent = req.body.updatecontent;
    // var updateId = req.body.updateid;
    var updateNewsId = req.body.updateid;
    var connection = mysql.createConnection({
        host: config.host,
        user: config.user,
        password: config.password,
        database: config.database
    });
    connection.connect();

    connection.query('DELETE FROM `news` WHERE newsid = ?', [updateNewsId], function(err, rows, fields) {
        if (err) throw err
    });
    connection.query('INSERT INTO news SET ?', updateNews, function(err, result) {
        if (err) {
            res.send('更新失败！');
        } else {
            res.send('更新成功！');
        };
    });
    connection.end();
});



//上传新闻
router.post('/uploadnews', function(req, res) {
    var news = {
        newstitle: req.body.newstitle,
        newstype: req.body.newstype,
        newsimg: req.body.newsimg,
        newslink: req.body.newslink,
        addtime: req.body.addtime,
        newscontent: req.body.newscontent
    };
    var connection = mysql.createConnection({
        host: config.host,
        user: config.user,
        password: config.password,
        database: config.database
    });
    connection.connect();
    connection.query('INSERT INTO news SET ?', news, function(err, result) {
        if (err) {
            throw err
        } else {
            res.send('上传成功');
        };

    });

    connection.end();
});

module.exports = router;
