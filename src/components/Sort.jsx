import React from "react";

const sortList = ["relevance", "newest"];

const Sort = ({ sort, setSort }) => {
  const [open, setOpen] = React.useState(false);
  const sortRef = React.useRef();

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.path.includes(sortRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  const onClickListItem = (item) => {
    setSort(item);
    setOpen(false);
  };

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <b>Sorting by </b>
        <span onClick={() => setOpen(!open)}>{sort}</span>
        {open && (
          <div className="popup">
            <ul>
              {sortList.map((item, i) => (
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

export default Sort;
