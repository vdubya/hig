import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import IconButton from "@hig/icon-button";

import "./ModalPresenter.scss";
import cx from "classnames";

export default class ModalPresenter extends Component {
  static propTypes = {
    /**
     * Supports adding any dom content to the body of the modal
     */
    children: PropTypes.node,
    /**
     * Triggers when one clicks the close button
     */
    onCloseClick: PropTypes.func,
    /**
     * Triggers when one clicks the overlay behind the modal
     */
    onOverlayClick: PropTypes.func,
    /**
     * Triggers when one clicks the modal window
     */
    onWindowclick: PropTypes.func,
    /**
     * Modal is visible when true
     */
    open: PropTypes.bool,
    /**
     * Style of the modal shell
     */
    style: PropTypes.string,
    /**
     * Title of the modal
     */
    title: PropTypes.string
  };

  setScrolling = element => {
    this.hasScrolling = element.scrollHeight > element.clientHeight;
  };

  componentDidMount() {
    console.log(this.hasScrolling);
  }

  render() {
    const style = this.props.style || "standard";

    const windowClasses = cx([
      "hig__modal-V1__window",
      `hig__modal-V1__window--${style}`
    ]);

    const wrapperClasses = cx([
      "hig__modal-V1",
      {
        "hig__modal-V1--open": this.props.open
      }
    ]);

    return (
      <div className={wrapperClasses}>
        <div
          className="hig__modal-V1__overlay"
          onClick={event => this.props.onOverlayClick(event)}
        >
          <article
            onClick={event => this.props.onWindowClick(event)}
            className={windowClasses}
          >
            <header className="hig__modal-V1__header">
              <IconButton
                onClick={event => this.props.onCloseClick(event)}
                aria-label="close"
                name="x-close-gray"
                title="Close"
              />
              <span className="hig__modal-V1__header-title">
                {this.props.title}
              </span>
            </header>
            <div className="hig__modal-V1__body">
              <div className="hig__modal-V1__slot" ref={this.setScrolling}>
                {this.props.children}
              </div>
            </div>
            <div className="hig__modal__actions" />
          </article>
        </div>
      </div>
    );
  }
}
