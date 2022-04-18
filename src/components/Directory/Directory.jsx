import CategoryItem from "../CategoryItem/CategoryItem";
import "./Directory.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directoryContainer">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
