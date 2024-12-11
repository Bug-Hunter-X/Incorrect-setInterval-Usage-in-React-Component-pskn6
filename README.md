# Incorrect setInterval Usage in React Component
This repository demonstrates a common error when using `setInterval` within a React component to update state. The issue stems from using the stale closure value of the `count` variable within the `setInterval` callback function.  This results in unexpected behavior, such as the count not incrementing or incrementing incorrectly.

## Problem
The provided code attempts to increment the `count` state every second. However, the callback function passed to `setInterval` uses the initial value of `count`, resulting in either no change or unexpected behavior.

## Solution
The solution uses the functional update form of `setCount` to ensure that the latest state value is always used. This guarantees correct and consistent updates to the `count` state.