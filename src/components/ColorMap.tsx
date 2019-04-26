import * as React from "react";
import { DragDropContext } from "react-beautiful-dnd";

import { reorderColors } from "../reorder";
import { ColorType } from "../types";
import { AuthorList } from "./AuthorList";

export const ColorMap = () => {
  const [colorSet, setColors] = React.useState<ColorType>({
    a: [],
    b: [],
    c: [],
    unranked: [
      "https://images.pexels.com/photos/2126090/pexels-photo-2126090.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/2105262/pexels-photo-2105262.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ]
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
            urls={v}
          />
        ))}
      </div>
    </DragDropContext>
  );
};
