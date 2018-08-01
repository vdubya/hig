import React, { Component } from "react";
import PropTypes from "prop-types";

import "./ModalPresenter.scss";

export default class ModalPresenter extends Component {
  static propTypes = {
    /**
     * Supports adding any dom content to the body of the modal
     */
    children: PropTypes.node,
    /**
     * Triggers when you click the close button
     */
    onCloseClick: PropTypes.func,
    /**
     * Triggers when you click the overlay behind the modal
     */
    onOverlayClick: PropTypes.func,
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

  render() {
    return this.props.open ? (
      <div className="hig__modal-V1">
        <div
          className="hig__modal-V1__overlay"
          onClick={() => this.props.onOverlayClick()}
        >
          <article className="hig__modal-V1__window{{#style}} hig__modal-V1__window--{{style}}{{/style}}">
            <header className="hig__modal-V1__header">
              <button
                onClick={() => this.props.onCloseClick()}
                type="button"
                aria-label="close"
                className="hig__modal-V1__close-button"
              />
              <span className="hig__modal-V1__header-title">
                {this.props.title}
              </span>
            </header>
            <div className="hig__modal-V1__body">
              <div className="hig__modal-V1__slot">{this.props.children}</div>
            </div>
            <div className="hig__modal__actions" />
          </article>
        </div>
      </div>
    ) : null;
  }
}
