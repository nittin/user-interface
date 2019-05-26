import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import facebook from 'images/facebook.png';
import gmail from 'images/gmail.png';
import { Link } from 'react-router-dom';
import { withCookies } from 'react-cookie';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Login from './Login';
import Order from './Order';
import Address from './Address';
import './styles.scss';
import OrderAddress from '../Common/OrderAddress';

const styles = theme => ({
  root: {
  },
  button: {
    marginRight: 10,
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});
function getSteps() {
  return ['Đăng nhập', 'Địa chỉ giao hàng', 'Thanh toán và đặt mua'];
}

class CheckOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      completed: new Set(),
    };
  }

  componentDidMount() {
    this.props.getListCity();
  }

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep + 1,
    });
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleComplete = () => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const completed = new Set(this.state.completed);
    completed.add(this.state.activeStep);
    this.setState({
      completed,
    });
    if (completed.size !== this.totalSteps()) {
      this.handleNext();
    }
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
      completed: new Set(),
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;
    return (
      <div className="check-out">
        <Stepper activeStep={activeStep} className="mb-3">
          {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
            return (
              <Step key={label} {...props}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                Bạn đã đặt hàng thành công.
              </Typography>
              <Link to="/">
                Quay về trang chủ
              </Link>
            </div>)
            :
            (<div>
              {activeStep === 0 && (
                <div className="check-out__tab-content">
                  <Typography className="check-out__tab-content">Thanh toán đơn hàng chỉ với một bước với:</Typography>
                  <div className="d-flex justify-content-center p-2">
                    <Button className="check-out__tab-content__social"><img src={facebook} alt="facebook" /></Button>
                    <Button className="check-out__tab-content__social"><img src={gmail} alt="gmail" /></Button>
                  </div>
                  <div className="d-flex justify-content-center mb-5">
                    <Login handleNext={this.handleNext} {...this.props}/>
                    <Order editButton />
                  </div>
                </div>
              )}
              {activeStep === 1 && (
                <div className="check-out__tab-content">
                  <Typography className="check-out__tab-content"></Typography>
                  <div className="d-flex justify-content-center mb-5">
                    <Address
                      {...this.props}
                      handleNext={this.handleNext}
                      addNew
                    />
                  </div>
                </div>
              )}
              {activeStep === 2 && (
                <div className="check-out__tab-content">
                  <Typography className="check-out__tab-content"></Typography>
                  <div className="d-flex justify-content-center mb-5">
                    <OrderAddress />
                    <Order />
                  </div>
                </div>
              )}
              <div className="d-flex flex-row-reverse mb-5">
                {activeStep === steps.length - 1 ?
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={this.handleNext}
                  >
                    Đặt hàng
                    </Button>
                  : ''
                }

              </div>
            </div>)
          }
        </div>
      </div>
    );
  }
}

CheckOut.propTypes = {};
export default withCookies(withStyles(styles)(CheckOut));
