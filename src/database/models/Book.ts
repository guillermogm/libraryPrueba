import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Author } from "./Author"
import { Fauvorite } from "./Favourite"

@Entity('books')
export class Book extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!:number

    @Column({name:'title'})
    title!:string

    @Column({name:'description'})
    description!:string

    @Column({name:'author_id'})
    authorId!:number

    @ManyToOne (()=> Author, author => author.books)
    @JoinColumn ({name: "author_id"})
    author!: Author

    @OneToMany(()=> Fauvorite, favourite => favourite.book)
    book_favs!: Fauvorite[]
}
