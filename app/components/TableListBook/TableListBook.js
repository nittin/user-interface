import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import testImage from 'images/testImage.jpg';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Pagination from 'react-js-pagination';
import CircularProgress from '@material-ui/core/CircularProgress';

export default class TableListBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
    };
  }

  componentDidMount() {
    if (this.props.location) {
      const pathArr = this.props.location.pathname.split('/');
      const lastPath = pathArr[pathArr.length - 1];
      const searchKey = this.props.location.search.replace('?', '');
      this.props.onChangeSearchKey(searchKey);
      if (lastPath === 'bookName') {
        this.props.getBookByName();
      }
      if (lastPath === 'category') {
        this.props.getBookByCategory();
      }
      if (lastPath === 'author') {
        this.props.getBookByAuthor();
      }
      if (lastPath === 'publisher') {
        this.props.getBookByPublisher();
      }
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.location && newProps.location !== this.props.location) {
      const pathArr = newProps.location.pathname.split('/');
      const lastPath = pathArr[pathArr.length - 1];
      const searchKey = newProps.location.search.replace('?', '');
      this.props.onChangeSearchKey(searchKey);
      this.props.onChangePage(0);
      if (lastPath === 'bookName') {
        this.props.getBookByName();
      }
      if (lastPath === 'category') {
        this.props.getBookByCategory();
      }
      if (lastPath === 'author') {
        this.props.getBookByAuthor();
      }
      if (lastPath === 'publisher') {
        this.props.getBookByPublisher();
      }
    }
  }

  handlePageChange = pageNumber => {
    this.setState({ activePage: pageNumber });
    this.props.onChangePage(pageNumber - 1);
    if (this.props.location) {
      const pathArr = this.props.location.pathname.split('/');
      const lastPath = pathArr[pathArr.length - 1];
      if (lastPath === 'bookName') {
        this.props.getBookByName();
      }
      if (lastPath === 'category') {
        this.props.getBookByCategory();
      }
      if (lastPath === 'author') {
        this.props.getBookByAuthor();
      }
      if (lastPath === 'publisher') {
        this.props.getBookByPublisher();
      }
    }
  };

  render() {
    const { listBook } = this.props;
    const tableData = [];
    if (listBook && listBook.content.length > 0) {
      listBook.content.forEach(item => {
        tableData.push(
          <div className="table-list__container__item ">
            <Link to={`/book/${item.id}`}>
              <img src={item.linkImage} alt="images" />
              <div className="item-info">
                <p className="item-info__name">{item.name}</p>
                <div className="d-flex align-items-center">
                  <p className="item-info__price mr-auto">{item.price}</p>
                </div>
              </div>
            </Link>
          </div>,
        );
      });
    } else if (listBook && listBook.content.length === 0) {
      tableData.push(
        <div className="no-data">
          Không tìm thấy
        </div>,
      );
    }
    return (
      <div className="table-list">
        {this.props.location.search &&
          <Paper className="p-3 mb-2">KẾT QUẢ TÌM KIẾM CHO: {this.props.location.search.replace('?', '')}</Paper>}
        <div className="table-list__container">
          {this.props.loading.table && <CircularProgress
            variant="indeterminate"
            disableShrink
            size={50}
            thickness={4}
            className="table-list__container--process" />}
          <div className="table-list__container--wrap d-flex">{tableData}</div>
          <Pagination
            hideDisabled
            activePage={this.state.activePage}
            itemsCountPerPage={listBook && listBook.size}
            totalItemsCount={listBook && listBook.totalElements}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}
TableListBook.propTypes = {
  listBook: PropTypes.object,
  location: PropTypes.object,
  onChangePage: PropTypes.func,
  onChangeSearchKey: PropTypes.func,
  getBookByName: PropTypes.func,
  getBookByAuthor: PropTypes.func,
  getBookByCategory: PropTypes.func,
  getBookByPublisher: PropTypes.func,
  loading: PropTypes.object,
};
