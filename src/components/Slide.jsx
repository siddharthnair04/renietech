import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export function Slide() {
  return (
    <Carousel className="w-full m-auto">
      <CarouselContent>
          <CarouselItem>
            <div>
              <Card>
                <CardContent className="flex items-center justify-center">
                  <img src="src/assets/carousel/app-banner-1.png" alt="" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem>
              <div>
                <Card>
                  <CardContent className="flex items-center justify-center">
                    <img src="src/assets/carousel/app-banner-2.png" alt="" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Slide
