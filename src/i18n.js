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
            title: "DelminiusDevs - \nandroid and web development agency",
            buttonOne: "Contact Us",
            buttonTwo: "Our Work",
          },
          services: {
            title: "Our Services",
            cardAndroidTitle: "Android Development",
            cardAndroidText:
              "We aim to deliver the utmost quality Android apps. Our offer consists of a simple and advanced application for all android devices.\n\nIn Century which we live in demands adjustment to trends and speed in a business world. With us, You get convenience with the application which we make for you to grow your business exponentially.",
            cardReactTitle: "Web Development",
            cardReactText:
              "Introduce new products & services or promote existing ones, improve brand identity & top of mind awareness or capture leads to enhance marketing efforts. These are just some of the many things that You can achieve with a great website.\n\nIf you have your own business it will be good for you if you have a website where your potential clients can get all the necessary information that they needed.\n\nWe will make the website and your user will find out very quickly all they want to know. In this way, you will save your precious time.",
            cardDesignTitle: "UI/UX Design",
            cardDesignText:
              "User interfaces must feel natural without many distractions or the users will get frustrated and leave your application or website altogether.\n\nA greater part of our design philosophy involves cutting the clutter to attain the simplest form of user experience.",
            cardMaintenanceTitle: "Maintance",
            cardMaintenanceText:
              "The moment you are satisfied with the work done,  your website and your application are ready for publishing. We are here if you decide to take care of their maintenance. Feel free to contact us if a problem arises and we will do our best to resolve it.",
          },
          about: {
            title: "About Us",
            text: "Ever thought of having a mobile app or website for your business? It is not as difficult as it seems to be.\n\nWith the right kind of positive attitude and team cooperation, we can build tailor-made websites, reflecting a polished image of our clients and their services to a worldwide audience. We have all that you need in one single place. You will not walk the path to mobile success alone. We are here for you, guiding you along the way and offering our vast expertise starting from sketching an idea with pen and paper to implementing the best solution and celebrating success with you.\n\nIn short, we are the kind of team that likes to focus on results, such as best user experience, engagement, user satisfaction, retention, and scalability. Do not hesitate in contacting us. We see a partnership as a long-term relationship rather than just another business deal.",
          },
          work: {
            title: "Our Work",
            projectOne: "Radio Tomislavgrad Website",
            projectTwo: "Radio Tomislavgrad Android Application",
            projectThree: "Êléktra Android Application - 'In development'",
          },
          contact: {
            title: "Contact Us",
            first: "First name",
            last: "Last name",
            email: "E-mail",
            phone: "Phone",
            message: "Enter your message here",
            send: "Send",
          },
          footer: {
            office: "Our Office",
            adress: "Adress: Virgilija Nevjestića 15",
            city: "City and Postal code: Tomislavgrad, 80240",
            country: "Country: Bosnia and Herzegovina",
            email: "E-mail: delminiusdevs@gmail.com",
            phone: "Phone: 0038763661215",
            social: "Social Media",
            rights: "delminiusDevs. All rights reserved.",
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
              "Cilj nam je stvarati najkvalitetnije android aplikacije. Naša ponuda sastoji se od jednostavnih i naprednih aplikacija za sve android uređaje.\n\nStoljeće u kojem živimo zahtijeva prilagodbu trendovima i brzini u poslovnom svijetu. Uz nas dobivate praktičnost i lakoću u poslovanju.",
            cardReactTitle: "Web programiranje",
            cardReactText:
              "Uvođenje novih proizvoda i usluga, promoviranje postojećih ili poboljšanje identiteta vaše tvrtke samo su neke od mnogih prednosti koje možete postići sjajnom web stranicom.\n\nAko imate vlastitu tvrtku bit će dobro da imate i web stranicu na kojoj će vaši potencijalni klijenti dobiti sve potrebne informacije. Naš je zadatak izraditi modernu i funkcionalnu web stranicu po vašim željama.",
            cardDesignTitle: "UI/UX Dizajn",
            cardDesignText:
              "Kako bi u potpunosti bili zadovoljni svojom aplikacijom ili web stranicom napravit ćemo kvalitetno korisničko sučelje. Cilj nam je da imate što jednostavnije i lakše korisničko iskustvo sa što manje nepotrebnih stvari.",
            cardMaintenanceTitle: "Održavanje",
            cardMaintenanceText:
              "Onoga trenutka kada budete zadovoljni napravljenim poslom, tj. svojom web stranicom i aplikacijom pristupit ćemo njihovom objavljivanju i tada možete reći da su javno dostupne.\n\nTu smo ukoliko se odlučite da se brinemo i za njihovo održavanje. Možete nam se slobodno obratiti ako nastane problem i mi ćemo se potruditi riješiti ga.",
          },
          about: {
            title: "O nama",
            text: "Jeste li ikada razmišljali o tome da imate mobilnu aplikaciju ili web stranicu za svoju tvrtku? Nije tako teško kao što se možda čini. S pravom vrstom pozitivnoga stava i timskom suradnjom možemo izgraditi web stranicu ili aplikaciju po vašoj mjeri. Mi imamo sve što će vam trebati. Na svom putu uspjeha nećete biti sami.\n\nBit ćemo na tom putu i nuditi vam pomoć od skiciranja ideje do implementacije najboljega rješenja. Naš fokus bit će na tome da imate najbolje korisničko iskustvo, da budete zadovoljni i da vas zadržimo. Budite slobodni kontaktirati nas. Partnerstvo je za nas dugoročna veza, a ne samo još jedan poslovni dogovor. ",
          },
          work: {
            title: "Naši projekti",
            projectOne: "Radio Tomislavgrad webstranica",
            projectTwo: "Radio Tomislavgrad android aplikacija",
            projectThree: "Êléktra android aplikacija - 'U razvoju'",
          },
          contact: {
            title: "Kontakt",
            first: "Vaše ime",
            last: "Vaše prezime",
            email: "E-mail",
            phone: "Telefon",
            message: "Unesite vašu poruku ovdje",
            send: "Pošalji",
          },
          footer: {
            office: "Naš ured",
            adress: "Adresa: Virgilija Nevjestića 15",
            city: "Grad i poštanski broj: Tomislavgrad, 80240",
            country: "Država: Bosnia and Herzegovina",
            email: "E-mail: delminiusdevs@gmail.com",
            phone: "Telefon: 0038763661215",
            social: "Društvene mreže",
            rights: "delminiusDevs. Sva prava pridržana.",
          },
        },
      },
    },
  });

export default i18n;
