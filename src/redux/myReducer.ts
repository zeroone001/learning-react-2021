
interface MyState {
    language: string
}

const MyStateLan: MyState = {
    language: '中文'
};

const defaultState = (state = MyStateLan, action) => {
    return state;
};
export default defaultState;
