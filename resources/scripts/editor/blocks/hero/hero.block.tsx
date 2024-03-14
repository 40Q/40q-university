import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import { Block } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import {
  Edit as SectionHeaderEdit,
  Sidebar as SectionHeaderSidebar,
  attributes as sectionHeaderAttributes,
} from "scripts/editor/components/section-header/section-header";
import {
  attributes as buttonAttributes,
  Edit as ButtonEdit,
  Sidebar as ButtonSidebar,
} from "scripts/editor/components/button/button";
import {
  attributes as imageAttributes,
  Edit as ImageEdit,
  Sidebar as ImageSidebar,
} from "scripts/editor/components/image/image";
import {
  GetBlockAttributeValues,
  GetSetAttributesFunction,
} from "scripts/editor/utils/type-mapping";

/* Block name */
export const name = "by40q/hero";

/* Block title */
export const title = __("Hero", "40q");

/* Block icon */
export const icon = "align-center";

/* Block category */
export const category = "40q";

/* Block attributes */
export const attributes = {
  ...sectionHeaderAttributes,
  ...imageAttributes,
  ...buttonAttributes,
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
    className: "relative flex flex-col justify-center",
  });

  const sectionHeaderEditProps = {
    ...attributes,
    eyebrowClasses: "font-mono !text-auxiliar uppercase",
    headingClasses: "uppercase font-normal",
    containerClasses: "text-center px-[20%]",
    textClasses: "!tracking-normal",
  };

  const imageProps = {
    ...attributes,
    imageClasses: "aspect-[12/5]",
  }

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Hero Settings")} initialOpen>
          <SectionHeaderSidebar {...{ attributes, setAttributes }} />
          <ButtonSidebar {...{ attributes, setAttributes }} />
          <PanelBody title={__("Image Settings")} initialOpen>
            <ImageSidebar {...{ attributes, setAttributes }} />
          </PanelBody>
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div className="absolute z-20 flex flex-col items-center justify-center w-full">
          <SectionHeaderEdit
            {...{ attributes: sectionHeaderEditProps, setAttributes }}
          />
          <ButtonEdit {...{ attributes, setAttributes }} />
        </div>
        <div className="aspect-[12/5]">
          <ImageEdit {...{ attributes: imageProps }} />
        </div>
        <div className="absolute w-full h-full z-10 bg-black opacity-50"></div>
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
    eyebrow: "Lorem ipsum",
    heading: "40 UNIVERSITY",
    text: "Sed sagittis nisi eget lectus molestie, porta imperdiet nulla mollis. Fusce dignissim malesuada felis. Donec non augue sit amet justo molestie facilisis sed eu lorem",
    url: "#",
    buttonText: "Read More",
  },
};
