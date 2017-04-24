/*项目组件*/
import React from 'react';
import {Link,IndexLink} from 'react-router';
import {connect} from 'react-redux';
import {req} from '../action/Ac_reqres.js';
import animation from '../style/animation.css'//组件CSS样式

class Com_DataLoad extends React.Component{

    render(){
        return(
            <div>
                <div className="spinner"></div>       
            </div>
        )
    }
}


export default connect(

)(Com_DataLoad)
