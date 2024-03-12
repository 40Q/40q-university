import { __ } from "@wordpress/i18n";
import { PluginSidebar } from "@wordpress/edit-post";
import icon from "../components/templates-plugin/icon";
import TemplateControls from "./components/TemplateControls";
import { createBlock } from "@wordpress/blocks";

/** Plugin name */
export const name = "templates-selector-plugin";

/** Plugin title */
export const title = __("Templates Plugin", "radicle");

/** Plugin render */

export const render = () => {
  const layouts = {
    'Hero': [createBlock("by40q/banner", { title: "Layout Hero" })],
    'Default Page': [
      createBlock("by40q/stats", { title: "Layout Default Page" }),
      createBlock("by40q/text-image", { title: "Layout Default Page" }),
    ],
  };
  return (
    <PluginSidebar
      name="templates-selector-plugin"
      title={__("40Q Template Selector", "radicle")}
      icon={icon}
    >
      <TemplateControls layouts={layouts} />
    </PluginSidebar>
  );
};
