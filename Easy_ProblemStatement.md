# HackerTrailTests
## Easy Problem Statement
Given the following alphabet your task is to replace normal letters with matrixes of characters showed below.
```
  __   __   __  __   __  __  __          _  
 |__| |__\ |   |  \ |_  |_  |_   |__| |  | |_/ |
 |  | |__/ |__ |__/ |__ |   |__| |  | | _| | \ |__
            __   __   __   __  ___                __
 |\/| |\ | |  | |__| |__| |__   |  |  |  |  | \_/  /
 |  | | \| |__| |    | \   __|  |  |__|  |/\|  |  /_
``` 
 ##### Input
 There is an unknown number of tests (less than 100). Each test consists of an integer **n** and a string **s** of length lower than 1001. 
 **s** contains only small and large latin letters.
 
 ##### Output
 Your task is to print string **s** replacing normal letters with the ones above. If n=2 you should reverse the order of the letters 
 and for **n=0** the program should end. Furthermore, the distance between the letters is 1 space and between words is 3 spaces.
 
 ## Example
 ##### Input:
 1 alphabeth
 2 ALPHAbeth
 1 How are you
 0
 
 ##### Output:
```
   __       __        __   __   __ ___
  |__| |   |__| |__| |__| |__\ |_   |  |__|
  |  | |__ |    |  | |  | |__/ |__  |  |  |
       ___ __   __   __        __       __
  |__|  |   _| /__| |__| |__| |__|   | |__|
  |  |  |  __| \__| |  | |  |    | __| |  |
        __          __   __   __        __
  |__| |  | |  |   |__| |__| |_    \_/ |  | |  |
  |  | |__| |/\|   |  | | \  |__    |  |__| |__|
```
