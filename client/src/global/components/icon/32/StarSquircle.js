import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export default class StarSquircle extends Component {
  static propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    stroke: PropTypes.string,
    fill: PropTypes.string,
    svgProps: PropTypes.object
  };

  static defaultProps = {
    className: "",
    size: "inherit",
    stroke: "currentColor",
    fill: "currentColor",
    svgProps: {}
  };

  get defaultHeight() {
    return 32;
  }

  get defaultWidth() {
    return 32;
  }

  get size() {
    return this.props.size;
  }

  get width() {
    if (this.size === null || this.size === "inherit") return null;
    if (this.size === "default") return this.defaultWidth;
    return this.size;
  }

  get height() {
    if (this.size === null || this.size === "inherit") return null;
    if (this.size === "default") return this.defaultHeight;
    return this.size;
  }

  get viewBox() {
    return "0 0 32 32";
  }

  get classes() {
    const { className } = this.props;
    return classnames("manicon-svg", className);
  }

  get fill() {
    return this.props.fill;
  }

  get stroke() {
    return this.props.stroke;
  }

  render() {
    const baseSvgProps = {
      xmlns: "http://www.w3.org/2000/svg",
      className: this.classes,
      width: this.width,
      height: this.height,
      viewBox: this.viewBox,
      fill: this.fill
    };

    const svgProps = Object.assign(baseSvgProps, this.props.svgProps);

    return (
      <svg {...svgProps}>
        <path d="M18.9420751,5 C21.7439911,5 22.7600336,5.29173764 23.7843722,5.83955993 C24.8087108,6.38738222 25.6126178,7.19128916 26.1604401,8.21562779 L26.2701169,8.42803006 C26.7471145,9.38860425 27,10.4492445 27,13.0579249 L27,18.9420751 L26.995849,19.4968882 C26.9585423,21.8841744 26.6704815,22.8306776 26.1604401,23.7843722 C25.6126178,24.8087108 24.8087108,25.6126178 23.7843722,26.1604401 L23.5719699,26.2701169 C22.6113958,26.7471145 21.5507555,27 18.9420751,27 L13.0579249,27 L12.5031118,26.995849 C10.1158256,26.9585423 9.16932237,26.6704815 8.21562779,26.1604401 C7.19128916,25.6126178 6.38738222,24.8087108 5.83955993,23.7843722 L5.72988308,23.5719699 C5.27055211,22.6469726 5.01903969,21.6291842 5.00103922,19.2256315 L5,13.0579249 C5,10.2560089 5.29173764,9.23996641 5.83955993,8.21562779 C6.38738222,7.19128916 7.19128916,6.38738222 8.21562779,5.83955993 L8.42803006,5.72988308 C9.35302743,5.27055211 10.3708158,5.01903969 12.7743685,5.00103922 L18.9420751,5 Z M13.0579249,5.78571429 C10.6219735,5.78571429 9.62090838,5.97902888 8.58616975,6.53241315 C7.69875635,7.00700703 7.00700703,7.69875635 6.53241315,8.58616975 L6.41102496,8.82502627 C5.98881479,9.70354363 5.81522193,10.6388326 5.78922181,12.5205852 L5.78571429,13.0579249 L5.78571429,18.9420751 C5.78571429,21.3780265 5.97902888,22.3790916 6.53241315,23.4138303 C7.00700703,24.3012436 7.69875635,24.992993 8.58616975,25.4675868 L8.82502627,25.588975 C9.70354363,26.0111852 10.6388326,26.1847781 12.5205852,26.2107782 L13.0579249,26.2142857 L18.9420751,26.2142857 L19.4794148,26.2107782 C21.5322358,26.1824144 22.4586869,25.9784031 23.4138303,25.4675868 C24.3012436,24.992993 24.992993,24.3012436 25.4675868,23.4138303 L25.588975,23.1749737 C26.0111852,22.2964564 26.1847781,21.3611674 26.2107782,19.4794148 L26.2142857,18.9420751 L26.2142857,13.0579249 L26.2107782,12.5205852 C26.1824144,10.4677642 25.9784031,9.5413131 25.4675868,8.58616975 C24.992993,7.69875635 24.3012436,7.00700703 23.4138303,6.53241315 L23.1749737,6.41102496 C22.2565238,5.96962342 21.2760238,5.79995444 19.2168621,5.78658168 L13.0579249,5.78571429 Z M15.6376955,9.17066081 C15.771857,8.84784317 16.2291704,8.84788477 16.3632732,9.17072682 L16.3632732,9.17072682 L18.1033571,13.36 L22.7101085,13.7319052 C23.0384992,13.7583525 23.1813618,14.1450754 22.9774825,14.3790468 L22.9774825,14.3790468 L22.928428,14.4266585 L19.4068571,17.3286429 L20.5092398,21.7987934 C20.588072,22.1184592 20.2668892,22.3763895 19.9804357,22.2574592 L19.9804357,22.2574592 L19.9197428,22.226091 L16,19.7785 L12.0802231,22.2261123 C11.8009465,22.4004494 11.4559259,22.1754533 11.4798322,21.8662299 L11.4798322,21.8662299 L11.4907602,21.7987934 L12.5923571,17.3286429 L9.071572,14.4266585 C8.81733553,14.2171262 8.92135632,13.8181977 9.22242055,13.7429 L9.22242055,13.7429 L9.28989153,13.7319052 L13.8958571,13.36 Z M16,10.3452143 L14.5297094,13.8840245 C14.4731777,14.0200503 14.3453012,14.1130209 14.1984713,14.124846 L14.1984713,14.124846 L10.3200714,14.4372143 L13.2835374,16.8798313 C13.3806987,16.9599081 13.432417,17.0805055 13.4260224,17.2033725 L13.4260224,17.2033725 L13.4151107,17.2770591 L12.4847143,21.0458571 L15.7924377,18.9825429 C15.8985351,18.9163121 16.028353,18.9052794 16.1423525,18.9494427 L16.1423525,18.9494427 L16.2085377,18.9825642 L19.5145,21.0458571 L18.5848893,17.2770591 C18.5547427,17.1548143 18.585243,17.0271889 18.6637203,16.9324339 L18.6637203,16.9324339 L18.7164626,16.8798313 L21.6791429,14.4372143 L17.8015287,14.124846 C17.6791491,14.1149901 17.5699378,14.0487637 17.5042269,13.9482237 L17.5042269,13.9482237 L17.4702631,13.8839585 L16,10.3452143 Z" />
      </svg>
    );
  }
}