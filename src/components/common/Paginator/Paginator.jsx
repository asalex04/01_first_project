import React, {useState} from "react";
import cn from 'classnames';
import styles from "./Paginator.module.css";

// type Props = {
//   totalItemsCount: number,
//   pageSize: number,
//   currentPage: number,
//   onPageChange: () => void,
//   portionSize: number
// }

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChange, portionSize=10}) => {
  const pageCount = Math.ceil(totalItemsCount / pageSize);
  const pages = [...Array(pageCount)].map((e, i) => i + 1)

  const portionCount = Math.ceil(pageCount / portionSize)
  const [portionNumber, setPortionNumber] = useState(10)
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  const rightPortionPageNumber = portionNumber * portionSize

  return <div className={cn(styles.paginator)}>
    {portionNumber > 1 &&
    <button onClick={() => {setPortionNumber(portionNumber - 1)} }>PREV</button>}
      {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p, id) => {
        return <span className={ cn({
          [styles.selectedPage]: currentPage === p
        }, styles.pageNumber) }
                     key={id}
                     onClick={(e) => {
                       onPageChange(p)
                     }}>{p}</span>
      })}
    {portionNumber < portionCount &&
    <button onClick={() => {setPortionNumber(portionNumber + 1)} }>NEXT</button>}
  </div>
}
export default Paginator;
