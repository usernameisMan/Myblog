import React from 'react'
import {Link,IndexLink} from 'react-router';
import {connect} from 'react-redux';

import logo from '../img/logo.png'    
import hamburger from '../img/mobile_hamburger.png'
import search_green from '../img/search_green.png'

class Mobile_nav extends React.Component{
    constructor(props){
        super(props);
        this.clickcallback= this.clickcallback.bind(this);
        this.state={
            Mobile_nav_H:false
        }
    }

    clickcallback(){
       this.props.clickcallback();
       this.setState({
           Mobile_nav_H:!this.state.Mobile_nav_H
       })
    }

    render(){
        return(
            <div className={this.state.Mobile_nav_H?"Mobile_nav Nav_box_Mobile":"Mobile_nav"}>
            <div className="Mobile_nav_top">
                <div className="inline_block" onClick={this.clickcallback}>
                    <img src={hamburger} alt=""/>
                </div>
                <img src={logo} alt=""/>
            </div>
            <div className="Mobile_nav_list">
                <IndexLink to="/">项目</IndexLink>
                <Link to="/Studynotes">学习笔记</Link>
                <Link to="/Studynotes">旅行笔记</Link>
                <Link to="/Studynotes">我的简历</Link>
                <Link to="/Studynotes">有趣的分享</Link>                
            </div>
            <div className="Mobile_nav_search">
                <input type="text" className="inline_block" placeholder="Search....."/>
                <div className="inline_block">
                    <img src={search_green} alt=""/>
                </div>
            </div>
        </div>
        )
    }

}

const  mapStateToProps = (state,ownProps)=>{
    return{
        clickcallback:ownProps.clickcallback
    }
}
const  mapDispatchToProps = (dispatch,ownProps)=>{
    return{

    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Mobile_nav)