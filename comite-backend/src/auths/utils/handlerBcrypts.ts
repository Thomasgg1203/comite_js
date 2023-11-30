import * as bcrypt from "bcryptjs"

const salt = 10;

async function plainTextToHash(text:string): Promise<string> {
    const hash = bcrypt.hash(text, salt);
    return hash; 
};

async function compareTextToHash(text:string , hash:string): Promise<string>{
    return bcrypt.compare(text , hash);
};
export {plainTextToHash,compareTextToHash};
