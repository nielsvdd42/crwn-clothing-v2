import CategoryItem from "../category-item/category-item.component";
import './directory.styles.scss';
import categories from './categories'

function Directory() {
    return <div className="directory-container">
    {categories.map((category) => {
      return (
        <CategoryItem key={category.id} category={category}/>
      );
    })}
  </div>
}

export default Directory;