import React,{Component} from 'react';
import {Layout} from '../components';


export default class About extends Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
    }
    render() {
        return (
            <Layout>
                about us
            </Layout>
        );
    }
}
