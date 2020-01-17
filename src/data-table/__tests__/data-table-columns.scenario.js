/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';

import {
  Unstable_StatefulDataTable,
  BooleanColumn,
  CategoricalColumn,
  DatetimeColumn,
  NumericalColumn,
  StringColumn,
} from '../index.js';

export const name = 'data-table-columns';

type RowDataT = [boolean, string, number, string, Date];

export const component = () => {
  const columns = [
    BooleanColumn({
      title: 'boolean-column',
      mapDataToValue: (data: RowDataT) => data[0],
    }),
    CategoricalColumn({
      title: 'categorical-column',
      mapDataToValue: (data: RowDataT) => data[1],
    }),
    NumericalColumn({
      title: 'numerical-column',
      mapDataToValue: (data: RowDataT) => data[2],
    }),
    StringColumn({
      title: 'string-column',
      mapDataToValue: (data: RowDataT) => data[3],
    }),
    DatetimeColumn({
      title: 'datetime-column',
      mapDataToValue: (data: RowDataT) => data[4],
    }),
  ];

  const rows = [
    {id: 1, data: [true, 'A', 2, 'one', new Date('2011-04-11T10:20:30Z')]},
    {id: 2, data: [false, 'B', 1, 'two', new Date('2012-05-12T11:21:31Z')]},
    {id: 3, data: [true, 'A', 4, 'three', new Date('2013-06-13T12:22:32Z')]},
    {id: 4, data: [false, 'A', 3, 'four', new Date('2014-07-14T13:23:33Z')]},
  ];

  return (
    <React.Fragment>
      <div style={{height: '600px', width: '1000px', marginBottom: '100px'}}>
        <Unstable_StatefulDataTable columns={columns} rows={rows} />
      </div>
    </React.Fragment>
  );
};
