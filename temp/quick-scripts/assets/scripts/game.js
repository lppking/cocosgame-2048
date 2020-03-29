(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/game.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '48d25/6sHlNNKb5e8SRitqy', 'game', __filename);
// scripts/game.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var constants_1 = require("./commons/constants");
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scoreLabel = null;
        _this.score = 0;
        _this.blockPrefab = null;
        _this.blockGap = 20;
        _this.bgNode = null;
        _this._blockSize = 0;
        _this._blocksPos = new Array();
        _this.initBlocks = function () {
            _this._blockSize = (cc.winSize.width - _this.blockGap * 5) / 4;
            constants_1.BLOCK_ARRAY.forEach(function (itemArray, indexOut) {
                _this._blocksPos[indexOut] = [];
                var blockPosY = _this._blockSize * (indexOut + 1) + _this.blockGap * indexOut;
                itemArray.forEach(function (item, indexInner) {
                    var blockPosX = _this.blockGap * (indexInner + 1) + _this._blockSize * (indexInner + 0.5);
                    _this._blocksPos[indexOut][indexInner] = cc.v2(blockPosX, blockPosY);
                    _this.drawBlockPrefab(blockPosX, blockPosY);
                });
            });
            cc.log(_this._blocksPos);
        };
        _this.drawBlockPrefab = function (blockPosX, blockPosY) {
            var block = cc.instantiate(_this.blockPrefab);
            block.width = _this._blockSize;
            block.height = _this._blockSize;
            block.setPosition(cc.v2(blockPosX, blockPosY));
            _this.bgNode.addChild(block);
            block.getComponent('block').setNumber(0);
        };
        return _this;
    }
    Game.prototype.start = function () {
        this.initBlocks();
    };
    __decorate([
        property({
            type: cc.Label,
            tooltip: '分数展示Label节点'
        })
    ], Game.prototype, "scoreLabel", void 0);
    __decorate([
        property(cc.Integer)
    ], Game.prototype, "score", void 0);
    __decorate([
        property(cc.Prefab)
    ], Game.prototype, "blockPrefab", void 0);
    __decorate([
        property(cc.Integer)
    ], Game.prototype, "blockGap", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "bgNode", void 0);
    Game = __decorate([
        ccclass
    ], Game);
    return Game;
}(cc.Component));
exports.default = Game;

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
        //# sourceMappingURL=game.js.map
        