var router = require('express').Router()
import { id, name, director, gender, releasedate, duration } from './../controladores/peliculas_controlador';

router.get('/api/id/:id', id);
router.get('/api/name/:id', name);
router.get('/api/director/:id', director);
router.get('/api/gender/:id', gender);
router.get('/api/release_date/:id', releasedate);
router.get('/api/duration/:id', duration);

