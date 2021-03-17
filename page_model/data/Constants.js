import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = {
    VALID_USER:{
        USERNAME: process.env.VALID_USERNAME,
        PASSWORD: process.env.VALID_PASSWORD
    },
    INVALID_USER:{
        USERNAME: process.env.INVALID_USERNAME,
        PASSWORD: process.env.INVALID_PASSWORD
    }
}

export const USER_DATA =
{
    FIRST_NAME : process.env.FIRST_NAME,
    LAST_NAME : process.env.LAST_NAME,
    POSTAL_CODE : process.env.POSTAL_CODE

}

export const URL = process.env.BASE_URL
