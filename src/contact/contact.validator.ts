import { check } from "express-validator";

export const validationContactCreate = [
    check('specialist', 'The specialist is necessary').not().isEmpty()
]