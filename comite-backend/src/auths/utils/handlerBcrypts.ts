import * as bcrypt from "bcryptjs"

const salt = 10;

const plainTextToHash = (text:string, hash:string)=> {
    return hash = bcrypt.hash(text, salt);
};

const compareTextToHash = (text:string , hash:string)=>{
    return bcrypt.compare(text , hash)
};

export {plainTextToHash,compareTextToHash};
