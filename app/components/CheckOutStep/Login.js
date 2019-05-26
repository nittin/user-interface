import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from 'react-select';

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
const style1 = {
  control: (base, state) => ({
    ...base,
    border: state.isFocused ? '#3f51b5' : 'cccccc',
    // This line disable the blue border
    boxShadow: state.isFocused ? '0 0 0 2px #3f51b5' : '#000000',
  }),
};
const suggestions = [
  { label: 'Afghanistan' },
  { label: 'Aland Islands' },
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label,
}));

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmit: false,
      value: 0,
      city: null,
      district: null,
      ward: null,
      userName: null,
      password: null,
      phoneNumber: null,
      address: null,
    };
  }
  componentDidMount() {

    console.log('hi');
  }

  handleChangeOption = (name, selectedOption) => {
    this.setState({ [name]: selectedOption });
  };

  handleChangeText = name => event => {
    this.setState({ [name]: event.target.value });
    this.props.onChangeInput(name, event.target.value);
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // this.props.handleNext();
    this.props.login();
    if(this.props.loginSuccess){
      this.props.getUserInfo();
    }
    console.log('tao day ne');
    this.setState({
      isSubmit: true,
    });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className="login">
        <Paper className={classes.root}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            className="login__tab"
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Đăng nhập" />
            <Tab label="Đăng kí" />
          </Tabs>
        </Paper>
        {value === 0 && (
          <div className="pt-3">
            <form onSubmit={this.handleSubmit}>
              <TextField
                error={this.state.isSubmit && !this.state.userName}
                id="outlined-full-width"
                label="Tên đăng nhập"
                value={this.state.userName}
                onChange={this.handleChangeText('userName')}
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                  },
                }}
                InputProps={{
                  classes: {
                    input: classes.inputPadding,
                    root: classes.index,
                  },
                }}
              />
              <div
                className="error-message"
                hidden={
                  this.state.userName ||
                  (!this.state.isSubmit && !this.state.userName)
                }
              >
                Vui lòng điền thông tin
              </div>
              <TextField
                error={this.state.isSubmit && !this.state.password}
                id="outlined-full-width"
                label="Mật khẩu"
                type="password"
                value={this.state.password}
                onChange={this.handleChangeText('password')}
                helperText=""
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                  },
                }}
                InputProps={{
                  classes: {
                    input: classes.inputPadding,
                  },
                }}
              />
              <div
                className="error-message"
                hidden={
                  this.state.password ||
                  (!this.state.isSubmit && !this.state.password)
                }
              >
                Vui lòng điền thông tin
              </div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="mt-3"
              >
                Đăng nhập
              </Button>
            </form>
          </div>
        )}
        {value === 1 && (
          <div className="pt-3">
            <form>
              <TextField
                id="outlined-full-width"
                label="Tên đăng nhập"
                value={this.state.userName}
                onChange={this.handleChangeText('userName')}
                helperText=""
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                  },
                }}
                InputProps={{
                  classes: {
                    input: classes.inputPadding,
                  },
                }}
              />
              <TextField
                id="outlined-full-width"
                label="Mật khẩu"
                value={this.state.password}
                onChange={this.handleChangeText('password')}
                type="password"
                helperText=""
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                  },
                }}
                InputProps={{
                  classes: {
                    input: classes.inputPadding,
                  },
                }}
              />
              <TextField
                id="outlined-full-width"
                label="Số điện thoại"
                value={this.state.phoneNumber}
                onChange={this.handleChangeText('phoneNumber')}
                helperText=""
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                  },
                }}
                InputProps={{
                  classes: {
                    input: classes.inputPadding,
                  },
                }}
              />
              <div className="d-flex justify-content-between">
                <Select
                  value={this.state.city}
                  className={classes.select}
                  onChange={e => this.handleChangeOption('city', e)}
                  options={suggestions}
                  isClearable
                  placeholder="Tỉnh/Thành phố"
                  styles={style1}
                />
                <Select
                  value={this.state.district}
                  className={classes.select}
                  onChange={e => this.handleChangeOption('district', e)}
                  options={suggestions}
                  isClearable
                  isDisabled={null}
                  placeholder="Quận/Huyện"
                  styles={style1}
                />
                <Select
                  value={this.state.ward}
                  className={classes.select}
                  onChange={e => this.handleChangeOption('ward', e)}
                  options={suggestions}
                  isClearable
                  placeholder="Phường/Trị trấn"
                  styles={style1}
                />
              </div>
              <TextField
                id="outlined-full-width"
                className="login__form-field"
                label="Địa chỉ"
                value={this.state.address}
                onChange={this.handleChangeText('address')}
                helperText=""
                fullWidth
                margin="normal"
                variant="outlined"
                rows="5"
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                  },
                }}
                InputProps={{
                  multiline: { multiline: true },
                  classes: {
                    input: classes.inputPadding,
                  },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                className="mt-3"
                type="submit"
              >
                Đăng kí
              </Button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

Login.propTypes = {};
export default withStyles(styles, { withTheme: true })(Login);
