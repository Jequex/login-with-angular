/*
SQLyog Ultimate v13.1.1 (32 bit)
MySQL - 10.4.20-MariaDB : Database - test
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`test` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `test`;

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` tinytext DEFAULT NULL,
  `full_name` text DEFAULT NULL,
  `username` tinytext DEFAULT NULL,
  `password` tinytext DEFAULT NULL,
  `email` tinytext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `users` */

insert  into `users`(`id`,`full_name`,`username`,`password`,`email`) values 
('6WCJnM5D4yA1MPg','john nonso','jequex','$2a$10$1xii4K0.cxOsDfiwnVkUtOuz/b0xprwKCxpWuIW5ntMuGORcEEjfa','john@nonso.com'),
('5qmEeiOKsQAw9T3','Chukwunonso Onyejekwe','admin','$2a$10$hPH3a02THbWtGfmqcrzMCOQ25VaBHFUS6znfLCjIPRTelrdkIIFKq','onyejekwe.harddisk20@gmail.com');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
