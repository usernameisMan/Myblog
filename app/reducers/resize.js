const initialState={
    col:1
}

 const resize=(state=initialState,action)=>{
     console.log(action.size)
    switch(action.type){
        case 'ResizeChanageCol':
            if(action.size>1130){
                return Object.assign({},state,{col:4});
            }else if(action.size>840){
                return Object.assign({},state,{col:3});
            }else if(action.size>550){
                return Object.assign({},state,{col:2});
            }else if(action.size<=550){
                return Object.assign({},state,{col:1});
            }else{
                return Object.assign({},state,{col:1});
            }
        break
        default:
            return state;
    }
}


export default resize;