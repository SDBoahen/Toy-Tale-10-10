let addToy = false;

// document.addEventListener("DOMContentLoaded", () => {  // index.js



  //////////////////////////////// Starter Code

    const addBtn = document.querySelector("#new-toy-btn");

    const toyFormContainer = document.querySelector(".container");

    addBtn.addEventListener("click", () => {

      // hide & seek with the form
      addToy = !addToy;
      console.log( addToy )
      if (addToy) {
        toyFormContainer.style.display = "block";
      } else {
        toyFormContainer.style.display = "none";
      }

    });

  ////////////////////////////////



const toyCollectionDiv = document.querySelector( "#toy-collection" )



// GET The Toys from /toys
// Render / Display all of the Toys in Card


fetch( "http://localhost:3000/toys" )
.then( response => response.json() )
.then( ( someData )=>{ 

  const arrayOfToyObjects = someData


  // Handled Appending the Cards
  arrayOfToyObjects.map(  
    
    ( eachToyObject )=>{

      const divForToyCard = document.createElement( "div" )
            divForToyCard.className = "card"

        const h2ForToyCard = document.createElement( "h2" )
              h2ForToyCard.textContent = eachToyObject.name

        const imageForToyCard = document.createElement( "img" )
              imageForToyCard.src = eachToyObject.image
              imageForToyCard.className = "toy-avatar"

        const pTagForToyCard = document.createElement( "p" )
              pTagForToyCard.textContent = `${eachToyObject.likes} likes`

        const buttonForToyCard = document.createElement( "button" )
              buttonForToyCard.innerText = "Like ❤️"
              buttonForToyCard.className = "like-btn"
              buttonForToyCard.id        = eachToyObject.id
              buttonForToyCard.addEventListener( "click" , ( eventObject )=>{

                console.log( "Increment Those Likes! <3" )

              } )
  

      divForToyCard.append( 
        h2ForToyCard , 
        imageForToyCard , 
        pTagForToyCard , 
        buttonForToyCard 
      )
        console.log( divForToyCard )
        

      toyCollectionDiv.append( divForToyCard )

    }

  )



  // Handle Our Form
  const formForNewToy = document.querySelector( ".add-toy-form" )
        formForNewToy.addEventListener(  "submit" , ( eventObject )=>{

          eventObject.preventDefault( )

          // console.log( "eventObject" , eventObject ) 
          // console.log( "eventObject.target" , eventObject.target ) // == formForNewToy


          // console.log( "eventObject.target.name" , eventObject.target.name )
          console.log( "eventObject.target.name.value" , eventObject.target.name.value )
          
          // console.log( "eventObject.target.image" , eventObject.target.image )
          console.log( "eventObject.target.image.value" , eventObject.target.image.value )
          

        }  )




} )

// <div class="card">
//   <h2>Woody</h2>
//   <img src="[toy_image_url]" class="toy-avatar" />
//   <p>4 Likes</p>
//   <button class="like-btn" id="[toy_id]">Like ❤️</button>
// </div>


// h2 tag with the toy's name
// img tag with the src of the toy's image attribute and the class name "toy-avatar"
// p tag with how many likes that toy has
// button tag with a class "like-btn" and an id attribute set to the toy's id number
// After all of that, the toy card should look something like this:





    // toyCollectionDiv.append(  )

    // console.log( toyCollectionDiv )
















// Get the Form to Work

// Get the Like Button to Work





















// });




//  addEventListener(  "event-type" , ()=>{}  )





