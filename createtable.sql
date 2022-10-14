CREATE TABLE `customer-solutions-db`.`test_table` (
    `id`  INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NULL,
    `email` VARCHAR(100) NULL,
    `job` VARCHAR(100) NULL,
    `position` VARCHAR(100) NULL,
    `employee_number` VARCHAR(100) NULL,
    `sector` VARCHAR(100) NULL,
    `experience` VARCHAR(100) NULL,
    `country` VARCHAR(100) NULL,
    `city` VARCHAR(100) NULL,
    `customers` INT NULL,
    `people` INT NULL,
    `process` INT NULL,
    `strategy` INT NULL,
    `index` INT NULL,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);


--  adding question fields to the user_db

ALTER TABLE `customer-solutions-db`.`user_db` 
ADD COLUMN `pregunta_0` VARCHAR(250) NOT NULL AFTER `index`,
ADD COLUMN `pregunta_1` VARCHAR(250) NOT NULL AFTER `pregunta_0`,
ADD COLUMN `pregunta_2` VARCHAR(250) NOT NULL AFTER `pregunta_1`,
ADD COLUMN `pregunta_3` VARCHAR(250) NOT NULL AFTER `pregunta_2`,
ADD COLUMN `pregunta_4` VARCHAR(250) NOT NULL AFTER `pregunta_3`,
ADD COLUMN `pregunta_5` VARCHAR(250) NOT NULL AFTER `pregunta_4`,
ADD COLUMN `pregunta_6` VARCHAR(250) NOT NULL AFTER `pregunta_5`,
ADD COLUMN `pregunta_7` VARCHAR(250) NOT NULL AFTER `pregunta_6`,
ADD COLUMN `pregunta_8` VARCHAR(250) NOT NULL AFTER `pregunta_7`,
ADD COLUMN `pregunta_9` VARCHAR(250) NOT NULL AFTER `pregunta_8`,
ADD COLUMN `pregunta_10` VARCHAR(250) NOT NULL AFTER `pregunta_9`,
ADD COLUMN `pregunta_11` VARCHAR(250) NOT NULL AFTER `pregunta_10`,
ADD COLUMN `pregunta_12` VARCHAR(250) NOT NULL AFTER `pregunta_11`,
ADD COLUMN `pregunta_13` VARCHAR(250) NOT NULL AFTER `pregunta_12`,
ADD COLUMN `pregunta_14` VARCHAR(250) NOT NULL AFTER `pregunta_13`,
ADD COLUMN `pregunta_15` VARCHAR(250) NOT NULL AFTER `pregunta_14`,
ADD COLUMN `pregunta_16` VARCHAR(250) NOT NULL AFTER `pregunta_15`,
ADD COLUMN `pregunta_17` VARCHAR(250) NOT NULL AFTER `pregunta_16`,
ADD COLUMN `pregunta_18` VARCHAR(250) NOT NULL AFTER `pregunta_17`,
ADD COLUMN `pregunta_19` VARCHAR(250) NOT NULL AFTER `pregunta_18`,
ADD COLUMN `pregunta_20` VARCHAR(250) NOT NULL AFTER `pregunta_19`,
ADD COLUMN `pregunta_21` VARCHAR(250) NOT NULL AFTER `pregunta_20`,
ADD COLUMN `pregunta_22` VARCHAR(250) NOT NULL AFTER `pregunta_21`,
ADD COLUMN `pregunta_23` VARCHAR(250) NOT NULL AFTER `pregunta_22`,
ADD COLUMN `pregunta_24` VARCHAR(250) NOT NULL AFTER `pregunta_23`,
ADD COLUMN `pregunta_25` VARCHAR(250) NOT NULL AFTER `pregunta_24`,
ADD COLUMN `pregunta_26` VARCHAR(250) NOT NULL AFTER `pregunta_25`,
ADD COLUMN `pregunta_27` VARCHAR(250) NOT NULL AFTER `pregunta_26`,
ADD COLUMN `pregunta_28` VARCHAR(250) NOT NULL AFTER `pregunta_27`,
ADD COLUMN `pregunta_29` VARCHAR(250) NOT NULL AFTER `pregunta_28`;


-- deleting current test data from the table ---

DELETE FROM user_db 


-- adding date column to the data base --

ALTER TABLE `customer-solutions-db`.`user_db` 
ADD COLUMN `date` VARCHAR(45) NOT NULL AFTER `id`;