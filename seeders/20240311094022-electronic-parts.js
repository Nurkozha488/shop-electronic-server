const { faker } = require('@faker-js/faker');
('use strict');

const electronicManufacturers = [
  'Samsung',
  'Iphone',
  'LG',
  'Huawei',
  'OnePlus',
  'POCO',
  'Realme',
  'Xiaomi',
  'Nokia',
];
const partsManufacturers = [
  'Screen',
  'Glass',
  'Camera',
  'Film',
  'Skin',
  'Sensor',
  'Lesly',
  'Radian',
  'Case',
  'Headphones',
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'ElectronicParts', 
      [...Array(100)].map(() => ({
        electronic_manufacturer: 
          electronicManufacturers[
            Math.floor(Math.random() * electronicManufacturers.length)
          ],
        parts_manufacturer: 
          partsManufacturers[
            Math.floor(Math.random() * partsManufacturers.length)
          ],
        price: faker.random.numeric(4),
        name: faker.lorem.sentence(2),
        description: faker.lorem.sentence(10),
        images: JSON.stringify(
          [...Array(7)].map(
          () => 
            `${faker.image.technics()}?random=${faker.random.numeric(30)}`,
        ),
      ),
      vendor_code: faker.internet.password(),
      in_stock: faker.random.numeric(1),
      bestseller: faker.datatype.boolean(),
      new: faker.datatype.boolean(),
      popularity: faker.random.numeric(3),
      compatibility: faker.lorem.sentence(7),
      createdAt: new Date(),
      updatedAt: new Date(),
    })),
  );
},

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ElectronicParts', null, {});
  },
};
