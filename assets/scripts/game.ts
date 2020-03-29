const {ccclass, property} = cc._decorator;
import { BLOCK_ARRAY } from './commons/constants';

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
}

