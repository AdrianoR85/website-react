import MainHeader from '../../components/mainHeader/MainHeader';
import Programs  from '../../components/programs/Programs';
import Values from '../../components/values/Values';
import FAQs from '../../components/faqs/FAQs';
import './home.css';

export default function Home() {
  return(
    <>
      <MainHeader />
      <Programs />
      <Values />
      <FAQs />
    </>
  )
}