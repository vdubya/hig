// import ProjectAccountSwitcher from "hig-react/lib/elements/components/GlobalNav/TopNav/ProjectAccountSwitcher";
// import "./project-account-switcher.scss";
//
// ProjectAccountSwitcher.displayName = "ProjectAccountSwitcher";
//
// export default ProjectAccountSwitcher;
import React, { Component } from "react";
import PropTypes from "prop-types";

import ProjectAccountSwitcherPresenter from "./presenters/ProjectAccountSwitcherPresenter";

export default class ProjectAccountSwitcher extends Component {
  render() {
    return <ProjectAccountSwitcherPresenter />;
  }
}
