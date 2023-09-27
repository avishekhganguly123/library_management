const Member = require('../models/Member');

const addMember = async(req,res)=>{
    try{
    const data = req.body;

    const newData = await Member.create({
        memberID: data.Id,
        name: data.name,
        email: data.email
    })

    res.status(201).json({
        message: 'Member added into the database',
        data: newData
    })
    }catch(err){
       res.status(400).json({err})
    }
}

module.exports = {addMember}