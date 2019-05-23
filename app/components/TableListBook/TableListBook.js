import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import testImage from 'images/testImage.jpg';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Pagination from 'react-js-pagination';

export default class TableListBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
    };
  }

  handlePageChange = pageNumber => {
    this.setState({ activePage: pageNumber });
    this.props.onChangePage(pageNumber - 1);
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
    }
    return (
      <div className="table-list">
        {this.props.location.search && <Paper className="p-3 mb-2">KẾT QUẢ TÌM KIẾM CHO: ...</Paper>}
        <div className="table-list__container">
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
};
