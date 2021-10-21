
export interface MyState {
    language: string
}

export const MyStateLan: MyState = {
    language: '中文123'
};

const defaultState = (state = MyStateLan, action) => {
    if (action.type === 'change') {
        return {
            ...state,
            language: action.payload
        }
    }
    return state;
};
export default defaultState;
