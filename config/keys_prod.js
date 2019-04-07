module.exports = {
  mongoURI: process.env.DB_HOST,
  secretKey: process.env.SECRET_KEY,
  cloudinary: {
    name: process.env.CLOUDINARY_NAME,
    key: process.env.CLOUDINARY_KEY,
    secret: process.env.CLOUDINARY_SECRET
  }
};
