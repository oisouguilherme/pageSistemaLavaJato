import { FirstSection } from "@/components/FirstSection";
import { Footer } from "@/components/Footer";
import { FormSections } from "@/components/FormSections";
import { FourthSections } from "@/components/FourthSections";
import { Header } from "@/components/Header";
import { PlanosSections } from "@/components/PlanosSections";
import { SecondSection } from "@/components/SecondSection";
import { TertiarySection } from "@/components/TertiarySection";

export default function Home() {
  return (
    <main>
      <Header/>
      <FirstSection/>
      <FirstSection style={"lg:flex-row-reverse"} text={"lorem ipsum"}/>
      <FirstSection text={"lorem ipsum"}/>
      <SecondSection/>
      <TertiarySection/>
      <FourthSections/>
      <PlanosSections/>
      <FormSections/>
      <Footer/>
    </main>
  )
}
