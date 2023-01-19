import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


const root = ReactDOM.createRoot(document.getElementById('root'));


const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GQL_ADDRESS,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  //const token = localStorage.getItem('token');
  const token = process.env.REACT_APP_GQL_TOKEN;
  // return the headers to the context so httpLink can read them
  console.log(process.env.REACT_APP_GQL_ADDRESS);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


/**
const client = new ApolloClient({
  uri: 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cld2c1ih60xb501tb616ratn9/master',
  cache: new InMemoryCache(),
});
*/

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);

