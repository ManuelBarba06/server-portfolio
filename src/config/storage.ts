import cloudinary from 'cloudinary';

const cloudinaryV2 = cloudinary.v2

cloudinaryV2.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret:process.env.CLOUDINARY_SECRET
})

const handleUpload = async(file:string) => {
    const res = await cloudinaryV2.uploader.upload(file,
        {
            folder: 'Test'
        },
        (result) => result
    )
    
    return res
}

export default handleUpload