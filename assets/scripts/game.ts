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
    private _blocksPos:Array<Array<any>> = new Array<Array<any>>();

    protected start () {
        this.initBlocks();
    }

    private initBlocks = () => {
        this._blockSize = (cc.winSize.width - this.blockGap * 5)/4;
        BLOCK_ARRAY.forEach((itemArray, indexOut) => {
            this._blocksPos[indexOut] = [];
            const blockPosY:number = this._blockSize * (indexOut + 1) + this.blockGap * indexOut;
            itemArray.forEach((item, indexInner) => {
                const blockPosX:number = this.blockGap * (indexInner + 1) + this._blockSize * (indexInner + 0.5);
                this._blocksPos[indexOut][indexInner] = cc.v2(blockPosX, blockPosY);
                this.drawBlockPrefab(blockPosX, blockPosY);
            })
        });

        cc.log(this._blocksPos)
    }

    private drawBlockPrefab = (blockPosX:number, blockPosY:number) => {
        const block = cc.instantiate(this.blockPrefab);
        block.width = this._blockSize;
        block.height = this._blockSize;
        block.setPosition(cc.v2(blockPosX, blockPosY));
        this.bgNode.addChild(block);
        block.getComponent('block').setNumber(0);
    }
}

