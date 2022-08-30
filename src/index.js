import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
import store from "./Redux/store";
import { message } from 'antd';
import client from './ApolloConetion';
import { ApolloProvider } from '@apollo/client';

const root = ReactDOM.createRoot(document.getElementById("root"));

message.config({
  top: 95,
});
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
);

reportWebVitals();
