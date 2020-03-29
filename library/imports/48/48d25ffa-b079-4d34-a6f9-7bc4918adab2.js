"use strict";
cc._RF.push(module, '48d25/6sHlNNKb5e8SRitqy', 'game');
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
var utils_1 = require("./commons/utils");
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scoreLabel = null;
        _this.score = 0;
        _this.blockPrefab = null;
        _this.blockGap = 20;
        _this.bgNode = null;
        _this.initNumberBlocksCounts = 3;
        _this._blockSize = 0;
        // 维护每一块的位置
        _this._blocksPos = new Array();
        // 维护每一块的节点
        _this._blocksNodes = new Array();
        /**
         * @description: 初始化页面
         */
        _this.init = function () {
            _this.initScore();
            if (_this._blocksNodes.length > 0) {
                _this.resetBlocks();
            }
            else {
                _this.initBlocks();
            }
            _this.initNumberBlocks();
        };
        /**
         * @description: 初始化带数字的块
         */
        _this.initNumberBlocks = function () {
            var emptyBlocks = _this.findEmptyBlocks();
            for (var i = 0; i < _this.initNumberBlocksCounts; i++) {
                var removeItemIndex = _this.addNumberBlock(emptyBlocks);
                emptyBlocks.splice(removeItemIndex, 1);
            }
        };
        /**
         * @description: 初始化分数
         */
        _this.initScore = function () {
            _this.setScore(0);
        };
        /**
         * @description: 初始化色块
         */
        _this.initBlocks = function () {
            _this._blockSize = (cc.winSize.width - _this.blockGap * 5) / 4;
            constants_1.BLOCK_ARRAY.forEach(function (itemArray, indexOut) {
                _this._blocksPos[indexOut] = [];
                _this._blocksNodes[indexOut] = [];
                var blockPosY = _this._blockSize * (indexOut + 1) + _this.blockGap * indexOut;
                itemArray.forEach(function (item, indexInner) {
                    var blockPosX = _this.blockGap * (indexInner + 1) + _this._blockSize * (indexInner + 0.5);
                    _this._blocksPos[indexOut][indexInner] = cc.v2(blockPosX, blockPosY);
                    _this._blocksNodes[indexOut][indexInner] = _this.drawBlockPrefab(blockPosX, blockPosY);
                });
            });
            cc.log(_this._blocksPos);
            cc.log(_this._blocksNodes);
        };
        /**
         * @description: 重置所有块为初始化状态
         */
        _this.resetBlocks = function () {
            _this._blocksNodes && _this._blocksNodes.forEach(function (item) {
                item.forEach(function (node) {
                    var comp = node.getComponent('block');
                    comp._number > 0 && comp.setNumber(0);
                });
            });
        };
        /**
         * @description: 添加数字不为0的块
         * @param emptyBlocks: 空节点数组列表
         * @returns 本次被占用的空节点的下标
         */
        _this.addNumberBlock = function (emptyBlocks) {
            var removeItemIndex = utils_1.randomRangeInt(0, emptyBlocks.length);
            var node = emptyBlocks[removeItemIndex];
            node.getComponent('block').setNumber(constants_1.INIT_NUMBERS[utils_1.randomRangeInt(0, constants_1.INIT_NUMBERS.length)]);
            return removeItemIndex;
        };
        /**
         * @description: 更新分数方法
         * @param score: 分数值
         */
        _this.setScore = function (score) {
            _this.score = score;
            _this.scoreLabel.string = "\u5206\u6570\uFF1A" + score;
        };
        /**
         * @description: 单个色块的生成函数
         * @param blockPosX: 单个色块的横坐标
         * @param blockPosY: 单个色块的纵坐标
         */
        _this.drawBlockPrefab = function (blockPosX, blockPosY) {
            var block = cc.instantiate(_this.blockPrefab);
            block.width = _this._blockSize;
            block.height = _this._blockSize;
            block.setPosition(cc.v2(blockPosX, blockPosY));
            _this.bgNode.addChild(block);
            block.getComponent('block').setNumber(0);
            return block;
        };
        /**
         * @description: 返回当前数值为0的块组成的数组
         */
        _this.findEmptyBlocks = function () {
            var emptyBlocksArray = [];
            _this._blocksNodes.forEach(function (array) {
                array.forEach(function (node) {
                    var comp = node.getComponent('block');
                    if (comp._number === 0) {
                        emptyBlocksArray.push(node);
                    }
                });
            });
            return emptyBlocksArray;
        };
        return _this;
    }
    Game.prototype.start = function () {
        this.init();
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
    __decorate([
        property({
            type: cc.Integer,
            tooltip: '允许初始化带数字的块的个数'
        })
    ], Game.prototype, "initNumberBlocksCounts", void 0);
    Game = __decorate([
        ccclass
    ], Game);
    return Game;
}(cc.Component));
exports.default = Game;

cc._RF.pop();