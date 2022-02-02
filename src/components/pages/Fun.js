import React from 'react'
import Hobby from '../Hobby'
// Import images of projects
import Zero from '../../Assets/images/Zero-gravity.jpg'
import First from '../../Assets/images/FirstFewDays.png'
import Cat from '../../Assets/images/Cat.JPG'
import TreeLamp from '../../Assets/images/TreeLamp.jpg'
import MyHand from '../../Assets/images/MyHand.jpg'
import Bench from '../../Assets/images/Bench.jpg'
import Building from '../../Assets/images/Building.jpg'
import Hand from '../../Assets/images/Hand.jpg'

const diyProjects = [
  {
      title: 'Zero-Gravity Park Bench',
      resource: 'https://drive.google.com/drive/folders/1KPD_xBZ19uGkSgJGSUIo2C5w5lRzhBkx?usp=sharing',
      image: Zero,
      description: 'For this drawing I used Photoshop, Illustrator, Rhino, AutoCAD and Figma. I was inspired by the feeling of lightness I experience when I readjust my reclining chair. I imagined zero-gravity benches used as full-recovery stations at parks, where people can enjoy the evening and relax their bodies. When they are not used as benches, their hoses are raised as dwarf trees with dim led lights that warmly illuminate the surrounding area. They are controlled with a foot-panel and seamlessly respond to changes in pressure to smoothly distribute the user weight among the various supports. Click on "more" to see images from the process."  ',
  },
  {
      title: 'Moving to Ottawa',
      resource: 'https://drive.google.com/drive/folders/1gTcceQlq1kwuU6sZarNm5JGkwVCgcrhW?usp=sharing',
      image: First,
      description: 'For this drawing I used Photoshop, Illustrator, Rhino, AutoCAD and Figma. I wanted to retrace the steps my better half and I took during the first three days after moving to Ottawa. Using Google Maps timeline, I was able to geolocate our routes and the places we visited. I then used Google Street View to capture the views of the streets and places we walked through, and summarized these experiences in a single drawing, complemented by 3D massing models of significant buildings that we accessed as the familiar territory gradually expanded with each step. Click on "more" to see images about the process.',
  },
  {
      title: 'Cat in Ottawa',
      resource: 'https://drive.google.com/drive/folders/18hdySCgQrzOwRbnahLHPtAlLOtdv8Dp6?usp=sharing',
      image: Cat,
      description: 'Fostering cats during the past three years has helped my better half and I get through difficult times. Winter is a challenging period for us, as we are not used to spending so much time indoors. In 2019, I wanted to have a reason that would get me excited to go out, and I wanted to make our surroundings a little warmer for passers-by. I figured making and putting some ice-cats in random places would be fun and would bring a smile to every other person. Click on "more" to see other cats my wife, friends and I installed.',
  },
  {
      title: 'Laser-Cutted Tree Lamp',
      resource: 'https://drive.google.com/drive/folders/1-WMjtx1KKPwbfnOPpuW7RM22fg4pGpAV?usp=sharing',
      image: TreeLamp,
      description: 'I grew up in a countryside house. I would fall asleep with shadows and silouhettes of trees on the window. When I moved to a high-rise appartment in 2018 I found myself missing those shadows and silohuettes at night. I built this lamp to simulate those shadows while I enjoy a winter hot tub. I still need to improve the material (possibly metal) and find another light source (maybe a candle) that will project larger and smoother shadows. I enjoyed learning the basics of laser cutting to build this project. Click on "more" to see photos from other laser cutting projects.',
  },
  {
      title: 'Clay Sculpting',
      resource: 'https://drive.google.com/drive/folders/1_oxygOfse1MXMxVnHhGhY2La7PA59Jog?usp=sharing',
      image: MyHand,
      description: 'After the enjoyment I got from making the ice sculptures of cats, I gained curiosity about sculpting and carving. I decided to join a clay sculpting class at the Ottawa School of Art and was pretty happy with how it was going. Unfortunately the pandemic happened and the school closed its facilities. I was not able to finish the project. I am looking forward to redo the project and complete it once facilities reopen and is safe to do so. Click "more" to access more images.',
  },
  {
      title: 'Adirondack Chair',
      resource: 'https://drive.google.com/drive/folders/1T9_IC9qTFc6_62WcTVcxoD0sKGnQsLwo?usp=sharing',
      image: Bench,
      description: 'For the last couple of years I have been wanting to build Muskoka Chairs. I found a comprehensive set of instructions with a cutting list and an assembly manual for adirondack chairs from Lowes Home Improvement. It took 15 hours to complete this first iteration. I used scrap wood from another project. I am excited to see my parents enjoying the chair and I am looking forward to building the companion. Click on "more" to see other woodworking projects. And a shout-out to the Lowes team for sharing those amazing plans!',
  },
  {
    title: 'Conceptualizing Spaces',
    resource: 'https://drive.google.com/drive/folders/1VQ3InaSLRn9-qt9PeMULiY0IFPeJOAjY?usp=sharing',
    image: Building,
    description: 'Once I learned the basics of using SketchUp it has become my go-to for inspiration. I enjoy playing with shapes, proportions, extrusions, rotations and see what comes out of it. I use it to test ideas of what my "dream home" would look like. Overall I have not pinned down a design, but I get absorbed in the process. In the future I hope to combine SketchUp models with drawings to create composite images. Click on "more" to see other models I have created.',
  },
  {
    title: 'Life Drawing',
    resource: 'https://drive.google.com/drive/folders/1YDgYu63ixLD8oWvDOAml1y_7mTwUbIW2?usp=sharing',
    image: Hand,
    description: 'One of the drawing exercises I enjoy the most is life-drawing. I would also say charcoal is one of my preferred mediums. Drawing was one of my strongest passions when I was a kid. I stopped drawing for quite a while (~ twelve years) and now I am slowly reconnecting with it. Click on "more" to see some of my recent drafts. These are all a work in progress.',
  }

]

function Fun() {
    return (
      <div className="row work">
                {/* <!-- section title --> */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 section-title">
                <h2>Concepts and Creations</h2>
            </div>
                {/* <!-- gallery of apps --> */}
            <div className="col-12 col-sm-6 col-md-8 col-lg-8 apps">
             {diyProjects.map((project) =>{
               return <Hobby title={project.title} resource={project.resource} image={project.image} description={project.description} />
             })}
            </div>
                           
        </div>
    )
}

export default Fun
