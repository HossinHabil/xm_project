import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function EventGalleryCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-xs md:max-w-3xl lg:max-w-4xl xl:max-w-[70rem] m-auto"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
            <div className="p-1">
              <Card className="bg-[#DADADA]">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-black"/>
      <CarouselNext className="text-black"/>
    </Carousel>
  )
}
