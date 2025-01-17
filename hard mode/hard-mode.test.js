import { describe, expect, expectTypeOf, test, vi } from "vitest";
import { fetchAllMyDucks, organiseDucklings } from "./hard-mode.js";

describe("TESTING FETCHING ALL DUCKS FUNCTION:", () => {
  // TEST 1:  that the API fetch function works without throwing an error
  test("test 1: check to see if function is throwing an error or was implemented correctly", async () => {
    // ARRANGE: define expected variables
    const url = "https://random-d.uk/api/v2/list";

    // ACT: Call the function that makes the API request and store the result
    const actual = fetchAllMyDucks(url);

    // ASSERT: Check if the result is not an error
    await expect(actual).resolves.not.toThrowError();
  });

  test("test 2: check if api results returns object", async () => {
    // ARRANGE: define expected variables
    const url = "https://random-d.uk/api/v2/list";

    // ACT: Call the function that makes the API request and store the result
    const actual = await fetchAllMyDucks(url);

    // ASSERT: Check if the result is an array
    expectTypeOf(actual).toBeObject();
  });
});

describe("TESTING ORGANISE DUCKS FUNCTION:", () => {
  test("test 3: check if function returns an object", async () => {
    // ARRANGE: define expected variables for object test
    const expectedDataType = "object";

    // ACT: Call the function that organises the ducklings
    const actualData = await organiseDucklings();

    // ASSERT: Check if the result is an object
    expectTypeOf(actualData).toBeObject();
  });

  test("test 4: check if function returns the correct number of categories", async () => {
    // ARRANGE: define expected variables for category count test
    const expectedCategoryCount = 5;

    // ACT: Call the function that organises the ducklings
    const actualData = await organiseDucklings();
    const actualCategoryCount = Object.keys(actualData).length;

    // ASSERT: Check if the result has the correct number of categories
    expect(actualCategoryCount).toEqual(expectedCategoryCount);
  });

  test("test 5: check if 'images' is an array in each category", async () => {
    // ACT: Call the function that organises the ducklings
    const actualData = await organiseDucklings();

    // ASSERT: Check if 'images' is an array in each category
    Object.values(actualData).forEach((categoryData) => {
      expectTypeOf(categoryData.images).toBeArray();
    });
  });
});

test.each([
  // ARRANGE: define expected variables for category test
  [1, { status: "informational", images: ["100.jpg"] }],
  [2, { status: "success", images: ["200.jpg"] }],
  [3, { status: "redirection", images: ["302.jpg", "301.jpg"] }],
  [
    4,
    {
      status: "clientErrors",
      images: [
        "451.jpg",
        "400.jpg",
        "409.jpg",
        "420.jpg",
        "418.jpg",
        "403.jpg",
        "413.jpg",
        "404.jpg",
        "429.jpg",
        "426.jpg",
      ],
    },
  ],
  [5, { status: "serverErrors", images: ["500.jpg"] }],
])(
  "test 6: category %i - check if function returns correct structure of categories ",
  async (category, expectedValue) => {
    // Act: Call the function that organises the ducklings
    const actualData = await organiseDucklings();

    // Assert: Check if the category has the correct structure
    const actualValue = actualData[category];

    // Check the 'status' and 'images' properties
    expect(actualValue).toEqual(expectedValue);
  }
);

test.each([
  // ARRANGE: define expected variables for image count test
  [1, 1],
  [2, 1],
  [3, 2],
  [4, 10],
  [5, 1],
])(
  "test 7: category %i - check if function returns correct number of images in array",
  async (category, expectedCount) => {
    // ACT: Call the function that organises the ducklings
    const actualData = await organiseDucklings();

    // ASSERT: Check the number of images in the category
    expect(actualData[category].images.length).toBe(expectedCount);
  }
);
