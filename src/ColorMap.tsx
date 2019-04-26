import * as React from "react";
import { DragDropContext } from "react-beautiful-dnd";

export const ColorMap = () => {
  const [colors, setColors] = React.useState({
    a: ["blue", "red"],
    b: ["pink"],
    c: ["green"]
  });

  return (
    <DragDropContext>
      <div>
        {Object.entries(colors).map(([k, v]) => (
          <AuthorList
            internalScroll
            key={k}
            listId={k}
            listType="CARD"
            quotes={v}
          />
        ))}
      </div>
    </DragDropContext>
  );
};
