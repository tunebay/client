import React, { ReactNode } from 'react';
import { withRouter, SingletonRouter } from 'next/router';

import styled, { ThemeProvider, theme, withProps } from '../lib/theme';

import { OgMetaType } from '../@types';

import Meta from './Meta';
import Header from './Header';
import AuthModal from './AuthModal';

type Props = {
  children: ReactNode;
  title: string;
  ogMeta?: OgMetaType;
} & { router: SingletonRouter };

class Layout extends React.Component<Props> {
  render() {
    const { children, router, title } = this.props;
    const headerVisible = router.pathname !== '/';

    return (
      <ThemeProvider theme={theme}>
        <StyledLayout headerVisible={headerVisible}>
          <Meta title={title} />
          <AuthModal />
          <Header visible={headerVisible} />
          {children}
        </StyledLayout>
      </ThemeProvider>
    );
  }
}

// exports

export const Grid = withProps<{ width?: number }>()(styled.div)`
  max-width: ${props => (props.width ? `${props.width / 10}rem` : '123rem')};

  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Section = styled.section`
  width: 100%;
  padding: 0 3rem;
  margin-bottom: 6rem;

  text-align: center;
`;

// private

const StyledLayout = withProps<{ headerVisible: boolean }>()(styled.div)`
  padding-top: ${props => (props.headerVisible ? props.theme.headerHeight : '0')};

  width: 100%;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
`;

export default withRouter(Layout);
