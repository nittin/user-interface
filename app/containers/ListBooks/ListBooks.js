import React from 'react';
import PropTypes from 'prop-types';
import TableListBook from 'components/TableListBook/TableListBook';
import Paper from '@material-ui/core/Paper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import * as actions from './actions';
import './styles.scss';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});
class ListBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    if (this.props.match.params.options === 'bookNew') {
      this.props.onChangeSort('desc', 'id');
      this.props.onChangePage(0);
      this.props.getBookByName();
    }
  }

  handleChangeCategory = event => {
    this.props.onChangeFilter('categoryFilter', event.target.value);
  };

  handleChangeAuthor = event => {
    this.props.onChangeFilter('authorFilter', event.target.value);
  };

  handleChangePublisher = event => {
    this.props.onChangeFilter('publisherFilter', event.target.value);
  };

  render() {
    const {
      classes,
      listCategory,
      listAuthor,
      listPublisher,
      listBook,
    } = this.props;
    const categoryRadio = [];
    const publisherRadio = [];
    const authorRadio = [];
    if (listCategory && listCategory.content.length > 0) {
      listCategory.content.forEach(item => {
        categoryRadio.push(
          <FormControlLabel
            value={item.name}
            control={<Radio />}
            label={item.name}
          />,
        );
      });
    }
    if (listAuthor && listAuthor.content.length > 0) {
      listAuthor.content.forEach(item => {
        authorRadio.push(
          <FormControlLabel
            value={item.authorName}
            control={<Radio />}
            label={item.authorName}
          />,
        );
      });
    }
    if (listPublisher && listPublisher.content.length > 0) {
      listPublisher.content.forEach(item => {
        publisherRadio.push(
          <FormControlLabel
            value={item.publisherName}
            control={<Radio />}
            label={item.publisherName}
          />,
        );
      });
    }
    return (
      <div className="list-book d-flex">
        <div className="list-book__filter mr-3">
          <Paper>
            <div className="list-book__filter__header d-flex  align-items-center">
              BỘ LỌC
            </div>
          </Paper>
          <div className="list-book__filter__action pt-2">
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Thể loại</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <FormControl
                  component="fieldset"
                  className={classes.formControl}
                >
                  <RadioGroup
                    aria-label="Gender"
                    name="gender1"
                    className={classes.group}
                    value={this.state.value}
                    onChange={this.handleChangeCategory}
                  >
                    {categoryRadio}
                  </RadioGroup>
                </FormControl>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Nhà xuất bản</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <FormControl
                  component="fieldset"
                  className={classes.formControl}
                >
                  <RadioGroup
                    aria-label="Gender"
                    name="gender1"
                    className={classes.group}
                    value={this.state.value}
                    onChange={this.handleChangePublisher}
                  >
                    {publisherRadio}
                  </RadioGroup>
                </FormControl>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Tác giả</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <FormControl
                  component="fieldset"
                  className={classes.formControl}
                >
                  <RadioGroup
                    aria-label="Gender"
                    name="gender1"
                    className={classes.group}
                    value={this.state.value}
                    onChange={this.handleChangeAuthor}
                  >
                    {authorRadio}
                  </RadioGroup>
                </FormControl>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </div>
        <TableListBook
          {...this.props}
          listBook={listBook}
          location={this.props.location}
          onChangePage={this.props.onChangePage}
        />
      </div>
    );
  }
}

ListBooks.propTypes = {
  classes: PropTypes.object,
  getAllCategory: PropTypes.func,
  listCategory: PropTypes.object,
  onChangeFilter: PropTypes.object,
  getAllAuthor: PropTypes.func,
  getAllPublisher: PropTypes.func,
  getBookByName: PropTypes.func,
  listAuthor: PropTypes.object,
  listPublisher: PropTypes.object,
  listBook: PropTypes.object,
  match: PropTypes.any,
  onChangeSort: PropTypes.func,
  location: PropTypes.any,
  onChangePage: PropTypes.func,
};
export default withStyles(styles)(ListBooks);
export function mapDispatchToProps(dispatch) {
  return {
    onChangeSort: (sortType, sortField) => dispatch(actions.onChangeSort(sortType, sortField)),
    onChangePage: page => {
      dispatch(actions.onChangePage(page));
    },
    onChangeSearchKey: searchKey => dispatch(actions.onChangeSearchKey(searchKey)),
    getAllCategory: () => dispatch(actions.getAllCategory()),
    getAllAuthor: () => dispatch(actions.getAllAuthor()),
    getAllPublisher: () => dispatch(actions.getAllPublisher()),
    onChangeFilter: (name, filter) => dispatch(actions.onChangeFilter(name, filter)),
    getBookByName: () => dispatch(actions.getBookByName()),
    getBookByAuthor: () => dispatch(actions.getBookByAuthor()),
    getBookByPublisher: () => dispatch(actions.getBookByPublisher()),
    getBookByCategory: () => dispatch(actions.getBookByCategory()),
  };
}
