import { RichText, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import {
  GetBlockAttributeValues,
  GetSetAttributesFunction,
} from "scripts/editor/utils/type-mapping";

/* Component attributes */
export const attributes = {
  showEyebrow: {
    type: "boolean",
    default: true,
  },
  eyebrow: {
    type: "string",
    default: "",
  },
  showHeading: {
    type: "boolean",
    default: true,
  },
  heading: {
    type: "string",
    default: "",
  },
  showText: {
    type: "boolean",
    default: true,
  },
  text: {
    type: "string",
    default: "",
  },
  containerClasses: {
    type: "string",
    default: "",
  },
  eyebrowClasses: {
    type: "string",
    default: "",
  },
  headingClasses: {
    type: "string",
    default: "",
  },
  textClasses: {
    type: "string",
    default: "",
  },
} as const;

/* Component types */
type BlockAttributeValues = GetBlockAttributeValues<typeof attributes>;
type SetAttributesFunction = GetSetAttributesFunction<typeof attributes>;

/* Component edit */
export const Edit = ({
  attributes,
  setAttributes,
}: {
  attributes: BlockAttributeValues;
  setAttributes: SetAttributesFunction;
}) => {
  const { showEyebrow, eyebrow, showHeading, heading, showText, text, containerClasses, eyebrowClasses, headingClasses, textClasses } =
    attributes;

  const blockProps = useBlockProps({
    className: `${containerClasses}`,
  });
  
  return (
    <>
      <div className="container" {...blockProps}>
        {!!showEyebrow && (
          <RichText
            tagName="p"
            className={`text-sm lg:text-base mb-3 lg:mb-4 text-back-light ${eyebrowClasses}`}
            placeholder={__("Eyebrow")}
            value={eyebrow}
            onChange={(eyebrow) => setAttributes({ eyebrow })}
          />
        )}
        {!!showHeading && (
          <RichText
            tagName="h2"
            className={`text-4xl leading-10.5 lg:text-5xl lg:leading-14 mb-3 lg:mb-4 text-back-light ${headingClasses}`}
            placeholder={__("Heading")}
            value={heading}
            onChange={(heading) => setAttributes({ heading })}
          />
        )}
        {!!showText && (
          <RichText
            tagName="p"
            className={`text-sm tracking-tight lg:text-base !lg:leading-7.5 text-back-light ${textClasses}`}
            placeholder={__("Lorem ipsum dolor sit amet.")}
            value={text}
            onChange={(text) => setAttributes({ text })}
          />
        )}
      </div>
    </>
  );
};

/* Component sidebar */
export const Sidebar = ({
  attributes,
  setAttributes,
}: {
  attributes: BlockAttributeValues;
  setAttributes: SetAttributesFunction;
}) => {
  const { showEyebrow, showHeading, showText } = attributes;
  return (
    <PanelBody title={__("Section Header Settings")} initialOpen>
      <ToggleControl
        label="Show Eyebrow"
        checked={!!showEyebrow}
        onChange={(showEyebrow) => setAttributes({ showEyebrow })}
      />
      <ToggleControl
        label="Show Heading"
        checked={!!showHeading}
        onChange={(showHeading) => setAttributes({ showHeading })}
      />
      <ToggleControl
        label="Show Text"
        checked={!!showText}
        onChange={(showText) => setAttributes({ showText })}
      />
    </PanelBody>
  );
};
