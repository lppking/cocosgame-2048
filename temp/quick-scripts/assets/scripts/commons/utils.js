(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/commons/utils.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '175f4PrNgpP95Mc9Zi/dszH', 'utils', __filename);
// scripts/commons/utils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function randomRangeInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
exports.randomRangeInt = randomRangeInt;

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
        //# sourceMappingURL=utils.js.map
        