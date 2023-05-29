import Clinic from '../assets/Clinic.jpg'
import Football from '../assets/Football.jpg'
import Weather from '../assets/Weather.jpg'

export const ProjectList = [
    {
        name: "Clinic Website",
        image: Clinic,
        tech: "Java Spring Boot, React Js, HTML, CSS, MySQL",
        glink: "https://github.com/Atharva-2000/Patient-Diagnostic-System",
        description: `
        Patient - 
        Patient can register to clinic by filling registration form. If patient is
        already registered, he/she can login with their respective creden
        tials. Patients can update their profile. Patients can book appoint
        ment as per dates and slots. Patients can also delete an appoint
        ment. After examination by doctor, patients can see their reports.
        Doctor -
        Doctor can login with their credentials. Doctor can view all active
        appointments. Doctor can examine patients according to their slots
        on the basis of their history. After examination, doctor can gener
        ate a report for patient.`
    },

    {
        name: "Football Club Manager",
        image: Football,
        tech: "ASP .NET MVC, C#, BootStrap, MSSQL",
        glink: "https://github.com/saurabhkamble03/.Net-FootballClub-Management",
        description: `
        A web application with CRUD functionality where manager can
        View club’s team sheet, recruit players for the club, Update player’s
        name, age and position, delete a player from a roster.`
    },

    {
        name: "Weather App",
        image: Weather,
        tech: "Python, Weather API",
        glink: "https://github.com/saurabhkamble03/Weather-App",
        description: `
        A weather app to get current weather details using weather API.`
    }
]