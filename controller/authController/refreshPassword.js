const {userService} = require('../../service');
const {sendEmail} = require('../../helpers');


module.exports = async (req, res) => {
    try {
        const {email} = req.body;

        await userService.getUserByParams({email: email});

        function gen_password(){
            let len = Math.floor(Math.random()*15+8);
            let gen_password = "";
            let symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!№;%:?*()_+=";
            for (let i = 0; i < len; i++){
                gen_password += symbols.charAt(Math.floor(Math.random() * symbols.length));
            }
            return gen_password;
        }
        await sendEmail(email, gen_password());

        await userService.updateUser({password: gen_password()}, {email: email});

    } catch (e) {
        console.log(e);
    }
};
