export const MOUSEOVER = 'MOUSEOVER';
export const MOUSEOUT = 'MOUSEOUT';

export function mouseOver(key=null,text=null){
    return{
        type:MOUSEOVER,
        text:text,
        key:key
    }
}

export function mouseOut(key=null,text=null){
    return{
        type:MOUSEOUT,
        text:text,
        key:key
    }
}
