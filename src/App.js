
import './App.css';
import React, { Component } from 'react';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';


class App extends Component {




  render() {
    return (
      <div className="App">
        <HeaderComponent></HeaderComponent>
        <BodyComponent></BodyComponent>
        <FooterComponent></FooterComponent>
      </div>
    )
  }


}

export default App;
