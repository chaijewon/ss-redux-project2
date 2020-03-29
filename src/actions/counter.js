import {createAction,handleActions} from 'redux-actions'
const INCREMENT='counter/INCREMENT';
const DECREMENT='counter/DECREMENT';

// 액션 생성
export const increment=createAction(INCREMENT);
export const decrement=createAction(DECREMENT);

const initialState=0;
/*
  const counter=(state=initalState,action)=>{
    switch (action.type) {
        case INCREMENT:

        return Object.assign({},state,{value:state.value+state.diff})
        case DECREMENT:
            return Object.assign({},state,{value:state.value-state.diff})
        case SET_VALUE:
            return Object.assign({},state,{diff:action.diff})
        default:
        return state;
}
 */
export const incrementAsyc=()=>dispatch=>{
    setTimeout(()=>{
        dispatch(increment())
    },1000)
}
export const decrementAsyc=()=>dispatch=>{
    setTimeout(()=>{
        dispatch(decrement())
    },1000)
}
const  counter=handleActions(
    {
        [INCREMENT]:state=>state+1,
        [DECREMENT]:state=>state-1
    },
    initialState
)

export default counter;