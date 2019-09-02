import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 0
    };
  }
  setView = e => {
    let view = +e.currentTarget.getAttribute("data-view");
    this.setState({ view });
  };
  render() {
    const mpr = "Chicago Guitar Instructor";
    return (
      <div className="App">
        <header className="App-header">{mpr}</header>
        <Nav view={this.state.view} setView={this.setView} />
        <Content view={this.state.view} setView={this.setView} />
        <div className="starts">
          It all starts with <span className="one">one</span> note
        </div>
      </div>
    );
  }
}

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <NavLink onClick={this.props.setView} target="0" view={this.props.view}>
          Home
        </NavLink>
        <NavLink onClick={this.props.setView} target="1" view={this.props.view}>
          Truth
        </NavLink>
        <NavLink onClick={this.props.setView} target="2" view={this.props.view}>
          Course
        </NavLink>
        <NavLink onClick={this.props.setView} target="3" view={this.props.view}>
          Feel
        </NavLink>
        <NavLink onClick={this.props.setView} target="4" view={this.props.view}>
          My Goal
        </NavLink>
        <NavLink onClick={this.props.setView} target="5" view={this.props.view}>
          Contact
        </NavLink>
      </div>
    );
  }
}

class NavLink extends Component {
  render() {
    let style = {
      color: this.props.view === +this.props.target ? "white" : "white",
      border:
        this.props.view === +this.props.target
          ? "3px outset orange"
          : "3px outset lightskyblue"
    };
    return (
      <div
        className="NavLink"
        onClick={this.props.onClick}
        data-view={this.props.target}
        style={style}
      >
        <span>{this.props.children}</span>
      </div>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <div className="content">
        <Home setView={this.props.setView} hidden={this.props.view !== 0} />
        <Truth setView={this.props.setView} hidden={this.props.view !== 1} />
        <Course setView={this.props.setView} hidden={this.props.view !== 2} />
        <Feel setView={this.props.setView} hidden={this.props.view !== 3} />
        <Goal setView={this.props.setView} hidden={this.props.view !== 4} />
        <Contact hidden={this.props.view !== 5} />
      </div>
    );
  }
}
class Home extends Component {
  render() {
    let style = {
      display: this.props.hidden ? "none" : "flex"
    };
    return (
      <div className="container" style={style}>
        Over the past 20 years,
        <br />
        I have developed a unique system
        <br />
        of teaching students how to play guitar
        <br />
        without the need to read music.
        <br />
        <br />
        As an outlet
        <br />
        through which one may express
        <br />
        his or her subconscious emotions
        <br />
        through a combination of vibrations
        <br />
        that are simultaneously felt and heard,
        <br />
        <br />
        Playing music is the most enjoyable activity
        <br />I have ever participated in.
      </div>
    );
  }
}
class Course extends Component {
  render() {
    let style = {
      display: this.props.hidden ? "none" : "flex"
    };
    return (
      <div className="container" style={style}>
        My course
        <br />
        will teach you that the tiny details,
        <br />
        that 98% of musicians completely overlook,
        <br />
        are almost always the missing pieces of the
        <br />
        "Musician's Puzzle of Success".
        <br /> <br />
        Ignorance of these
        <br />
        seemingly insignificant details
        <br />Will,<br />
        without a doubt,
        <br />
        limit a musician's ability to succeed.
        <br />
        <br />
        I know every single detail of my system
        <br />
        because I created it!
        <br />
        <br />
        I construct patterns of exercises,
        <br />
        based on each individual student's
        <br />
        experience and goals.
        <br />
        <br />
        Through repetition,
        <br />
        these simple, enjoyable exercises
        <br />
        become habits.
        <br />
        <br />
        Literal habits do not require thought.
        <br />
        They just happen!
        <br />
        <br />
        I specialize in recognizing the tendencies
        <br />
        that prevent musicians from progressing,
        <br />
        and I modify them with
        <br />
        patterns that transform them into
        <br />
        successful habits!
      </div>
    );
  }
}

class Truth extends Component {
  render() {
    let style = {
      display: this.props.hidden ? "none" : "flex"
    };
    return (
      <div className="container" style={style}>
        A startling percentage of guitar classes
        <br />
        are based on ideas taken from books
        <br />
        written by third parties
        <br />
        <br />
        ...Ideas which the instructors
        <br />
        of these classes
        <br />
        don't fully understand!
        <br />
        <br />
        To be frank,
        <br />
        those instructors are just there for
        <br />
        the paycheck
        <br /> <br />
        To me, this is not a job.
        <br /> <br />
        In fact, your first class is free.
        <br />
        <br />
        And if you are sincerely dissatisfied,
        <br />
        your next class is free as well!
      </div>
    );
  }
}

class Feel extends Component {
  render() {
    let style = {
      display: this.props.hidden ? "none" : "flex"
    };
    return (
      <div className="container" style={style}>
        My course heavily focuses on
        <br />
        feel over thought.
        <br />
        <br />
        One can easily play a SINGLE note on a guitar
        <br />
        and manipulate its frequency
        <br />
        to that which he desires to hear and feel.
        <br />
        <br />
        When exectued correctly,
        <br />
        the resulting euphoria is incomparible
        <br />
        to any other sensation known to man.
        <br />
        <br />
        I will teach you how to experience
        <br />
        the joy and emotion
        <br />
        in every note you play
        <br />
        and every sound you create,
        <br />
        which will provide you
        <br />
        the necessary encouragement
        <br />
        to practice as often as you can.
        <br />
        <br />
        Remember,
        <br />
        habits are formed through repetition.
        <br />
        <br />
        By following the very first principles I teach,
        <br />
        you will soon realize
        <br />
        the less you think, and the more you feel,
        <br />
        the better you will play.
      </div>
    );
  }
}

class Goal extends Component {
  render() {
    let style = {
      display: this.props.hidden ? "none" : "flex"
    };
    return (
      <div className="container" style={style}>
        My goal
        <br />
        is to reveal the euphoria
        <br />
        that is the appreciation of music,
        <br />
        so my students can experience it first-hand
        <br />
        and accumulate their own wisdom,
        <br />
        ultimately spreading it
        <br />
        to others who have not yet found it.
        <br />
        <br />
        You've got a lot of emotion inside of you,
        <br />
        whether or not you realize it.
        <br />
        Isn't it about time you let some out?
      </div>
    );
  }
}

class Contact extends Component {
  render() {
    let style = {
      display: this.props.hidden ? "none" : "flex"
    };
    return (
      <div className="container" style={style}>
        <div className="email">
          Matthew J. Nolan
          <br />
          Tinley Park, IL
          <br />
          mnolan312@gmail.com
        </div>
      </div>
    );
  }
}

export default App;
