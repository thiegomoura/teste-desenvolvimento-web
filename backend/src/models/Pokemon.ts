import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pokemons')
export default class Pokemon {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    pokedex_number: number;

    @Column()
    img_name: string;

    @Column()
    generation: number;

    @Column()
    evolution_stage: string;

    @Column()
    evolved: number;

    @Column()
    family_id: number;

    @Column()
    cross_gen: number;

    @Column()
    type1: string;

    @Column()
    type2: string;

    @Column()
    weather1: string;

    @Column()
    weather2: string;

    @Column()
    stat_total: number;

    @Column()
    atk: number;

    @Column()
    def: number;

    @Column()
    sta: number;

    @Column()
    legendary: boolean;

    @Column()
    aquireable: number;

    @Column()
    spawns: number;

    @Column()
    regional: number;

    @Column()
    raidable: number;

    @Column()
    hatchable: number;

    @Column()
    shiny: number;

    @Column()
    nest: number;

    @Column()
    news: number;

    @Column()
    not_gettable: number;

    @Column()
    future_volve: number;

    @Column()
    percent100cp40: number;

    @Column()
    percent100cp39: number;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;
}