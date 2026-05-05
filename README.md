# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!  

Name: Janoj Rengaraj  

[Expose site](https://janojr.github.io/Lab5_Starter/expose.html) 
[Explore site](https://janojr.github.io/Lab5_Starter/explore.html)

## Question 1
I wouldn't use a single unit test for this feature. There are probably many parts to this feature that all need to be working. Unit tests are better for testing small functions, like making sure an empty message cannot be sent.

## Question 2
This is a good fit for unit testing. It's a small behavior that can be tested in isolation. We can simply write a unit test to make sure that the app does not allow for messages longer than 80 characters to be sent.