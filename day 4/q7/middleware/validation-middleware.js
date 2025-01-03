const { error } = require('console');
const POST_MESSAGE_FORMAT = require('../constant/messageformat')
const fs = require("fs")


error_log_file = "res.txt";

function validation_failure_log(file_name, log) {
    fs.appendFile(file_name, log + "\n", (err) => {
        if (err) {
            console.error("Failed to write to log file:", err);
        }
    });
}



function validationMiddleware(req, res, next){

  
    const body = (req.body);
    let is_validated = true

    for (const key in body){
        let key_arr;
        try{
            key_arr = POST_MESSAGE_FORMAT[key].split(", ");
        }catch(e){
            is_validated = false
            const validation_message = `${Date.now()} - ${key} is invalid Incorrect Format \n`;
            validation_failure_log(error_log_file, validation_message)
            continue;

        }
        if (key_arr[0] == "number"){
            if (typeof body [key] == key_arr[0]){
                is_validated = false
                const validation_message = `${Date.now()} - ${key} is in Incorrect Format`;
                validation_failure_log(error_log_file, validation_message)
            }
        }else if (key_arr[0] == "string"){
            if(typeof body [key] != key_arr[0]){
                is_validated = false
                const validation_message = `${Date.now()} - ${key} is in Incorrect Format`;
                validation_failure_log(error_log_file, validation_message)
            }
        }else if (key_arr[0] == "object"){
            if  (Array.isArray(body[key])){
                const string_cheak = body[key].filter((e)=> typeof e != key_arr[1]);
                if (string_cheak.length > 0){
                    is_validated = false
                    const validation_message = `${Date.now()} - ${key} is in Incorrect Format`;
                    validation_failure_log(error_log_file, validation_message)
                return 0;
                }
            }         
        }
    }
    is_validated ? 
        next() 
        : res.status(400).json({message: "bad request. some data is incorrect"});
};

module.exports = validationMiddleware;