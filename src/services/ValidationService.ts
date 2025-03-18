export default class ValidationService {

   static validateMail(value:string):boolean {
            const result = value.toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        if(!result) {
            return false;
        }
        return true
    }

   static validatePassword(str1:string,str2:string):boolean {
        return str1 === str2
    }
}