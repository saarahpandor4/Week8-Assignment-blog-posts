import Image from "next/image";

export const metadata = {
  title: "HomePage",
  description: "HomePage destinations!",
};

export default function HomePage() {
  return (
    <>
      <h1> Welcome to Xplore destination blog!</h1>
      <h2> Post your experience on your travels</h2>
      <div
        style={{
          display: "grid",
          gridGap: "1px",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, auto))",
        }}
      >
        <div style={{ position: "relative" }}>
          <Image
            src="https://www.thetrainline.com/cms/media/1360/france-eiffel-tower-paris.jpg?mode=crop&width=1080&height=1080&quality=70"
            alt="paris"
            className="rounded-lg flex-row"
            width={350}
            height={350}
          />
        </div>

        <Image
          src="https://www.thetravellerworldguide.com/wp-content/uploads/2024/03/istockphoto-501296920-612x612-1.jpg"
          alt="beach"
          className="rounded-lg flex-row"
          width={350}
          height={350}
        />

        <Image
          src="https://www.njarchitects.co.uk/wp-content/uploads/2019/05/rome-city-europe.jpg"
          alt="architecture"
          className="rounded-lg flex-col"
          width={350}
          height={350}
        />

        <Image
          src="https://www.discover-the-world.com/app/uploads/2018/08/norway-northern-tromso-surrounds-with-aurora-istk.jpg"
          alt="northern lights"
          className="rounded-lg flex-row"
          width={350}
          height={350}
        />
        <Image
          src="https://www.usatoday.com/gcdn/authoring/authoring-images/2024/08/28/USAT/74981692007-adobe-stock-731317976.jpeg"
          alt="Safari"
          className="rounded-lg flex-row"
          width={350}
          height={350}
        />

        <Image
          src="https://www.wallart.com/media/catalog/product/cache/5b18b93ddbe5d6592c6b175f41d24454/n/e/new-york-manhattan-skyline-op-fotobehang_10.jpg"
          alt="New-York"
          className="rounded-lg flex-row"
          width={350}
          height={350}
        />
      </div>{" "}
      <Image />
    </>
  );
}
