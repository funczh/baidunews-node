-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2016-02-17 11:46:26
-- 服务器版本： 10.1.9-MariaDB
-- PHP Version: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `newsid` int(10) NOT NULL,
  `newstitle` varchar(30) NOT NULL,
  `newslink` text,
  `newsimg` text NOT NULL,
  `newscontent` text,
  `newstype` varchar(20) NOT NULL,
  `addtime` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='百度新闻存储数据表';

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`newsid`, `newstitle`, `newslink`, `newsimg`, `newscontent`, `newstype`, `addtime`) VALUES
(5, '男子拒给妻开门遭报警称嫖娼', 'http://news.163.com/16/0130/15/BEJB7BB800014Q4P.html', 'img/news-list3.jpg', '黄石一女子因醉酒后其丈夫不给她开门，竟报假警称丈夫嫖娼。', 'recommend', '2016-01-30'),
(6, '习近平主持政治局会议：增强大局意识核心意识', 'http://www.ce.cn/xwzx/gnsz/gdxw/201601/28/t20160128_8621486.shtml', 'img/news-list1.jpg', NULL, 'recommend', '2016-01-30'),
(7, '央视春晚主持有变化 周涛回归李佳明新晋', 'http://t10.baidu.com/it/u=http://n.sinaimg.cn/ent/transform/20160130/S6nD-fxnzanm3851896.jpg&fm=36', 'img/news-list2.jpg', NULL, 'recommend', '2016-01-30'),
(8, '日本意外宣布实行负利率 日元急贬2%!', 'http://3g.k.sohu.com/t/n115677571', 'img/news-list4.jpg', NULL, 'recommend', '2016-01-30'),
(9, '爆料：瓜子二手车完成超2亿美元融资 估值超10亿美元', 'http://lannylin.baijia.baidu.com/article/313290', 'img/news-list5.jpg', NULL, 'families', '2016-01-30'),
(10, '罗胖卖“瓜”，自卖自夸？', 'http://zhanglei.baijia.baidu.com/article/312350', 'img/news-list6.jpg', NULL, 'families', '2016-01-30'),
(11, '小米、华为别撕了：中国手机第三方统计数据公布！ ', 'http://bearsays.baijia.baidu.com/article/312613', 'img/news-list7.jpg', NULL, 'families', '2016-01-30'),
(12, '与同事闹矛盾 北京一快递员拟徒步走回河南', 'http://news.ifeng.com/a/20160130/47302179_0.shtml', 'img/news-list8.jpg', NULL, 'local', '2016-01-30'),
(13, '面对这么多困境，梅耶尔还能怎么应对？', 'http://zhanglei.baijia.baidu.com/article/312440', 'img/news-list9.jpg', NULL, 'local', '2016-01-30'),
(14, '北京警方今晨再抓6名号贩子', 'http://view.inews.qq.com/a/NEW2016013003121403', 'img/news-list10.jpg', NULL, 'local', '2016-01-30'),
(15, '外管局首度披露数据显示 美国是中国对外证券投资第一大国', 'http://sinanews.sina.cn/sharenews.shtml?id=fxnzani7032329-comos-finance-cms&fromsinago=1&page_start=1&page_end=100', 'img/news-list11.jpg', NULL, 'entertain', '2016-01-30'),
(16, '国办发文推进农业水价形成机制 专家：有重要意义', 'http://sinanews.sina.cn/sharenews.shtml?id=fxnzanh0358955-comos-finance-cms&fromsinago=1&page_start=1&page_end=100', 'img/news-list12.jpg', NULL, 'entertain', '2016-01-30'),
(17, '男子取钱为瞒老婆报假警', 'http://view.inews.qq.com/a/SSH2016013001888807', 'img/news-list13.jpg', NULL, 'social', '2016-01-30'),
(18, '6名爱猫狗人士围殴2名疑似虐猫狗者:逼其吃猫粪', 'http://sinanews.sina.cn/sharenews.shtml?id=fxnzanh0402992-comos-news-cms&fromsinago=1&page_start=1&page_end=100', 'img/news-list14.jpg', NULL, 'social', '2016-01-30'),
(19, '女子醉酒回家丈夫不开门 报警称其在家嫖娼', 'http://sinanews.sina.cn/sharenews.shtml?id=fxnzanh0396878-comos-news-cms&fromsinago=1&page_start=1&page_end=100', 'img/news-list16.jpg', NULL, 'social', '2016-01-30');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD KEY `newsid` (`newsid`),
  ADD KEY `newstype` (`newstype`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `newsid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
