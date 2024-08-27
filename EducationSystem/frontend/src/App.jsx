import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import JoinAsMentor from './components/JoinAsMentor';
import FindMentor from './components/FindMentor';
import Payment from './components/Payement';
import Conform from './components/Conform';
import BuildResume from './components/BuildResume';
import ZoomLink from './components/ZoomLink';
import MentorLogin from './components/MentorLogin';
import MentorDashBoard from './components/MentorDashBoard';
import UserDashBoard from './components/UserDashBoard';
import UserLogin from './components/UserLogin';
import JoinAsTraniee from './components/JoinAsTraniee';
import EngineeringCards from './components/EngineeringCards';
import ArchitectureEngineering from './components/Analysis/ArchitectureEngineering';
import ComputerScienceEngineering from './components/Analysis/ComputerScienceEngineering';
import CivilEngineering from './components/Analysis/CivilEngineering';
import MechanicalEngineering from './components/Analysis/MechanicalEngineering';
import ElectricalEngineering from './components/Analysis/ElectricalEngineering';
import ChemicalEngineering from './components/Analysis/ChemicalEngineering';
import ElectronicsAndTelecommunicationEngineering from './components/Analysis/ElectronicsAndTelecommunicationEngineering';
// import AyurvedicQuiz from './pages/AyurvedicQuiz';
// import HealthQuiz from './pages/HealthQuiz';
// import HomeopathyQuiz from './pages/HomeopathyQuiz';
// import BDSQuiz from './pages/BDSQuiz';
import MBBSQuiz from './components/Analysis/MBBSQuiz'
import BDSQuiz from './components/Analysis/BDSQuiz';
import FinanceQuiz from './components/Analysis/FinanceQuiz';
import FeedBack from './components/FeedBack';
// import HRQuiz from './pages/HRQuiz';
// import MarketingQuiz from './pages/MarketingQuiz';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route  path='/' element = {<Home />}/>
          <Route path='/mentor' element = {<JoinAsMentor />} />
          <Route path='/find' element = {<FindMentor />} />
          <Route path='/done' element = {<Payment />} />
          <Route path='/conform' element = {<Conform />} />
          <Route path='/resume' element = {<BuildResume />} />
          <Route path='/zoom' element = {<ZoomLink />} />
          <Route path='/login' element = {<MentorLogin />} />
          <Route path='/mdash' element = {<MentorDashBoard />} />
          <Route path='/Ulogin' element = {<UserLogin />} />
          <Route path='/udash' element = {<UserDashBoard />} /> 
          <Route path = "/tranie" element = {<JoinAsTraniee />} />
          <Route path='/Art' element = {<EngineeringCards />} />
          <Route path='/architecture-engineering' element = {<ArchitectureEngineering />} />
          <Route path="/computer-science-engineering" element={<ComputerScienceEngineering />} />
          <Route path="/civil-engineering" element={<CivilEngineering />} />
          <Route path="/mechanical-engineering" element={<MechanicalEngineering />} />
          <Route path="/electrical-engineering" element={<ElectricalEngineering />} />
          <Route path="/chemical-engineering" element={<ChemicalEngineering />} />
          <Route path="/electronics-and-telecommunication-engineering" element={<ElectronicsAndTelecommunicationEngineering />} />
          {/* <Route path="/ayurvedic-quiz" element={<AyurvedicQuiz />} /> */}
          {/* <Route path="/health-quiz" element={<HealthQuiz />} />
          <Route path="/homeopathy-quiz" element={<HomeopathyQuiz />} />
          <Route path="/bds-quiz" element={<BDSQuiz />} /> */}
          <Route path="/mbbs-quiz" element={<MBBSQuiz />} />
           <Route path="/finance-quiz" element={<FinanceQuiz />} />
           <Route path='/feedback' element = {<FeedBack />} />
          {/* <Route path="/hr-quiz" element={<HRQuiz />} />
          <Route path="/marketing-quiz" element={<MarketingQuiz />} />
          <Route path='/bds-quiz' element = {<BDSQuiz />} /> */}
         </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;
