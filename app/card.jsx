"use client";
import "./globals.css";
import React, { useState } from "react";
import { EditText, EditTextarea } from "react-edit-text";
import { CardEdit } from "./cardEdit.jsx";

export default function Card(props) {
  const [isInput, setIsInput] = useState(false);

  function switchIsInput() {
    setIsInput(false)
  }

  function handleOnClick() {
    setIsInput(true);
  }

  function CardEditTrigger() {
    if (isInput) {
      return <CardEdit character={props} isInput={switchIsInput}></CardEdit>;
    }
  }

  return (
    <div>
      <div className="flex flex-row">
        <CardEditTrigger></CardEditTrigger>
        {!isInput && (
          <div>
            <div
              className="text-6xl font-bold text-grey-700 content-normal mr-4"
              key={props.character.id}
            >
              <div className="flex flex-row">
                <div>{props.character.name}</div>
                <img
                  width="30px"
                  height="30px"
                  src="/edit.svg"
                  alt="edit"
                  className="ml-4 cursor-pointer"
                  onClick={handleOnClick}
                />
              </div>
              <div className="grid grid-cols-4 gap-2 text-2xl font-bold text-grey-700 content-normal mr-4 mt-4">
                <div>Will: {props.character.will}</div>
                <div>Luck: {props.character.luck}</div>
                <div>Move: {props.character.move}</div>
                <div>Body: {props.character.body}</div>
                <div>Emp: {props.character.emp}</div>
                <div>Int: {props.character.int}</div>
                <div>Ref: {props.character.ref}</div>
                <div>Dex: {props.character.dex}</div>
                <div>Tech: {props.character.tech}</div>
                <div>Cool: {props.character.cool}</div>
              </div>
              <div className="grid grid-cols-2 text-4xl ">
                <div className="flex">
                  HP:
                  <EditText
                    className="ml-4"
                    name="textbox1"
                    defaultValue={props.character.hitpoints.toString()}
                    inputClassName="w-10 ml-4 bg-success appearance-none bg-transparent border-none w-full text-white-700 leading-tight focus:outline-none"
                  />
                  /{props.character.hitpoints}
                </div>
                <div>Wounded: {props.character.wounded}</div>
              </div>
            </div>
            <div>
              {props.character.char_weapons.map((el) => (
                <div> {el.weapon.weapon_type}</div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
