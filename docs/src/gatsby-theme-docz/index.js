import React from 'react';
import { theme, useConfig, ComponentsProvider } from 'docz';
import { Styled, ThemeProvider } from 'theme-ui';
import defaultTheme from 'gatsby-theme-docz/src/theme';
import components from 'gatsby-theme-docz/src/components';

const map = {
  ...components

  // normally, we would provide custom handlers for these tags, but this isn't
  //  necessary to reproduce the issue so CodeBlock is not included
  // pre: CodeBlock,
  // code: CodeBlock
};

const Theme = ({ children }) => {
  const config = useConfig();
  return (
    <ThemeProvider theme={config.themeConfig}>
      <ComponentsProvider components={map}>
        <Styled.root>{children}</Styled.root>
      </ComponentsProvider>
    </ThemeProvider>
  );
};

export default theme(defaultTheme)(Theme);
