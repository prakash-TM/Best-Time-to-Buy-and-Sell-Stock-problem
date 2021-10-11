
# Best Time to Buy and Sell Stock

### Problem statement:

You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


### Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

### Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.


### Algorithm

- step1: get the array element as the variable name is arr
- step2: find the length of the array
- step3: declare a new array
- step4: In for loop iterate the array
    - step4.1: get the array elements one by one and find the index of the elements
    - step4.2: check if the array element is not the last element of the array
    - step4.3: If not last
        - step4.3.1:  then slice the array elements from index of that array element to till the end of the array
        - step4.3.2: find the maximum of the sliced elements
        - step4.3.3: subtract the maximum element and that array element
        - step4.3.4: push the subtracted value into the new array as named new_arr
    - step4.4: Is that is last
        - step4.4.1: push the 0 into the new_arr
- step5: after loop finished, find the maximum value fo new_arr
- step6: print that value
 