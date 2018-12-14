const def={
  food:{
    d:'Any nutritious substance that people or animals eat or drink, or that plants absorb, in order to maintain life and growth.',
    i:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg'
  },
  comfort_food:{
    d:'Food that provides consolation or a feeling of well-being, typically any with a high sugar or other carbohydrate content and associated with childhood or home cooking.',
    i:'https://thumbor.thedailymeal.com/m_1fBZnMCORf6lWZxupi6ZozPaE=/840x565/https://www.thedailymeal.com/sites/default/files/story/0_fastfood.jpg'
  },
  edible:{
    d:'Fit to be eaten (often used to contrast with unpalatable or poisonous examples).',
    i:'https://www.kincaidplantmarkers.com/wp-content/uploads/2015/03/Edible-Garden-1.jpg'
  },
  beverage:{
    d:'A drink, especially one other than water.',
    i:'https://www.cargill.com/image/1432079656479/preview-beverages-390x225.jpg'
  },
  ice_cream:{
    d:'a soft frozen food made with sweetened and flavored milk fat.',
    i:'https://upload.wikimedia.org/wikipedia/commons/3/31/Ice_Cream_dessert_02.jpg'
  },
  apple:{
    d:'The round fruit of a tree of the rose family, which typically has thin red or green skin and crisp flesh. Many varieties have been developed as dessert or cooking fruit or for making cider.',
    i:'https://foodsafetynewsfullservice.marlersites.com/files/2013/11/ApplesGroceryMain1.jpg'
  },
  smoothie:{
    d:'A man with a smooth, suave manner.',
    i:'http://images.media-allrecipes.com/userphotos/960x960/4469062.jpg'
  },
  strawberry_banana_smoothie:{
    d:'A smoothie made using strawberryies and bananas.',
    i:'https://www.dinneratthezoo.com/wp-content/uploads/2018/05/strawberry-banana-smoothie-4.jpg'
  },
}

window.wordnet={
  pyramid:[
    [[{word:'food',definition:def['food']['d'],image:[def['food']['i']]}]],
    [ [{word:'comfort food',definition:def['comfort_food']['d'],image:def['comfort_food']['i']}] , [{word:'edible',definition:def['edible']['d'],image:def['edible']['i']}], [{word:'beverage',definition:def['beverage']['d'],image:def['beverage']['i']}] ],
    [ [{word:'Ice Cream',definition:def['ice_cream']['d'],image:def['ice_cream']['i']}] ,[{word:'Apple',definition:def['apple']['d'],image:def['apple']['i']}],[{word:'smoothie',definition:def['smoothie']['d'],image:def['smoothie']['i']}]],
    [[],[],[{word:'strawberry banana smoothie',definition:def['strawberry_banana_smoothie']['d'],image:def['strawberry_banana_smoothie']['i']}]]
  ]
}
