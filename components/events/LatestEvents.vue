<template>
  <div class="w-full min-h-[500px] p-20 bg-gRed mono">
    <h1
      class="text-white flex gap-5 w-max justify-start items-center h-max text-3xl border-b-4 border-white border-double pb-2"
    >
      Latest Events <SVGLinesArrowTilted width="25" height="25" />
    </h1>
    <div class="pt-20 mx-20 flex overflow-scroll gap-5 no-scrollbar">
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
  </div>
</template>
<script setup>
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
</script>
