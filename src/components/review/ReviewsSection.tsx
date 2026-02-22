// components/ReviewsSection.tsx
import { Star } from "lucide-react"; // For star icons (install lucide-react if needed)
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const fakeReviews = [
    {
        id: 1,
        title: "Good Quality",
        text: "Highly recommend shipping from this seller. Fast delivery and excellent product quality.",
        rating: 5,
        user: {
            name: "Md.Subahan Ali",
            avatar: "https://lh3.googleusercontent.com/a/ACg8ocLZuxqKHTauJrTvkGpVoghqZyka0XJ8RtBUIn-6q7RgQIcMw9iN=s400-c",
        },
        image: "https://i.imgur.com/QkIa5tT.jpeg", // Red Nike shoes
    },
    {
        id: 2,
        title: "Good Quality",
        text: "Highly recommend shipping from this seller. Fast delivery and excellent product quality.",
        rating: 5,
        user: {
            name: "Md.Arman Hossain",
            avatar: "https://lh3.googleusercontent.com/a/ACg8ocLZuxqKHTauJrTvkGpVoghqZyka0XJ8RtBUIn-6q7RgQIcMw9iN=s400-c",
        },
        image: "https://i.imgur.com/Qphac99.jpeg", // Colorful shoes
    },
    {
        id: 3,
        title: "Good Quality",
        text: "Highly recommend shipping from this seller. Fast delivery and excellent product quality.",
        rating: 5,
        user: {
            name: "Md.Rakib Hossain",
            avatar: "https://lh3.googleusercontent.com/a/ACg8ocLZuxqKHTauJrTvkGpVoghqZyka0XJ8RtBUIn-6q7RgQIcMw9iN=s400-c",
        },
        image: "https://i.imgur.com/qNOjJje.jpeg", // Black Adidas shoes
    },
    // Add more if needed for scrolling or full list
];

export default function ReviewsSection() {
    return (
        <section className="bg-gradient-to-b from-gray-50 to-white py-8 md:py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-12 flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <div>
                        <h2 className="text-3xl md:text-4xl uppercase font-extrabold tracking-tight text-gray-900">
                            Reviews
                        </h2>
                    </div>

                    <Button
                        variant="default"
                        className="bg-bprimary hover:bg-bprimary/90 text-white px-6 py-2 rounded-md text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                    >
                        SEE ALL
                    </Button>
                </div>

                {/* Reviews Grid */}
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
  {fakeReviews.map((review) => (
    <Card
      key={review.id}
      className="group overflow-hidden rounded-2xl bg-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
    >
      {/* Top Content */}
      <div className="p-5 bg-gray-100">
        
        {/* Header Row */}
        <div className="flex items-start justify-between">
          <div>
            {/* Title */}
            <h3 className="text-sm font-bold text-gray-900">
              {review.title}
            </h3>

            {/* Review Text */}
            <p className="text-xs text-gray-500 mt-1">
              {review.text}
            </p>

            {/* Stars */}
            <div className="mt-2 flex items-center gap-1 text-yellow-400">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
              <span className="text-xs text-gray-600 ml-1">
                {review.rating}.0
              </span>
            </div>
          </div>

          {/* Avatar */}
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={review.user.avatar}
              alt={review.user.name}
            />
            <AvatarFallback>
              {review.user.name[0]}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative h-56 w-full overflow-hidden rounded-b-2xl">
        <Image
          src={review.image}
          alt={`${review.title} shoe`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    </Card>
  ))}
</div>
            </div>
        </section>
    );
}