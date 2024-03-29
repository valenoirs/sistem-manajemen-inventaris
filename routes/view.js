const router = require('express').Router()

const Barang = require('../models/barang')
const Peminjam = require('../models/peminjam')

router.get('/', (req, res) => {
    res.render('user/index', {title: 'Inventaris', layout: 'user/layout/main', error: req.flash('error')})
})

router.get('/barang', async (req, res) => {
    const barang = await Barang.find()

    res.render('user/barang', {title: 'Barang', layout: 'user/layout/main', error: req.flash('error'), barang})
})

router.get('/peminjam', async (req, res) => {
    if(!req.session.userId){
        req.flash('error', 'Harap login untuk mengakses data peminjam.')
        res.redirect('/')
    }
    else{
        const peminjam = await Peminjam.find()
        const barang = await Barang.find()
    
        res.render('user/peminjam', {title: 'Peminjam', layout: 'user/layout/main', error: req.flash('error'), peminjam, barang})
    }
})

router.get('/user/register', (req, res) => {
    res.render('user/register', {title: 'Register', layout: 'user/layout/main', error: req.flash('error')})
})

module.exports = router