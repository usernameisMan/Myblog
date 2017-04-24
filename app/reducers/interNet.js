

const interNet=(state={},action)=>{
    switch(action.type){
        case 'SVAE_DATA':
            return Object.assign({},state,{data:action.data})
        break;
        case 'CLEAR_DATA':
            return state={}
        break;        
        default:
            return state;
    }
}



export default interNet;