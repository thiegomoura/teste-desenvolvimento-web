import {Router} from 'express';
import PokemonController from './controllers/PokemonController';

const routes = Router()

//default
routes.get('/', (req, res) => {
    return res.json({ message: 'Hello world!' });
});

//list all
routes.get('/pokemons', PokemonController.index);
//list one
routes.get('/pokemons/:id', PokemonController.show);
//create
routes.post('/pokemons',PokemonController.create);
//search
routes.get('/pokemons/:id', (req, res) => { });
//update
routes.put('/pokemons/:id', (req, res) => { });
//delete
routes.delete('/pokemons/:id', (req, res) => { });


export default routes;