import { Request, Response } from "express";

export const createContact = async(req: Request, res: Response) => {
    
    console.log(req.files)
    
    if (!req.files ) return res.send('Please send a image')
    const fileTypes = ['image/jpeg', 'image/png', 'image/jpg'];

    //if (!fileTypes.includes(image.mimetype)) return res.send('Image formats supported: JPG, PNG, JPEG');  
}