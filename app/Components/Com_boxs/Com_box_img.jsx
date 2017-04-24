import React from 'react'
import {connect} from 'react-redux'

class Com_box_img extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {ownProps}=this.props;
        var divStyle = {
            backgroundImage: 'url(' + ownProps.data.imgUrl + ')'
        }
        
        return(
                <a href={ownProps.data.url} className={ownProps.className} style={divStyle}>
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
)(Com_box_img)