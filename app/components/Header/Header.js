import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';
import banner from '../../images/banner.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { listCategory, listAuthor, listPublisher } = this.props;
    const categories = [];
    const authors = [];
    const publishers = [];
    if (listCategory && listCategory.content.length > 0) {
      listCategory.content.forEach(item => {
        categories.push(
          <Link to={`/list-books/category?${item.name}`}>
            <p className="dropdown-item">{item.name}</p></Link>
        );
      });
    }
    if (listPublisher && listPublisher.content.length > 0) {
      listPublisher.content.forEach(item => {
        publishers.push(
          <Link to={`/list-books/publisher?${item.publisherName}`}>
            <p className="dropdown-item">{item.publisherName}</p></Link>);
      });
    }
    if (listAuthor && listAuthor.content.length > 0) {
      listAuthor.content.forEach(item => {
        authors.push(
          <Link to={`/list-books/author?${item.authorName}`}>
            <p className="dropdown-item">{item.authorName}</p></Link>);
      });
    }
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark mb-3">
        <p class="navbar-brand">TOP 10</p>
        <ul className="navbar-nav">
          <li className="nav-item dropdown ml-5">
            <a className="nav-link dropdown-toggle" href={null} id="navbardrop" data-toggle="dropdown">
              TÁC GIẢ
              </a>
            <div className="dropdown-menu">
              {authors}
            </div>
          </li>
          <li className="nav-item dropdown ml-5">
            <a className="nav-link dropdown-toggle" href={null} id="navbardrop" data-toggle="dropdown">
              NHÀ XUẤT BẢN
              </a>
            <div className="dropdown-menu">
              {publishers}
            </div>
          </li>
          <li className="nav-item dropdown ml-5">
            <a className="nav-link dropdown-toggle" href={null} id="navbardrop" data-toggle="dropdown">
              THỂ LOẠI
              </a>
            <div className="dropdown-menu">
              {categories}
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

Header.propTypes = {
  listCategory: PropTypes.func,
  listPublisher: PropTypes.func,
  listAuthor: PropTypes.func,
};
export default Header;
