<template>
  <div class="w-full min-h-[500px] p-20 bg-gRed mono relative py-44">
    <SVGSparkle
      color1="#892CFF"
      color2="#36DB32"
      color3="#FCFF71"
      class="absolute top-[-30px] left-20"
    />
    <SVGSparkle
      color1="#892CFF"
      color2="#36DB32"
      color3="#FCFF71"
      class="absolute bottom-10 right-10"
    />
    <h1
      @click="hanldeScroll"
      class="text-white flex gap-5 w-max justify-start items-center h-max text-5xl font-bold border-b-4 border-white border-double pb-2"
    >
      Latest Events <SVGLinesArrowTilted width="25" height="25" />
    </h1>
    <div class="relative">
      <div
        class="pt-20 md:mx-20 flex overflow-scroll gap-5 no-scrollbar"
        ref="scrollableRef"
      >
        <EventsEventCard
          v-for="event in tempEvents"
          :name="event.name"
          :time="event.time"
          :date="event.date"
          :description="event.description"
          :link="event.link"
          :location="event.location"
        />
      </div>
      <SVGLinesScrollArrow
        v-if="!scrollHideRight"
        @click="hanldeScroll('R')"
        class="hidden md:block absolute bg-black/70 top-[52%] right-5 md:right-28 rounded-full"
      />
      <SVGLinesScrollArrow
        v-if="!scrollHideLeft"
        @click="hanldeScroll('L')"
        class="hidden md:block absolute bg-black/70 top-[52%] left-28 rotate-180 rounded-full"
      />
      <div
        class="absolute md:hidden top-[50%] right-[-65px] flex flex-col justify-center items-center"
      >
        <SVGLinesScrollArrow class="bg-black/70 rounded-full p-2" />
        <h1 class="text-xl text-white">More</h1>
      </div>
    </div>
  </div>
</template>
<script setup>
const scrollableRef = ref(null);
const scrollHideRight = ref(false);
const scrollHideLeft = ref(true);
const tempEvents = [
  {
    name: "Introduction to industry level development",
    time: "12:00 PM",
    date: "12/12/2021",
    description:
      "Through this we are planning to introduce the students of the second year , the industry tools and softwares that can be used to fastrack their journey into the world of development",
    link: "https://www.google.com",
    location: "Online",
  },
  {
    name: "Advanced JavaScript Workshop",
    time: "2:00 PM",
    date: "12/15/2021",
    description:
      "This workshop is designed for third year students who have a basic understanding of JavaScript and want to delve deeper into advanced concepts and features.",
    link: "https://www.example.com",
    location: "Online",
  },
  {
    name: "Python for Data Science",
    time: "10:00 AM",
    date: "12/20/2021",
    description:
      "In this session, we will introduce fourth year students to the use of Python in the field of data science, covering libraries like pandas and numpy.",
    link: "https://www.example2.com",
    location: "Online",
  },
  {
    name: "Introduction to Cloud Computing",
    time: "1:00 PM",
    date: "12/22/2021",
    description:
      "This event is for final year students interested in learning about cloud platforms like AWS, Google Cloud, and Azure, and how they can leverage them for their projects.",
    link: "https://www.example3.com",
    location: "Online",
  },
  {
    name: "Web Development with React",
    time: "3:00 PM",
    date: "12/18/2021",
    description:
      "This session is aimed at introducing students to React, a popular JavaScript library for building user interfaces. We will cover the basics and some advanced concepts.",
    link: "https://www.example4.com",
    location: "Online",
  },
  {
    name: "Machine Learning Basics",
    time: "11:00 AM",
    date: "12/25/2021",
    description:
      "In this workshop, we will introduce students to the basics of machine learning, including supervised and unsupervised learning techniques.",
    link: "https://www.example5.com",
    location: "Online",
  },
  {
    name: "Getting Started with Git and GitHub",
    time: "1:00 PM",
    date: "12/30/2021",
    description:
      "This event is for students who want to learn about version control using Git and GitHub. We will cover the basics and some best practices.",
    link: "https://www.example6.com",
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
