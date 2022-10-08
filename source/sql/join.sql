DROP TABLE IF EXISTS `ed_member`;
CREATE TABLE `ed_member` (
    `memKey` int(4) NOT NULL AUTO_INCREMENT, 
    `memLavel` enum(“0”, “1”) NOT NULL, 
    `memId` char(50) NOT NULL,
    `memPw` varchar(20) NOT NULL,
    `memName` char(30) NOT NULL,
    `memTel` char(20) NOT NULL,
    `memEmail` char(100) NOT NULL,
    `memBirth` date NOT NULL,
    `memSex` enum(“남자”, “여자”) NOT NULL,
    `memChek1` enum(“0”, “1”) NOT NULL, 
    `memCheck2` enum(“0”, “1”) NOT NULL,   
    PRIMARY KEY (`memKey`)
) AUTO_INCREMENT=10;

Insert info `ed_member` Values (“0”, “0”, “admin”, “1234”, “관리자”, “032-111-1111”, “admin@gmail.com”, “1994-12-08”, “여”, “0”, “0”);
Insert info `ed_member` Values (“1”, “1”, “sjham12”, “1234”, “함송진” , “010-4112-9412”, “sjham12@gmail.com”, “1994-12-08” , “여”, “0”, “0”);