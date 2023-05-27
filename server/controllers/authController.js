const User = require('../models/user')
const Company = require('../models/company')

const test = (req, res) => {
  res.json('test is working')
}

const registerUser = async (req, res) => {
  try {
    const {name , email, password, dateOfBirth, address, phone} = req.body;
    //Checking if name was entered
    if(!name){
      return res.json({
        error: 'name is required'
      })
    };
    //Cheking if password is good
    if(!password || password.length < 6){
      return res.json({
        error: 'Password is required and must be at least 6 characters long'
      })
    }; 
    //Cheking if email is good
    const exist = await User.findOne({email});
    if(exist) {
      return res.json({
        error: 'Email is already take, choose another one'
      })
    };
    // Checking if date was entered
    if (!dateOfBirth) {
      return res.json({
        error: 'Date of birth is required'
      });
    };

    // Checking if andrees was entered
    if (!address) {
      return res.json({
        error: 'Address is required'
      });
    };

    // Checking if phone was entered
    if (!phone) {
      return res.json({
        error: 'Phone number is required'
      });
    };

    const user = await User.create({
      name, email, password, dateOfBirth, address, phone
    })
      return res.json(user)
  } catch (error) {
    console.log(error)
  }
}
const registerCompany = async (req, res) => {
  try {
    const {namecom , emailcom, passwordcom, cnpj, addresscom, phonecom} = req.body;
    //Checking if name was entered
    if(!namecom){
      return res.json({
        error: 'name is required'
      })
    };
    //Cheking if password is good
    if(!passwordcom || passwordcom.length < 6){
      return res.json({
        error: 'Password is required and must be at least 6 characters long'
      })
    }; 
    //Cheking if email is good
    const exist = await User.findOne({emailcom});
    if(exist) {
      return res.json({
        error: 'Email is already take, choose another one'
      })
    };
    // Checking if cnpj was entered
    if (!cnpj) {
      return res.json({
        error: 'Cnpj is required'
      });
    };

    // Checking if andrees was entered
    if (!addresscom) {
      return res.json({
        error: 'Address is required'
      });
    };

    // Checking if phone was entered
    if (!phonecom) {
      return res.json({
        error: 'Phone number is required'
      });
    };

    const user = await User.create({
      name, email, password, cnpj, address, phone
    })
      return res.json(user)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  test,
  registerUser,
  registerCompany
}