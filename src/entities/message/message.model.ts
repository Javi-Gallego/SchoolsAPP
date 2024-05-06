import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "../user/user.model"

@Entity("messages")
export class Message extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: "message"})
    message!: string

    @Column({ name: "author_id"})
    authorId!: number

    @Column({ name: "receiver_id"})
    receiverId!: number

    @Column({ name: "seenReceiver", default: false})
    seenReceiver!: boolean

    @Column({ name: "created_at", default: () => "CURRENT_TIMESTAMP", select: false})
    createdAt!: Date

    @Column({ name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP", select: false},)
    updatedAt!: Date

    @ManyToOne(() => User, (author) => author.authormessages)
    @JoinColumn({name: "author_id"})
    author!: User

    @ManyToOne(() => User, (receiver) => receiver.receivermessages)
    @JoinColumn({name: "receiver_id"})
    receiver!: User
}