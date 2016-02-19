$(function() {
    loadSwiper(); //加载Banner滑动控件
    loadNews('recommend'); //初始状态下【推荐】板块内容预加载
    underline(); //点击导航标签之后增加下划线
    switchNews(); //点击导航标签之后更滑新闻流的内容
    showBanner(); //部分类别的页面下展示Banner板块
});

//百度新闻前端页面 开始
/**
 * 鼠标点击导航事件
 */
function underline() {
    $('.nav-item li span').each(function(index, el) {
        $(this).on('click', function(event) {
            event.preventDefault();
            $('.nav-item li span').removeClass('underline');
            $(this).addClass('underline');
        });
    });
}
/**
 * 部分板块展示Banner
 */
function showBanner() {
    $('.recommend,.entertain').on('click', function(event) {
        event.preventDefault();
        $('.banner').removeClass('hide');
    });
}
/**
 * 切换新闻标签
 */
function switchNews() {

    updateNews('.social', 'social');
    updateNews('.entertain', 'entertain');
    updateNews('.local', 'local');
    updateNews('.families', 'families');
    updateNews('.recommend', 'recommend');

}

/**
 * 使用ajax从数据库加载数据
 */
function updateNews(newsItemClass, newsItem) {

    $(newsItemClass).on('click', function(event) {
        event.preventDefault();
        $('.news-box').remove();
        $('.banner').addClass('hide');
        loadNews(newsItem);
    });

}
/**
 * 配置焦点图
 * @return {[type]} [description]
 */
function loadSwiper() {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });
}
/**
 * 从服务器加载推荐版块的新闻
 * @param  newstype 新闻的分类
 */
function loadNews(newstype) {

    $.ajax({
        url: '/loadnews',
        type: 'Post',
        dataType: 'json',
        data: {newstype: newstype},
    })
    .done(function(data) {
        
        // console.log(data);
        for (var i = 0; i < data.length; i++) {
            addNews(data, i);
        }
    })
    .fail(function() {
        console.log("error");
    })
}

/**
 * 将获取到的数据转换成HTML插入到页面中
 * @param array data 
 */
function addNews(data, index) {
    var newsbox = $('<div>').addClass('news-box').appendTo('.news');
    var newslink = $('<a>').addClass('news-link').appendTo(newsbox);
    newslink.attr('href', data[index].newslink);
    var newsimg = $('<div>').addClass('newsimg').appendTo(newslink);
    $('<img>').attr('src', data[index].newsimg).appendTo(newsimg);
    var newscontent = $('<div>').addClass('newscontent').appendTo(newslink);
    var newstitlr = $('<h2>').text(data[index].newstitle).appendTo(newscontent);
    var addtime = $('<span>').text(data[index].addtime).appendTo(newscontent);
}
//百度新闻前端页面  结束
