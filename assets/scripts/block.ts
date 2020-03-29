const {ccclass, property} = cc._decorator;
import { COLORS_WITH_NUMBER } from './commons/constants';


@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    numberLabel: cc.Label = null;

    @property(cc.Integer)
    _number: number = 0;

    public setNumber = (val: number = 0) => {
        if (this._number === val) return;
        this._number = val;
        if (val === 0) {
            this.numberLabel.node.active = false;
        }
        this.numberLabel.string = val + '';
        if (COLORS_WITH_NUMBER[val]) {
            this.node.color = COLORS_WITH_NUMBER[val];
        }
    }
}
