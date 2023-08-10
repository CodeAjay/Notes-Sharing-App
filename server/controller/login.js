const mongoose = require('mongoose');
const User = require("../model/logedin");

const getLogin = async (req,res)=>{
   try{
    const users = await User.find();
    return res.status(200).json({message: "You got your data here...", user: users});

   }catch (error) {
    console.error('Error fetching users:', error);
    return res.status(500).send({ error: 'An error occurred while fetching users' });
  }
};



const handleLogin = async (req,res)=>{
    try{
        const { email, password } = req.body;

        const newUser = new User({
            email: email,
            password: password,
          });


          const savedUser = await newUser.save();

          return res.status(200).send({ message: 'Login data inserted successfully', user: savedUser });

    }catch(err){
        console.error('Error inserting login data:', err);
        return res.status(500).send({ error: 'An error occurred while inserting login data' });
    }
}

module.exports = {
    getLogin,
    handleLogin,
};
