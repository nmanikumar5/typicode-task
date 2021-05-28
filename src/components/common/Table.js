import React from "react";
import styled from "styled-components";
import get from "lodash/get";
import { COLOR_CODES } from "../../constants";

const StyledTable = styled.table`
  width: 100%;
  caption-side: top;
  border: none;
  border-collapse: collapse;
  /* border-collapse: separate; */
  /* border-spacing: 5px 10px; */

  caption-side: bottom;
  /* empty-cell: show | hide;  */
  /* empty-cell is a property of table or the cells themselves */

  /* vertical-align: baseline | sub | super | text-top | 
                text-bottom | middle | top | bottom | 
                <percentage> | <length> */

thead {
    padding: 16px 10px 16px 0;
    background-color: ${COLOR_CODES.darkGray};
}
td,
  th {
    border: none;
    text-transform: capitalize;
    background-color: ${COLOR_CODES.darkGray};
    color:${COLOR_CODES.white};
  } 

  td {
    max-width: 160px;
    overflow: hidden;
    text-overflow:ellipsis;
    width: 150px;
    padding: 16px 10px 16px 0;
    white-space: nowrap;
  }
  tbody tr {
      background-color: ${COLOR_CODES.darkGray};
      color: ${COLOR_CODES.white};
      border-bottom: 1px solid ${COLOR_CODES.black};
    }
    :hover {
      background-color: ${COLOR_CODES.border};
       color: ${COLOR_CODES.cyan}
    }
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;

const getColumnProps = (tdHeads, title) => tdHeads[title];

const Table = ({ tdHeads, data }) => (
  <StyledTable>
    <thead>
      <tr>
        {Object.keys(tdHeads).map((title, index) => {
          const colProps = getColumnProps(tdHeads, title);
          return (
            <th
              align={get(colProps, "align", "left")}
              style={{
                width: get(colProps, "width"),
                paddingLeft: 10
              }}
              key={`t-head-${index}`}
            >
              {title}
            </th>
          );
        })}
      </tr>
    </thead>
    <tbody>
      {data.map((item, dataIdx) => (
        <tr key={dataIdx}>
          {Object.keys(tdHeads).map((title, index) => {
            const colProps = getColumnProps(tdHeads, title);
            const columnVal = get(item, colProps.field);
            return (
              <td
                align={get(colProps, "align", "left")}
                style={{
                  width: get(colProps, "width"),
                  paddingLeft: 10,
                  fontSize: 18
                }}
                key={`t-td-${index}`}
              >
                {colProps?.format ? colProps.format(columnVal) : columnVal}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  </StyledTable >
);

export default Table;
