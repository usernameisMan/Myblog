//main.js
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory,IndexRoute,browserHistory,Redirect} from "react-router";
import { connect} from 'react-redux';

import AllStyle from '../style/All.css'//全局CSS样式
import Components_Style from '../style/Components_Style.css'//组件CSS样式

import {clearData,req} from '../action/Ac_reqres.js'
import Com_Navigation from './Com_Navigation.jsx'//导航组件
import Com_Project from './Com_Project.jsx' //项目组件
import Com_Studynotes from './Com_Studynotes.jsx' //学习笔记组件
import Com_Sravelnotes from './Com_Sravelnotes.jsx' //旅行笔记组件
import Com_FunSharing from './Com_FunSharing.jsx'
class App extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        //browserHistory hashHistory
        const {clearData,Promise,getData} = this.props;
        return(
            <div className='max_body'>
                <Router history={hashHistory}>
                    <Route path="/" component={Com_Navigation} >
                        <IndexRoute component={Com_Project} 
                            onLeave={clearData}
                        />
                        <Route path="Studynotes" component={Com_Studynotes}/>
                        <Route path="Sravelnotes" component={Com_Sravelnotes}/>
                        <Route path="FunSharing" component={Com_FunSharing}/>
                    </Route>
                </Router>
            </div>
        )
    }
}

const  mapStateToProps = (state,ownProps)=>{
    return{
        Promise:state.interNet
    }
}
const  mapDispatchToProps = (dispatch,ownProps)=>{
    return{
        clearData:()=>{
            dispatch(clearData());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)