interface Props {
    title: string
    commentQty: number
    tags: string[]

    // ENUM
    categories: Category
}

export enum Category {
    JS = 'JavaScript',
    TS = 'TypeScript',
    P = 'Python'
}

export default function Destructuring({ title, commentQty, tags, categories }: Props) {

    return (

        <div>

            <h2>Título: {title}</h2>

            <h3>Comentários: {commentQty}</h3>

            <ul>
                {tags && tags.map((i) =>
                    <li>{`#${i}`}</li>
                )}
            </ul>

            <h3>
                Categoria: {categories}
            </h3>

        </div>

    );

}
