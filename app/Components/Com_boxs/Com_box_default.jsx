import React from 'react'
import {connect} from 'react-redux'

import construction from '../../img/construction.png'
class Com_box_default extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {ownProps}=this.props
        return(
                <a href={ownProps.data.url} className={ownProps.className} >
                 <div className='logo'>
                     <img src={construction} alt=""/>
                 </div>
                 <div className='title'>{ownProps.data.title}</div>
                 <div className='message'>
                     <span className='left'>
                        >>
                     </span>
                     <span className='right'>
                         Read more
                     </span>
                 </div>
                </a>                
        )
    }
}

const  mapStateToProps = (state,ownProps)=>{
    return{
     ownProps:ownProps
    }
}
const  mapDispatchToProps = (dispatch,ownProps)=>{
    return{

    }
}

export default connect(
mapStateToProps,
mapDispatchToProps
)(Com_box_default)