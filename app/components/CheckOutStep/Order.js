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
  orderBook: {
    fontSize: '12px',
  },
});
class Login extends React.Component {
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
      <div className="order">
        <Paper className={classes.root}>
          <div className="order__title d-flex align-items-center">
            <Typography color="primary">ĐƠN HÀNG</Typography>
            <Button
              className="ml-auto"
              variant="contained"
              color="primary"
              hidden={!this.props.editButton}
            >
              Chỉnh sửa
            </Button>
          </div>
          <div className="order__content">
            <div className="row">
              <div className="col-lg-7">
                <Typography className={classes.orderBook}>Ngày xưa có một chuyện tình</Typography>
              </div>
              <div className="col-lg-2">
                <Typography className={classes.orderBook}>x1</Typography>
              </div>
              <div className="col-lg-3 order__content--price">
                <Typography className={classes.orderBook}>20.000.000</Typography>
              </div>
            </div>
          </div>
          <div className="order__footer d-flex pt-2">
            <Typography color="secondary">THÀNH TIỀN</Typography>
            <Typography className="ml-auto">20.000.000</Typography>
          </div>
        </Paper>
      </div>
    );
  }
}

Login.propTypes = {
  editButton: PropTypes.bool,
};
export default withStyles(styles, { withTheme: true })(Login);
