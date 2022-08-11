const express = require('express')
const app = express() //invoking the express

app.set('view engine', 'ejs') //setting viewing file ejs
app.use(express.static('./styles'))
app.use(express.static('./images'))

app.get('/', (req, res) => {
  let data = [
    {
      img: '/1.avif',
      name: 'Vikrant Rona',
      genre: 'Mystery/thriller/adventure',
    },

    {
      img: '/2.avif',
      name: 'Laal Singh Chaddah',
      genre: 'Mystery/thriller/adventure',
    },
    {
      img: '/3.avif',
      name: 'Bhimsa',
      genre: 'Mystery/thriller/adventure',
    },
    {
      img: '/4.avif',
      name: 'Sita raman',
      genre: 'Mystery/thriller/adventure',
    },
    {
        img: '/5.avif',
        name: 'Raksha Bandhan',
        genre: 'Mystery/thriller/adventure',
      }
  ]

  //to send the file we use res.render
  res.render('home', { name: 'home page', data,  
  img1:'/d1.avif',
  img2:'/d2.avif',
  img3:'/d3.avif',
  img4:'/d4.avif',
  img5:'/d5.avif'
})
})

app.listen(3000, () => {
  console.log('listening')
})
