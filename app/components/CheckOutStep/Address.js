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
const suggestions = [
  { label: 'Afghanistan' },
  { label: 'Aland Islands' },
  { label: 'Albania' },
  { label: 'Algeria' },
  { label: 'American Samoa' },
  { label: 'Andorra' },
  { label: 'Angola' },
  { label: 'Anguilla' },
  { label: 'Antarctica' },
  { label: 'Antigua and Barbuda' },
  { label: 'Argentina' },
  { label: 'Armenia' },
  { label: 'Aruba' },
  { label: 'Australia' },
  { label: 'Austria' },
  { label: 'Azerbaijan' },
  { label: 'Bahamas' },
  { label: 'Bahrain' },
  { label: 'Bangladesh' },
  { label: 'Barbados' },
  { label: 'Belarus' },
  { label: 'Belgium' },
  { label: 'Belize' },
  { label: 'Benin' },
  { label: 'Bermuda' },
  { label: 'Bhutan' },
  { label: 'Bolivia, Plurinational State of' },
  { label: 'Bonaire, Sint Eustatius and Saba' },
  { label: 'Bosnia and Herzegovina' },
  { label: 'Botswana' },
  { label: 'Bouvet Island' },
  { label: 'Brazil' },
  { label: 'British Indian Ocean Territory' },
  { label: 'Brunei Darussalam' },
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label,
}));

class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addAddress: false,
      value: 0,
      value: 0,
      city: null,
      district: null,
      ward: null,
    };
  }

  handleChangeOption = (name, selectedOption) => {
    this.setState({ [name]: selectedOption });
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  showAddAddress = () => {
    this.setState({
      addAddress: !this.state.addAddress,
    });
  };

  render() {
    const { classes, theme } = this.props;
    const { value } = this.state;
    return (
      <div className="address">
        <div>Vui lòng chọn địa chỉ giao hàng có sẵn bên dưới</div>
        <div className="address__paper d-flex">
          <Paper className={classes.root}>
            <Typography className={classes.textName}>Nguyễn Thị Ngọc Dương</Typography>
            <Typography>Địa chỉ: Khu phố 6 phường Linh Trung quận Thủ Đức thành phố Hồ Chí Minh</Typography>
            <Typography>Số điện thoại</Typography>
            <Button variant="contained" color="primary" className="mt-3 mr-2">Giao đến địa chỉ này</Button>
            <Button className="mt-3">Chỉnh sửa</Button>
          </Paper>
          <Paper className={classes.root}>
            <Typography className={classes.textName}>Nguyễn Thị Ngọc Dương</Typography>
            <Typography>Địa chỉ</Typography>
            <Typography>Số điện thoại</Typography>
            <Button variant="contained" color="primary" className="mt-3 mr-2">Giao đến địa chỉ này</Button>
            <Button className="mt-3">Chỉnh sửa</Button>
          </Paper>
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
                  value={this.state.selectedOption}
                  className={classes.select}
                  onChange={e => this.handleChangeOption('city', e)}
                  options={suggestions}
                  isClearable
                  placeholder="Tỉnh/Thành phố"
                  styles={style1}
                />
                <Select
                  value={this.state.selectedOption}
                  className={classes.select}
                  onChange={e => this.handleChangeOption('district', e)}
                  options={suggestions}
                  isClearable
                  placeholder="Quận/Huyện"
                  styles={style1}
                />
                <Select
                  value={this.state.selectedOption}
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
                fullWidth
                margin="normal"
                variant="outlined"
                rows="5"
                multiline
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
              <Button variant="contained" color="primary" className="mt-3">Thêm địa chỉ</Button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

Address.propTypes = {};
export default withStyles(styles, { withTheme: true })(Address);
