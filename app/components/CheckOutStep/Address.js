import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Select from 'react-select';
import './styles.scss';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 20,
    width: '50%',
    margin: 20,
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
  textName: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 5,
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

class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerName: '',
      phoneNumber: '',
      addressNote: '',
      city: null,
      district: null,
      ward: null,
      created: false,
      addAddress: false,
      value: 0,
      isValid: false,
    };
  }

  handleChangeOption = (name, selectedOption) => {
    this.setState({ [name]: selectedOption });
    this.props.onChangeInput(name, selectedOption);
    if (name === 'city') {
      this.props.getListDistrict();
    }
    if (name === 'district') {
      this.props.getListWard();
    }
  };

  handleChange = name => event => {
    if (name === 'phoneNumber') {
      const re = /^[0-9\b]+$/;
      if (event.target.value === '' || re.test(event.target.value)) {
        this.setState({ phoneNumber: event.target.value });
      }
    } else {
      this.setState({ [name]: event.target.value });
    }
  };

  showAddAddress = () => {
    this.setState({
      addAddress: !this.state.addAddress,
    });
  };

  createNewAddress = () => {
    this.setState({
      addAddress: !this.state.addAddress,
      created: true,
    });
  };

  render() {
    const { classes, listCity, listDistrict, listWard, city, district, ward } = this.props;
    const cities = listCity.map(city => ({
      value: city.cityName,
      label: city.cityName,
    }));
    let districts = [];
    if (listDistrict) {
      districts = listDistrict.map(item => ({
        value: item.districtName,
        label: item.districtName,
      }));
    }

    let wards = [];
    if (listWard) {
      wards = listWard.map(item => ({
        value: item.wardName,
        label: item.wardName,
      }));
    }
    return (
      <div className="address">
        <div>Vui lòng chọn địa chỉ giao hàng có sẵn bên dưới</div>
        <div className="address__paper d-flex">
          <Paper className={classes.root}>
            <Typography className={classes.textName}>Nguyễn Thị Ngọc Dương</Typography>
            <Typography>Địa chỉ: Khu phố 6 phường Linh Trung quận Thủ Đức thành phố Hồ Chí Minh</Typography>
            <Typography>Số điện thoại: </Typography>
            <Button
              variant="contained"
              color="primary"
              className="mt-3 mr-2"
              onClick={this.props.handleNext}
            >
              Giao đến địa chỉ này
                </Button>
          </Paper>
          {this.state.created ?
            <Paper className={classes.root}>
              <Typography className={classes.textName}>{this.state.customerName}</Typography>
              <Typography>{`Địa chỉ: ${this.state.addressNote}, ${this.state.ward.value}, ${this.state.district.value}, ${this.state.city.value}`}</Typography>
              <Typography>{`Số điện thoại: ${this.state.phoneNumber}`}</Typography>
              <Button
                variant="contained"
                color="primary"
                className="mt-3 mr-2"
                onClick={this.props.handleNext}
              >
                Giao đến địa chỉ này
                  </Button>
            </Paper>
            : ''}
        </div>
        <div>
          <a href="#" onClick={this.showAddAddress} >
            Thêm địa chỉ mới?
          </a>
        </div>
        {this.state.addAddress && (
          <div className="address__add">
            <form>
              <TextField
                id="outlined-full-width"
                label="Họ và tên"
                helperText=""
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={this.handleChange('customerName')}
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
                onChange={this.handleChange('password')}
                type="password"
                helperText=""
                fullWidth
                hidden={this.props.addNew}
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
                helperText=""
                fullWidth
                value={this.state.phoneNumber}
                margin="normal"
                variant="outlined"
                onChange={this.handleChange('phoneNumber')}
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
                  value={this.state.selectedOption}
                  className={classes.select}
                  onChange={e => this.handleChangeOption('city', e)}
                  options={cities}
                  isClearable
                  placeholder="Tỉnh/Thành phố"
                  styles={style1}
                />
                <Select
                  value={this.state.selectedOption}
                  className={classes.select}
                  onChange={e => this.handleChangeOption('district', e)}
                  options={districts}
                  isDisabled={!this.state.city}
                  isClearable
                  placeholder="Quận/Huyện"
                  styles={style1}
                />
                <Select
                  value={this.state.selectedOption}
                  className={classes.select}
                  onChange={e => this.handleChangeOption('ward', e)}
                  options={wards}
                  isDisabled={!this.state.district}
                  isClearable
                  placeholder="Phường/Trị trấn"
                  styles={style1}
                />
              </div>
              <TextField
                id="outlined-full-width"
                className="login__form-field"
                label="Địa chỉ"
                fullWidth
                margin="normal"
                variant="outlined"
                rows="5"
                multiline
                onChange={this.handleChange('addressNote')}
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
              <Button className="mt-3 mr-2" onClick={this.showAddAddress}>Hủy bỏ</Button>
              {this.props.addNew ? (
                <Button
                  variant="contained"
                  color="primary"
                  className="mt-3"
                  onClick={this.createNewAddress}
                >
                  Thêm địa chỉ
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  className="mt-3"
                  type="submit"
                >
                  Đăng kí
                </Button>
              )}
            </form>
          </div>
        )}
      </div>
    );
  }
}

Address.propTypes = {
  addNew: PropTypes.bool,
};
export default withStyles(styles, { withTheme: true })(Address);
