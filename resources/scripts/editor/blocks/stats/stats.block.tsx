import {
  RichText,
  useBlockProps,
} from "@wordpress/block-editor";
import { Block } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import {
  AddItemButton,
  RemoveItemButton,
  addItem,
} from "scripts/editor/utils/repeater";
import {
  GetBlockAttributeValues,
  GetSetAttributesFunction,
} from "scripts/editor/utils/type-mapping";

/* Block name */
export const name = "by40q/stats";

/* Block title */
export const title = __("Stats", "40q");

/* Block icon */
export const icon = "chart-line";

/* Block category */
export const category = "40q";

/* Block attributes */
const defaultCardAmount = 4;

const initializeStat = () => ({
  statNumber: "",
  statName: "",
});

export const attributes = {
  stats: {
    type: "array",
    default: Array(defaultCardAmount).fill({}).map(initializeStat),
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
  const { stats } = attributes;

  const blockProps = useBlockProps();

  const updateStatAttributes = (index, newAttributes) => {
    const updatedStats = [...stats];
    updatedStats[index] = { ...updatedStats[index], ...newAttributes };
    setAttributes({ ...attributes, stats: updatedStats });
  };

  const statEdits = stats.map((stat, index) => (
    <div key={index} className="relative">
      <RemoveItemButton
        index={index}
        array={stats}
        setAttributes={(updatedCards) => setAttributes({ stats: updatedCards })}
      />
      <div className="flex gap-4 items-center">
        <RichText
          tagName="h2"
          placeholder={__("%")}
          className="text-primary-dark text-5xl font-normal !whitespace-nowrap"
          value={stat.statNumber}
          onChange={(newStatNumber) =>
            updateStatAttributes(index, { statNumber: newStatNumber })
          }
        />
        <RichText
          tagName="p"
          placeholder={__("Title")}
          className="text-lg font-bold leading-5 !whitespace-nowrap"
          value={stat.statName}
          onChange={(newStatName) =>
            updateStatAttributes(index, { statName: newStatName })
          }
        />
      </div>
    </div>
  ));

  const handleAddStat = () => {
    addItem(stats, initializeStat(), (updatedStats) =>
      setAttributes({ stats: updatedStats }),
    );
  };

  const addStatButton = (
    <AddItemButton onAdd={handleAddStat} buttonText="Add Stat" />
  );

  return (
    <>
      <div {...blockProps}>
        <div className="grid grid-cols-4 gap-6">{statEdits}</div>
        {addStatButton}
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
  attributes: {},
};