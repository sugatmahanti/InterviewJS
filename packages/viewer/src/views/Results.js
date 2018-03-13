/* eslint react/forbid-prop-types: 0 */
import css from "styled-components";
import React, { Component } from "react";
import { object, shape, string } from "prop-types";

import {
  Action,
  Actionbar,
  Container,
  PageParagraph,
  PageSubtitle,
  Separator,
  color,
  setSpace
} from "interviewjs-styleguide";

import { Cover, Topbar } from "../partials";

const Page = css.div`
  background: ${color.black};
  color: ${color.white};
  min-height: 100vh;
  min-width: 100vw;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const PageHead = css(Container)`
  ${setSpace("pbl")};
  width: 100%;
`;

const PageBody = css(Container)`
  ${setSpace("phl")};
  ${setSpace("pbl")};
  width: 100%;
`;

const PageFoot = css(Container)`
  ${setSpace("phl")};
  ${setSpace("pbl")};
`;

const Aside = css(PageParagraph)`
  color: ${color.flareHD};
`;

export default class ResultsView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { story } = this.props;
    return [
      <Topbar
        handleDetails={() => this.props.router.push(`/details`)}
        handleBack={() => this.props.router.push(`/poll`)}
        key="topbar"
      />,
      <Page key="page">
        <PageHead flex={[0, 1, `${100 / 2}%`]}>
          <Cover image={story.cover} />
        </PageHead>
        <PageBody limit="m" flex={[1, 0, `${100 / 4}%`]}>
          <Container limit="x">
            <PageSubtitle typo="h4">Results</PageSubtitle>
            <Separator size="m" silent />
            <Aside typo="p3">Aside</Aside>
          </Container>
        </PageBody>
        <PageFoot limit="m" flex={[1, 0, `${100 / 4}%`]}>
          <Actionbar>
            <Action
              fixed
              onClick={() => this.props.router.push(`/interviewees`)}
              primary
            >
              Meet your interviewees
            </Action>
          </Actionbar>
        </PageFoot>
      </Page>
    ];
  }
}

ResultsView.propTypes = {
  router: object,
  story: shape({
    title: string
  })
};

ResultsView.defaultProps = {
  router: null,
  story: {}
};