import { Button } from "@wordpress/components";

/* ADD ITEM */
type AddItemButtonProps = {
  onAdd: () => void;
  buttonText?: string;
};
export const addItem = <T,>(array: T[], template: T, setAttributes): void => {
  const updatedArray = [...array, template];
  setAttributes(updatedArray);
};

export const AddItemButton = ({
  onAdd,
  buttonText = "Add",
}: AddItemButtonProps) => (
  <Button variant="primary" onClick={onAdd}>
    {buttonText}
  </Button>
);

/* REMOVE ITEM */
type RemoveButtonProps<T> = {
  index: number;
  array: T[];
  absolutePosition?: boolean;
  setAttributes: (updatedArray: T[]) => void;
  buttonText?: string;
};

const removeItem = <T,>(array: T[], index: number, setAttributes): void => {
  const updatedArray = array.filter((_, i) => i !== index);
  setAttributes(updatedArray);
};

export const RemoveItemButton = <T,>({
  index,
  array,
  setAttributes,
  absolutePosition = true,
  buttonText = "X",
}: RemoveButtonProps<T>) => (
  <Button
    variant="primary"
    className={absolutePosition ? "absolute top-0 right-0" : ""}
    onClick={() => removeItem(array, index, setAttributes)}
  >
    {buttonText}
  </Button>
);
