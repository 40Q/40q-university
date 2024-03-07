import { InspectorControls, useBlockProps, RichText} from "@wordpress/block-editor";
import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import {
  GetBlockAttributeValues,
  GetSetAttributesFunction,
} from "scripts/editor/utils/type-mapping";

/* Block name */
export const name = "by40q/quote";

/* Block title */
export const title = __("Quote", "40q");

/* Block icon */
export const icon = "format-image";

/* Block category */
export const category = "40q";

/* Block attributes */
export const attributes = {
  "heading": {
    "type": "string",
    "default": "",
  },
  "text": {
    "type": "string",
    "default": "",
  },
  "quote": {
    "type": "string",
    "default": "",
  },
  "author": {
    "type": "string",
    "default": "",
  },
  "darkMode": {
    "type": "boolean",
    "default": "",
  },
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
  const { heading, text, quote, author, darkMode } = attributes;

  const blockProps = useBlockProps({
    className: `quote-block pt-23 pb-16 ${darkMode ? 'bg-primary-dark' : 'bg-white' }`,
  });


  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Quote Settings")} initialOpen>
          <ToggleControl
            label="Dark Mode"
            checked={!!darkMode}
            onChange={(darkMode) => setAttributes({ darkMode })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div className="w-full flex gap-8 justify-center">
          <div className="flex flex-col gap-4 pr-10 pt-2.5 w-5/12 flex-shrink-0 box-border items-end">
            <RichText
              tagName="h3"
              className={`m-0 heading lg:text-2xl font-bold pr-5 tracking-wide relative  ${darkMode ? 'text-auxiliar after:bg-auxiliar' : 'text-primary-dark after:bg-primary-dark'} after:rounded-lg after:content-[''] after:w-3.5 after:h-3.5 after:-right-2.5 after:bg-cover after:bg-center after:top-1.5 after:absolute`}
              placeholder={__("Heading")}
              value={heading}
              onChange={(heading) => setAttributes({ heading })}
            />
            <RichText
              tagName="p"
              className={`m-0 lg:text-xl text-end !leading-comfort ${darkMode ? 'text-white' : 'text-text'}`}
              placeholder={__("Text")}
              value={text}
              onChange={(text) => setAttributes({ text })}
            />
          </div>
          <div className="flex w-full items-end">
            <RichText
              tagName="p"
              className={`m-0 lg:text-5xl font-light pl-16 tracking-wider !leading-tighter ${darkMode ? 'text-white' : 'text-text' } border-l-auxiliar border-l border-solid`}
              placeholder={__("Quote")}
              value={quote}
              onChange={(quote) => setAttributes({ quote })}
            />
            <RichText
              tagName="span"
              className={`m-0 lg:text-5xl flex-shrink-0 ${darkMode ? 'text-auxiliar' : 'text-primary' }`}
              placeholder={__("Author")}
              value={author}
              onChange={(author) => setAttributes({ author })}
            />
          </div>
        </div>
      </div>
    </>
  );
};

/* Block save */
export const save = () => <></>;

/* Block styles */
export const styles = [];
