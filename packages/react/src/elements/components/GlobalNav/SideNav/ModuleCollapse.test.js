/* eslint-disable no-console */
import React from "react";
import { mount } from "enzyme";

import GlobalNavAdapter from "../../../../adapters/GlobalNav/GlobalNavAdapter";
import SideNavAdapter from "../../../../adapters/GlobalNav/SideNav/SideNavAdapter";
import SideNavFullAdapter from "../../../../adapters/GlobalNav/SideNav/SideNavFullAdapter";
import GroupAdapter from "../../../../adapters/GlobalNav/SideNav/GroupAdapter";
import ModuleAdapter from "../../../../adapters/GlobalNav/SideNav/ModuleAdapter";
import ModuleCollapse from "./ModuleCollapse";

describe("ModuleCollapse", () => {
  function Context(props) {
    return (
      <GlobalNavAdapter>
        <SideNavAdapter>
          <SideNavFullAdapter>
            <GroupAdapter>
              <ModuleAdapter icon="assets">
                <ModuleCollapse {...props} />
              </ModuleAdapter>
            </GroupAdapter>
          </SideNavFullAdapter>
        </SideNavAdapter>
      </GlobalNavAdapter>
    );
  }

  it("does not raise an error", () => {
    const errorSpy = jest.fn();
    console.error = errorSpy;

    mount(<Context id="1" onClick={() => {}} />);

    expect(errorSpy).not.toHaveBeenCalled();
  });
});
