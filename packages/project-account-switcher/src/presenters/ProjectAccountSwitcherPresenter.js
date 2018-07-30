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
    /** Heading title for the list of Accounts */
    accountTitle: PropTypes.string,
    /** List of Accounts */
    accounts: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string
      })
    ),
    /** Menu heading title for the list of Projects */
    projectTitle: PropTypes.string,
    /** List of Projects */
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string
      })
    )
  };

  static defaultProps = {
    activeLabel: "I am a label",
    accountTitle: "Accounts",
    accounts: [{ label: "Account 1" }, { label: "Account 2" }],
    projectTitle: "Projects",
    projects: [{ label: "Project 1" }, { label: "Project 2" }]
  };

  constructPlaceholder(label) {
    return label.match(/\b(\w)/g).join("");
  }

  accountsList() {
    return this.props.accounts.map(account => (
      <div className="hig__global-nav__top-nav__project-account-switcher__item hig__global-nav__top-nav__project-account-switcher__item--account hig__global-nav__top-nav__project-account-switcher__item--active">
        <span className="hig__global-nav__top-nav__project-account-switcher__item__image-wrapper">
          <span
            className="hig__global-nav__top-nav__project-account-switcher__item__image-placeholder"
            dangerouslySetInnerHTML={{
              __html: this.constructPlaceholder(account.label)
            }}
          />
        </span>
        <span
          className="hig__global-nav__top-nav__project-account-switcher__item__label"
          dangerouslySetInnerHTML={{ __html: account.label }}
        />
      </div>
    ));
  }

  projectsList() {
    return this.props.projects.map(project => (
      <div className="hig__global-nav__top-nav__project-account-switcher__item hig__global-nav__top-nav__project-account-switcher__item--project hig__global-nav__top-nav__project-account-switcher__item--active">
        <span className="hig__global-nav__top-nav__project-account-switcher__item__image-wrapper">
          <span
            className="hig__global-nav__top-nav__project-account-switcher__item__image-placeholder"
            dangerouslySetInnerHTML={{
              __html: this.constructPlaceholder(project.label)
            }}
          />
        </span>
        <span
          className="hig__global-nav__top-nav__project-account-switcher__item__label"
          dangerouslySetInnerHTML={{ __html: project.label }}
        />
      </div>
    ));
  }

  flyoutContent() {
    return (
      <div className="hig__global-nav__top-nav__project-account-switcher__lists">
        <div className="hig__global-nav__top-nav__project-account-switcher__list">
          <div
            className="hig__global-nav__top-nav__project-account-switcher__list__title"
            dangerouslySetInnerHTML={{ __html: this.props.accountTitle }}
          />
          {this.accountsList()}
        </div>
        <div className="hig__global-nav__top-nav__project-account-switcher__list">
          <div
            className="hig__global-nav__top-nav__project-account-switcher__list__title"
            dangerouslySetInnerHTML={{ __html: this.props.projectTitle }}
          />
          {this.projectsList()}
        </div>
      </div>
    );
  }

  constructLabel() {
    return "Account 1 / Project 1 ";
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
            <span
              className="hig__global-nav__top-nav__project-account-switcher__item__label"
              dangerouslySetInnerHTML={{ __html: this.constructLabel() }}
            />
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
