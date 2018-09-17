import React, {Component} from 'react';
import {Layout} from '../components';
import axios from 'axios';
import {connect} from "react-redux";
import {fetchData} from '../actions'

class Index extends Component{
  componentDidMount() {
    this.props.fetchData();
  }
  // static getInitialProps = async ({store}) => {
  //
  //   store.dispatch({type: FETCH_DATA, payload: data});
  // }

  render(){
    const {bitcoinData} = this.props
    return(
      <Layout>
        <h1>Bitcoin Prices</h1>
        <ul>
          <li>
            USD: ${bitcoinData['USD'].rate}
          </li>
          <li>
            GBP: {bitcoinData['GBP'].rate}
          </li>
          <li>
            EUR: {bitcoinData['EUR'].rate}
          </li>
        </ul>
      </Layout>
    )
  }
}


function mapStateToProps({bitcoin}) {
  const {bitcoinData} = bitcoin
  return{bitcoinData}
}

export default connect(mapStateToProps,{fetchData})(Index);
