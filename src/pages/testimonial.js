

import React, {Component } from 'react';
/*import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";*/
import * as testimonialActions from '../actions/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '../components/header'


class Testimonials extends Component{

constructor(props) {
  super(props);
  this.state={
      loading:true,
      sliderNumber:0
  }
  
}

async componentDidMount (){
    //fetch data and store it in redux store
    const url= "https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json";
    const response= await fetch(url);
    const data= await response.json();
    this.props.actions.getDataTestimonials(data);
    this.setState({...this.state,loading:false});
    
}

sliderHandler (direction){
    //just goes up to 1
    if(direction==="left") this.setState({...this.state, sliderNumber: 0}) 
    else this.setState({...this.state, sliderNumber: 1})
}

render(){
    
    return(
        <div>
    {this.state.loading ? (<div>loading...</div>):(<div className="page">
        <Header></Header>
        <div className="layout container">
            <div className="row  title-row">
                <div className="title-rectangle">
                    <span className="title-testimonials">{this.props.slider.title}</span>
                </div>
            </div>
            <div className="row ">
                <div className="testimonial-rectangle row">
                    <div className="col-4">
                        <span className="testimonials-name ">{this.props.slider.reviews[this.state.sliderNumber].name}</span>
                        <span className="testimonials-name-description ">{this.props.slider.reviews[this.state.sliderNumber].position}</span>
                    </div>
                    <div className="col-8">
                        <span className="testimonials-testimonial">"{this.props.slider.reviews[this.state.sliderNumber].comment}"</span>
                    </div>
                </div>
            </div>
            <div className="row slider-controls-rectangle justify-content-end">
                <div className="slider-controls">
                    <span className="slider-controls-number">{this.state.sliderNumber+1}/4</span>
                </div>
                <div className="slider-controls">
                    <span onClick={()=>this.sliderHandler("left")}><span  className="slider-controls-arrow">←</span></span>
                    <span onClick={()=>this.sliderHandler("right")}><span  className="slider-controls-arrow">→</span></span>
                </div>
            </div>
        </div>
        
    </div>)}
    </div>
    )
}

}

const mapStateToProps = state => {
    return {
        slider:state.testimonials.slider
    }
    
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(testimonialActions, dispatch)
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Testimonials);