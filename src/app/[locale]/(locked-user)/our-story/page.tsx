import Breadcrumb from "@/src/components/shared/breadcrumb/Breadcrumb";
import StoryOne from "@/src/components/pages/our-story/StoryOne";
import StoryTwo from "@/src/components/pages/our-story/StoryTwo";
import StoryThree from "@/src/components/pages/our-story/StoryThree";

export default function page() {
  return (
    <main className="container pt-4">
      <Breadcrumb
        links={[
          { linkName: "home", href: "/" },
          { linkName: "ourStory", href: "/contact" },
        ]}
      />
      <StoryOne />
      <StoryTwo />
      <StoryThree />
    </main>
  );
}
