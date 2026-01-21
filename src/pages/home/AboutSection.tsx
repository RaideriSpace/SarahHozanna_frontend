import sarah_photo from "../../assets/home_img/process_4.jpg";

function AboutSection() {
	return (
		<section className="flex flex-col pb-8 items-center bg-pink-100 md:py-8 md:rounded-tr-none">
			<div className="flex flex-col md:flex-row justify-center items-center gap-8">
				<div className="order-1 w-full px-4 flex flex-col gap-4 md:order-0 md:w-[50%] md:px-0">
					<h2 className="text-center text-3xl font-bold"> Quem Sou </h2>
					<p>
						Pellentesque morbi purus urna tempor vitae metus lacus porta mattis. Id risus tortor grada convallis ut cursus nunc consequat mi. Mattis
						sed justo maecenas in proin sed adipiscing velit. Fringilla vestibulum quis amet ac adipiscing vitae diam mauris. Lorem ac mattis
						tincidunt in sit tincidunt phasellus. Mauris ac nibh id sit tristique montes est. Quis pellentesque elementum eget lectus et vestibulum
						pretium. In sit at imperdiet id ut sit pellentesque sed amet. Eu tortor bibendum egestas lacus non maecenas egestas. Convallis posuere
						eget a vulputate habitant molestie risus quisque dictum. Aliquam lectus tellus libero platea fames amet semper. Eget in fermentum mi felis
						tortor egestas rhoncus. Condimentum lacus lectus proin dui hac. Fringilla vestibulum ultrices porttitor faucibus dui lectus.
					</p>
					<p>
						Phasellus habitant dapibus in in. Mauris at in senectus eros. Elit porttitor sem fermentum turpis erat urna elit. Risus elit duis vitae
						senectus lectus. Graa sed felis nam proin. Lorem massa mus neque tellus non augue viverra. Pharetra in nisi nulla eget ultrices. In
						interdum quam gvida quisque egestas in auctor id. Leo tortor vitae eget lectus eget. Praesent egestas malesuada ut nisi in. Dictum
						pharetra nisl nisl elementum.
					</p>
          <button className="bg-white px-8 py-2 w-fit self-center rounded-2xl"> Minha História </button>
				</div>
				<div className="w-full bg-white rounded-bl-[50%] md:w-[30%] md:bg-transparent">
					<img
						src={sarah_photo}
						alt="Foto da Estilista Sarah Hozanna"
						className="w-full h-85 rounded-tr-[50%] rounded-bl-[50%] object-cover  md:h-125  md:rounded-tl-[30%] md:rounded-br-[30%] md:rounded-tr-none md:rounded-bl-none"
					/>
				</div>
			</div>
		</section>
	);
}

export default AboutSection;
