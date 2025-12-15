// Roman Urdu: Cloudinary upload service — screenshot ko upload kar deta hai

import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD!,
  api_key: process.env.CLOUDINARY_KEY!,
  api_secret: process.env.CLOUDINARY_SECRET!,
});

export const UploadService = {
  uploadScreenshot: async (base64: string) => {
    const upload = await cloudinary.v2.uploader.upload(`data:image/jpeg;base64,${base64}`, {
      folder: "whatsapp-payments",
    });

    return upload.secure_url;
  },
};
