import React from 'react';
import ArticleList from './ArticleList';
import DataApi from '../DataApi';
import { data } from '../testData';

const api = new DataApi(data);

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors(),
    };
    console.log(this.state);
  }
  render(){
    return (
      <ArticleList
        articles={this.state.articles}
        authors={this.state.authors}
      />
    );
  }
}

export default App;
