import './directory.styles.scss'
import CategoryItem from '../category-item/category-item'

const ListDirectory = ({ categories }) => {
    return (
        <div className="categories-container">
            {categories.map((categories) => (
                <CategoryItem key={categories.id} category={categories} />
            ))}
        </div >
    )
}

export default ListDirectory