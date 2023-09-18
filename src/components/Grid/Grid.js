const Grid = ({ data }) => {

  return (

    <div className="self-center w-1/2">
      <h3 className="text-3xl mb-16 font-bold">IMG Grid</h3>
      <ul className="grid grid-cols-3 gap-4 grid-flow-row">
        {
          data ? data.map(item => {
            return (
              <li key={item.id} className="group border-2 cursor-pointer border-white max-h-52 relative hover:border-pink-700">
                <img src={item.bg} alt={item.title} className="grayscale w-full h-full object-cover" />
                <div className="absolute w-20 h-20 absolute-center">
                  <img src={item.logo} className="h-full w-full object-contain" />
                </div>
                <div className="overlay absolute top-0 left-0 bg-pink-700 h-full w-0 flex align-middle transition-all duration-150 justify-center overflow-hidden group-hover:w-full">
                  <div className="overlay-txt transition-none">
                    <h5 className="mb-4">{item.title}</h5>
                    <button className="border-2 border-white p-2 text-xs">Explore archive</button>
                  </div>
                </div>
              </li>
            )
          }) : false
        }
      </ul>
    </div>
  )
}

export default Grid;