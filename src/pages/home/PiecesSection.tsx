import img1 from "../../assets/home_img/model_1_1.jpeg";
import img2 from "../../assets/home_img/model_1_2.jpg";
import img3 from "../../assets/home_img/model_1_3.jpg";
import img4 from "../../assets/home_img/model_2_1.jpg";
import img5 from "../../assets/home_img/model_2_2.jpg";
import img6 from "../../assets/home_img/model_3_1.jpg";
import img7 from "../../assets/home_img/model_3_2.jpg";

import img8 from "../../assets/home_img/wedding_1.jpg";
import img9 from "../../assets/home_img/wedding_2.jpg";
import img10 from "../../assets/home_img/wedding_3.jpg";
import img11 from "../../assets/home_img/wedding_4.jpg";
import img12 from "../../assets/home_img/wedding_5.jpg";
import img13 from "../../assets/home_img/wedding_6.jpg";
import img14 from "../../assets/home_img/wedding_7.jpg";

function PiecesSection() {
	return (
		<section className="flex flex-col">
			<div className="w-full h-67">
				<h2 className="pt-2 absolute justify-self-center text-2xl text-white font-bold text-shadow-md"> Peças Prontas </h2>
				<div className="flex">
					<img src={img1} alt="Saia verde" className="h-67 w-[20%] object-cover" />
					<img src={img2} alt="Saia verde" className="h-67 w-[20%] object-cover" />
					<img src={img3} alt="Saia verde" className="h-67 w-[20%] object-cover" />
					<img src={img4} alt="Saia verde" className="h-67 w-[20%] object-cover" />
					<img src={img5} alt="Saia verde" className="h-67 w-[20%] object-cover" />
					<img src={img6} alt="Saia verde" className="h-67 w-[20%] object-cover" />
					<img src={img7} alt="Saia verde" className="h-67 w-[20%] object-cover" />
				</div>
			</div>

			<div className="w-full h-67">
				<h2 className="pt-2 absolute justify-self-center text-2xl text-white font-bold text-shadow-md"> Sob Medida </h2>
				<div className="flex">
					<img src={img8} alt="Saia verde" className="h-67 w-[20%] object-cover" />
					<img src={img9} alt="Saia verde" className="h-67 w-[20%] object-cover" />
					<img src={img10} alt="Saia verde" className="h-67 w-[20%] object-cover" />
					<img src={img11} alt="Saia verde" className="h-67 w-[20%] object-cover" />
					<img src={img12} alt="Saia verde" className="h-67 w-[20%] object-cover" />
					<img src={img13} alt="Saia verde" className="h-67 w-[20%] object-cover" />
					<img src={img14} alt="Saia verde" className="h-67 w-[20%] object-cover" />
				</div>
			</div>
		</section>
	);
}

export default PiecesSection;
