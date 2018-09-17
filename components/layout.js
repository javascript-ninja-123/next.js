import Navbar from './navbar';
import React, {Component,Fragment} from 'react'



class Layout extends Component{
  render(){
    return(
        <Fragment>
          <Navbar/>
          {this.props.children}
        </Fragment>
    )
  }
}

export default Layout;
