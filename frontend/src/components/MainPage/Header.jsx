import background from '/images/background.png';

const Header=()=>{
	return (
		<>
			<div className="bg-cover bg-center text-white" style={{ height: `calc(100vh - 4rem)`, backgroundImage: `url(${background})` }}>
				<div className="pt-28 pl-28">
					<h1 className="h-[149px] w-[575px] text-[48px] font-medium">We Provide Total Health <br/>Care Solutions</h1>
					<p className="h-[108px] w-[494px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada gravida libero at tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In ac rutrum urna.</p>
					<button className="px-10 py-2 border-2 border-solid border-white rounded-full mt-4">Our Services</button>
				</div>
				
			</div>
		</>
		)
}
export default Header;