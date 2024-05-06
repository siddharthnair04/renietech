import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Popular() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-xs"
    >
      <CarouselContent>
          <CarouselItem className="lg:basis-1/3 sm:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-4">
                    <img src="src/assets/prize/1.png" alt="" />
                  <span className="text-xs font-medium">Sun&Sand Sports Gift Card 200 AED</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3 sm:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-4">
                    <img src="src/assets/prize/2.png" alt="" />
                  <span className="text-xs font-medium">SEPHORA FAVORITES Lash Drama Set</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3 sm:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-4">
                    <img src="src/assets/prize/3.png" alt="" />
                  <span className="text-xs font-medium">Netflix Voucher for 3 months</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Popular
