import { Link } from 'react-router-dom';

const FooterImage=()=>{
	return (
		<>
				<div className="h-1/2 flex flex-col items-center relative">
	                    <img src="/images/footer.png" alt="foot" className="h-full w-full max-w-[1038px]"/>
	                    <div className="absolute top-10 md:top-20 right-4 md:right-[200px] text-white">
	                        <p className="text-right font-medium text-xl md:text-4xl">Find a doctor and book your <br/>appointment now!</p>
	                        <Link to="/hospitals">
	                        	<button className="bg-bluish mt-4 px-6 py-4 text-white ml-[250px]">Book Online</button>
	                    	</Link>
	                    </div>
                </div>
		</>
		)
}
export default FooterImage;