import moment from "moment";
import faker from "faker";

//fake time
export const time = {
  joseTime: moment().startOf("day").fromNow(),
  alejandroTime: moment().startOf("hour").fromNow(),
  omarTime: moment().subtract(6, "days").calendar(),
  randomTime: moment().subtract(1, "hours").calendar(),
  randomTime1: moment().subtract(2, "hours").calendar(),
  randomTime2: moment().subtract(1, "hours").calendar(),
  randomTime3: moment().subtract(2, "hours").calendar(),
};

//fake names
export const usersName = {
  fakeNameOne: faker.name.firstName(),
  fakeNameTwo: faker.name.firstName(),
  fakeNameThree: faker.name.firstName(),
  fakeNameFive: faker.name.firstName(),
  fakeNameSix: faker.name.firstName(),
  fakeNameSeven: faker.name.firstName(),
};

//fake comment
export const fakeComment = {
  fakeComment1: faker.hacker.phrase(),
  fakeComment2: faker.hacker.phrase(),
  fakeComment3: faker.hacker.phrase(),
  fakeComment4: faker.hacker.phrase(),
  joseComment: faker.hacker.phrase(),
  alejandroComment: faker.hacker.phrase(),
  omarComment: faker.hacker.phrase(),
};

//image
export const avatarImages = {
  image1: faker.image.avatar(),
  image2: faker.image.avatar(),
  image3: faker.image.avatar(),
  image4: faker.image.avatar(),
  image5: faker.image.avatar(),
  image6: faker.image.avatar(),
  image7: faker.image.avatar(),
};
