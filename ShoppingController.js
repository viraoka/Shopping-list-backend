const ShoppingModel = require('./ShoppingModel');

module.exports.getList = async (req, res) => {
    const myList = await ShoppingModel.find();
    res.send(myList)
} 

module.exports.saveList = async (req,res) => {
    const { title } = req.body;
    ShoppingModel.create({ title })
    .then((data) => {console.log('List added')
    res.send(data)
})
}

module.exports.deleteList = async (req,res) => {
    const { _id } = req. body;
    ShoppingModel.findByIdAndDelete(_id)
    .then(() => res.send('Deleted a list'))
}

module.exports.editList = async (req, res) => {
    const { _id, title } = req.body;
    ShoppingModel.findByIdAndUpdate(_id, {title})
    .then(() => res.send('Edited a list'))
}