const {By} = require('selenium-webdriver');

const addMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Misery');

    await driver.sleep(1000)

    await driver.findElement(By.xpath('//button')).click();

    await driver.sleep(1000)

    const movie = await driver.findElement(By.xpath('//li'));

    const displayed = movie.isDisplayed();

    expect(displayed).toBeTruthy();
};

const deleteMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Misery');
    await driver.sleep(1000)
    await driver.findElement(By.xpath('//button')).click();

    await driver.findElement(By.xpath('//li/button')).click();
    await driver.sleep(2000);

    const list = await driver.findElement(By.xpath('//ul')).getText();
    expect(list).toBe("");

};

const crossOffMovie = async(driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Misery');
    await driver.findElement(By.xpath('//button')).click();

    await driver.findElement(By.xpath('//span')).click();

    //const checked = await driver.findElement(By.css(".checked"))

    const watched = await driver.findElement(By.id('message')).getText();
    expect(watched).toEqual('Movie watched!')

};

const verifyMovie = async (driver) => {

    const movie = 'Back to the Future'

    await driver.findElement(By.xpath('//input')).sendKeys(movie)

    await driver.findElement(By.xpath('//button')).click()

    const movieText = await driver.findElement(By.xpath('//li/span')).getText()

    expect(movieText).toEqual(movie)

};

module.exports = {
    addMovie,
    deleteMovie,
    crossOffMovie,
    verifyMovie
}
