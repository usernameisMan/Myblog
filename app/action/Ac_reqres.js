import 'whatwg-fetch' 
import 'es6-promise'
const SVAE_DATA ='SVAE_DATA';
const CLEAR_DATA ='CLEAR_DATA';

export const req=(url=null,post=null)=>{
    return (dispatch) => {
        console.log('fetch数据')
        fetch(url)
        .then((res)=>{
            return res.json();
        }).then((data=>{
             dispatch(saveData(data))
        }))
        .catch((e) => {console.log(e.message)})
    }
}

function saveData(data) {
    return {
        type: SVAE_DATA,
        data: data
    }
}

export function clearData(){
    return {
        type: CLEAR_DATA,
    } 
}