const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
    Category.findAll({
        include: [
            {
            model: Product,
            attributes: ['id', 'product_name', 'price', ]
            }
           

        ]
    }).then(catData => res.json(catData))
    .catch(err => {
        console.log('Error: ', err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
      where: {
          id: req.params.id
      },
      include: [
          {
              model: Product,
              attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
          }
      ]
  }).then(catIdData => res.json(catIdData))
  .catch(err => {
    console.log('Error: ', err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new category
    Category.create({
        category_name: req.body.category_name
    })
    .then(catPostData => res.json(catPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
      {
          category_name: req.body.category_name
      },
      {
        where: {
            id: req.params.id
        }
      }
  )
  .then(catPostChange => {
      if (!catPostChange) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
      }
      res.json(catPostChange);
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
      where: {
          id: req.params.id
      }
  })
  .then(catDeleteData => {
      if (!catDeleteData) {
          res.status(404).json({ message: 'No category with this id'});
          return;
      }
      res.json(catDeleteData);
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

module.exports = router;