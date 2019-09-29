- Big O Notation

Allows us to talk formally about how an algorithm grows as its input grows.

\*\* Rules of thumb for determining time complexity of an algorithm.

1. Constants don't matter
   O(2n) === O(n)
   O(500) === O(1)
   O(13n*2*) === O(n*2*)
2. Smaller terms don't matter
   O(n + 10) === O(n)
   O(1000n + 50) === O(n)
   O(n*2* + 5n + 8) === O(n*2*)

\*\* Big O Shorthands

1. Arithmetic operations are constant
2. Variable assignment is constant
3. Accessing an array by index of object by key is constant
4. In a loop the complexity is the length of the loop times the complexity of what's inside the loop

\*\* Rules of thumb for (auxiliary) space complexity
Where we only care about the algorithm and not it's inputs

1. Primitives (Booleans, numbers, undefined, null) are constant space
2. Strings require O(n) space. Where n is the string length
3. Reference types are generally O(n), arrays (where n is its length) and objects (n as the number of keys)

- Logarithms

*\*\* Example
log*2*(value) = exponent === 2*exponent\* = value

We can omit the _2_

\*\* Rule of thumb for Logarithms

The logarithm of a number roughly measures the number of times you can divide that number by two before you get a value that is equal to or less than one.
