import { Icons } from '@assets/images/Images';
import PageIcon from '@components/icons/PageIcon';

const IconLink = ({ icon, h="h-8 md:h-12" }: { icon: string, h?:string }) => {
	return (
		<div className={`relative ${h} aspect-square group pt-2`}>
			{icon==="Page"? <>
				<PageIcon />
				<PageIcon blur={true}/> 
			</>
			: <>
				<img className="absolute bottom-0 left-0 h-full w-full z-50 transition-all duration-200 group-hover:mb-0.5" src={Icons[icon]?.src||""} alt={icon}/>
				<img className={`absolute ${icon==="GitHub"?"top-1":"top-0"} left-0 h-full w-full z-40 transition-all duration-200 group-hover:mt-1 blur-sm`} src={Icons[icon]?.src||""} alt={icon}/>
			</>}
		</div>
	);
}

export default IconLink;