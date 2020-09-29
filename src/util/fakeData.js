import moment from "moment";
import faker from "faker";

//fake time
export const joseTime = moment().startOf("day").fromNow();
export const alejandroTime = moment().startOf("hour").fromNow();
export const omarTime = moment().subtract(6, "days").calendar();
export const randomTime = moment().subtract(1, "hours").calendar();
export const randomTime1 = moment().subtract(2, "hours").calendar();
export const randomTime2 = moment().subtract(1, "hours").calendar();
export const randomTime3 = moment().subtract(2, "hours").calendar();
//fake names
export const fakeNameOne = faker.name.firstName();
export const fakeNameTwo = faker.name.firstName();
export const fakeNameThree = faker.name.firstName();
export const fakeNameFive = faker.name.firstName();
export const fakeNameSix = faker.name.firstName();
export const fakeNameSeven = faker.name.firstName();
//fake comment
export const fakeComment1 = faker.hacker.phrase();
export const fakeComment2 = faker.hacker.phrase();
export const fakeComment3 = faker.hacker.phrase();
export const fakeComment4 = faker.hacker.phrase();
export const joseComment = faker.hacker.phrase();
export const alejandroComment = faker.hacker.phrase();
export const omarComment = faker.hacker.phrase();
