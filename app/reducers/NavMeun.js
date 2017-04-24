const initialState={
    isTouchs:[
        {isTouch:false},
        {isTouch:false},
        {isTouch:false},
        {isTouch:false},
        {isTouch:false}       
    ],
    evevlogo:false,
    evevsearch:false,
    evevhefs:[
        {evevhef:false},
        {evevhef:false},
        {evevhef:false},
        {evevhef:false}    
    ]
}

const NavMeun = (state=initialState,action)=>{
    switch(action.type){
        case 'MOUSEOVER':
            if((typeof action.key)=='string'&& action.key=='evevlogo'){
                let a=action.key
                return  Object.assign({},state,{evevlogo:true});
            }else if((typeof action.key)=='string'&& action.key=='evevsearch'){
                return  Object.assign({},state,{evevsearch:true});
            }else if((typeof action.key)=='string'&& action.key=='evevhef'){
                return  Object.assign(
                    {},
                    state,
                    {
                    evevhefs:state.evevhefs.map((evevhef,index)=>{
                        if(index == action.text-1){
                            return Object.assign({}, evevhef, {
                                evevhef:true
                            });                        
                        }else{
                            return evevhef
                        }
                    })
                })
            }else{
                return Object.assign(
                    {},
                    state,
                    {
                    isTouchs:state.isTouchs.map((isTouch,index)=>{
                        if(index == action.key-1){
                            return Object.assign({}, isTouch, {
                                isTouch:true
                            });                        
                        }else{
                            return isTouch
                        }
                    })
                })                
            }
            break
        case 'MOUSEOUT':
            if((typeof action.key)=='string'&& action.key=='evevlogo'){
                return  Object.assign({},state,{evevlogo:false});
            }else if((typeof action.key)=='string'&& action.key=='evevsearch'){
                return  Object.assign({},state,{evevsearch:false});
            }else if((typeof action.key)=='string'&& action.key=='evevhef'){
                return  Object.assign(
                    {},
                    state,
                    {
                    evevhefs:state.evevhefs.map((evevhef,index)=>{
                        if(index == action.text-1){
                            return Object.assign({}, evevhef, {
                                evevhef:false
                            });                        
                        }else{
                            return evevhef
                        }
                    })
                })
            }else{
                return Object.assign(
                    {},
                    state,
                    {
                    isTouchs:state.isTouchs.map((isTouch,index)=>{
                        if(index == action.key-1){
                            return Object.assign({}, isTouch, {
                                isTouch:false
                            });                        
                        }else{
                            return isTouch
                        }
                    })
                })                
            }
            break
        break
        default:
            return state
    }
}

export default NavMeun