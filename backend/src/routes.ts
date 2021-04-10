import {Router} from 'express';
import PokemonController from './controllers/PokemonController';

const routes = Router()

routes.get('/', (req, res) => {
    return res.json({ message: 'Pokemons!' });
});

routes.get('/pokemons', PokemonController.index);
routes.get('/pokemons/:id', PokemonController.show);
routes.post('/pokemons', PokemonController.create);
routes.put('/pokemons/:id', PokemonController.update);
routes.delete('/pokemons/:id', PokemonController.delete);


export default routes;