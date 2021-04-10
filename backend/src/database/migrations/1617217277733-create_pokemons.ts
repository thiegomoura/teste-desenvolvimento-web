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
        },
        {
          name: 'evolved',
          type: 'integer',
        },
        {
          name: 'family_id',
          type: 'integer',
        },
        {
          name: 'cross_gen',
          type: 'integer',
        },
        {
          name: 'type1',
          type: 'varchar',
        },
        {
          name: 'type2',
          type: 'varchar',
        },
        {
          name: 'weather1',
          type: 'varchar',
        },
        {
          name: 'weather2',
          type: 'varchar',
        },
        {
          name: 'stat_total',
          type: 'integer',
        },
        {
          name: 'atk',
          type: 'integer',
        },
        {
          name: 'def',
          type: 'integer',
        },
        {
          name: 'sta',
          type: 'integer',
        },
        {
          name: 'legendary',
          type: 'bollean',
          default: false,
        },
        {
          name: 'aquireable',
          type: 'integer',
        },
        {
          name: 'spawns',
          type: 'integer',
        },
        {
          name: 'regional',
          type: 'integer',
        },
        {
          name: 'raidable',
          type: 'integer',
        },
        {
          name: 'hatchable',
          type: 'integer',
        },
        {
          name: 'shiny',
          type: 'integer',
        },
        {
          name: 'nest',
          type: 'integer',
        },
        {
          name: 'news',
          type: 'integer',
        },
        {
          name: 'not_gettable',
          type: 'integer',
        },
        {
          name: 'future_volve',
          type: 'integer',
        },
        {
          name: 'percent100cp40',
          type: 'integer',
        },
        {
          name: 'percent100cp39',
          type: 'integer',
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: `date('now')`,
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: `date('now')`,
        },
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pokemons');
  }

}
