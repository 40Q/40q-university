import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import {
  GetBlockAttributeValues,
  GetSetAttributesFunction,
} from "scripts/editor/utils/type-mapping";

/* Component attributes */
export const attributes = {
  url: {
    type: "string",
    default: "",
  },
  id: {
    type: "string",
    default: "",
  },
  alt: {
    type: "string",
    default: "",
  },
} as const;

/* Component types */
type BlockAttributeValues = GetBlockAttributeValues<typeof attributes>;
type SetAttributesFunction = GetSetAttributesFunction<typeof attributes>;

/* Component edit */
export const Edit = ({ attributes }: { attributes: BlockAttributeValues }) => {
  const { url, alt } = attributes;
  return (
    <div className="h-full">
      {url ? (
        <img src={url} alt={alt}></img>
      ) : (
        <div className="bg-[#475569] text-white text-xl text-center font-serif mx-auto flex items-center justify-center h-full px-4">
          <h2>Select an image using the button in the sidebar</h2>
        </div>
      )}
    </div>
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
  const { url } = attributes;
  return (
    <>
      <MediaUploadCheck>
        <MediaUpload
          onSelect={(image) =>
            setAttributes({
              url: image.url,
              alt: image.alt,
              id: String(image.id),
            })
          }
          render={({ open }) => (
            <Button variant="secondary" onClick={open}>
              {__("Select Image")}
            </Button>
          )}
        />
      </MediaUploadCheck>
      {url && (
        <Button
          variant="secondary"
          onClick={() =>
            setAttributes({
              url: "",
              alt: "",
              id: "",
            })
          }
        >
          {__("Remove Image")}
        </Button>
      )}
    </>
  );
};
