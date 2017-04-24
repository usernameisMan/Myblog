import React from 'react'
import {connect} from 'react-redux'

class Com_box_list extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {ownProps}=this.props;
        return(
                <a  className={ownProps.className} style={{zIndex:ownProps.zindex}}>
                 <div className='title'>{ownProps.data.title}</div>
                 <div className='list'> 
                    {ownProps.data.lists.map((list,index)=>{
                        return (<a key={index}>{list}</a>)
                    })}
                 </div>
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
)(Com_box_list)