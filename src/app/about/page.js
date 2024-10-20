export const metadata = {
  title: "About page",
  description: "About Xplore!",
};

export default function AboutPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-white-800 mb-6 text-center">
        About Xplore
      </h1>

      <h2 className="flex-col items-center justify-center font-bold text-center size-65">
        {" "}
        Xplore is an open user friendly travel platform designed to bring
        adventurers together through shared experiences. Whether you are
        exploring new destinations or revisiting old favorites, Xplore lets you
        document your journey and connect with others who share your passion for
        travel. Post your stories, highlight must-visit spots, recommend hidden
        gems like local restaurants and attractions, and engage with fellow
        travelers through comments and discussions. With Xplore you are not just
        discovering new places. You are discovering a global community that
        helps you make the most of every trip.{" "}
      </h2>
    </>
  );
}
