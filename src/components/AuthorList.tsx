import React, { Component } from "react";
import { Droppable, Draggable, DroppableProvided } from "react-beautiful-dnd";

interface Props {
  colors: string[];
  listId: string;
  listType?: string;
  internalScroll?: boolean;
  isCombineEnabled?: boolean;
}

export class AuthorList extends Component<Props> {
  static defaultProps = {
    isCombineEnabled: false
  };
  renderBoard = (dropProvided: DroppableProvided) => {
    const { colors } = this.props;

    return (
      <div>
        <div style={{ display: "flex" }} ref={dropProvided.innerRef}>
          {colors.map((color, index) => (
            <Draggable key={color} draggableId={color} index={index}>
              {(dragProvided) => (
                <div
                  {...dragProvided.dragHandleProps}
                  {...dragProvided.draggableProps}
                  ref={dragProvided.innerRef}
                >
                  <div style={{ backgroundColor: color }}>{color}</div>
                </div>
              )}
            </Draggable>
          ))}
          {dropProvided.placeholder}
        </div>
      </div>
    );
  };

  render() {
    const { listId, listType, internalScroll, isCombineEnabled } = this.props;

    return (
      <Droppable
        droppableId={listId}
        type={listType}
        direction="horizontal"
        isCombineEnabled={isCombineEnabled}
      >
        {(dropProvided) => (
          <div {...dropProvided.droppableProps}>
            {internalScroll ? (
              <div>{this.renderBoard(dropProvided)}</div>
            ) : (
              this.renderBoard(dropProvided)
            )}
          </div>
        )}
      </Droppable>
    );
  }
}
