import * as React from "react";
import { DragDropContext } from "react-beautiful-dnd";

import { reorderColors } from "../reorder";
import { ColorType } from "../types";
import { AuthorList } from "./AuthorList";

export const ColorMap = () => {
  const [colorSet, setColors] = React.useState<ColorType>({
    a: ["blue", "red"],
    b: ["pink"],
    c: ["green"]
  });

  return (
    <DragDropContext
      onDragEnd={({ destination, source }) => {
        // dropped outside list
        if (!destination) {
          return;
        }

        setColors(reorderColors(colorSet, source, destination));
      }}
    >
      <div>
        {Object.entries(colorSet).map(([k, v]) => (
          <AuthorList
            internalScroll
            key={k}
            listId={k}
            listType="CARD"
            colors={v}
          />
        ))}
      </div>
    </DragDropContext>
  );
};
