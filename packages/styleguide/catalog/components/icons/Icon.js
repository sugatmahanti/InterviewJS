import css from "styled-components";
import React from "react";
import { string } from "prop-types";

import { font, setType } from "../../../utils";

require("./iconfont/style.css");

const IconEl = css.i`
  ${({ size }) => setType(size)};
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: ${font.ico};
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  line-height: 1em !important;
  speak: none;
  text-transform: none;
`;

const Icon = (props) => <IconEl {...props} className={`icon-${props.name} `} />;

Icon.propTypes = {
  name: string.isRequired,
  size: string
};

Icon.defaultProps = {
  size: "m"
};

export default Icon;
