import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { generateId } from "@hig/utils";
import Flyout from "@hig/flyout";
import icons from "../../../icons/build";
import { anchorPoints } from "../../../flyout/src/anchorPoints";

import "./ProjectAccountSwitcherPresenter.scss";

export default class ProjectAccountSwitcherPresenter extends Component {
  static propTypes = {
    activeLabel: PropTypes.string,
    // /** Heading title for the list of Accounts */
    accountTitle: PropTypes.string,
    // /** List of Accounts */
    // accounts: PropTypes.arrayOf(),
    // /** Menu heading title for the list of Projects */
    projectTitle: PropTypes.string
  };

  static defaultProps = {
    activeLabel: "I am a label",
    accountTitle: "Accounts",
    projectTitle: "Projects"
  };

  flyoutContent() {
    return (
      <div className="hig__global-nav__top-nav__project-account-switcher__lists">
        <div className="hig__global-nav__top-nav__project-account-switcher__list">
          <div
            className="hig__global-nav__top-nav__project-account-switcher__list__title"
            dangerouslySetInnerHTML={{ __html: this.props.accountTitle }}
          />
          <div className="hig__global-nav__top-nav__project-account-switcher__item hig__global-nav__top-nav__project-account-switcher__item--account hig__global-nav__top-nav__project-account-switcher__item--active">
            <span className="hig__global-nav__top-nav__project-account-switcher__item__image-wrapper">
              <span
                className="hig__global-nav__top-nav__project-account-switcher__item__image-placeholder"
                dangerouslySetInnerHTML={{ __html: "A1" }}
              />
            </span>
            <span
              className="hig__global-nav__top-nav__project-account-switcher__item__label"
              dangerouslySetInnerHTML={{ __html: "Account 1" }}
            />
          </div>
        </div>
        <div className="hig__global-nav__top-nav__project-account-switcher__list">
          <div
            className="hig__global-nav__top-nav__project-account-switcher__list__title"
            dangerouslySetInnerHTML={{ __html: this.props.projectTitle }}
          />
          <div className="hig__global-nav__top-nav__project-account-switcher__item hig__global-nav__top-nav__project-account-switcher__item--project hig__global-nav__top-nav__project-account-switcher__item--active">
            <span className="hig__global-nav__top-nav__project-account-switcher__item__image-wrapper">
              <span
                className="hig__global-nav__top-nav__project-account-switcher__item__image-placeholder"
                dangerouslySetInnerHTML={{ __html: "P1" }}
              />
            </span>
            <span
              className="hig__global-nav__top-nav__project-account-switcher__item__label"
              dangerouslySetInnerHTML={{ __html: "Project 1" }}
            />
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <Flyout
        content={this.flyoutContent()}
        anchorPoint={anchorPoints.TOP_RIGHT}
      >
        <div className="hig__global-nav__top-nav__project-account-switcher__target">
          <div className="hig__global-nav__top-nav__project-account-switcher__item">
            <span className="hig__global-nav__top-nav__project-account-switcher__item__image-wrapper">
              <img className="hig__global-nav__top-nav__project-account-switcher__item__image" />
              <span
                className="hig__global-nav__top-nav__project-account-switcher__item__image-placeholder"
                dangerouslySetInnerHTML={{ __html: "A1/P1" }}
              />
            </span>
            <span className="hig__global-nav__top-nav__project-account-switcher__item__label">
              Account 1 / Project 1
            </span>
          </div>
          <span className="hig__global-nav__top-nav__project-account-switcher__target__caret">
            <div
              className="hig__icon hig__icon--24-size"
              dangerouslySetInnerHTML={{
                __html: icons["caret-24"]
              }}
            />
          </span>
        </div>
      </Flyout>
    );
  }
}
