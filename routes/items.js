// Worked along mentor Kwame and verified my work with solution after every step

const Item = require('../item');
const items = require('../fakeDb')
const express = require('express');
const router = express.Router();


router.get('', function(req, res, next) {
try {
    return res.json({items: Item.findAll()})
} catch (err) {
    return next(err)
}
})

router.post('', function(req,res,next){
    try {
    let newItem = new Item(req.body.name, req.body.price)
    return res.json({"added": newItem})
    } catch (err) {
        return next(err)
    }
})

router.get('/:name', function(req,res,next){
try {
    let foundItem = Item.find(req.params.name)
    return res.json({item: foundItem})
} catch(err) {
    return next(err)
}
})

router.patch('/:name', function(req,res,next){
    try {
        let foundItem = Item.update(req.params.name, req.body);
        return res.json({'updated': foundItem})
    } catch(err) {
        return next(err)
    }
})

router.delete('/:name', (req, res, next) => {
    try {
      Item.remove(req.params.name);
      return res.json({message:'Deleted'});
    } catch (err) {
      return next(err)
    }
  });






module.exports = router;