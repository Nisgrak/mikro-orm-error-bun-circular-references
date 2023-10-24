import { Collection, Entity, ManyToOne, OneToMany, PrimaryKey, Property } from "@mikro-orm/core";
import { User } from "./user.entity";

@Entity()
export class Post {
    @PrimaryKey()
    id!: number;

    @Property()
    name!: string;


    @ManyToOne({
        entity: () => User,
        fieldName: 'id_client',
        nullable: true,
        defaultRaw: `NULL`,
        index: 'id_client',
    })
    user: User;
}