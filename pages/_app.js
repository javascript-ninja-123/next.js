import React from "react";
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import App, {Container} from "next/app";
import withRedux from "next-redux-wrapper";
import reducers from '../reducers';
import {ThemeProvider} from 'styled-components';
import {theme} from '../styles';
import thunk from 'redux-thunk'

const makeStore = (initialState) => {
    return createStore(reducers, initialState, applyMiddleware(thunk));
};

class MyApp extends App {

    static async getInitialProps({Component, ctx}) {

        // we can dispatch from here too
        ctx.store.dispatch({type: 'FOO', payload: 'foo'});

        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        return {pageProps};

    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <Component {...pageProps} />
                    </ThemeProvider>
                </Provider>
            </Container>
        );
    }

}

export default withRedux(makeStore)(MyApp);
