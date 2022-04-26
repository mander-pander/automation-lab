const { Builder, Capabilities } = require('selenium-webdriver');
require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

const {addMovie} = require('../functions/addMovie.js')
const {deleteMovie} = require('../functions/addMovie.js')
const {crossOffMovie} = require('../functions/addMovie.js')
const {verifyMovie} = require('../functions/addMovie.js')

beforeEach(async () => {
    await driver.get('http://127.0.0.1:5500/movie-list/index.html')
})

afterAll(async () => {
    await driver.quit()
})

describe ('Movie Tests', () => {
    test('Add a movie', async () => {
        await addMovie(driver);
        await driver.sleep(3000)
    })

    test('Delete a movie', async () => {
        await deleteMovie(driver);
        await driver.sleep(2000);
    })
    test('Cross off movie', async() => {
        await crossOffMovie(driver);
        await driver.sleep(2000);
    })
    test('Verify Movie', async() => {
        await verifyMovie(driver);
        await driver.sleep(2000);
    })
})
