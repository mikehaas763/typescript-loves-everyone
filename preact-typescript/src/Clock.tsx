import { h, render, Component } from 'preact';

class Clock extends Component<ClockProps, ClockState> {
  private timer: number;

  constructor() {
    super();
    // set initial time:
    this.state.time = Date.now();
  }

  componentDidMount() {
    // update time every second
    this.timer = setInterval(() => {
      this.setState({ time: Date.now() });
    }, 1000);
  }

  componentWillUnmount() {
    // stop when not renderable
    clearInterval(this.timer);
  }

  render(props: ClockProps, state: ClockState) {
    let time = new Date(state.time).toLocaleTimeString();
    return <span style="font-size: 120px">{time}</span>;
  }
}

interface ClockProps { }

interface ClockState {
  time: number;
}

// render an instance of Clock into <body>:
render(<Clock />, document.body);