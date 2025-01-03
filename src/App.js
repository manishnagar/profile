
import "@fontsource/poppins";
import './App.scss';
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className="App">
      <ScrollToTop smooth color="#6f00ff" />
      <div id="profile-bg">
        <div className='header'>
          <div className='width-container'>
            <div>
              <ul className="contact-info">
                <li>+91 9910233016</li>
                <li>yourmanish123@gmail.com</li>
                <li><a href="https://www.linkedin.com/in/manish-kumar-50259029/"><img src={`${process.env.PUBLIC_URL}/images/linkedin.png`} /></a></li>
                <li><a href="https://github.com/manishnagar"><img src={`${process.env.PUBLIC_URL}/images/git.png`} /></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="width-container">
            <div className="profile-flex">
              <div className="profile-img"><img src={`${process.env.PUBLIC_URL}/images/profile-photo.jpg`} /></div>
              <div className="profile-heading">Front-End Developer | Pioneering The Modern UI Technologies</div>
            </div>
            <div className="name">Manish Kumar</div>
            <div className="profile-desc">Hi, I’m <b>Manish Kumar</b>, a dedicated <b>UI/Front-End Developer</b> with over 5 years of experience delivering high-quality, user-centric web solutions. Throughout my career, I have successfully completed 100+ web development projects, encompassing Admin Dashboards, Web Applications, and E-commerce Websites. My expertise lies in creating intuitive, responsive, and visually appealing interfaces that enhance user experience and align with modern web standards. </div>
            <div className="profile-desc">I have collaborated on diverse projects for startups, enterprises, and freelance clients, leveraging cutting-edge front-end technologies and frameworks like <b>ReactJS</b>, <b>HTML5</b>, <b>CSS3</b>, <b>JavaScript</b>, <b>AngularJs</b>, <b>Tailwind CSS</b> and <b>Figma, Photoshop.</b> Some of the domains I have contributed to may no longer be active, reflecting the dynamic nature of freelance projects.</div>
            <div className="project-sec desktop">
              <div className="heading">React Js Projetcs</div>
              <div className="project-item-flex">
                <div className="project-name"><a href="https://manishnagar.github.io/weather_update/">Weather App</a></div>
                <div className="project-name"><a href="https://manishnagar.github.io/react-movie-search-app/">Movie Search App</a></div>
                <div className="project-name"><a href="https://manishnagar.github.io/ssy-calculator/">Sukanya Calculator App</a></div>
              </div>
              <div className="project-item-flex">
                <div className="project-name"><a href="https://manish-kumar-profile.netlify.app/">Portfolio App</a></div>
                <div className="project-name"><a href="https://manishnagar.github.io/bill-expense-tracker/">Bill-expense Tracker</a></div>
                <div className="project-name"></div>
              </div>
           

              <div className="heading">Front-End Projetcs</div>
              <div className="project-item-flex">
                <div className="project-name"><a href="https://www.renewbuy.com/">Renewbuy.com</a></div>
                <div className="project-name"><a href="https://www.renewbuyfinsure.com/renewbuy-health/#/buy-online">Renewbuy-Health</a></div>
                <div className="project-name"><a href="https://www.renewbuyfinsure.com/renewbuy-suraksha/#/buy-online">Renewbuy-Life</a></div>
              </div>

              <div className="project-item-flex">
                <div className="project-name"><a href="https://redcliffelabs.com/">Redcliffelabs.com</a></div>
                <div className="project-name"><a href="https://www.agbeindia.com/">Agbe India Pvt Ltd.</a></div>
                <div className="project-name"></div>
              </div>

              <div className="heading">Freelancing Projetcs</div>
              <div className="project-item-flex">
                <div className="project-name"><a href="https://www.afinoz.com/">Afinoz Digital Finance</a></div>
                <div className="project-name"><a href="https://www.abuildtech.com/">A Buildtech</a></div>
                <div className="project-name"><a href="https://detoxa-frontend.netlify.app/">Detoxa</a></div>
              </div>

              <div className="project-item-flex">
                <div className="project-name"><a href="https://rocaresolution.com/">ROCare Solution</a></div>
                <div className="project-name"><a href="https://spidcindia.com/">SPIDC India</a></div>
                <div className="project-name"><a href="https://www.mithilainfrastructure.com/#">Mithila Infrastructure</a></div>
              </div>
              <div className="project-item-flex">
                <div className="project-name"><a href="https://www.rupaybachao.com/index.html">Rupay Bachao</a></div>
              </div>

              <div className="heading">Template Design</div>
              <div className="project-item-flex">
                <div className="project-name"><a href="https://manishnagar.github.io/wizfair-template/landing-page.html">Wizfare  Dummy</a></div>
                <div className="project-name"><a href="https://manishnagar.github.io/webority/">Webority Dummy</a></div>
                <div className="project-name"><a href="https://manishnagar.github.io/novis/">Novis</a></div>
              </div>
              <div className="project-item-flex">
                <div className="project-name"><a href="https://manishnagar.github.io/Intelgencia/">Intelegencia</a></div>
                <div className="project-name"><a href="https://manishnagar.github.io/script_template/">Script Dummy</a></div>
                <div className="project-name"></div>
              </div>
              
            </div>

            {/* mobile view */}
            <div className="project-sec desktop mobile ">
              <div className="heading">React Js Projetcs</div>
              <div className="project-item-flex">
                <div className="project-name"><a href="https://manishnagar.github.io/weather_update/">Weather App</a></div>
                <div className="project-name"><a href="https://manishnagar.github.io/react-movie-search-app/">Movie Search App</a></div>
              </div>

              <div className="project-item-flex">
                <div className="project-name"><a href="https://manish-kumar-profile.netlify.app/">Portfolio App</a></div>
                <div className="project-name"><a href="https://manishnagar.github.io/ssy-calculator/">SSY Calculator App</a></div>
              </div>

              <div className="project-item-flex">
              <div className="project-name"><a href="https://manishnagar.github.io/bill-expense-tracker/">Bill-expense Tracker</a></div>
              </div>

              <div className="heading">Front-End Projetcs</div>

              <div className="project-item-flex">
                <div className="project-name"><a href="https://www.renewbuy.com/">Renewbuy.com</a></div>
                <div className="project-name"><a href="https://www.renewbuyfinsure.com/renewbuy-health/#/buy-online">Renewbuy-Health</a></div>
              </div>
              <div className="project-item-flex">
                <div className="project-name"><a href="https://www.renewbuyfinsure.com/renewbuy-suraksha/#/buy-online">Renewbuy-Life</a></div>
                <div className="project-name"><a href="https://redcliffelabs.com/">Redcliffelabs.com</a></div>
              </div>

              <div className="project-item-flex">
                <div className="project-name"><a href="https://www.agbeindia.com/">Agbe India Pvt Ltd.</a></div>
                <div className="project-name"></div>
              </div>

              <div className="heading">Freelancing Projetcs</div>
              <div className="project-item-flex">
                <div className="project-name"><a href="https://www.afinoz.com/">Afinoz Digital Finance</a></div>
                <div className="project-name"><a href="https://www.abuildtech.com/">A Buildtech</a></div>
              </div>
              <div className="project-item-flex">
                <div className="project-name"><a href="https://detoxa-frontend.netlify.app/">Detoxa</a></div>
                <div className="project-name"><a href="https://rocaresolution.com/">ROCare Solution</a></div>
              </div>

              <div className="project-item-flex">

                <div className="project-name"><a href="https://spidcindia.com/">SPIDC India</a></div>
                <div className="project-name"><a href="https://www.mithilainfrastructure.com/#">Mithila Infrastructure</a></div>
              </div>

              <div className="project-item-flex">
                <div className="project-name"><a href="https://www.rupaybachao.com/index.html">Rupay Bachao</a></div>

              </div>


              <div className="heading">Template Design</div>
              <div className="project-item-flex">
                <div className="project-name"><a href="https://manishnagar.github.io/wizfair-template/landing-page.html">Wizfare  Dummy</a></div>
                <div className="project-name"><a href="https://manishnagar.github.io/webority/">Webority Dummy </a></div>
                </div>
                <div className="project-item-flex">
                <div className="project-name"><a href="https://manishnagar.github.io/novis/">Novis</a></div>
                <div className="project-name"><a href="https://manishnagar.github.io/Intelgencia/">Intelegencia</a></div>
              </div>
              <div className="project-item-flex">
              <div className="project-name"><a href="https://manishnagar.github.io/script_template/">Script Dummy</a></div>
              </div>

            </div>
          </div>
        </div>

        <div className="footer"></div>
      </div>

    </div>
  );
}

export default App;
