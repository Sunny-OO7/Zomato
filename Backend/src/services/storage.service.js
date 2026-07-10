const ImageKit = require("@imagekit/nodejs").default;
const { toFile } = require("@imagekit/nodejs");

const imageKitClient = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadFile(buffer, fileName, folder = "spotify/uploads") {
  try {
    const uploadedFile = await imageKitClient.files.upload({
      file: await toFile(buffer, fileName),
      fileName,
      folder,
    });

    return uploadedFile;
  } catch (error) {
    console.error("ImageKit Upload Error:", error);
    throw error;
  }
}

async function deleteFile(fileId) {
  try {
    await imageKitClient.files.delete(fileId);
    return true;
  } catch (error) {
    console.error("ImageKit Delete Error:", error);
    throw error;
  }
}

module.exports = {
  uploadFile,
  deleteFile,
};
