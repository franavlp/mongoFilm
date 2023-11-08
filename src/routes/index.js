import { name, director, gender, releasedate, duration } from './../controladores/peliculas_controlador.js';
import { Router } from 'express';

let router = Router();

router.get('/api/name/:id', name);
router.get('/api/director/:id', director);
router.get('/api/gender/:id', gender);
router.get('/api/release_date/:id', releasedate);
router.get('/api/duration/:id', duration);

export default router;