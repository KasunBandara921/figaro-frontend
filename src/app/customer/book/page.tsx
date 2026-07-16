import BookingFlow from "@/src/components/customer/book/BookingFlow";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Appointment | Figaro Salon",
  description: "Book an appointment at Figaro Salon.",
};

export default function BookPage() {
  return (
    <main className="min-h-screen bg-[#F9FAFB] pt-24 pb-12 px-4 sm:px-6 lg:px-8">
       <BookingFlow />
    </main>
  );
}
