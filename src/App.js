import React from 'react';
import 'bootstrap';
import { Provider, connect } from 'react-redux';
import store from "./store";
import {displayEntryAction, displaySumAction} from './actions/displayActions';
import {acReset, ceReset, numPress, zeroPress, decPointPress, equalPress, operatorPress} from './calculate'

// mapStatetoProps
const mapStatetoProps = (state => {
  return {
    entry:state.mathEntry.entry,
    sum:state.mathSum.sum,
  };
});

// mapDispatchToProps
const mapDispatchToProps = dispatch => ({
    displayEntry: () => dispatch(displayEntryAction()),
    displaySum: () => dispatch(displaySumAction()),
});

const DisplayEntry = (props) => {
  return (
    <>
      <p dangerouslySetInnerHTML={{ __html:props.entry}} id="display"></p>
    </>
  )
}

const DisplaySum = (props) => {
  return (
    <>
      <p dangerouslySetInnerHTML={{ __html:props.sum}} id="disString"></p>
    </>
  )
}

const Buttons = () => {
  return (
    <>
      <button onClick={acReset} id="clear">AC</button>
      <button onClick={ceReset} id="CE">CE</button>
      <button onClick={() => {operatorPress("&#247;")}} id="divide">&#247;</button>
      <button onClick={() => {operatorPress("&#215;")}} id="multiply">&#215;</button>  
      <button onClick={() => {numPress("7")}} id="seven">7</button>
      <button onClick={() => {numPress("8")}} id="eight">8</button>
      <button onClick={() => {numPress("9")}} id="nine">9</button>
      <button onClick={() => {operatorPress("-")}} id="subtract">-</button>   
      <button onClick={() => {numPress("4")}} id="four">4</button>
      <button onClick={() => {numPress("5")}} id="five">5</button>
      <button onClick={() => {numPress("6")}} id="six">6</button>
      <button onClick={() => {operatorPress("+")}} id="add">+</button>    
      <button onClick={() => {numPress("1")}} id="one">1</button>
      <button onClick={() => {numPress("2")}} id="two">2</button>
      <button onClick={() => {numPress("3")}} id="three">3</button>  
      <button onClick={equalPress} id="equals">=</button>     
      <button onClick={() => {zeroPress("0")}} id="zero">0</button>
      <button onClick={decPointPress} id="decimal">.</button> 
    </> 
  )
}

const ConnectedDisplayEntry = connect(mapStatetoProps, mapDispatchToProps)(DisplayEntry);
const ConnectedDisplaySum = connect(mapStatetoProps, mapDispatchToProps)(DisplaySum);

const App = () =>{ 
  return (
    <Provider store={store}>
      <div id="calcBase" className= "container">   
        <div id="padDiv">
          <h1 className="text-center">CALCULATOR</h1>
          <div id="screen" className="text-right">
            <ConnectedDisplayEntry/>
            <ConnectedDisplaySum/>
          </div>
          <Buttons/>
        </div>          
      </div>]
    </Provider>  
    )
}

export default App;