"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Avatar from "../ui/Avatar";
import Link from "next/link";
import type { ContactProfile } from "@/types/commons";
import { Skeleton } from "../ui/Skeleton";

interface ContactListPops {
	contacts?: ContactProfile[];
	loading: boolean;
}

export default function ContactList({
	contacts = [],
	loading = true,
}: ContactListPops) {
	return (
		<div className="flex flex-col gap-6">
			<div className="font-bold self-center text-xl text-neutral-900">
				Send Again
			</div>
			<div>
				{loading ? (
					<div className="flex gap-3 justify-between">
						{[1, 2, 3, 4].map((i) => (
							<div
								key={`contact-list-skeleton-${i}`}
								className="flex flex-col gap-1"
							>
								<Skeleton className="w-[3.25rem] h-[3.25rem] rounded-full" />
								<Skeleton className="w-[3.25rem] h-4" />
							</div>
						))}
					</div>
				) : (
					<Swiper
						breakpoints={{
							260: { slidesPerView: 3.5 },
							380: { slidesPerView: 4.5 },
						}}
						spaceBetween={2}
					>
						{contacts.map((contact) => (
							<SwiperSlide key={contact.id}>
								<Link
									href={`transfers/send/${contact.id}`}
									aria-label={contact.fullName}
									className="flex flex-col items-center w-auto hover:font-bold"
								>
									<Avatar src={contact.avatar} />
									<span className="text-sm">{contact.firsName}</span>
								</Link>
							</SwiperSlide>
						))}
					</Swiper>
				)}
			</div>
		</div>
	);
}
