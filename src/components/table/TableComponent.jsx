import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const TableComponent = ({dataList, headers}) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((it, key) => (
            <th key={key}><span style={{color:"#f0f0f0"}}>{it}</span></th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataList.map((data, i) => (
          <tr key={i}>
            {Object.keys(data).map((index, key)=>
              <td key={key}>{data[index]}</td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}


TableComponent.propTypes = {
  headers: PropTypes.array.isRequired,
  dataList: PropTypes.array.isRequired
}

export default TableComponent;