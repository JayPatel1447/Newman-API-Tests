import {test, expect, Page} from  "@playwright/test";

test.describe("Find price of given product page", () => 
{
    //Amazon test
    test("Open given url", async ({page}) => {
        
        await page.goto('https://www.amazon.in/Samsung-Monitor-Netflix-Streaming-LS27AM500NWXXL/dp/B08XB1F1RD/');
        await expect(page.locator("//a[@aria-label='Amazon']")).toBeVisible();
        await console.log('Amazon product page opened.');

        let price = await page.locator("(//span[@class='a-price-whole'])[1]").textContent();
        price = price.replace(/[^a-zA-Z0-9]/g, '');
        await console.log("Price is: "+price);
    })
});