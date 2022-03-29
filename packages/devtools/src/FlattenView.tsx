import * as React from 'react';
import { makeStaticStyles, makeStyles, mergeClasses, shorthands } from '@griffel/react';

import { DARK_THEME_COLOR_TOKENS } from './colorTokens';
import { SlotCSSRules } from './SlotCSSRules';
import { useThemeContext } from './ThemeContext';
import { filterSlots, getRulesBySlots } from './utils';
import { ViewContext } from './ViewContext';

import type { DebugResult } from '@griffel/core';

const useStyles = makeStyles({
  root: {
    paddingBottom: '10px',
  },
  input: {
    width: 'calc(100% - 20px)',
    color: 'inherit',
    ...shorthands.margin('5px'),
    ...shorthands.padding('2px'),
    ...shorthands.borderRadius('2px'),
    ...shorthands.border('1px', 'solid'),
  },
  inputDark: {
    backgroundColor: DARK_THEME_COLOR_TOKENS.background,
  },
  info: {
    ...shorthands.margin(0, '5px'),
  },
});

const useStaticStyles = makeStaticStyles({
  pre: {
    fontFamily: 'Menlo, Consolas, "dejavu sans mono", monospace',
    margin: 'initial',
    whiteSpace: 'normal',
    fontSize: '11px',
    lineHeight: '14px',
  },
});

export const FlattenView = ({ debugResultRoot }: { debugResultRoot: DebugResult }) => {
  const slots = React.useMemo(() => getRulesBySlots(debugResultRoot), [debugResultRoot]);

  useStaticStyles();

  const theme = useThemeContext();
  const classes = useStyles();
  const inputClassName = mergeClasses(classes.input, theme === 'dark' && classes.inputDark);

  const [searchTerm, setSearchTerm] = React.useState('');
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredSlots = React.useMemo(() => filterSlots(slots, searchTerm), [slots, searchTerm]);
  const [highlightedClass, setHighlightedClass] = React.useState('');
  const contextValue = React.useMemo(() => ({ highlightedClass, setHighlightedClass }), [highlightedClass]);

  return (
    <div className={classes.root}>
      <input
        type="text"
        placeholder="filter"
        className={inputClassName}
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className={classes.info}>direction: {debugResultRoot.direction}</div>
      <ViewContext.Provider value={contextValue}>
        {filteredSlots.map(({ slot, rules }) => (
          <SlotCSSRules key={slot} slot={slot} atomicRules={rules} />
        ))}
      </ViewContext.Provider>
    </div>
  );
};
