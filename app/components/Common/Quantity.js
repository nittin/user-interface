import React from 'react';
import Button from '@material-ui/core/Button';
import { Add, Remove } from '@material-ui/icons';
import './styles.scss';
export default class Quantity extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      previous: 1,
    };
  }

  clickIncrease = () => {
    this.setState(prevState => ({
      previous: prevState.previous + 1,
    }));
  };

  clickDecrease = () => {
    this.setState(prevState => ({
      previous: prevState.previous - 1,
    }));
  };

  render() {
    return (
      <div className="d-inline-flex quantity">
        <Button
          disabled={this.state.previous === 1}
          onClick={this.clickDecrease}
          className="quantity__add-button mr-2"
          variant="contained"
          color="primary"
          size="small"
        >
          <Remove className="remove" />
        </Button>
        <div className="quantity__number align-self-center pl-2 pr-2">{this.state.previous}</div>
        <Button
          onClick={this.clickIncrease}
          className="quantity__add-button ml-2"
          variant="contained"
          color="primary"
          size="small"
        >
          <Add className="add" />
        </Button>
      </div>
    );
  }
}
