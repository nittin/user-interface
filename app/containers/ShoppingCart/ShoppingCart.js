import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import testImage from 'images/testImage.jpg';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Quantity from 'components/Common/Quantity';
import { Delete } from '@material-ui/icons';

import './styles.scss';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  inputPadding: {
    padding: 10,
    fontSize: 14,
    backgroundColor: 'white',
  },
  index: {
    zIndex: 0,
  },
  cssLabel: {
    transform: 'translate(14px,14px)',
    fontSize: 14,
  },
  select: {
    width: 150,
    fontSize: 12,
    marginBottom: 20,
    marginTop: 20,
  },
});
class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="shopping-cart">
        <div className="row">
          <div className="col-lg-8">
            <Paper className={classes.root}>
              <div className="row align-items-center">
                <div className="col-lg-2">
                  <div className="shopping-cart__image p-3">
                    <img src={testImage} alt="testImage" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="shopping-cart__name">
                    <Typography>Ngày xưa có một chuyện tình</Typography>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="shopping-cart__price">
                    <Typography>20.000</Typography>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="shopping-cart__adjust pr-3">
                    <Quantity />
                  </div>
                </div>
                <div className="col-lg-2">
                  <button type="button" className="shopping-cart__delete">
                    <Delete />
                  </button>
                </div>
              </div>
            </Paper>
          </div>
          <div className="col-lg-3">
            <Paper className="p-3">
              <div className="d-flex">
                <div>
                  <Typography>Thành tiền</Typography>
                </div>
                <div className="ml-auto">
                  <Typography className="price-color">20.000</Typography>
                </div>
              </div>
            </Paper>
            <Button fullWidth className="order p-2 mt-3">Đặt hàng</Button>
          </div>
        </div>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  classes: PropTypes.object,
};
export default withStyles(styles, { withTheme: true })(ShoppingCart);
export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
