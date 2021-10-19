import React from 'react';

// function ShoppingCart() {
//   return (
//     <div>
//       ShoppingCart
//     </div>
//   );
// }
interface Props {

}
interface State {
    num: number
}
class ShoppingCart extends React.Component<Props, State> {
    constructor (props: Props) {
        super(props);
        this.state = {
            num: 1
        }
    }

    setNum = (e) => {
        // 点击到的元素
        console.log(e.target);
        // 点击事件绑定的元素
        console.log(e.currentTarget);
        this.setState({
            num: this.state.num + 1
        });
    }
    render () {
        return (
            <button onClick={this.setNum}>
                <span>点击事件</span>
                下面是点击次数 {this.state.num}
            </button>
        )
    }
}

export default ShoppingCart;
