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
            about: "About us",
            projects: "Projects",
            contact: "Contact",
          },
          landing: {
            title: "DelminiusDevs - \n Native android development agency",
            buttonOne: "Contact us",
            buttonTwo: "Our work",
          },
          services: {
            title: "Our services",
            cardAndroidTitle: "Android development",
            cardAndroidText:
              "Our aim is creating of the highest quality android application. Our offer consists of a simple and advanced application for all android devices.\n\nThe century in which we live requires adaptation to trends and speed in the business world. With us, you get convenience and ease of doing business. ",
            cardReactTitle: "Web development",
            cardReactText:
              "Introduction of new products and services, promote existent or improve the identity of your company are just some of the many benefits which you can achieve with a great web site.\n\nIf you have your own company it will be good that you have and website where your potential customers get all the necessary information.  It is our task to make a modern and functional website according to your wishes.",
            cardDesignTitle: "UI/UX design",
            cardDesignText:
              "To be completely satisfied with your application or website we will make a quality interface. Our goal is that you have a simple and easy user experience with fewer unnecessary things.",
            cardMaintenanceTitle: "Maintance",
            cardMaintenanceText:
              "The moment you are satisfied with the work done,  your website and your application are ready for publishing. We are here if you decide to take care of their maintenance. Feel free to contact us if a problem arises and we will do our best to resolve it.",
          },
          about: {
            title: "About us",
            text: "Have you ever thought that you have a mobile app or website for your own company? It is not difficult as it seems. With the right positive attitude and teamwork, we can make a website or app to your wishes.  We have everything that you need. You would not be alone on your path to success. We will be on this path and offering help from sketching an idea to implementing the best solution. Our focus is the best user experience and satisfaction. Feel free to contact us.\n\nFor us, a partnership is a long-term relationship, not just another business agreement. ",
          },
          work: {
            title: "Our work",
            projectOne: "Radio Tomislavgrad website",
            projectTwo: "Radio Tomislavgrad android application",
            projectThree: "??l??ktra android application - 'In development'",
          },
          contact: {
            title: "Contact us",
            first: "First name",
            last: "Last name",
            email: "E-mail",
            phone: "Phone",
            message: "Enter your message here",
            send: "Send",
          },
          footer: {
            office: "Our Office",
            adress: "Adress: Virgilija Nevjesti??a 15",
            city: "City and Postal code: Tomislavgrad, 80240",
            country: "Country: Bosnia and Herzegovina",
            email: "E-mail: delminiusdevs@gmail.com",
            phone: "Phone: 0038763661215",
            social: "Social media",
            rights: "delminiusDevs. All rights reserved.",
          },
        },
      },
      hr: {
        translation: {
          nav: {
            home: "Po??etna",
            services: "Usluge",
            about: "O nama",
            projects: "Projekti",
            contact: "Kontakt",
          },
          landing: {
            title:
              "DelminiusDevs - \nagencija za razvoj nativnih android aplikacija",
            buttonOne: "Kontaktirajte nas",
            buttonTwo: "Na??i projekti",
          },
          services: {
            title: "Na??e usluge",
            cardAndroidTitle: "Android programiranje",
            cardAndroidText:
              "Cilj nam je stvarati najkvalitetnije android aplikacije. Na??a ponuda sastoji se od jednostavnih i naprednih aplikacija za sve android ure??aje.\n\nStolje??e u kojem ??ivimo zahtijeva prilagodbu trendovima i brzini u poslovnom svijetu. Uz nas dobivate prakti??nost i lako??u u poslovanju.",
            cardReactTitle: "Web programiranje",
            cardReactText:
              "Uvo??enje novih proizvoda i usluga, promoviranje postoje??ih ili pobolj??anje identiteta va??e tvrtke samo su neke od mnogih prednosti koje mo??ete posti??i sjajnom web stranicom.\n\nAko imate vlastitu tvrtku bit ??e dobro da imate i web stranicu na kojoj ??e va??i potencijalni klijenti dobiti sve potrebne informacije. Na?? je zadatak izraditi modernu i funkcionalnu web stranicu po va??im ??eljama.",
            cardDesignTitle: "UI/UX Dizajn",
            cardDesignText:
              "Kako bi u potpunosti bili zadovoljni svojom aplikacijom ili web stranicom napravit ??emo kvalitetno korisni??ko su??elje. Cilj nam je da imate ??to jednostavnije i lak??e korisni??ko iskustvo sa ??to manje nepotrebnih stvari.",
            cardMaintenanceTitle: "Odr??avanje",
            cardMaintenanceText:
              "Onoga trenutka kada budete zadovoljni napravljenim poslom, tj. svojom web stranicom i aplikacijom pristupit ??emo njihovom objavljivanju i tada mo??ete re??i da su javno dostupne.\n\nTu smo ukoliko se odlu??ite da se brinemo i za njihovo odr??avanje. Mo??ete nam se slobodno obratiti ako nastane problem i mi ??emo se potruditi rije??iti ga.",
          },
          about: {
            title: "O nama",
            text: "Jeste li ikada razmi??ljali o tome da imate mobilnu aplikaciju ili web stranicu za svoju tvrtku? Nije tako te??ko kao ??to se ??ini. S pravom vrstom pozitivnoga stava i timskom suradnjom mo??emo izgraditi web stranicu ili aplikaciju po va??oj mjeri. Mi imamo sve ??to ??e vam trebati. Na svom putu uspjeha ne??ete biti sami. Bit ??emo na tom putu i nuditi vam pomo?? od skiciranja ideje do implementacije najboljega rje??enja.\n\nNa?? fokus bit ??e na tome da imate najbolje korisni??ko iskustvo, da budete zadovoljni i da vas zadr??imo. Budite slobodni kontaktirati nas. Partnerstvo je za nas dugoro??na veza, a ne samo jo?? jedan poslovni dogovor. ",
          },
          work: {
            title: "Na??i projekti",
            projectOne: "Radio Tomislavgrad web stranica",
            projectTwo: "Radio Tomislavgrad android aplikacija",
            projectThree: "??l??ktra android aplikacija - 'U razvoju'",
          },
          contact: {
            title: "Kontakt",
            first: "Va??e ime",
            last: "Va??e prezime",
            email: "E-mail",
            phone: "Telefon",
            message: "Unesite va??u poruku ovdje",
            send: "Po??alji",
          },
          footer: {
            office: "Na?? ured",
            adress: "Adresa: Virgilija Nevjesti??a 15",
            city: "Grad i po??tanski broj: Tomislavgrad, 80240",
            country: "Dr??ava: Bosna i Hercegovina",
            email: "E-mail: delminiusdevs@gmail.com",
            phone: "Telefon: 0038763661215",
            social: "Dru??tvene mre??e",
            rights: "delminiusDevs. Sva prava pridr??ana.",
          },
        },
      },
    },
  });

export default i18n;
