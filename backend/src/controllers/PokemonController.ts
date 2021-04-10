import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bd from '../database/connection'
import Pokemon from '../models/Pokemon';

interface PokemonsProps {
    name: string,
    pokedex_number: number,
    img_name: string,
    generation: string,
    evolution_stage: number,
    evolved: number,
    family_id: number,
    cross_gen: number,
    type1: number,
    type2: number,
    weather1: number,
    weather2: number,
    stat_total: number,
    atk: number,
    def: number,
    sta: number,
    legendary: number,
    aquireable: number,
    spawns: number,
    regional: number,
    raidable: number,
    hatchable: number,
    shiny: number,
    nest: number,
    news: number,
    not_gettable: number,
    future_volve: number,
    percent100cp40: number,
    percent100cp39: number,
}

export default {
    async index(req: Request, res: Response) {
        const pokemonsRepository = getRepository(Pokemon);

        const pokemons = await pokemonsRepository.find();

        return res.json(pokemons);
    },
    async show(req: Request, res: Response) {
        const { id } = req.params;

        const pokemonsRepository = getRepository(Pokemon);

        const pokemons = await pokemonsRepository.findOne(id);

        return res.json(pokemons);
    },
    async create(req: Request, res: Response) {
        try {
            const {
                name,
                pokedex_number,
                img_name,
                generation,
                evolution_stage,
                evolved,
                family_id,
                cross_gen,
                type1,
                type2,
                weather1,
                weather2,
                stat_total,
                atk,
                def,
                sta,
                legendary,
                aquireable,
                spawns,
                regional,
                raidable,
                hatchable,
                shiny,
                nest,
                news,
                not_gettable,
                future_volve,
                percent100cp40,
                percent100cp39,
            } = req.body;

            const pokemonsRepository = getRepository(Pokemon);

            const pokemon = pokemonsRepository.create({
                name,
                pokedex_number,
                img_name,
                generation,
                evolution_stage,
                evolved,
                family_id,
                cross_gen,
                type1,
                type2,
                weather1,
                weather2,
                stat_total,
                atk,
                def,
                sta,
                legendary,
                aquireable,
                spawns,
                regional,
                raidable,
                hatchable,
                shiny,
                nest,
                news,
                not_gettable,
                future_volve,
                percent100cp40,
                percent100cp39,
            });

            await pokemonsRepository.save(pokemon);

            return res.json({ message: "Data saved successfully!" })
        } catch (error) {
            return res.json({ err: error })
        }

    },
    async update(req: Request, res: Response) {

    },
    async delete(req: Request, res: Response) {

    },

}