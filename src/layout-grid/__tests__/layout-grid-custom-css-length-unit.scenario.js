/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import React from 'react';
import {Grid, Cell} from '../index.js';
import Inner from './inner.js';

export const name = 'layout-grid-custom-css-length-unit';

export function component() {
  return (
    <>
      {/* A compact twelve column grid. */}
      <Grid gridUnit="em" gridGutters={[1, 2, 2]} gridMargins={[1, 2, 4]}>
        <Cell>
          <Inner>1</Inner>
        </Cell>
        <Cell>
          <Inner>2</Inner>
        </Cell>
        <Cell>
          <Inner>3</Inner>
        </Cell>
        <Cell>
          <Inner>4</Inner>
        </Cell>
        <Cell>
          <Inner>5</Inner>
        </Cell>
        <Cell>
          <Inner>6</Inner>
        </Cell>
        <Cell>
          <Inner>7</Inner>
        </Cell>
        <Cell>
          <Inner>8</Inner>
        </Cell>
        <Cell>
          <Inner>9</Inner>
        </Cell>
        <Cell>
          <Inner>10</Inner>
        </Cell>
        <Cell>
          <Inner>11</Inner>
        </Cell>
        <Cell>
          <Inner>12</Inner>
        </Cell>
      </Grid>
    </>
  );
}
