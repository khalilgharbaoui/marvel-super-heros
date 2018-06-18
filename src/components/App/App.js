import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import '../../stylesheets/components.scss';

class App extends React.Component {

  constructor(props) {
    super(props);

  }
  render() {
    return (<div>
      <NavBar brand={"Marvel Super Heros"}/>
      <div className='container-fluid'>
        {this.props.children}
      </div>
      <Footer/>
    </div>);
  }
}

export default App;
