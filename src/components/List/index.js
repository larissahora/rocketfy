import React from "react";

import { MdAdd } from "react-icons/md";
import { MdMoreVert } from "react-icons/md";
import { MdCheck } from "react-icons/md";

import { Container } from "./styles";

import Card from "../Card/index";

export default function List({ data, index: listIndex }) {
  return (
    <Container done={data.done}>
      <header>
        <h2>
          {data.done && <MdCheck size={15} color="#00ce8c" />}
          {data.title}
        </h2>
        <div>
          {data.creatable && (
            <button type="button">
              <MdAdd size={24} color="#FFF" />
            </button>
          )}
          <MdMoreVert size={24} color="#9aaabe" />
        </div>
      </header>

      <ul>
        {data.cards.map((card, index) => (
          <Card key={card.id} listIndex={listIndex} index={index} data={card} />
        ))}
      </ul>
    </Container>
  );
}
