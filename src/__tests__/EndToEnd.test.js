import puppeteer from 'puppeteer'
jest.setTimeout(30000);

describe('show/hide an event details', () => {
    let browser;
    let page;
    beforeAll(async () => {

        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event-container');
    });

    afterAll(() => {
        browser.close();
    });

    test('An event element is collapsed by default', async () => {
        const eventDetails = await page.$('.event-container .event-details');
        expect(eventDetails).toBeNull();
    });

    test('User can expand an event to see its details', async () => {
        await page.click('.event-container .toggle-button');
        const eventDetails = await page.$('.event-container .event-details');
        expect(eventDetails).toBeDefined();
    });

    test('User can collapse an event to hide its details', async () => {
        await page.click('.event-container .toggle-button');
        const eventDetails = await page.$('.event-container .event-details');
        expect(eventDetails).toBeNull();
    })
})