(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/commons/constants.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c725fbTH31DlpJkrA0cSSdm', 'constants', __filename);
// scripts/commons/constants.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description: 通过数字来映射颜色
 */
var COLORS_WITH_NUMBER = {
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
exports.COLORS_WITH_NUMBER = COLORS_WITH_NUMBER;
/**
 * @description: 4x4的二维矩阵
 */
var BLOCK_ARRAY = [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]];
exports.BLOCK_ARRAY = BLOCK_ARRAY;
/**
 * @description: 允许初始块展示的数字
 */
var INIT_NUMBERS = [2, 4];
exports.INIT_NUMBERS = INIT_NUMBERS;

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=constants.js.map
        