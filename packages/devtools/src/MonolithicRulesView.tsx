import beautify from 'js-beautify';
import * as React from 'react';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';

import { DARK_THEME_COLOR_TOKENS, LIGHT_THEME_COLOR_TOKENS } from './colorTokens';
import { HighlightedCSS } from './HighlightedCSS';
import { useThemeContext } from './ThemeContext';
import { useViewContext } from './ViewContext';
import type { MonolithicRules, RuleDetail } from './types';

const formatCSS = (css: string) => {
  const formatted = beautify.css_beautify(`{${css}}`); // add {} for formatting
  return formatted.slice(1, -1).trim(); // remove {}
};

const INDENT = '10px';

const useSingleRuleStyles = makeStyles({
  overriden: {
    textDecorationLine: 'line-through',
  },
  indent: {
    marginLeft: INDENT,
  },
  highlighted: {
    outlineColor: 'orangered',
    outlineStyle: 'dashed',
    outlineWidth: '1px',
  },
  className: {
    display: 'inline-block',
    textDecorationLine: 'none',
    marginLeft: '5px',
    color: LIGHT_THEME_COLOR_TOKENS.cssSelector,
  },
  classNameDark: {
    color: DARK_THEME_COLOR_TOKENS.cssSelector,
  },
});

const SingleRuleView: React.FC<{ rule: RuleDetail; indent?: boolean }> = ({ rule, indent }) => {
  const { highlightedClass, setHighlightedClass } = useViewContext();

  const [showClassName, setShowClassName] = React.useState(false);

  const handleClick = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    if (rule.overriddenBy) {
      setHighlightedClass(highlighted => (highlighted === rule.overriddenBy ? '' : rule.overriddenBy!));
    } else {
      setHighlightedClass('');
    }
    setShowClassName(v => !v);
  };

  const classes = useSingleRuleStyles();
  const rootClassName = mergeClasses(
    rule.overriddenBy && classes.overriden,
    indent && classes.indent,
    highlightedClass === rule.className && classes.highlighted,
  );
  const theme = useThemeContext();
  const className = mergeClasses(classes.className, theme === 'dark' && classes.classNameDark);

  return (
    <div onClick={handleClick} className={rootClassName}>
      <HighlightedCSS code={formatCSS(rule.css)} />
      {showClassName && <pre className={className}>{rule.className}</pre>}
    </div>
  );
};

const useMonolithicRulesStyles = makeStyles({
  atRulesIndent: {
    marginLeft: INDENT,
  },
  lineSpacing: {
    ...shorthands.margin('5px', 0),
  },
  noLineSpacing: {
    ...shorthands.margin(0),
  },
});

type MonolithicRulesViewProps = {
  rules: MonolithicRules;
  // specify if there should be spacing between rules with different selectors
  noLineSpacing?: boolean;
};

export const MonolithicRulesView: React.FC<MonolithicRulesViewProps> = props => {
  const { rules, noLineSpacing } = props;
  const classes = useMonolithicRulesStyles();

  return (
    <>
      {Object.entries(rules).map(([selector, rules]) => {
        return (
          <div key={selector} className={noLineSpacing ? classes.noLineSpacing : classes.lineSpacing}>
            {selector && <HighlightedCSS code={`${selector} {`} />}
            {Array.isArray(rules) ? (
              rules.map(rule => <SingleRuleView key={rule.css} rule={rule} indent={!!selector} />)
            ) : (
              <div className={classes.atRulesIndent}>
                <MonolithicRulesView rules={rules} noLineSpacing />
              </div>
            )}
            {selector && <HighlightedCSS code={`}`} />}
          </div>
        );
      })}
    </>
  );
};
