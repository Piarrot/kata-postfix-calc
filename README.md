# Postfix Calculator

A postfix expression is one of the following :

-   a number X, in wich case the value of the expression is that of X,
-   a sequence of form E1 E2 OP where E1 and E2 are Postfix expressions and OP is an arithmetic operation.

Samples :

-   `1 1 +` => `1+1 = 2`
-   `20 5 /` => `20/5 = 4`
-   `4 2 + 3 -` => `(4+2)-3 = 3`
-   `3 5 8 * 7 + *` => `((5*8)+7)*3 = 141`

They can also be represented as a tree structure:

```
1 1 + => 1+1 = 2

  +
 / \
1   1

---

4 2 + 3 - => (4+2)-3 = 3

     -
    / \
   +   3
  / \
 4   2
```
