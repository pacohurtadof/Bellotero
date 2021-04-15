

import React, {Component } from 'react';
import * as actions from '../actions/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import bellotero from '../img/bellotero.png'


class Header extends Component{

constructor(props) {
  super(props);
  this.state={
      loading:true
  }
  
}

async componentDidMount (){
    //fetch data and store it in redux store
    const url= "https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/app.json";
    const response= await fetch(url);
    const data= await response.json();
    this.props.actions.getDataHeader(data);
    this.setState({...this.state,loading:false});
    
}

menuList=()=>{
    const titles= this.props.header.items.map((item)=>
        <a href={"./"+item.text} key={item.text} className='col-1 menu-button text-center'>{item.text}</a>
    );

return titles
}
render(){
    
    return(
        <div>
    {this.state.loading ? (<div>loading...</div>):(<div className="page">
        <div className="Rectangle row justify-content-end m-0 ">
            <img src={bellotero}
            srcSet="../img/bellotero@2x.png 2x,
                ../img/bellotero@3x.png 3x"
            className="bellotero " alt="">
            </img>
            {this.menuList()}
            
        </div>
        
    </div>)}
    </div>
    )
}

}

const mapStateToProps = state => {
    return {
        header:state.header.menu
    }
    
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);