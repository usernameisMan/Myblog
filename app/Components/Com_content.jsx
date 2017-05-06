/*项目组件*/
import React from 'react';
import {Link,IndexLink} from 'react-router';
import {connect} from 'react-redux';
import {req} from '../action/Ac_reqres.js';
import animation from '../style/animation.css'//组件CSS样式
import Com_DataLoad from './Com_DataLoad.jsx';

class Com_content extends React.Component{

    constructor(props){
        super(props);
        this.state={
            data:[],
            reqoK:false,
        }

    }

    loadData(url='content.json'){
        fetch(url)
        .then((res)=>{
            return res.json();
        }).then((data=>{
            this.setState({
                data:data,
                reqoK:true,
            });
        }))
        .catch((e) => {console.log(e.message)});          
    }

    render(){
        return(
            <div>
                <div className={this.state.reqoK?"DataLoadWaiNone":"DataLoadWaitShow"}>
                    <Com_DataLoad/>
                </div>
                <div className={this.state.reqoK?"pageWaitShow contentBox":"pageWaitShowNone"}>                
                    <div className="centerbox"> 
                    <div className="title">{this.state.reqoK?this.state.data.title:<input/>}</div>    
                         <div className="text">
                             {this.state.reqoK?this.state.data.content:<input/>}
                        </div>
                    </div>
                </div> 
            </div>
        )
    }


    componentDidMount(){
        this.loadData();
    }

}


export default connect()(Com_content)

