import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
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
export const name = "by40q/banner";

/* Block title */
export const title = __("Banner", "40q");

/* Block icon */
export const icon = "format-image";

/* Block category */
export const category = "40q";

/* Block attributes */
export const attributes = {
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
  const blockProps = useBlockProps({
    className: "relative py-12 px-16",
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Banner Settings")} initialOpen>
          <SectionHeaderSidebar {...{ attributes, setAttributes }} />
          <ButtonSidebar {...{ attributes, setAttributes }} />
        </PanelBody>
        <PanelBody title={__("Image Settings")} initialOpen>
          <ImageSidebar {...{ attributes, setAttributes }} />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div className="relative z-50 [&>div>p]:text-white [&>div>h2]:text-white w-2/5">
          <SectionHeaderEdit {...{ attributes, setAttributes }} />
          <ButtonEdit {...{attributes, setAttributes}} />
        </div>
        <div className="absolute z-20 top-0 left-0 w-full h-full [&>div]:w-full [&>div]:h-full [&>div>img]:w-full [&>div>img]:h-full [&>div>img]:object-cover">
          <ImageEdit {...{ attributes }} />
        </div>
        <div className="absolute top-0 left-0 w-full h-full z-20 bg-black opacity-50"></div>
      </div>
    </>
  );
};

/* Block save */
export const save = () => <></>;

/* Block styles */
export const styles = [];
