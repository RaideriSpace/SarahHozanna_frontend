import type { ElementType, FC } from "react";

interface ModalLinksProps {
  text: string;
  href: string;
  Icon: ElementType;
}

export const ModalLinks: FC<ModalLinksProps> = ({text, href, Icon}) => {
	return (
		<div className="flex items-center gap-2 transition-all group w-fit px-2 py-2 hover:bg-primary-100 hover:rounded-tr-3xl hover:rounded-bl-3xl">
			<Icon size={30} className="transition-all text-tertiary-700 group-hover:text-primary-900" />
			<a href={href} className="transition-all font-bold group-hover:text-primary-700" target="_blank" rel="noopener noreferrer">
				<p> {text} </p>
			</a>
		</div>
	);
};
