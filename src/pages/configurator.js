

import React, {Component } from 'react';
import * as testimonialActions from '../actions/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '../components/header'


class Configurator extends Component{

constructor(props) {
  super(props);
  this.state={
      loading:true,
      ingredientSpending:50,
      fullTimeEmployees:5
  }
  
}

async componentDidMount (){
    //fetch data and store it in redux store
    const url= "https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json";
    const response= await fetch(url);
    const data= await response.json();
    this.props.actions.getDataConfigurator(data);
    this.setState({...this.state,loading:false});
    
}

ingredientSpendingHandler =(value)=>{
  this.setState({...this.state, ingredientSpending:value.target.value})
}

fullTimeEmployeesHandler =(value)=>{
  this.setState({...this.state, fullTimeEmployees:value.target.value})
}

render(){
    
    return(
        <div>
    {this.state.loading ? (<div>loading...</div>):(<div className="page">
        <Header></Header>
        <div className="layout container">
            <div className="row  title-row">
              <div className="col-6">
                <div className="title-rectangle-calculator">
                    <span className="title-calculator">{this.props.configurator.calculator.title}</span>
                </div>
                <div className="description-calculator">
                  <span >{this.props.configurator.calculator.description}</span>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                    <span className="col-8 slider-titles-calculator">Monthly <br></br>ingredient spending</span>
                    <input onChange={(value)=>this.ingredientSpendingHandler(value)} type="text" className="form-control col-4 quantity-box currency" id="ingredientSpending" value={this.state.ingredientSpending} aria-label="Amount (to the nearest dollar)"></input>
                </div>
                
                <div className="slidecontainer row">
                  <input onChange={(value)=>this.ingredientSpendingHandler(value)} type="range" value={this.state.ingredientSpending} min="10" max="100"  className="slider-input col-12" id="myRange">
                  </input>
                </div>
                <div className="row">
                    <span className="col-10 slider-titles-calculator">Full-time employees that <br></br> process invoices</span>
                    <input onChange={(value)=>this.fullTimeEmployeesHandler(value)}  type="text" className="form-control col-2 quantity-box" value={this.state.fullTimeEmployees} aria-label="Amount (to the nearest dollar)"></input>
                </div>
                <div className="slidecontainer row">
                  <input onChange={(value)=>this.fullTimeEmployeesHandler(value)} value={this.state.fullTimeEmployees} type="range" min="1" max="10"  className="slider-input form-range col-12" id="myRange">
                  </input>
                </div>
                <div className="row mt-5">
                  <span className="col-6 savings-value text-center">{(this.state.ingredientSpending*0.3).toFixed(3)}</span>
                  <span className="col-6 savings-value text-center pl-5">{(this.state.fullTimeEmployees*1337)+(this.state.ingredientSpending*0.3)}</span>
                </div>
                <div className=" row">
                  <span className="col-6 slider-titles-calculator text-center">Estimated Food Cost Saving</span>
                  <span className="col-6 slider-titles-calculator text-center pl-5">Your estimated annual savings</span>
                </div>
              
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
        configurator:state.configurator
    }
    
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(testimonialActions, dispatch)
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Configurator);