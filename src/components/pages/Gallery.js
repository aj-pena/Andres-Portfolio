import React from 'react'
import Project from '../Project'
import MoviePal from '../../Assets/images/MoviePal.PNG'
import InOrOut from '../../Assets/images/InOrOut.PNG'
import DayPlanner from '../../Assets/images/DayPlanner.PNG'
import CodeQuiz from '../../Assets/images/CodeQuiz.png'
import BudgetTracker from '../../Assets/images/BudgetTracker.PNG'
import FitnessTracker from '../../Assets/images/FitnessTracker.PNG'
import GoogleBooks from '../../Assets/images/googleBooks.png'
import Scholars4Dollars from '../../Assets/images/Scholars4Dollars.png'
import LeadTracker from '../../Assets/images/LeadTracker.PNG' 
import Snake from '../../Assets/images/Snake.png'

const projects = [
  {
      title: 'Movie Pal',
      page: 'https://altugcakmakci.github.io/movie_pal/',
      repo: 'https://github.com/altugcakmakci/movie_pal.git',
      image: MoviePal,
      description: 'This application allows the cinephile to search for a title from the IDB movie database. It also allows the user to search for an actor or director. Each search returns a list of options to choose from.',
  },
  {
      title: 'In or Out',
      page: 'https://inout-app.herokuapp.com/',
      repo: 'https://github.com/cathytanya/inout.git',
      image: InOrOut,
      description: 'This web application will allow users to first choose if they want to stay inside or if they want to go outside. Once chosen, the application will display a set of activity cards and present the user with preference buttons to filter activities.',
  },
  {
      title: 'Day Planer',
      page: 'https://aj-pena.github.io/Day-Planner/',
      repo: 'https://github.com/aj-pena/Day-Planner.git',
      image: DayPlanner,
      description: 'This application allows the user to schedule events for a 5 day time frame. It contains slots for every work-day hour that can be used to store event names. The times-slots are color-coded to represent past, present and future time-slots.',
  },
  {
      title: 'Code Quiz',
      page: 'https://aj-pena.github.io/Code-Quiz/',
      repo: 'https://github.com/aj-pena/Code-Quiz.git',
      image: CodeQuiz,
      description: 'This program will generate an interactive quiz with multiple choices that will keep track of high scores. This program will allow the user to keep his/her coding knowledge greased and compare it to others via scores.',
  },
  {
      title: 'Progressive Budget',
      page: 'https://budget-tracker-ajp.herokuapp.com/',
      repo: 'https://github.com/aj-pena/Budget-Tracker-offline.git',
      image: BudgetTracker,
      description: 'This application will allow an avid traveler record their transactions even if they are offline.',
  },
  {
      title: 'Fitness Tracker',
      page: 'https://fitness-tracker-apj.herokuapp.com/?id=618d6d09e1bbb1001665fd93',
      repo: 'https://github.com/aj-pena/Fitness-Tracker.git',
      image: FitnessTracker,
      description: 'This application allows the user to create workouts and add exercises to each workout. By keeping track of the number of workouts and time spent, the user can reach goals faster.',
  },
  {
    title: 'Google Books Search Engine',
    page: 'https://googlebooks-ajp.herokuapp.com/',
    repo: 'https://github.com/aj-pena/Book-search-engine.git',
    image: GoogleBooks,
    description: 'This application is built on the cloud with a MERN Stack framework and uses the Google Book API. It allows the avid reader to search for books of interest and to add them to a personal collection.',
  },
  {
    title: 'Scholars4Dollars',
    page: 'https://aqueous-ocean-45024.herokuapp.com/',
    repo: 'https://github.com/giftilicious/scholarship-app.git',
    image: Scholars4Dollars,
    description: 'MERN web application that helps underserved students find funding for college or university',
  },
  {
    title: 'Lead Tracker',
    page: 'https://github.com/aj-pena/Lead_Tracker.git',
    repo: 'https://github.com/aj-pena/Lead_Tracker.git',
    image: LeadTracker,
    description: 'Lead tracker is a Google Chrome extension that allows the user to capture and store a list of relevant URLS. The application uses Local Storage to allow for data permanence. Once the leads are no longer necessary, they can be deleted. As Lead Tracker is a browser extension, it does not have a live webpage.',
  },
  {
    title: 'Snake Game',
    page: 'https://aj-pena.github.io/snake/',
    repo: 'https://github.com/aj-pena/snake.git',
    image: Snake,
    description: 'This application replicates the traditional Nokia snake game, where a snake will move continuously within a field and the user controls the snake movement with the keyboard arrow keys. Currently, it can only be played on a PC with the keyboard.',
  },

]

function Gallery() {
    return (
        <div className="row work">
                {/* <!-- section title --> */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 section-title">
                <h2>Projects</h2>
            </div>
                {/* <!-- gallery of apps --> */}
            <div className="col-12 col-sm-6 col-md-8 col-lg-8 apps">
             {projects.map((project) =>{
               return <Project title={project.title} page={project.page} repo={project.repo} image={project.image} description={project.description} />
             })}
            </div>
                           
        </div>
    )
}

export default Gallery
