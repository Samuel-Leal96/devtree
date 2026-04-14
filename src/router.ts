import { Router } from 'express';

const router = Router();

//Routing
router.get('/', (req, res) => {
    res.send('Hola mundo en Express / TypeScript!');
});

router.get('/nosotros', (req, res) => {
    res.send('Nosotros');
});

router.get('/contacto', (req, res) => {
    res.send('Contacto');
});


export default router;