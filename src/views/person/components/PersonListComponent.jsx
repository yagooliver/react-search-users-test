import React from 'react';
import PropTypes from 'prop-types';
import TableComponent from '../../../components/table/TableComponent';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import {
  ContainerListResult,
  ContainerListComponent,
  LoadGif
} from './styles';

const PersonListComponent = (props) => {
  
  return (
    <ContainerListComponent>
      <ContainerListResult>
        {props.persons.length ?(
          <React.Fragment>
            <div style={{display: 'block', marginTop: 20, marginBottom: 20}}>
            <PaginationComponent
              totalRecords={props.totalItems}
              pageNeighBours={props.page}
              pageLimit={props.size}
              totalPages={props.totalPage}
              onPageChanged={(data) => props.changePage(data.currentPage)}
            /></div>
            <TableComponent
              dataList={props.persons}
              headers={["Name", "Age"]}
            />
            </React.Fragment>)
        : (<LoadGif/>)}
      </ContainerListResult>
    </ContainerListComponent>
  )
}

PersonListComponent.propTypes = {
  persons: PropTypes.array.isRequired
}

export default PersonListComponent;