import React from "react";
import classes from "./Paginator.module.css";

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChange}) => {
  const pageCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [...Array(pageCount)].map((e, i) => i + 1)
  return <div>
    <div>
      {pages.reverse().slice(0, 9).map((p, id) => {
        return <span className={currentPage === p ? classes.selectPage : ''} key={id}
                     onClick={(e) => {
                       onPageChange(p)
                     }}>{p}</span>
      })}
      ...
    </div>
  </div>
}
export default Paginator;
