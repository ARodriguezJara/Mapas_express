const express = require('express');
const TaqueriasService = require('../services/taqueria.service');
const router = express.Router();
const service = new TaqueriasService();

router.get('/',async function(req,res,next){
  try {
    res.json(await service.find(req.query.TaqueriasService));
    } catch (error) {
    next(error);
    }
});

router.get('/:id',async function(req,res,next){
  try {
    res.json(await service.findOne(req.params.id));
    } catch (error) {
    next(error);
    }
});
router.post('/',async function(req,res,next){
  try {
    res.json(await service.create(req.body));
  } catch (error) {
    next(error);
  }

});
router.put('/:id',async function(req,res,next){});
router.delete('/:id',async function(req,res,next){
  try {
    res.json(await service.delete(req.params.id));
    } catch (error) {
    next(error);
    }
});


module.exports = router;
