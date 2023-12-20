<template>
  <section
    class="w-full min-h-[500px] px-5 md:p-20 bg-gBlue mono relative py-24 md:py-44"
  >
    <SVGSparkle
      color1="#000000"
      color2="#FFFFFF"
      color3="#FCFF71"
      class="absolute top-5 md:top-[50px] right-5 md:right-20 w-16 h-16 md:w-auto md:h-auto"
    />
    <SVGSparkle
      color1="#36DB32"
      color2="#FFFFFF"
      color3="#FCFF71"
      class="absolute bottom-2 left-5 md:bottom-10 md:left-10 w-16 h-16 md:w-auto md:h-auto"
    />
    <h1
      @click="hanldeScroll"
      class="text-white flex gap-5 w-max justify-start items-center h-max text-3xl md:text-5xl font-bold border-b-4 border-white pb-2"
    >
      Previous Events <SVGLinesArrowTilted width="25" height="25" />
    </h1>
    <section class="relative">
      <div
        class="pt-20 md:mx-20 flex overflow-scroll gap-5 no-scrollbar"
        ref="scrollableRef"
      >
        <EventsEventCard
          v-for="event in tempEvents"
          :name="event.name"
          :subName="event.subName"
          :picture="event.picture"
          :time="event.time"
          :date="event.date"
          :description="event.description"
          :location="event.location"
        />
      </div>
      <SVGLinesArrowStraight
        v-if="!scrollHideRight"
        width="100"
        height="50"
        @click="hanldeScroll('R')"
        class="hidden md:block absolute bg-black top-[52%] right-5 md:right-8 p-2 cursor-pointer"
      />
      <SVGLinesArrowStraight
        v-if="!scrollHideLeft"
        width="100"
        height="50"
        @click="hanldeScroll('L')"
        class="hidden md:block absolute bg-black top-[52%] left-5 md:left-8 p-2 rotate-180 cursor-pointer"
      />
      <figure class="mt-5 md:hidden flex flex-col justify-center items-center">
        <SVGLinesArrowStraight
          width="100"
          height="50"
          class="md:hidden bg-black p-2"
        />
        <span class="text-2xl mt-2 text-white">Swipe</span>
      </figure>
    </section>
    <section class="flex w-full justify-center pt-10">
      <nav class="flex justify-center items-center gap-5">
        <div
          class="bg-black text-white py-2 px-4 md:p-5 font-bold text-lg md:text-2xl hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer"
        >
          1
        </div>
        <div
          class="bg-white py-2 px-4 md:p-5 font-bold text-lg md:text-2xl hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer"
        >
          2
        </div>
        <div
          class="bg-white py-2 px-4 md:p-5 font-bold text-lg md:text-2xl hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer"
        >
          3
        </div>
        <div class="text-xl font-bold">...</div>
        <div
          class="bg-white py-2 px-4 md:p-5 font-bold text-lg md:text-2xl hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer"
        >
          10
        </div>
      </nav>
    </section>
  </section>
</template>
<script setup>
const scrollableRef = ref(null);
const scrollHideRight = ref(false);
const scrollHideLeft = ref(true);
const tempEvents = [
  {
    name: "Android Study Jams",
    subName: "Day 1 : Add Button",
    picture: "/images/events/eventExample.png",
    time: "6:00 PM OCT 12 2022",
    date: "12-10-2022",
    description:
      "Add Button to an App  Day 3 of Android Study Jams  -  Muthoot Institute Of Technology and Science - Varikoli",
    location: "Online",
  },
  {
    name: "Android Study Jams",
    subName: "Day 2 : Add Text Input",
    picture: "/images/events/eventExample.png",
    time: "6:00 PM OCT 13 2022",
    date: "13-10-2022",
    description:
      "Add Text Input to an App  Day 4 of Android Study Jams  -  Muthoot Institute Of Technology and Science - Varikoli",
    location: "Online",
  },
  {
    name: "Android Study Jams",
    subName: "Day 3 : Add Image",
    picture: "/images/events/eventExample.png",
    time: "6:00 PM OCT 14 2022",
    date: "14-10-2022",
    description:
      "Add Image to an App  Day 5 of Android Study Jams  -  Muthoot Institute Of Technology and Science - Varikoli",
    location: "Online",
  },
  {
    name: "Android Study Jams",
    subName: "Day 4 : Add Checkbox",
    picture: "/images/events/eventExample.png",
    time: "6:00 PM OCT 15 2022",
    date: "15-10-2022",
    description:
      "Add Checkbox to an App  Day 6 of Android Study Jams  -  Muthoot Institute Of Technology and Science - Varikoli",
    location: "Online",
  },
  {
    name: "Android Study Jams",
    subName: "Day 5 : Add Radio Button",
    picture: "/images/events/eventExample.png",
    time: "6:00 PM OCT 16 2022",
    date: "16-10-2022",
    description:
      "Add Radio Button to an App  Day 7 of Android Study Jams  -  Muthoot Institute Of Technology and Science - Varikoli",
    location: "Online",
  },
  {
    name: "Android Study Jams",
    subName: "Day 6 : Add Dropdown",
    picture: "/images/events/eventExample.png",
    time: "6:00 PM OCT 17 2022",
    date: "17-10-2022",
    description:
      "Add Dropdown to an App  Day 8 of Android Study Jams  -  Muthoot Institute Of Technology and Science - Varikoli",
    location: "Online",
  },
];
const hanldeScroll = (direction) => {
  const scrollable = scrollableRef.value;
  const scrollDistance = window.innerWidth / 3;
  if (direction === "R") {
    scrollHideLeft.value = false;
    if (scrollable.scrollLeft + scrollDistance >= scrollable.scrollLeftMax) {
      scrollHideRight.value = true;
    }
    scrollable.scrollBy({
      left: scrollDistance,
      behavior: "smooth",
    });
    return;
  } else if (direction === "L") {
    scrollHideRight.value = false;
    if (scrollable.scrollLeft - scrollDistance <= 0) {
      scrollHideLeft.value = true;
    }
    scrollable.scrollBy({
      left: -scrollDistance,
      behavior: "smooth",
    });
    return;
  }
};
</script>
