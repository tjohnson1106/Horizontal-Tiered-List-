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
        <DropZone ref={dropProvided.innerRef}>
          {quotes.map((quote: Quote, index: number) => (
            <Draggable key={quote.id} draggableId={quote.id} index={index}>
              {(
                dragProvided: DraggableProvided,
                dragSnapshot: DraggableStateSnapshot
              ) => (
                <Author
                  author={quote.author}
                  provided={dragProvided}
                  snapshot={dragSnapshot}
                />
              )}
            </Draggable>
          ))}
          {dropProvided.placeholder}
        </DropZone>
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
