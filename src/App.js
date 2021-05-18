import React from 'react';
import CardList from './Component/CardList';
import { Popup } from './Component/Popup';
import Scroll from './Component/Scroll';
import SerchBox from './Component/SearchBox';
import { robots } from "./robots";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: '',
      popup: false
    }

  }
  onSerchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }
  openPopup = () => {
    this.setState({ popup: true })
  }
  closePopup = () => {
    this.setState({ popup: false })
  }

  render() {
    const filterRobot = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
    return (
      <div className="tc">
        {this.state.popup ? <Popup closePopup={this.closePopup} /> : ""}
        <SerchBox serchChange={this.onSerchChange} />
        {/* <button onClick={this.openPopup}>Open Popup</button> */}
        <Scroll>
          <CardList robots={filterRobot} />
        </Scroll>
      </div>
    )
  }

}
export default App;