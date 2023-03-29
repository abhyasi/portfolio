import Image from 'next/image';
import type { Metadata } from 'next'
import Education from './components/education';
import Projects from './components/projects';
import Inprogress from './components/inprogress';
import Skills from './components/skills';
import Social from './components/social';
import Avatar from '../../assets/dari.jpg';

const Page = () => {

	return (
		<div className="flex flex-col gap-8 mx-4 my-16 md:mx-0">
			<div className="flex flex-col-reverse gap-8 md:flex-row">
				<div className="flex flex-col gap-4">
					<h1 className="text-4xl font-medium">
						Abhishek  <span className="text-primary">Abhyasi</span>
					</h1>
					<p>
						Student | <span className="font-bold">Tribhuvan University IOST</span>
					</p>
					<p>Namaskar!</p>
					<p className="text-justify">
						I'm Abhishek, a BSc. CSIT student at TU IOST and the owner of Binary SoftTech, a tech company I founded to provide top-notch software development and IT consulting services. When I'm not working on exciting new projects, I enjoy attending tech conferences and giving back to my community through volunteer work.
					</p>
				</div>
				<Image
					src={Avatar}
					alt="Abhishek Abhyasi"
					className="object-cover w-auto h-32 md:w-32 md:h-auto"
					width={300}
					height={300}
				/>
			</div>
			<div className="flex gap-2">
				<div className="px-2 text-sm rounded-md text-primary bg-primary/10" aria-label="DoB: 2002">
					2002
				</div>
				<div className="px-2 text-sm rounded-md text-primary bg-primary/10" aria-label="Blood group: B+VE">
					B+VE
				</div>
				<div className="px-2 text-sm rounded-md text-primary bg-primary/10" aria-label="Height: 5 feet 6 inches">
					<span>5'6</span>
				</div>
			</div>

			<Education />

			{/* <Projects /> */}

			<Inprogress />

			<Skills />

			<Social />

			<div className="flex flex-col gap-4">
				<h2 className="text-2xl font-medium">Contact</h2>
				<ul className="list-inside">
					<li>
						<span>{'email: '}</span>
						<a href="mailto:me@mrabhyasi.com" className="italic underline text-primary">
							me@mrabhyasi.com
						</a>
					</li>
					<li>
						<span>{'full website: '}</span>
						<a href="https://mrabhyasi.com" target="_blank" className="italic underline text-primary">
							mrabhyasi.com
						</a>
					</li>
				</ul>
			</div>

			<p className="text-xs">
				{'Abhishek Abhyasi ' + new Date().getFullYear()}, <a href='https://github.com/bhaskarrijal/bhaskarrijal-min' target='_blank' className='italic underline text-primary'>edit this site</a>
			</p>
		</div>
	);
};

export default Page;