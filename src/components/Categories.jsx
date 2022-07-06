import React from "react";

const categories = [
  "all",
  "art",
  "biography",
  "computers",
  "history",
  "medical",
  "poetry",
];
const Categories = ({ category, setCategory }) => {
  const [open, setOpen] = React.useState(false);
  const categoriesRef = React.useRef();

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.path.includes(categoriesRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  const onClickListItem = (item) => {
    setCategory(item);
    setOpen(false);
  };

  return (
    <div ref={categoriesRef} className="categories">
      <div className="categories__label">
        <b>Categories </b>
        <span onClick={() => setOpen(!open)}>{category}</span>
        {open && (
          <div className="popup">
            <ul>
              {categories.map((item, i) => (
                <li key={i} onClick={() => onClickListItem(item)}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
