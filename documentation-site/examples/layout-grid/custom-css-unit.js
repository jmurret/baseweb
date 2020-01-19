// @flow

import * as React from 'react';
import {
  useStyletron,
  createTheme,
  lightThemePrimitives,
  ThemeProvider,
} from 'baseui';
import {Grid, Cell} from 'baseui/layout-grid';
const themeWithCustomCSSUnits = createTheme(
  {
    ...lightThemePrimitives,
  },
  {
    grid: {
      unit: 'em',
      gutters: [1, 2, 2],
      margins: [1, 2, 4],
    },
  },
);
export default () => (
  <ThemeProvider theme={themeWithCustomCSSUnits}>
    <Outer>
      <Grid>
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
    </Outer>
  </ThemeProvider>
);

const Outer: React.StatelessFunctionalComponent<{
  children: React.Node,
}> = ({children}) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        background: theme.colors.accent100,
      })}
    >
      {children}
    </div>
  );
};

const Inner: React.StatelessFunctionalComponent<{
  children: React.Node,
}> = ({children}) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: theme.colors.accent200,
        color: theme.colors.accent700,
        padding: '.25rem',
      })}
    >
      {children}
    </div>
  );
};
