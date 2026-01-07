function FeedbackSection() {
	return (
		<section className="flex flex-col justify-center pt-4 pb-6 gap-8">
			<h2 className="text-center text-3xl font-bold"> Depoimentos </h2>

			<div className="w-full flex gap-4 justify-center">
				<div className="w-[30%] h-75 bg-gray-300 rounded-xl"> </div>
				<div className="w-[30%] h-75 bg-gray-300 rounded-xl"> </div>
				<div className="w-[30%] h-75 bg-gray-300 rounded-xl"> </div>
			</div>

			<div className="self-center flex gap-4">
				<button> Ver Peças </button>
				<button> Sob Medida </button>
			</div>
		</section>
	);
}

export default FeedbackSection;
