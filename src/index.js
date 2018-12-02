import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

// First: a simple static tag

function HiSimple() {
  return <p>Hello React!</p>;
}

function Hi() {
  return (
    <div>
      <ul>
        <li>list 1</li>
        <li>Show me</li>
      </ul>
    </div>
  );
}

// First: a simple static tag can be resued
function Hello() {
  return (
    <div>
      <Hi />
      <Hi />
    </div>
  );
}

// Second： tag props for tag input, use content as a argument first to see the error
//   props = {
//     content: 'Show me Please!'
//   }

function TextDisplay(props) {
  return (
    <div>
      {console.log(props)}
      <h2>{props.content}</h2>
    </div>
  );
}

//   props = {
//     content: 'Show me Please!',
//     title: 'This is my title'
//   }
function TitleContentDisplay(props) {
  return (
    <div>
      {console.log(props)}
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
}

class TitleContentDisplay2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {console.log(this.props)}
        <h2>{this.props.title}</h2>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

// Third:
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSwitch: false };
    this.handleClickSwitch = this.handleClickSwitch.bind(this);
  }

  handleClickSwitch(e) {
    this.setState({ isSwitch: !this.state.isSwitch });
  }

  render() {
    return (
      <button onClick={this.handleClickSwitch}>
        ## Switch: {this.state.isSwitch ? "Off" : "On"}
      </button>
    );
  }
}

class ButtonShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSwitch: false };
    this.handleClickSwitch = this.handleClickSwitch.bind(this);
  }

  handleClickSwitch(e) {
    this.setState({ isSwitch: !this.state.isSwitch });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClickSwitch}>
          ## Switch: {this.state.isSwitch ? "Off" : "On"}
        </button>
        <TitleContentDisplay
          title="Switch Current Status"
          content={this.state.isSwitch ? "Off" : "On"}
        />
      </div>
    );
  }
}

// Fourth: tag inline style
const textStyle = { color: "red" };

function TextDisplayWithStyleInline() {
  return (
    <div style={textStyle}>
      <h2>I will show everything !</h2>
    </div>
  );
}

// Fifth: show a list when input a array augument
class ListDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getItemList = this.getItemList.bind(this);
  }

  getItemList() {
    return [
      {
        id: 1,
        text: "this a a first item"
      },
      {
        id: 2,
        text: "this a a second item"
      },
      {
        id: 3,
        text: "this a a third item"
      }
    ];
  }

  render() {
    return (
      <ul>
        {this.getItemList().map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

// Fifth: array input for list display

const itemList = [
  {
    id: 1,
    text: "this a a first item"
  },
  {
    id: 2,
    text: "this a a second item"
  },
  {
    id: 3,
    text: "this a a third item"
  }
];

class CustomizeListDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(
  <CustomizeListDisplay items={itemList} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
