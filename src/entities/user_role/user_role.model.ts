import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm"
import { Role } from "../role/role.model"
import { User } from "../user/user.model"

@Entity("users_roles")
export class UserRole extends BaseEntity{

    @PrimaryColumn( { name: "role_id" } )
    roleId!: number

    @PrimaryColumn( { name: "user_id" } )
    userId!: number

    @ManyToOne(() => Role, (role) => role.users)
    @JoinColumn({name: "role_id"})
    role!: Role

    @ManyToOne(() => User, (user) => user.roles)
    @JoinColumn({name: "user_id"})
    user!: User
}