import { Collection, Entity, OneToMany, PrimaryKey, Property } from "@mikro-orm/core";
import { Post } from "./post.entity";

@Entity()
export class User {
    @PrimaryKey()
    id!: number;

    @Property()
    name!: string;


    @OneToMany({ entity: () => Post, mappedBy: 'user' })
    // @OneToMany('Post', 'user') // This works
    posts = new Collection<Post>(this);
}