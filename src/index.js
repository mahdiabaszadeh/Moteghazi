import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store/index'
import { Provider } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

ReactDOM.render(
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
    </ThemeProvider>,
  document.getElementById('root')
);