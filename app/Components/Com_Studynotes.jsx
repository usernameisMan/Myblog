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

class Com_Studynotes extends React.Component{

    constructor(props){
        super(props);
        this.state={
            data:[],
            reqoK:false,
            cos:0,
            mianList:[],
            secondary:[],
            nowmianList:null,
            nowsecondary:null,
            ListData:[]
        }
        this.creatBOX=this.creatBOX.bind(this);
        this.box=this.box.bind(this);
        this.screenSizeCos=this.screenSizeCos.bind(this);     
        this.loadData=this.loadData.bind(this);
    }
    
    selectTag(){
        this.refs.select_input_l.addEventListener('click',(e)=>{
            this.setState({
                nowmianList:e.target.innerHTML,//第一个的显示
                nowsecondary:"选择子栏目",
                secondary:this.state.ListData[e.target.innerHTML]//第二个数据
            })
        })
        this.refs.select_input_r.addEventListener('click',(e)=>{
            this.setState({
                reqoK:false,
                nowsecondary:e.target.innerHTML
            });
            var url=e.target.innerHTML+'.json';
            this.loadData(url);

        })
    }

    loadData(url='data1.json'){
        fetch(url)
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
                                <div key={(start+j)} onClick={this.loadData}>
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
                <div className='Study_selectlist'>
                    <div className="Promote">学习笔记选择卡</div>
                    <div className="select_input_box">

                        <div className="select_input_l" ref="select_input_l">
                            <div className='box'>
                                <div className="showBox">{this.state.nowmianList}</div>
                                <div className="Arrow"><span></span></div>
                            </div>      
                            <div className='list'>   
                                {this.state.mianList.map(function(data,index){
                                    return(<span key={index}>{data}</span>)
                                })}                                                      
                            </div>
                        </div>

                        <div className="select_input_r" ref="select_input_r">
                            <div className='box'>
                                <div className="showBox">{this.state.nowsecondary}</div>
                                <div className="Arrow"><span></span></div>
                            </div>      
                            <div className='list'>
                                {this.state.secondary.map(function(data,index){
                                    return(<span key={index}>{data}</span>)
                                })}      
                            </div>
                        </div>      

                    </div>
                </div>
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
        //初始化数据
        fetch('dataList.json')
        .then((res)=>{
            return res.json();
        }).then((data=>{
            this.setState({
                mianList:data.mainLists,
                secondary:data[data.mainLists[0]],
                nowmianList:data.mainLists[0],
                nowsecondary:data[data.mainLists[0]][0],
                ListData:data
            });
           this.loadData('./data.json');
        }))
        .catch((e) => {console.log(e.message)});  

        //浏览器分辨率变化
        window.addEventListener('resize', ()=>{
            this.setState({
                cos:this.screenSizeCos()
            });            
        })
        //手机屏幕旋转
        window.addEventListener('orientationchange', ()=>{
            setTimeout(()=>{
                this.setState({
                cos:this.screenSizeCos()
                });
            console.log(this.state.cos)      
            },500)
        })
        
     this.selectTag()
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
)(Com_Studynotes)


