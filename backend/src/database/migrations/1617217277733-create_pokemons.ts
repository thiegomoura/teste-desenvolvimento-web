import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createPokemons1617217277733 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'pokemons',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          isNullable: false,
          generationStrategy: 'increment',
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'pokedex_number',
          type: 'integer',
        },
        {
          name: 'img_name',
          type: 'varchar',
        },
        {
          name: 'generation',
          type: 'integer',
        },
        {
          name: 'evolution_stage',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'evolved',
          type: 'integer',
          isNullable: true,
        },
        {
          name: 'family_id',
          type: 'integer',
          isNullable: true,
        },
        {
          name: 'cross_gen',
          type: 'integer',
          isNullable: true,
        },
        {
          name: 'type1',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'type2',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'weather1',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'weather2',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'stat_total',
          type: 'integer',
          isNullable: true,
        },
        {
          name: 'atk',
          type: 'integer',
          isNullable: true,
        },
        {
          name: 'def',
          type: 'integer',
          isNullable: true,
        },
        {
          name: 'sta',
          type: 'integer',
          isNullable: true,
        },
        {
          name: 'legendary',
          type: 'bollean',
          default: false,
          isNullable: true,
        },
        {
          name: 'aquireable',
          type: 'integer',
          isNullable: true,
        },
        {
          name: 'spawns',
          type: 'integer',
          isNullable: true,
        },
        {
          name: 'regional',
          type: 'integer',
          isNullable: true,
        },
        {
          name: 'raidable',
          type: 'integer',
          isNullable: true,
        },
        {
          name: 'hatchable',
          type: 'integer',
          isNullable: true,
        },
        {
          name: 'shiny',
          type: 'integer',
          isNullable: true,
        },
        {
          name: 'nest',
          type: 'integer',
          isNullable: true,
        },
        {
          name: 'news',
          type: 'integer',
          isNullable: true,
        },
        {
          name: 'not_gettable',
          type: 'integer',
          isNullable: true,
        },
        {
          name: 'future_volve',
          type: 'integer',
          isNullable: true,
        },
        {
          name: 'percent100cp40',
          type: 'integer',
          isNullable: true,
        },
        {
          name: 'percent100cp39',
          type: 'integer',
          isNullable: true,
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: `CURRENT_TIMESTAMP`,
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: `CURRENT_TIMESTAMP`,
        },
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pokemons');
  }

}