import { PanelBody, PanelRow } from "@wordpress/components";
import TemplateButton from "./TemplateButton";
import { useState } from "react";
import { select } from "@wordpress/data";

type Props = {
  layouts: Array<{
    attributes: Array<string>;
    clientId: string;
    innerBlocks: Array<null>;
    isValid: boolean;
    name: string;
  }>;
}

const TemplateControls = ({ layouts }: Props) => {
  const [alreadyOpenModal, setAlreadyOpenModal] = useState(false);
  const [isEditorEmpty, setIsEditorEmpty] = useState(
    !select("core/block-editor").getBlocks().length
  );
  console.log(layouts);
  return (
    <PanelBody>
      <PanelRow>
        <div className="p-2 w-full grid grid-cols-2 gap-4 relative">
          {layouts && Object.keys(layouts).map((layoutKey, idx) => {
            const layout = layouts[layoutKey];
            return (
              <TemplateButton
                key={idx}
                isEditorEmpty={isEditorEmpty}
                setIsEditorEmpty={setIsEditorEmpty}
                setAlreadyOpenModal={setAlreadyOpenModal}
                alreadyOpenModal={alreadyOpenModal}
                label={layoutKey}
                layout={layout}
              />
            )
          })}
        </div>
      </PanelRow>
    </PanelBody>
  );
};

export default TemplateControls;
