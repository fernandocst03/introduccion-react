import React from "react";
import "./TodoList.css";

function TodoList(props){
  const renderFunc = props.render || props.children; // si no existe una render prop, se usa el children
  return(
    <section className="TodoList">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearch(props.searchText)}

      {(!props.loading && !props.error) && props.searchedTodos.map(renderFunc)}

      {/* <ul>  ya no es necesario porque se usa el children o la render prop
        {props.children}
      </ul> */}
    </section>
  );
}

export { TodoList };