const List = ({colaborator, search}) => {
  return (
      <ul>
          {colaborator.filter((item) => {
              return search.toLowerCase() === "" ? item : item.nombre.toLowerCase().includes(search.toLowerCase())
          }).map(({ id, nombre, correo }) =>
              <li
                  key={id}
              >
                  {nombre} - {correo}
              </li>)}
      </ul>
  )
}


export default List