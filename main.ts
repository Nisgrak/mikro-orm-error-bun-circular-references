import { MikroORM } from "@mikro-orm/core";
import { Post } from "./post.entity";
import { User } from "./user.entity";



let orm = await MikroORM.init({
    type: 'sqlite',
    dbName: ':memory:',
    entities: [User, Post],
});


await orm.close();