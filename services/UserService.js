const User = require("../models/UserModel")
const bcrypt = require("bcrypt")
const { genneralAccessToken, genneralRefreshToken } = require("./JwtService")


const createUser = (newUser) => {
    
    return new Promise(async (resolve, reject)=> {
        const {name, email, password, confirmPassword, phone } = newUser
        try {
            const checkUser = await User.findOne({
                email: email
            })
            if (checkUser !== null){
                resolve({
                    status: 'Ok',
                    message: 'The email is already'
                })
            }
            const hash = bcrypt.hashSync(password,10)
            console.log('hash',hash)
            const createdUser = await User.create ({
                name, 
                email, 
                password: hash, 
                confirmPassword: hash, 
                phone
            })
            if(createdUser){
                resolve({
                    status: 'Oke',
                    message:'SUCCESS',
                    data: createdUser
                })
            }
            
        }catch(e){
            reject(e)
        }
    })
}

const loginUser = (userLogin) => {
    
    return new Promise(async (resolve, reject)=> {
        const {name, email, password, confirmPassword, phone } = userLogin
        try {
            const checkUser = await User.findOne({
                email: email
            })
            if (checkUser === null){
                resolve({
                    status: 'Ok',
                    message: 'The user is not defined'
                })
            } 
            const comparePassword = bcrypt.compareSync(password, checkUser.password)
            if(!comparePassword){
                resolve({
                    status: 'Ok',
                    message: 'The password or user is incorrect'
                })
            }
            const access_token = await genneralAccessToken ({
                id: checkUser.id,
                isAdmin: checkUser.isAdmin
            })

            const refresh_token = await genneralRefreshToken({
                id: checkUser.id,
                isAdmin: checkUser.isAdmin
            })
            console.log('access_token', access_token)
            resolve({
                    status: 'Oke',
                    message:'SUCCESS',
                    access_token,
                    refresh_token
                })
            
            
        }catch(e){
            reject(e)
        }
    })
}
module.exports = {
    createUser,
    loginUser
}