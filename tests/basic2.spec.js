import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Group1',()=>{

    test(' Test1', async ({ page }) => {
      console.log("Test1")
    })

    test(' Test2', async ({ page }) => {
      console.log("Test2")
    })

     test(' Test3', async ({ page }) => {
      console.log("Test3")
    })
})

test.describe('Group2',()=>{

    test(' Test1', async ({ page }) => {
      console.log("Group2Test1")
    })

    test(' Test2', async ({ page }) => {
      console.log("Group2Test2")
    })

     test(' Test3', async ({ page }) => {
      console.log("Group2Test3")
    })
})