"use client";
import Card from "./card.jsx";
const axios = require("axios");
import { getChar } from "./api.js";
import "./globals.css";
import React, { useState, useEffect, useRef } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [newCharacter, setNewCharacter] = useState(null);

  const createNewCharacter = () => {
    if (newCharacter) {
      setCharacters([...characters, newCharacter]);
      setNewCharacter(null);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await getChar();
        if (isMounted) {
          setCharacters(response);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  const renderCard = (char) => {
    setNewCharacter(char);
    setIsOpen(false)
  };

  return (
    <main className="p-4">
      
      <section>
        <div className="w-36">
          <button
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-500 rounded-md px-6 py-3 shadow-xl text-white font-semibold border-2 border-red-600 focus:outline-none focus:border-red-700 transition-all duration-200"
            onClick={toggleMenu}
          >
            New NPC
          </button>
          {isOpen && (
            <div className="block z-10 mt-2 overflow-hidden bg-white rounded shadow-md">
              <ul className="py-1">
                {characters.map((char) => (
                  <li
                    onClick={() => renderCard(char)}
                    key={char.id}
                    className="cursor-pointer text-center px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                  >
                    {char.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
      {newCharacter && <Card character={newCharacter}></Card>}
      <section></section>
    </main>
  );
}
