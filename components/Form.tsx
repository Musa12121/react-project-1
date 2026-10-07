"use client";

import { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [genre, setGenre] = useState("");
  const [genreError, setGenreError] = useState(false);

  const nameRegex = /^[A-Za-z][A-Za-z\s]*$/;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError(false);
    setInputError(false);
    setGenreError(false);

    if (!nameRegex.test(name)) {
      setInputError(true);
    }

    if (!emailRegex.test(email)) {
      setEmailError(true);
    }
    if (!genre) {
      setGenreError(true);
    }
    return;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md space-y-5 border border-gray-300 p-10"
    >
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>

        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          className={`w-full rounded-md border border-gray-300 bg-white px-4 py-2 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 dark:border-gray-600 dark:bg-gray-800 ${inputError ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "border-gray-300 focus:border-purple-500 focus:ring-purple-500/20 dark:border-gray-600"}`}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setInputError(false);
          }}
        />

        {inputError && (
          <p className="text-sm text-red-500">Please enter a valid name.</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>

        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError(false);
          }}
          placeholder="Enter your email"
          className={`w-full rounded-md border px-4 py-2 outline-none transition focus:ring-2 ${
            emailError
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
              : "border-gray-300 focus:border-purple-500 focus:ring-purple-500/20 dark:border-gray-600"
          } bg-white dark:bg-gray-800`}
        />

        {emailError && (
          <p className="text-sm text-red-500">
            Please enter a valid email address.
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="genre" className="block text-sm font-medium">
          Favorite genre
        </label>

        <select
          id="genre"
          onChange={(e) => {
            setGenre(e.target.value);
            setGenreError(false);
          }}
          className={`w-full rounded-md border px-4 py-2 outline-none transition focus:ring-2 ${
            genreError
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
              : "border-gray-300 focus:border-purple-500 focus:ring-purple-500/20"
          }`}
        >
          <option value="">Select a genre</option>
          <option value="pop">Pop</option>
          <option value="rock">Rock</option>
          <option value="hip-hop">Hip-Hop</option>
          <option value="jazz">Jazz</option>
        </select>
        {genreError && (
          <p className="text-sm text-red-500">
            Please choose a genre.
          </p>
        )}
      </div>

      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" className="h-4 w-4 accent-purple-600" />
        Remember me
      </label>

      <div className="space-y-2">
        <label htmlFor="disabled" className="block text-sm font-medium">
          Username
        </label>

        <input
          id="disabled"
          type="text"
          value="Disabled field"
          disabled
          readOnly
          className="w-full cursor-not-allowed rounded-md border border-gray-300 bg-gray-100 px-4 py-2 text-gray-500 dark:border-gray-600 dark:bg-gray-700"
        />
      </div>

      <button
        type="submit"
        className="rounded-md bg-purple-600 px-5 py-2 font-medium text-white transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
      >
        Submit
      </button>
    </form>
  );
}
