/**
 * @description: 通过数字来映射颜色
 */
const COLORS_WITH_NUMBER = {
  0: cc.color(198, 184, 172, 255),
  2: cc.color(235, 224, 213, 255),
  4: cc.color(234, 219, 193, 255),
  8: cc.color(240, 167, 110, 255),
  16: cc.color(244, 138, 89, 255),
  32: cc.color(245, 112, 85, 255),
  64: cc.color(245, 83, 52, 255),
  128: cc.color(234, 200, 103, 255),
  256: cc.color(234, 197, 87, 255),
  512: cc.color(234, 192, 71, 255),
  1024: cc.color(146, 208, 80, 255),
  2048: cc.color(0, 176, 240, 255),
};

/**
 * @description: 4x4的二维矩阵
 */
const BLOCK_ARRAY = [[1,1,1,1], [1,1,1,1], [1,1,1,1], [1,1,1,1]];

export {
  COLORS_WITH_NUMBER,
  BLOCK_ARRAY
}