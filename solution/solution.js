// 🦆🦆 FULL SOLUTION - FINAL BOSS: HORSE SIZED DUCK  🦆🦆

/* 
A wild mummy duck appears in front of you. She is angry because her ducklings are missing, and she blames YOU!
She orders you to fetch all her ducklings immediately, or she will attack you with all of her horse sized strength 😱

Your mission is to:
  - Retrieve all the duckling data from an API endpoint
  - She has given you the base url, which is: https://random-d.uk/api/v2
  - However, you have to find the correct endpoint to get the ducklings!

Here are the following options:
  1. /quack
  2. /:id/duck
  3. /flapflap
  4. /list
  5. /lostducklings
*/

export async function fetchAllMyDucks() {
  // Define the base URL and endpoint to fetch the data from the API
  const url = "https://random-d.uk/api/v2";
  const endpoint = "/list";

  try {
    // Make the request to the API by combining the base URL and endpoint
    const response = await fetch(`${url}${endpoint}`);

    // Parse the response as JSON
    const data = await response.json();

    // Return the data fetched from the API
    return data;
  } catch (error) {
    // If an error occurs during the fetch, throw a new error with a message
    throw new Error("Error fetching data from the API!");
  }
}

/* 
Mummy Duck is NOT happy 🦆 

This time, she demands that you organise all of her ducklings according to a very specific structure based on their status codes 
using nested objects with arrays! 👀

Here’s what you must do:
  1. Fetch the correct data from the API.
  2. Sort the ducklings into five categories based on their status codes.
  3. Group the ducklings into arrays (called "images") within each category.
  4. Ensure each category is labelled with the correct status key names: 
     Informational, Success, Redirection, Client Errors, and Server Errors.
  5. Make sure these labels are formatted in camelCase for her trusted friend, Camel 🐪.

Failure to follow these strict orders will result in a direct feather to the face 💢🪶
*/

export async function organiseDucklings() {
  // Destructure the 'http' object from the result of fetchAllMyDucks() and alias it as 'httpDuckImage'
  const { http: httpDuckImage } = await fetchAllMyDucks();

  // Sort the ducklings into five categories based on their status codes
  const categories = {
    1: { status: "informational", images: [] },
    2: { status: "success", images: [] },
    3: { status: "redirection", images: [] },
    4: { status: "clientErrors", images: [] },
    5: { status: "serverErrors", images: [] },
  };

  // Map over each duck (status code) in the HTTP responses

  httpDuckImage.forEach((duck) => {
    // Parse the duck (status code) into an integer
    // If the string contains non-numeric characters, such as "404.js",
    // parseInt will stop parsing at the first non-numeric character (".")
    // and return only the numeric portion before it.
    // e.g. parseInt("404.js", 10) will return 404.
    const statusCode = parseInt(duck, 10);

    // Determine the category by dividing the status code by 100 and rounding down
    const category = Math.floor(statusCode / 100);

    // Add the duck (status code) to the matching category label's images array
    categories[category].images.push(duck);
  });

  // Return the organised categories object
  return categories;
}
