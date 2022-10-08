drop table if exists `weatherDiary`;
CREATE TABLE `weatherDiary` {
    `wdKey` int(4) NOT NULL AUTO_INCREMENT,
    `wdDay` date NOT NULL,
    `wdSel` enum(“0”, “1”, “2”, “3”, “4”) NOT NULL,
    `weCon` text NOT NULL
} AUTO_INCREMENT=10;
Insert info members Values (“0”, “2022–03-11”, “0”, “기분좋은 하루”); Insert info members Values (“1”, “2022-03-12”, “1”, “우울한 하루”);