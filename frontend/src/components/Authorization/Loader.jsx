const Loader=()=>{
	return(
		<>
		<div className="flex items-center justify-center h-screen">
	      <div className="flex flex-row gap-2">
	        <div className="w-4 h-4 rounded-full bg-blue animate-bounce"></div>
	        <div className="w-4 h-4 rounded-full bg-blue animate-bounce" style={{ animationDelay: '-0.3s' }}></div>
	        <div className="w-4 h-4 rounded-full bg-blue animate-bounce" style={{ animationDelay: '-0.5s' }}></div>
	      </div>
    	</div>
		</>
		)
}
export default Loader;