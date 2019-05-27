import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import facebook from 'images/facebook.png';
import gmail from 'images/gmail.png';
import { ShoppingCart, Search } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import DialogContent from '@material-ui/core/DialogContent';
import './styles.scss';
// import LoginPage from 'containers/App/LoginPage';
const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  // style for font size
  resize: {
    fontSize: 14,
    marginTop: 0,
    marginBottom: 0,
  },
};
class HeaderMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: '',
      search: 'bookName',
      open: false,
    };
  }

  onChangeInputSearch = e => {
    const searchKey = e.target.value;
    this.setState({
      searchKey,
    });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push({
      search: `${this.state.searchKey}`,
    });
  };

  handleClose = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;
    const currencies = [
      {
        value: 'bookName',
        label: 'Tên sách',
      },
      {
        value: 'category',
        label: 'Thể loại',
      },
      {
        value: 'author',
        label: 'Tác giả',
      },
      {
        value: 'publisher',
        label: 'Nhà xuất bản',
      },
    ];
    return (
      <div className="header-main mb-3">
        <div className="row d-flex align-items-center">
          <div className="col-lg-3">
            <Link to="/">DUONG SOO KIM</Link>
          </div>
          <div className="col-lg-6">
            <form onSubmit={this.handleSubmit}>
              <div className="d-flex header-main__search">
                <input
                  id="standard-name"
                  className="input-search"
                  value={this.state.searchKey}
                  placeholder="Nhập sản phẩm cần tìm kiếm..."
                  onChange={this.onChangeInputSearch}
                  fullWidth
                />
                <TextField
                  id="standard-select"
                  select
                  className="fiter-key"
                  value={this.state.search}
                  onChange={this.handleChange('search')}
                  margin="normal"
                  InputProps={{
                    classes: {
                      input: classes.resize,
                    },
                  }}
                >
                  {currencies.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <button className="ml-2" type="submit">
                  <Link
                    to={{
                      pathname: `/list-books/${this.state.search}`,
                      search: `${this.state.searchKey}`,
                    }}
                  >
                    <Search />
                  </Link>
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-3 d-flex justify-content-center">
            <div className="d-flex align-items-center p-2">
              <Link className="link-cart" to="/check-out/cart">
                <ShoppingCart />
              </Link>
              <div className="badge-number">5</div>
            </div>
            <div className="shop-bag d-flex justify-content-center p-2">
              <button onClick={this.handleClose}>ĐĂNG NHẬP</button>
            </div>
          </div>
        </div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="simple-dialog-title"
          className="dialog"
        >
          <DialogTitle id="simple-dialog-title">
            ĐĂNG NHẬP TÀI KHOẢN
          </DialogTitle>
          <DialogContent>
            <div className="check-out__tab-content">
              <Typography className="check-out__tab-content">
                Thanh toán đơn hàng chỉ với một bước với:
              </Typography>
              <div className="d-flex justify-content-center p-2">
                <Button className="check-out__tab-content__social">
                  <img src={facebook} alt="facebook" />
                </Button>
                <Button className="check-out__tab-content__social">
                  <img src={gmail} alt="gmail" />
                </Button>
              </div>
              <Typography className="check-out__tab-content">Hoặc</Typography>
              <div className="d-flex justify-content-center mb-5">
                {/* <LoginPage /> */}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

HeaderMain.propTypes = {
  classes: PropTypes.object,
};
export default withStyles(styles)(HeaderMain);
