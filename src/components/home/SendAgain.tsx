"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Avatar from "../ui/Avatar";
import Link from "next/link";

export default function SendAgain() {
	const contactList = [
		{
			id: "131231",
			name: "Alexandra",
			avatar: "https://randomuser.me/api/portraits/women/96.jpg",
		},
		{
			id: "13123",
			name: "Gustavo",
			avatar: "https://randomuser.me/api/portraits/women/95.jpg",
		},
		{
			id: "1312",
			name: "Marcela",
			avatar: "https://randomuser.me/api/portraits/women/97.jpg",
		},
		{
			id: "131212",
			name: "Micaela",
			avatar: "https://randomuser.me/api/portraits/women/90.jpg",
		},
		{
			id: "1312212",
			name: "Roberta",
			avatar: "https://randomuser.me/api/portraits/women/99.jpg",
		},
	];
	return (
		<div className="flex flex-col gap-6">
			<div className="font-bold self-center text-xl text-neutral-900">
				Send Again
			</div>
			<div>
				<Swiper slidesPerView={4.5} spaceBetween={2}>
					{contactList.map((contact) => (
						<SwiperSlide key={contact.id}>
							<Link
								href={`transfers/send/${contact.id}`}
								aria-label={contact.name}
								className="flex flex-col items-center w-auto hover:font-bold"
							>
								<Avatar src={contact.avatar} />
								<span className="text-sm">{contact.name}</span>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}
