/*
 Navicat Premium Data Transfer

 Source Server         : ly
 Source Server Type    : MySQL
 Source Server Version : 80024
 Source Host           : localhost:3306
 Source Schema         : work

 Target Server Type    : MySQL
 Target Server Version : 80024
 File Encoding         : 65001

 Date: 17/06/2021 23:35:45
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for detail_add
-- ----------------------------
DROP TABLE IF EXISTS `detail_add`;
CREATE TABLE `detail_add`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `title` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '题目',
  `subtitle` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '副标题',
  `detail` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '详细描述',
  `photo` mediumblob NULL COMMENT '上传照片',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of detail_add
-- ----------------------------
INSERT INTO `detail_add` VALUES (1, '小张', '无标题', '无描述', 0x706572736F6E5F322E6A7067);
INSERT INTO `detail_add` VALUES (2, '小明', '无标题', '无描述', 0x706572736F6E5F352E6A7067);
INSERT INTO `detail_add` VALUES (3, '1', 'wuwuwuwuwu', 'wuwuwuuwwuwu', '');

-- ----------------------------
-- Table structure for pocda_lr
-- ----------------------------
DROP TABLE IF EXISTS `pocda_lr`;
CREATE TABLE `pocda_lr`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `phonenumber` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` char(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of pocda_lr
-- ----------------------------
INSERT INTO `pocda_lr` VALUES (1, 'admin', 'admin', '123456');
INSERT INTO `pocda_lr` VALUES (2, '1@2', '2525', '2525');
INSERT INTO `pocda_lr` VALUES (3, '465429180@qq.com', '15070800320', 'ly112233');
INSERT INTO `pocda_lr` VALUES (4, '459@455', '123456', '123456');
INSERT INTO `pocda_lr` VALUES (5, '11111@11111', '15070800320', '123456');
INSERT INTO `pocda_lr` VALUES (6, '465429180@qq.com', '17746654387', 'ly10201115');

SET FOREIGN_KEY_CHECKS = 1;
