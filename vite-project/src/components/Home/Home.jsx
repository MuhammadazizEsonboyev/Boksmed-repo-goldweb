import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Section from "../Section/Section";
import SectionEnd from "../SectionEnd/SectionEnd";
import MapPage from "../YandexMap/MapPage";
import 'virtual:windi.css'
export default function Home() {
  return (
    <>
    <Header/>
    <MapPage/>
<Section/>
      <SectionEnd />
      <Footer/> 
    </>
  )
}
