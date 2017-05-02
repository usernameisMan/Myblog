/*
    导航组件
*/
import React from 'react';
import {Link,IndexLink} from 'react-router';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import {mouseOver,mouseOut} from '../action/Ac_NavMeun'
import search_green from '../img/search_green.png'
import iconGitHub from '../img/iconGitHub.png'
import Mobile_nav from './Com_Mobile_nav.jsx'
import icongoogle from '../img/icongoogle.png'
import iconwei from '../img/iconwei.png'
import aiconli from '../img/aiconli.png'
import logo from '../img/logo.png'

class Com_Navigation extends React.Component{
    constructor(props){
        super(props);
        this.moveChanage=this.moveChanage.bind(this);
        this.moveNavHeigt=this.moveNavHeigt.bind(this);
        this.state={
            Navleft:false,
            NavHeigt:false
        }
        
    }

    moveChanage(e){
        this.setState({
            Navleft: !this.state.Navleft
        })        
    }

    moveNavHeigt(e){
        this.setState({
            NavHeigt: !this.state.NavHeigt
        })        
    }
    render(){
        const {isTouchs,mouseOver,mouseOut,evevlogo,evevsearch,evevhefs} =this.props
        return(
<div>            
            <div className={this.state.NavHeigt?'Nav_box Nav_box_addH':'Nav_box'}>
                
            <Mobile_nav clickcallback={this.moveNavHeigt}/>

                <div className={"left inline_block"}  onMouseOver={this.moveChanage} onMouseOut={this.moveChanage}>
                    <div>
                        <a href="" className={this.state.Navleft?"move":" "}>Non-commercial</a>
                        <a href="">Non-commercial</a>                       
                    </div>
                </div>
                <div className="right inline_block">
                    <div className="search inline_block" onMouseOver={()=>mouseOver('evevsearch')} onMouseOut={()=>mouseOut('evevsearch')}>
                        <div>
                            <img src={search_green} alt="" className={evevsearch?"moveleft":" "}/>
                            <img src={search_green} alt="" className={evevsearch?"moveright":"imgright"}/>
                         </div>
                    </div>
                    <div className="meun_box inline_block">
                        <div className='logo inline_block' onMouseOver={()=>mouseOver('evevlogo')} onMouseOut={()=>mouseOut('evevlogo')}>
                            <div>
                                <img src={logo} alt="" className={evevlogo?"imgmove":" "}/>
                                <img src={logo} alt=""/>                                
                            </div>
                        </div>
                        <div className='meun inline_block'>
                            <ul>
                                <li
                                onMouseOver={()=>mouseOver(1)}
                                onMouseOut={()=>mouseOut(1)}                  
                                ><IndexLink to="/" activeClassName="active" >项目</IndexLink><span className={isTouchs[0].isTouch?"line":"lineNone"}></span></li>
                                <li
                                onMouseOver={()=>mouseOver(2)}
                                onMouseOut={()=>mouseOut(2)}                  
                                ><Link to="/Studynotes" activeClassName="active" >学习笔记</Link><span className={isTouchs[1].isTouch?"line":"lineNone"}></span></li>
                                <li
                                onMouseOver={()=>mouseOver(3)}
                                onMouseOut={()=>mouseOut(3)}                  
                                ><Link to="/Sravelnotes" activeClassName="active" >旅行笔记</Link><span className={isTouchs[2].isTouch?"line":"lineNone"}></span></li>
                                <li
                                onMouseOver={()=>mouseOver(4)}
                                onMouseOut={()=>mouseOut(4)}                  
                                ><Link to="/content?name=1" activeClassName="active" >我的简历</Link><span className={isTouchs[3].isTouch?"line":"lineNone"}></span></li>
                                <li
                                onMouseOver={()=>mouseOver(5)}
                                onMouseOut={()=>mouseOut(5)}        
                                ><Link to="/FunSharing" activeClassName="active">有趣的分享</Link><span className={isTouchs[4].isTouch?"line":"lineNone"}></span></li>
                            </ul>
                        </div>
                        <div className='hef inline_block'>  
                            <span onMouseOver={()=>mouseOver('evevhef',1)} onMouseOut={()=>mouseOut('evevhef',1)} >
                                <div className={evevhefs[0].evevhef?'block':'none'}></div>
                                <img src={iconGitHub} alt=""/>
                            </span>
                            <span onMouseOver={()=>mouseOver('evevhef',2)} onMouseOut={()=>mouseOut('evevhef',2)}>
                                <div className={evevhefs[1].evevhef?'block':'none'}></div>
                                <img src={icongoogle} alt=""/>
                                </span>
                            <span onMouseOver={()=>mouseOver('evevhef',3)} onMouseOut={()=>mouseOut('evevhef',3)}>
                                <div className={evevhefs[2].evevhef?'block':'none'}></div>
                                <img src={iconwei} alt=""/>
                                </span>
                            <span onMouseOver={()=>mouseOver('evevhef',4)} onMouseOut={()=>mouseOut('evevhef',4)}>
                                <div className={evevhefs[3].evevhef?'block':'none'}></div>
                                <img src={aiconli} alt=""/>
                                </span>
                        </div>
                    </div>
                </div>
            </div>
            
        <ReactCSSTransitionGroup
                transitionName="example"
                component="div"
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}>
                <div key={this.props.location.pathname} style={{position:"relative", width: "100%"}}>
                    <div style={{position:"absolute", width: "100%"}} key={this.props.location.pathname}>
                        {
                            this.props.children
                        }
                    </div>
                </div>
        </ReactCSSTransitionGroup>              
</div>                      
        )
    }

}
const  mapStateToProps = (state,ownProps)=>{
    return{
        isTouchs:state.NavMeun.isTouchs,
        evevlogo:state.NavMeun.evevlogo,
        evevsearch:state.NavMeun.evevsearch,
        evevhefs:state.NavMeun.evevhefs,
    }
}
const  mapDispatchToProps = (dispatch,ownProps)=>{
    return{
        mouseOver:(key,text)=>{
            dispatch(mouseOver(key,text));
        },
        mouseOut:(key,text)=>{
            dispatch(mouseOut(key,text));
        }        
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Com_Navigation)