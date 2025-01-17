// 🦆🦆 EASY MODE - FINAL BOSS: HORSE SIZED DUCK  🦆🦆

// API already  implemented on easy mode
export async function fetchAllMyDucks() {
  const url = "https://random-d.uk/api/v2";
  const endpoint = "/list";

  try {
    const response = await fetch(`${url}${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching data from the API!");
  }
}

/* 

A wild mummy duck appears in front of you. She is angry because her ducklings are missing, and she blames YOU!

She demands that you organise all of her ducklings into a very specific structure based on their status codes 
using nested objects with arrays - or she will unleash her horse-sized strength upon you! 😱

Here’s what you must do:
  1. Fetch the correct data from the API.
  2. Sort the ducklings into five categories based on their status codes.
  3. Group the ducklings into arrays (called "images") within each category.
  4. Ensure each category is labelled with the correct status key names: 
     Informational, Success, Redirection, Client Errors, and Server Errors.
  5. Make sure these labels are formatted in camelCase for her trusted friend, Camel 🐪.

Failure to follow these strict orders will result in a direct feather to the face 💢🪶
*/

export async function organiseDucklings() {}
