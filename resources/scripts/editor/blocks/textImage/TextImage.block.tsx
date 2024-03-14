import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, ToggleControl } from "@wordpress/components";
import { Block } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import {
  attributes as imageAttributes,
  Edit as ImageEdit,
  Sidebar as ImageSidebar,
} from "scripts/editor/components/image/image";
import {
  attributes as buttonAttributes,
  Edit as ButtonEdit,
  Sidebar as ButtonSidebar,
} from "scripts/editor/components/button/button";
import {
  Edit as SectionHeaderEdit,
  Sidebar as SectionHeaderSidebar,
  attributes as sectionHeaderAttributes,
} from "scripts/editor/components/section-header/section-header";
import {
  GetBlockAttributeValues,
  GetSetAttributesFunction,
} from "scripts/editor/utils/type-mapping";

/* Block name */
export const name = "by40q/text-image";

/* Block title */
export const title = __("Text-image", "40q");

/* Block icon */
export const icon = "align-left";

/* Block category */
export const category = "40q";

/* Block attributes */
export const attributes = {
  imageLeft: {
    type: "boolean",
    default: true,
  },
  ...sectionHeaderAttributes,
  ...buttonAttributes,
  ...imageAttributes,
} as const;

/* Block types */
type BlockAttributeValues = GetBlockAttributeValues<typeof attributes>;
type SetAttributesFunction = GetSetAttributesFunction<typeof attributes>;

/* Block edit */
export const edit = ({
  attributes,
  setAttributes,
}: {
  attributes: BlockAttributeValues;
  setAttributes: SetAttributesFunction;
}) => {
  const { imageLeft } = attributes;
  const blockProps = useBlockProps({
    className: "relative flex gap-8",
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Text Image Settings")} initialOpen>
          <SectionHeaderSidebar {...{ attributes, setAttributes }} />
          <ButtonSidebar {...{ attributes, setAttributes }} />
        </PanelBody>
        <PanelBody title={__("Image Settings")} initialOpen>
          <ToggleControl
              label="Image on Left"
              checked={!!imageLeft}
              onChange={(imageLeft) => setAttributes({ imageLeft })}
            />
          <ImageSidebar {...{ attributes, setAttributes }} />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div className="relative pb-">
          <div className="z-20 top-0 left-0 w-full h-full [&>div]:w-full [&>div]:h-full [&>div>img]:w-full [&>div>img]:h-full [&>div>img]:object-cover">
            <ImageEdit {...{ attributes }} />
          </div>
        </div>
        <div className="relative z-50 [&>div>p]:text-primary-dark [&>div>h2]:text-text w-2/5">
          <SectionHeaderEdit {...{ attributes, setAttributes }} />
          <ButtonEdit {...{ attributes, setAttributes }} />
        </div>
      </div>
    </>
  );
};

/* Block save */
export const save = () => <></>;

/* Block styles */
export const styles = [];

/* Block preview */
export const example: Block["example"] = {
  attributes: {
    url: "#",
  },
};