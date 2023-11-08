import * as bcrypt from "bcryptjs"

const salt = 10;

const plainTextToHash = (text:string)=> {
    const hash = bcrypt.hash(text, salt);
    return hash; 
};

const compareTextToHash = (text:string , hash:string)=>{
    return bcrypt.compare(text , hash);
};
export {plainTextToHash,compareTextToHash};
