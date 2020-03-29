const {ccclass, property} = cc._decorator;
import { BLOCK_ARRAY, INIT_NUMBERS } from './commons/constants';
import { randomRangeInt } from './commons/utils';

@ccclass
export default class Game extends cc.Component {

    @property({
        type: cc.Label,
        tooltip: '分数展示Label节点'
    })
    public scoreLabel:cc.Label = null;

    @property(cc.Integer)
    private score:number = 0;

    @property(cc.Prefab)
    public blockPrefab:cc.Prefab = null;

    @property(cc.Integer)
    public blockGap:number = 20;

    @property(cc.Node)
    public bgNode:cc.Node = null;

    @property({
        type: cc.Integer,
        tooltip: '允许初始化带数字的块的个数'
    })
    public initNumberBlocksCounts:number = 3;

    private _blockSize:number = 0;

    // 维护每一块的位置
    private _blocksPos:Array<Array<any>> = new Array<Array<any>>();
    // 维护每一块的节点
    private _blocksNodes:Array<Array<any>> = new Array<Array<any>>();

    protected start () {
        this.init();
    }

    /**
     * @description: 初始化页面
     */
    private init = () => {
        this.initScore();
        if (this._blocksNodes.length > 0) {
            this.resetBlocks();
        } else {
            this.initBlocks();
        }
        this.initNumberBlocks();
    }

    /**
     * @description: 初始化带数字的块
     */
    private initNumberBlocks = () => {
        const emptyBlocks: Array<cc.Node> = this.findEmptyBlocks();
        for (let i = 0; i < this.initNumberBlocksCounts; i++) {
            const removeItemIndex = this.addNumberBlock(emptyBlocks);
            emptyBlocks.splice(removeItemIndex, 1);
        }
    }

    /**
     * @description: 初始化分数
     */
    private initScore = () => {
        this.setScore(0);
    }

    /**
     * @description: 初始化色块
     */
    private initBlocks = () => {
        this._blockSize = (cc.winSize.width - this.blockGap * 5)/4;
        BLOCK_ARRAY.forEach((itemArray, indexOut) => {
            this._blocksPos[indexOut] = [];
            this._blocksNodes[indexOut] = [];
            const blockPosY:number = this._blockSize * (indexOut + 1) + this.blockGap * indexOut;
            itemArray.forEach((item, indexInner) => {
                const blockPosX:number = this.blockGap * (indexInner + 1) + this._blockSize * (indexInner + 0.5);
                this._blocksPos[indexOut][indexInner] = cc.v2(blockPosX, blockPosY);
                this._blocksNodes[indexOut][indexInner] = this.drawBlockPrefab(blockPosX, blockPosY);
            })
        });

        cc.log(this._blocksPos)
        cc.log(this._blocksNodes);
    }

    /**
     * @description: 重置所有块为初始化状态
     */
    private resetBlocks = () => {
        this._blocksNodes && this._blocksNodes.forEach(item => {
            item.forEach(node => {
                const comp = node.getComponent('block');
                comp._number > 0 && comp.setNumber(0);
            });
        })
    }

    /**
     * @description: 添加数字不为0的块
     * @param emptyBlocks: 空节点数组列表
     * @returns 本次被占用的空节点的下标
     */
    private addNumberBlock = (emptyBlocks: Array<cc.Node>):number => {
        const removeItemIndex = randomRangeInt(0, emptyBlocks.length);
        const node = emptyBlocks[removeItemIndex];
        node.getComponent('block').setNumber(INIT_NUMBERS[randomRangeInt(0, INIT_NUMBERS.length)]);
        return removeItemIndex;
    }

    /**
     * @description: 更新分数方法
     * @param score: 分数值
     */
    private setScore = (score: number) => {
        this.score = score;
        this.scoreLabel.string = `分数：${score}`;
    }

    /**
     * @description: 单个色块的生成函数
     * @param blockPosX: 单个色块的横坐标
     * @param blockPosY: 单个色块的纵坐标
     */
    private drawBlockPrefab = (blockPosX:number, blockPosY:number): cc.Node => {
        const block = cc.instantiate(this.blockPrefab);
        block.width = this._blockSize;
        block.height = this._blockSize;
        block.setPosition(cc.v2(blockPosX, blockPosY));
        this.bgNode.addChild(block);
        block.getComponent('block').setNumber(0);
        return block;
    }

    /**
     * @description: 返回当前数值为0的块组成的数组
     */
    private findEmptyBlocks = ():Array<cc.Node> => {
        const emptyBlocksArray:Array<cc.Node> = [];
        this._blocksNodes.forEach(array => {
            array.forEach(node => {
                const comp = node.getComponent('block');
                if (comp._number === 0) {
                    emptyBlocksArray.push(node);
                }
            })
        })
        return emptyBlocksArray;
    }
}

