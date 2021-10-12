
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
- step3: declare a new new variable as ini (initial value is 0)
- step4: check if the array length contains more then one values
- step4: if it is true ,then go for loop for array iteration
    - step5.1: get the array elements one by one and find the index of the elements
    - step5.2: check if the array element is not the last element of the array
    - step5.3: If not last
        - step5.3.1:  then slice the array elements from index of that array element to till the end of the array
        - step5.3.2: find the maximum of the sliced elements
        - step5.3.3: subtract the maximum element and that array element
        - step5.3.4: check the subtracted value is greater then the ini variable
        - step5.3.5: if greater then ini value is subtracted vale else go to next iteration
- step6:after loop finished, print that variable ini value
- step7:if not then print "Empty"

 