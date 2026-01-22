import AvaliationCard from "../../components/AvaliationCard";

function FeedbackSection() {
	return (
		<section className="w-full px-4 pt-4 pb-6 md:px-20 flex flex-col justify-center  gap-8">
			<h2 className="text-center text-3xl font-bold"> Depoimentos </h2>

			<div className="w-full flex justify-center">
				<AvaliationCard />
			</div>

			<div className="self-center flex flex-col md:flex-row gap-4">
				<button className="buttondepo">Peças Prontas</button>
				<button className="buttondepo">Sob Medida</button>
			</div>
		</section>
	);
}

export default FeedbackSection;
