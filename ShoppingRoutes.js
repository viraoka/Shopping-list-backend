const { Router } = require('express');
const { getList, saveList, deleteList, editList } = require('./ShoppingController');
const router = Router();

router.get('/', getList);
router.post('/saveLists', saveList);
router.post('/deleteList', deleteList);
router.post('/editList', editList);


module.exports = router;