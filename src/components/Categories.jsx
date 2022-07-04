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
const Categories = () => {
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
  return (
    <div ref={categoriesRef} className="categories">
      <div className="categories__label">
        <b>Categories </b>
        <span onClick={() => setOpen(!open)}>
          all{" "}
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#ffffff"
            />
          </svg>
        </span>
        {open && (
          <div className="popup">
            <ul>
              {categories.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
