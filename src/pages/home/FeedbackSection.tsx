import AvaliationCard from "../../components/AvaliationCard";

function FeedbackSection() {
	return (
		<section className="w-full px-4 md:px-40 flex flex-col justify-center pt-4 pb-6 gap-8">
			<h2 className="text-center text-3xl font-bold"> Depoimentos </h2>

			<div className="w-full flex  gap-4 justify-center">
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
