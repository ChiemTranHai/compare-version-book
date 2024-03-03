DROP TABLE IF EXISTS `book`;
CREATE TABLE `book`
(
    `book_id`           int NOT NULL AUTO_INCREMENT,
    `book_name`         varchar(255),
    `created_by`        varchar(50),
    `created_date`      timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `last_updated_by`   varchar(50),
    `last_updated_date` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`book_id`)
) CHARACTER SET utf8;
DROP TABLE IF EXISTS `edition_book`;
CREATE TABLE `edition_book`
(
    `edition_book_id` int NOT NULL AUTO_INCREMENT,
    `book_id`    integer,
    `edition_id` integer,
    `content`    text COMMENT 'Content of the book',
    PRIMARY KEY (`edition_book_id`)
) CHARACTER SET utf8;
DROP TABLE IF EXISTS `edition`;
CREATE TABLE `edition`
(
    `edition_id`   int NOT NULL AUTO_INCREMENT,
    `edition_name` varchar(100),
    `created_by`   varchar(50),
    `created_date` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `last_updated_by`   varchar(50),
    `last_updated_date` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`edition_id`)
) CHARACTER SET utf8;




