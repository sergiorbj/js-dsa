/* 

Bookstore Discount Problem

A bookstore sells books for $9 each. However, if you buy books from a special series of 7 unique books, 
you can receive a discount based on the number of unique books in your purchase. The discount is applied as follows:

2 different books → 5% discount

3 different books → 10% discount

4 different books → 15% discount

5 different books → 20% discount

6 different books → 25% discount

7 different books → 30% discount

However, if a book has multiple copies, the second (or more) copy does not contribute to the discount group of the 
first copy. Instead, these copies must form separate discount groups.

Example

Input: [1, 1, 2, 2, 3, 4]

Breakdown:
First group: [1, 2, 3, 4] → 15% discount

Second group: [1, 2] → 5% discount

Output:
The minimum price the customer has to pay.

Write a function in Node.js that takes an array of book IDs (each number represents a book in the series) and 
returns the lowest possible price the customer has to pay.

*/

const BOOK_PRICE = 9;
const DISCOUNTS = {
  1: 1,
  2: 0.95,
  3: 0.9,
  4: 0.8,
  5: 0.75,
  6: 0.7,
  7: 0.65,
};

const getMinimumPrice = (books) => {
  if (books.length === 0) return 0;

  const booksAmount = {};

  books.forEach((book) => {
    booksAmount[book] = (booksAmount[book] || 0) + 1;
  });

  let bookGroups = Object.values(booksAmount).sort((a, b) => b - a);
  let totalPrice = 0;

  while (bookGroups.some((count) => count > 0)) {
    // Filter the highest amount of groups to get discount
    const uniqueGroups = bookGroups.filter((count) => count > 0).length;

    totalPrice += uniqueGroups * BOOK_PRICE * DISCOUNTS[uniqueGroups];

    // Remove counted books
    bookGroups = bookGroups
      .map((count) => count - 1)
      .filter((count) => count > 0);
  }

  return parseFloat(totalPrice.toFixed(2));
};

export { getMinimumPrice };
