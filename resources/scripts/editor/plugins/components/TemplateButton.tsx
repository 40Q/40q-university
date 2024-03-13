import { withDispatch, Dispatch } from "@wordpress/data";
import { useState } from "react";

type Props = {
  alreadyOpenModal: boolean,
  isEditorEmpty: boolean,
  setIsEditorEmpty: (e: boolean) => void,
  setAlreadyOpenModal: (e: boolean) => void,
  label: string,
  layout: boolean,
  resetBlocks: (a: any) => any,
  insertBlocks: (a: any) => any,
}

const TemplateButton = ({
  alreadyOpenModal,
  isEditorEmpty,
  setIsEditorEmpty,
  setAlreadyOpenModal,
  label,
  layout,
  resetBlocks,
  insertBlocks,
}: Props) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          if (!alreadyOpenModal && !isEditorEmpty) {
            setModalOpen(true);
            setAlreadyOpenModal(true);
          } else if (!alreadyOpenModal && isEditorEmpty) {
            resetBlocks([]);
            insertBlocks(layout);
            setIsEditorEmpty(false);
          }
        }}
        className="cursor-pointer flex flex-col"
      >
        <img
          className="w-full flex-shrink-0"
          src="https://placehold.co/150x300"
          alt=""
        />
        <div className="rounded-b-xl bg-primary">
          <button className="rounded-b-xl bg-primary w-full bg-transparent text-white">{label}</button>
        </div>
      </div>
      {modalOpen && (
        <div className="absolute bg-white max-w-full w-full top-1/2 border-primaryborder-b-primary-dark p-3 border flex flex-col gap-3">
          Are you sure? This will replace all the content in the editor.
          <div className="flex justify-end gap-4">
            <button
              onClick={() => {
                setModalOpen(false);
                setAlreadyOpenModal(false);
              }}
              className="p-2 border-b-primary-dark border border-opacity-50"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                resetBlocks([]);
                insertBlocks(layout);
                setModalOpen(false);
                setAlreadyOpenModal(false);
              }}
              className="p-2 bg-primary text-white"
            >
              Replace
            </button>
          </div>
        </div>
      )}
    </>
  );
};

interface DispatchActions {
  resetBlocks: (a: any) => any,
  insertBlocks: (a: any) => any,
}

type DispatchFunction = (dispatch: Dispatch) => DispatchActions;

const mapDispatchToProps: DispatchFunction = (dispatch) => {
  const { resetBlocks, insertBlocks } = dispatch("core/block-editor");
  
  return { resetBlocks, insertBlocks };
}

const dispatchh = withDispatch(mapDispatchToProps)(TemplateButton) as MyComponentType;
export default dispatchh;


