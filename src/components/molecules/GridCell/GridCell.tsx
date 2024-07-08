import React from 'react';
import type GridCellProps from './GridCellProps.type';

export default function GridCell({ i, k, isCellAlive, handleCellClick }: GridCellProps) {

  // Return the correct background color based on grid cellvalue
  const cellColor = isCellAlive ? '#333' : '#fff';

    return (
        <div
        onClick={() => handleCellClick(i, k)}
        role='gridcell'
        style={{
          width: 20,
          height: 20,
          backgroundColor: cellColor,
          border: 'solid 1px grey',
        }}
      />
    )
}