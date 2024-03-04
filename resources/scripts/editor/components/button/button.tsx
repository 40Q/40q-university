import {
  RichText,
  URLInputButton,
  useBlockProps,
} from "@wordpress/block-editor";
import { PanelBody, SelectControl, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import {
  GetBlockAttributeValues,
  GetSetAttributesFunction,
} from "scripts/editor/utils/type-mapping";

/* Component attributes */
export const attributes = {
  buttonText: {
    type: "string",
    default: "",
  },
  buttonHref: {
    type: "string",
    default: "",
  },
  buttonShowArrow: {
    type: "boolean",
    default: false,
  },
  buttonType: {
    type: "string",
    default: "primary",
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
  const { buttonText, buttonHref, buttonType } = attributes;
  const blockProps = useBlockProps();
  return (
    <>
      <a {...blockProps} className={buttonType}>
        <URLInputButton
          url={buttonHref}
          onChange={(buttonHref) => setAttributes({ buttonHref })}
        />
        <RichText
          tagName="p"
          className="inline-block p-4 leading-none rounded text-sm uppercase text-white bg-primary border border-primary-dark border-solid"
          placeholder={__("Button")}
          value={buttonText}
          onChange={(buttonText) => setAttributes({ buttonText })}
        />
      </a>
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
  const { buttonType, buttonShowArrow } = attributes;

  return (
    <PanelBody title={__("Button Settings")} initialOpen>
      <SelectControl
        label="Type"
        value={buttonType}
        options={[
          { label: "Primary", value: "primary" },
          { label: "Secondary", value: "secondary" },
        ]}
        onChange={(value) => setAttributes({ buttonType: value })}
      />
      <ToggleControl
        label="Show Icon on Mobile"
        checked={!!buttonShowArrow}
        onChange={(buttonShowArrow) => setAttributes({ buttonShowArrow })}
      />
    </PanelBody>
  );
};