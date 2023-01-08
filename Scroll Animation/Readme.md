# Scroll Animation 

## Overview

This code sets up an event listener that listens for `scroll` events on the window. When a scroll event occurs,
the `updateUi` function is called. The `updateUi` function loops through a collection of elements with the class `box`, 
and adds or removes the class `active` depending on the position of each element relative to the viewport. Specifically,
the function checks whether the top of the element is within 80% of the window height from the top of the viewport. 
If it is, the `active` class is added, otherwise it is removed.

## Live Link

[Live Link](https://unrivaled-hamster-460c23.netlify.app/)
