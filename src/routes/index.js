import { name, director, gender, releasedate, duration } from './../controladores/peliculas_controlador.js';
import { Router } from 'express';

let router = Router();

router.post('/api/name', name);
router.post('/api/director', director);
router.post('/api/gender', gender);
router.post('/api/releasedate', releasedate);
router.post('/api/duration', duration);

export default router;