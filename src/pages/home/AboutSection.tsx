import sarah_photo from "../../assets/home_img/process_4.jpg";

function AboutSection() {
	return (
		<section className="flex flex-col items-center bg-pink-100 py-8">
			<div className="flex justify-center items-center gap-8">
				<div className="w-[50%]">
					<h2 className="text-center text-3xl font-bold pb-8"> Quem Sou </h2>
					<p>
						Pellentesque morbi purus urna tempor vitae metus lacus porta mattis. Id risus tortor gravida convallis ut cursus nunc consequat mi. Mattis
						sed justo maecenas in proin sed adipiscing velit. Fringilla vestibulum quis amet ac adipiscing vitae diam mauris. Lorem ac mattis
						tincidunt in sit tincidunt phasellus. Mauris ac nibh id sit tristique montes est. Quis pellentesque elementum eget lectus et vestibulum
						pretium. In sit at imperdiet id ut sit pellentesque sed amet. Eu tortor bibendum egestas lacus non maecenas egestas. Convallis posuere
						eget a vulputate habitant molestie risus quisque dictum. Aliquam lectus tellus libero platea fames amet semper. Eget in fermentum mi felis
						tortor egestas rhoncus. Condimentum lacus lectus proin dui hac. Fringilla vestibulum ultrices porttitor faucibus dui lectus.
					</p>
					<p>
						Phasellus habitant dapibus in in. Mauris at in senectus eros. Elit porttitor sem fermentum turpis erat urna elit. Risus elit duis vitae
						senectus lectus. Gravida sed felis nam proin. Lorem massa mus neque tellus non augue viverra. Pharetra in nisi nulla eget ultrices. In
						interdum quam gravida quisque egestas in auctor id. Leo tortor vitae eget lectus eget. Praesent egestas malesuada ut nisi in. Dictum
						pharetra nisl nisl elementum.
					</p>
				</div>
				<img src={sarah_photo} alt="Foto da Estilista Sarah Hozanna" className="w-[30%] h-125 object-cover rounded-tl-[30%] rounded-br-[30%]" />
			</div>
		</section>
	);
}

export default AboutSection;
