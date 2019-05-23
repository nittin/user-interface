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

class OrderAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { classes, theme } = this.props;
    return (
      <div className="order-address">
        <div className="order-address__paper">
          <Paper className={classes.root}>
            <Typography className={classes.textName}>Nguyễn Thị Ngọc Dương</Typography>
            <Typography>Địa chỉ: Khu phố 6 phường Linh Trung quận Thủ Đức thành phố Hồ Chí Minh</Typography>
            <Typography>Số điện thoại</Typography>
          </Paper>
        </div>
      </div>
    );
  }
}

OrderAddress.propTypes = {};
export default withStyles(styles, { withTheme: true })(OrderAddress);
