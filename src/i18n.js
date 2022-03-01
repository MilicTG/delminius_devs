import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          nav: {
            home: "Home",
            services: "Services",
            about: "About Us",
            projects: "Projects",
            contact: "Contact",
          },
          landing: {
            title:
              "DelminiusDevs - \nandroid mobile and web development agency",
            buttonOne: "Contact Us",
            buttonTwo: "Our Work",
          },
          services: {
            title: "Our Services",
            cardAndroidTitle: "Android Development",
            cardAndroidText:
              "In today’s technological age on the go, mobile apps are a handy tool to attract new users and thus improve your business.\n\n Mobile devices are the most easily accessible source of information and are the tool with the highest level of interactivity with the user.\n\nWe offer from simple to advanced solutions for all mobile Android devices.",
            cardReactTitle: "Web Development",
            cardReactText:
              "If you think that before deciding to go on the trip or before concluding a contract with a company, it is good to find out as much information as possible in your search engine,you will enter terms that will help you find what interests you. \n\nWhether you have your own company or not, don't let it happen that you are left 'without results' and out of new technological possibilities. We are an agency that will create a website for you and thus take the first step in opening a new business environment.",
            cardDesignTitle: "UI/UX Design",
            cardDesignText:
              "UI design is what you see when you enter an app or website. We will try to make your idea come true when creating it. So it would be good to always think about what you want us to do.\n\n UX design means the functionality of your website or application. When we make a nice UI design it would be good to have a functional UX design as well.",
            cardMaintenanceTitle: "Maintance",
            cardMaintenanceText:
              "The moment you are satisfied with the work done,  your website and your application are ready for publishing. We are here if you decide to take care of their maintenance. Feel free to contact us if a problem arises and we will do our best to resolve it.",
          },
          about: {
            title: "About Us",
            text: "We are a team of professional's based in Europe. We've been livingand breathing mobile since 2018.\n\nWe pride ourselves on our excellent customer service. You will not walk the path to mobile success alone. We are here for you, guiding you along the way and offering our vast expertise starting from sketching an idea with pen and paper to implementing the best solution and celebrating success with you.\n\nIn short, we are the kind of team who likes to focus on results, such as best user experience, engagement, user satisfaction, retention, and scalability.",
          },
          work: {
            title: "Our Work",
            projectOne: "Radio Tomislavgrad Website",
            projectTwo: "Radio Tomislavgrad Android Application",
            projectThree: "Êléktra Android Application - 'In development'",
          },
        },
      },
      hr: {
        translation: {
          nav: {
            home: "Početna",
            services: "Usluge",
            about: "O nama",
            projects: "Projekti",
            contact: "Kontakt",
          },
          landing: {
            title:
              "DelminiusDevs - \nagencija za razvoj web i mobilnih android aplikacija",
            buttonOne: "Kontaktirajte nas",
            buttonTwo: "Naši projekti",
          },
          services: {
            title: "Naše usluge",
            cardAndroidTitle: "Android programiranje",
            cardAndroidText:
              "U današnjem tehnološkom dobu u pokretu, mobilne aplikacije su zgodan alat kako privući nove korisnike i tako poboljšati Vaše poslovanje.\n\nMobilni uređaji čine najlakše dostupni izvor informacija te su sredstvo s najvišom razinom interaktivnosti s korisnikom.\n\nNudimo od jednostavnih do naprednih rješenja za sve mobilne Android uređaje.",
            cardReactTitle: "Web programiranje",
            cardReactText:
              "Ako misliš da je prije odluke o putovanju ili prije sklapanja ugovora s nekom tvrtkom dobro saznati što više informacija u svoju tražilicu ćeš upisati pojmove koji će ti pomoći pronaći ono što te zanima.\n\nBez obzira imaš li ili ne vlastitu tvrtku nemoj dozvoliti da se dogodi da ostaneš „bez rezultata“ i izvan novih tehnoloških mogućnosti. Agencija smo koja će ti napraviti web stranicu i time učiniti prvi korak u otvaranju novom poslovnom okruženju.",
            cardDesignTitle: "UI/UX Dizajn",
            cardDesignText:
              "UI dizajn je ono što vidiš kada uđeš u aplikaciju ili web stranicu. Nastojat ćemo da pri njegovoj izradi ostvarimo tvoju zamisao. Zato bi bilo dobro da uvijek razmisliš o onome što želiš da napravimo.\n\nUX dizajn označuje funkcionalnost tvoje web stranice, odnosno aplikacije. Kada napravimo lijep UI dizajn bili bi dobro da imamo i funkcionalan UX dizajn.",
            cardMaintenanceTitle: "Održavanje",
            cardMaintenanceText:
              "Onoga trenutka kada budeš zadovoljan napravljenim poslom, tj. svojom web stranicom i aplikacijom pristupit ćemo njihovom objavljivanju i tada možeš reći da su javno dostupne. Tu smo ukoliko se odlučiš da se brinemo i za njihovo održavanje. Možeš nam se slobodno obratiti ako nastane problem i mi ćemo se potruditi riješiti ga.",
          },
          about: {
            title: "O nama",
            text: "O nama ćeš više reći ti i godine koje su ispred nas. Mladi smo start up čiji je cilj rasti i na takav način omogućiti i tebi zaposlenje. Ideja smo u fazi realizacije.\n\nAko misliš da je vrijeme da svoje poslovanje učiniš dostupnijim, otvorenijim i boljim na pravom si mjestu. Agencija smo koja će ti napraviti web i mobilnu aplikaciju i na takav način predstavit ćeš se javnosti. Bez obzira čime se baviš tu smo da ti pomognemo u organizaciji poslovanja i života. ",
          },
          work: {
            title: "Naši projekti",
            projectOne: "Radio Tomislavgrad webstranica",
            projectTwo: "Radio Tomislavgrad android aplikacija",
            projectThree: "Êléktra android aplikacija - 'U razvoju'",
          },
        },
      },
    },
  });

export default i18n;
