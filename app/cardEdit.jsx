"use client";
import "./globals.css";
import React, { useState } from "react";
import { EditText, EditTextarea } from "react-edit-text";

export function CardEdit(props) {
    function handleOnClick() {
       props.isInput()
    }
  return (
    <div>
      <div
        className="text-6xl font-bold text-grey-700 content-normal mr-4"
        key={props.character.character.id}
      >
        <div className="flex flex-row">
          <div>{props.character.character.name}</div>
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
          <div>Will: {props.character.character.will}</div>
          <div>Luck: {props.character.character.luck}</div>
          <div>Move: {props.character.character.move}</div>
          <div>Body: {props.character.character.body}</div>
          <div>Emp: {props.character.character.emp}</div>
          <div>Int: {props.character.character.int}</div>
          <div>Ref: {props.character.character.ref}</div>
          <div>Dex: {props.character.character.dex}</div>
          <div>Tech: {props.character.character.tech}</div>
          <div>Cool: {props.character.character.cool}</div>
        </div>
        <div className="grid grid-cols-2 text-4xl ">
          <div className="flex">
            HP:
            <EditText
              className="ml-4"
              name="textbox1"
              defaultValue={props.character.character.hitpoints.toString()}
              inputClassName="w-10 ml-4 bg-success appearance-none bg-transparent border-none w-full text-white-700 leading-tight focus:outline-none"
            />
            /{props.character.character.hitpoints.toString()}
          </div>
          <div>Wounded: {props.character.character.wounded}</div>
        </div>
      </div>

      <div>
        {props.character.character.char_weapons.map((el) => (
          <div> {el.weapon.weapon_type}</div>
        ))}
      </div>
    </div>
  );
}
