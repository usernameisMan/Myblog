/*项目组件*/
import React from 'react';
import {Link,IndexLink} from 'react-router';
import {connect} from 'react-redux';
import 'whatwg-fetch' ;
import 'es6-promise';

import {req} from '../action/Ac_reqres.js';
import Com_DataLoad from './Com_DataLoad.jsx';
import BoxDefault from './Com_boxs/Com_box_default.jsx';
import ComBoxImg from './Com_boxs/Com_box_img.jsx';
import ComBoxColor from './Com_boxs/Com_box_color.jsx';
import ComBoxList from './Com_boxs/Com_box_list.jsx';

class Com_Project extends React.Component{

    constructor(props){
        super(props);
        this.state={
            data:[],
            reqoK:false,
            cos:0
        }
        this.creatBOX=this.creatBOX.bind(this);
        this.box=this.box.bind(this);
        this.screenSizeCos=this.screenSizeCos.bind(this);     
    }
    
    screenSizeCos(){  //判断当前窗口宽度需要列数
        let winWidth = window.innerWidth;
        console.log('winWidth:'+winWidth)
        if(winWidth>1130){
            return 4;
        }else if(winWidth>840){
             return 3;
        }else if(winWidth>414){
             return 2;
        }else if(winWidth<=414){
             return 1;
        }else{
            return 1
        }
    }
    creatBOX(){ //根据列数来要选择 所在的X坐标位置
        switch(this.state.cos){
            case 4:
                return this.box(['box1','box2','box3','box4'])
            case 3:
                return this.box(['box1','box2','box3'])
            case 2:
                return this.box(['box1','box2'])
            case 1: 
                return this.box(['box1'])            
        }
    }

    box(posobj){
        let doms = []
         let small = [];
        let hang = Math.ceil(this.state.data.length/this.state.cos);
            for(let i=1;i<=hang;i++){
                    let Nowlast=i*this.state.cos; //4
                    let start=Nowlast-this.state.cos; //4-4=0
                    small = [];
                for(let j=0;j<this.state.cos;j++){           
                    try{
                        let boxType= this.state.data[start+j].type;
                        if(boxType =="BoxDefault"){
                            small[(start+j)]=(
                                <div key={(start+j)} >
                                    <BoxDefault className={'boxDefault '+posobj[j]} data={this.state.data[start+j]}/>
                                </div>
                            );   
                        }else if(boxType =="ComBoxImg"){
                            small[(start+j)]=(
                                <div key={(start+j)} >
                                    <ComBoxImg className={'ComBoxImg '+posobj[j]} data={this.state.data[start+j]}/>
                                </div>
                            );                        
                        }else if(boxType=='ComBoxColor'){
                            small[(start+j)]=(
                                <div key={(start+j)} >
                                    <ComBoxColor className={'ComBoxColor '+posobj[j]} data={this.state.data[start+j]}/>
                                </div>
                            ); 
                        }else if(boxType=='ComBoxList'){
                            small[(start+j)]=(
                                <div key={(start+j)} >
                                    <ComBoxList className={'ComBoxList '+posobj[j]} data={this.state.data[start+j]} zindex={start+j}/>
                                </div>
                            ); 
                        }
                    }catch(e){
                        
                    }
                }
                doms[i] = (<div key={i} style={{position:'relative',height:'340px',marginBottom:'30px'}}>{small}</div>)         
            }
        return doms;
    }        
    render(){
        return(
            <div>
                <div className={this.state.reqoK?"DataLoadWaiNone":"DataLoadWaitShow"}>
                    <Com_DataLoad/>
                </div>
                <div className={this.state.reqoK?"pageWaitShow":"pageWaitShowNone"}>
                {this.state.reqoK?this.creatBOX():<input/>}
                </div> 
            </div>
        )
    }

    componentDidMount(){
        let myHeaders = new Headers({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'text/plain'
        });   
        
        fetch('./data.json')
        .then((res)=>{
            return res.json();
        }).then((data=>{
            this.setState({
                data:data.data,
                reqoK:true,
                cos:this.screenSizeCos()
            });
        }))
        .catch((e) => {console.log(e.message)});  

        window.addEventListener('resize', ()=>{
            this.setState({
                cos:this.screenSizeCos()
            });            
        })
        window.addEventListener('orientationchange', ()=>{
            setTimeout(()=>{
                this.setState({
                cos:this.screenSizeCos()
                });
            console.log(this.state.cos)      
            },500)
      
        })        
           
    } 
    componentWillUnmount(){
        this.setState({
            data:[], 
            reqoK:false
        });              
    }

}

const  mapStateToProps = (state,ownProps)=>{
    return{
        data:state.interNet.data
    }
}
const  mapDispatchToProps = (dispatch,ownProps)=>{
    return{
        mouseOver:(key,text)=>{
            dispatch(mouseOver(key,text));
        },
        mouseOut:(key,text)=>{
            dispatch(mouseOut(key,text));
        },
        getData:()=>{
            dispatch(req('./data.json'))
        }      
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Com_Project)


