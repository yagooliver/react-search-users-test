import {connect} from 'react-redux';
import PersonContainer from './components/PersonContainer';
import {
  loadPersons,
  changeQuery,
  loadQueries,
  changePage,
} from './action/actions';

const mapStateToProps = (state) => ({
  persons: state.person.persons,
  totalItems: state.person.totalItems,
  totalPage: state.person.totalPage,
  page: state.person.page,
  size: state.person.size,
  query: state.person.query,
  isFetching: state.person.isFetching
});

const mapDispatchToProps = (dispatch) => ({
  loadPersons: (page, size) => dispatch(loadPersons(page, size)),
  changeQuery: (item) => dispatch(changeQuery(item)),
  loadQueries: (query) => dispatch(loadQueries(query)),
  changePage: (currentPage) => dispatch(changePage(currentPage))
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonContainer);