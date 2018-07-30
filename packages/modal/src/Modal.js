import { Modal } from "hig-react";
import "./modal.scss";
import { Component } from "react";
import PropTypes from "prop-types";

import ModalPresenter from "./presenters/ModalPresenter";
import ModalBehavior from "./behaviors/ModalBehavior";

export default class Modal extends Component {
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
     * Modal is visible when true
     */
    defaultOpen: propTypes.bool,
    /**
     * Style of the modal shell
     */
    style: PropTypes.oneOf(VanillaModal.AvailableStyles),
    /**
     * Title of the modal
     */
    title: PropTypes.string
  };

  render() {
    const { children, open, onCloseClick, onOverlayClick, title } = this.props;

    return (
      <ModalBehavior
        open={open}
        defaultOpen={defaultOpen}
        onCloseClick={onCloseClick}
        onOverlayClick={onOverlayClick}
      >
        {({ open, handleCloseClick, handleOverlayClick }) => (
          <ModalPresenter
            open={open}
            title={title}
            onCloseClick={handleCloseClick}
            onOverlayClick={handleOverlayClick}
          >
            {this.props.children}
          </ModalPresenter>
        )}
      </ModalBehavior>
    );
  }
}
