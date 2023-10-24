import { SqliteDriver } from '@mikro-orm/sqlite';
import { MikroORM, Entity, PrimaryKey, Property, ManyToOne } from '@mikro-orm/core';
import { User } from './user.entity';
import { Post } from './post.entity';

let orm: MikroORM<SqliteDriver>;

beforeAll(async () => {
  orm = await MikroORM.init({
    type: 'sqlite',
    dbName: ':memory:',
    entities: [User, Post],
  });
});

afterAll(async () => {
  await orm.close();
});

test('...', async () => {
  console.log(orm);
});
