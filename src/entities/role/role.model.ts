import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { UserRole } from "../user_role/user_role.model"

@Entity("roles")
export class Role extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: "name"})
    name!: string

    @OneToMany(() => UserRole, (userrole) => userrole.role)
    users!: UserRole[]
}