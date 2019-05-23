import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import './styles.scss';
const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 20,
  },
});
class Bag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, theme } = this.props;
    const { value } = this.state;
    return (
      <div className="bag">
        <Paper className={classes.root}>
        </Paper>
      </div>
    );
  }
}

Bag.propTypes = {};
export default withStyles(styles, { withTheme: true })(Bag);
