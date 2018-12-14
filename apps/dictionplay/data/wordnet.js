const def={
  food:{
    d:'Any nutritious substance that people or animals eat or drink, or that plants absorb, in order to maintain life and growth.',
    i:'/apps/dictionplay/data/images/food.jpg'
  },
  comfort_food:{
    d:'Food that provides consolation or a feeling of well-being, typically any with a high sugar or other carbohydrate content and associated with childhood or home cooking.',
    i:'/apps/dictionplay/data/images/comfortfood.jpg'
  },
  edible:{
    d:'Fit to be eaten (often used to contrast with unpalatable or poisonous examples).',
    i:'/apps/dictionplay/data/images/edible.jpeg'
  },
  beverage:{
    d:'A drink, especially one other than water.',
    i:'/apps/dictionplay/data/images/beverage.png'
  },
  ice_cream:{
    d:'A soft frozen food made with sweetened and flavored milk fat.',
    i:'/apps/dictionplay/data/images/icecream.jpg'
  },
  apple:{
    d:'The round fruit of a tree of the rose family, which typically has thin red or green skin and crisp flesh. Many varieties have been developed as dessert or cooking fruit or for making cider.',
    i:'/apps/dictionplay/data/images/apple.jpeg'
  },
  smoothie:{
    d:'A man with a smooth, suave manner.',
    i:'/apps/dictionplay/data/images/smoothie.gif'
  },
  strawberry_banana_smoothie:{
    d:'A smoothie made using strawberryies and bananas.',
    i:'/apps/dictionplay/data/images/strawberrybananasmoothie.jpg'
  },
}

window.wordnet={
  pyramid:[
    [[{word:'food',definition:def['food']['d'],image:[def['food']['i']]}],[{word:'food',definition:def['food']['d'],image:[def['food']['i']]}],[{word:'food',definition:def['food']['d'],image:[def['food']['i']]}]],
    [ [{word:'comfort food',definition:def['comfort_food']['d'],image:def['comfort_food']['i']}] , [{word:'edible',definition:def['edible']['d'],image:def['edible']['i']}], [{word:'beverage',definition:def['beverage']['d'],image:def['beverage']['i']}] ],
    [ [{word:'Ice Cream',definition:def['ice_cream']['d'],image:def['ice_cream']['i']}] ,[{word:'Apple',definition:def['apple']['d'],image:def['apple']['i']}],[{word:'smoothie',definition:def['smoothie']['d'],image:def['smoothie']['i']}]],
    [[],[],[{word:'strawberry banana smoothie',definition:def['strawberry_banana_smoothie']['d'],image:def['strawberry_banana_smoothie']['i']}]]
  ]
}
