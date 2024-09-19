import { Icons } from '@assets/images/Images';

const IconLink = ({ icon }: { icon: string }) => {
	return (
		<img className="max-h-12 hover-saturate" src={Icons[icon]?.src||""} alt={icon}/>
	);
}

export default IconLink;